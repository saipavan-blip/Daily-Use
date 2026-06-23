"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function NewReminderPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const saveReminder = () => {
    if (!title.trim()) {
      alert("Enter Reminder Title");
      return;
    }

    const newReminder = {
      id: Date.now(),
      title,
      date: selectedDate.toLocaleDateString(),
      time: selectedDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      frequency: selectedDate.toLocaleDateString(),
      icon: "schedule",
      colorClass: "border-primary-container",
      completed: false,
    };

    const existing = JSON.parse(
      localStorage.getItem("reminders") || "[]"
    );

    existing.push(newReminder);

    localStorage.setItem(
      "reminders",
      JSON.stringify(existing)
    );

    router.push("/reminders");
  };

  return (
    <div className="p-4 space-y-6 animate-in fade-in duration-300">
      <h1 className="text-white text-3xl font-bold">
        Add Reminder
      </h1>

      <input
        type="text"
        placeholder="Reminder Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-4 rounded-xl bg-white text-black"
      />

      <div className="bg-white p-4 rounded-xl">
        <p className="text-black mb-3 font-semibold">
          Date & Time
        </p>

        <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => {
  if (date) {
    setSelectedDate(date);
  }
}}
            showTimeSelect
            timeIntervals={1}
            dateFormat="MMMM d, yyyy h:mm aa"
            showPopperArrow={false}
            wrapperClassName="w-full"
            className="w-full p-4 rounded-xl bg-white text-black font-medium"
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => router.push("/reminders")}
          className="flex-1 bg-gray-600 text-white p-4 rounded-xl"
        >
          Cancel
        </button>

        <button
          onClick={saveReminder}
          className="flex-1 bg-blue-600 text-white p-4 rounded-xl"
        >
          Save
        </button>
      </div>
    </div>
  );
}