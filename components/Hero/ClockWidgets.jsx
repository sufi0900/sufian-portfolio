// components/Hero/ClockWidgets.jsx
"use client";

// Small, self-ticking clock widgets used inside the tablet mockup.
// Each owns its own 1-second interval so a tick only re-renders this
// tiny node, never the tablet (or the whole Hero) around it.

import { useState, useEffect } from "react";

function getGreeting(h) {
  if (h >= 5  && h < 12) return "Good morning, strategist.";
  if (h >= 12 && h < 17) return "System online. Afternoon edition.";
  if (h >= 17 && h < 21) return "Good evening. Deep work hours.";
  return "Late session active. Focus mode: on.";
}

/* PERF: clock widgets tick on their own 1s interval, isolated in their own
   component. This keeps the once-a-second re-render scoped to a few small
   nodes instead of re-rendering the entire Hero tree every second. */
function ClockWidget() {
  const [clock, setClock] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="tab-clock-widget">
      <div className="tab-greeting">{getGreeting(clock.getHours())}</div>
      <div className="tab-clock-time">{clock.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
      <div className="tab-clock-date">{clock.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })}</div>
    </div>
  );
}

function StatusClock() {
  const [clock, setClock] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return <span className="tablet-status-time">{clock.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>;
}

export { getGreeting, ClockWidget, StatusClock };