// server.js
require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins for now (restrict in production)
    methods: ["GET", "POST"],
  },
});

// --- In-Memory Store (replace with Redis/DB for production) ---
let users = []; // User[]
let messages = []; // Message[]

// Helper: Get random color
const getRandomColor = () => {
  const colors = ["#60a5fa", "#f87171", "#4ade80", "#facc15", "#c084fc"];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Helper: Get random avatar seed
const getRandomAvatar = () => Math.floor(Math.random() * 20) + 1;

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
  
  // 1. Session Management
  const sessionId = socket.handshake.auth.sessionId || uuidv4();
  let user = users.find((u) => u.id === sessionId);

  if (user) {
    // Restore existing user session
    user.socketId = socket.id;
    user.isOnline = true;
  } else {
    // Create new user
    user = {
      id: sessionId,
      socketId: socket.id,
      name: `User ${Math.floor(Math.random() * 1000)}`,
      avatar: getRandomAvatar().toString(),
      color: getRandomColor(),
      isOnline: true,
      posX: 0,
      posY: 0,
      location: "Earth", // Geo-IP logic would go here
      flag: "🌍",
      createdAt: new Date().toISOString(),
    };
    users.push(user);
  }

  // Send session details back to client
  socket.emit("session", { sessionId });
  
  // Send initial data
  socket.emit("msgs-receive-init", messages);
  io.emit("users-updated", users); // Notify everyone of new user

  // 2. Handle Cursor Movement
  socket.on("cursor-change", (data) => {
    // Update local user state
    const u = users.find((x) => x.socketId === socket.id);
    if (u) {
      u.posX = data.pos.x;
      u.posY = data.pos.y;
      // Broadcast only to others
      socket.broadcast.emit("cursor-changed", {
        socketId: socket.id,
        pos: data.pos,
      });
    }
  });

  // 3. Handle Chat Messages
  socket.on("msg-send", (data) => {
    const u = users.find((x) => x.socketId === socket.id);
    if (u) {
      const newMessage = {
        id: uuidv4(),
        sessionId: u.id,
        flag: u.flag,
        country: "Unknown",
        username: u.name,
        avatar: u.avatar,
        color: u.color,
        content: data.content,
        createdAt: new Date(),
      };
      
      // Keep only last 50 messages
      messages.push(newMessage);
      if (messages.length > 50) messages.shift();

      io.emit("msg-receive", newMessage);
    }
  });

  // 4. Handle Profile Updates
  socket.on("update-user", (data) => {
    const u = users.find((x) => x.socketId === socket.id);
    if (u) {
      u.name = data.username || u.name;
      u.avatar = data.avatar || u.avatar;
      u.color = data.color || u.color;
      io.emit("users-updated", users);
    }
  });

  // 5. Handle Typing Indicators
  socket.on("typing-send", () => {
    const u = users.find((x) => x.socketId === socket.id);
    if (u) {
      socket.broadcast.emit("typing-receive", {
        socketId: socket.id,
        username: u.name,
      });
    }
  });

  // 6. Disconnect
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
    const u = users.find((x) => x.socketId === socket.id);
    if (u) {
      u.isOnline = false;
      // Optional: Remove user after timeout or immediately
      users = users.filter((x) => x.socketId !== socket.id); 
      io.emit("users-updated", users);
    }
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Socket server running on port ${PORT}`);
});

