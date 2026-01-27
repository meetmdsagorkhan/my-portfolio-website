"use client";

import React, { useState, useEffect } from "react";
import { format, nextTuesday, nextFriday, isBefore, startOfToday, addDays } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [nextPostDate, setNextPostDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const tue = nextTuesday(today);
    const fri = nextFriday(today);
    
    // Pick the closest upcoming day
    const nextDate = tue < fri ? tue : fri;
    setNextPostDate(format(nextDate, "EEEE, MMM do"));
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace this with your actual API call to Resend or your backend
      await new Promise((resolve) => setTimeout(resolve, 1500)); 
      
      setSubscribed(true);
      toast({
        title: "Welcome to the Journey!",
        description: "Check your inbox for a welcome email and reminder details.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {/* Schedule Card */}
      <Card className="bg-purple-500/10 border-purple-500/20 backdrop-blur-md">
        <CardContent className="pt-6 flex items-center gap-4">
          <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
            <Bell className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-tighter text-purple-400">Next Insight Arriving</p>
            <h3 className="text-xl font-bold text-zinc-100">{nextPostDate}</h3>
            <p className="text-sm text-zinc-400">Reminders sent via email.</p>
          </div>
        </CardContent>
      </Card>

      {/* Subscription Card */}
      <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
        <CardContent className="pt-6">
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="pl-10 bg-black/40 border-zinc-700 focus:border-purple-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button type="submit" disabled={loading} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0">
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Notify Me"}
              </Button>
            </form>
          ) : (
            <div className="flex items-center gap-2 text-green-400 font-medium py-2">
              <CheckCircle2 className="w-5 h-5" />
              You&apos;re on the list! See you on {nextPostDate.split(',')[0]}.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}