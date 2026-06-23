"use client";

import { useEffect, useState } from "react";

export default function RemindersPage() {
  const [reminders, setReminders] = useState<any[]>([]);
const [completedItems, setCompletedItems] = useState<any[]>([]);
const [menuOpen, setMenuOpen] = useState<number | null>(null);
useEffect(() => {
  const savedReminders =
    JSON.parse(localStorage.getItem("reminders") || "[]");

  setReminders(savedReminders);

  const savedCompleted =
    JSON.parse(localStorage.getItem("completedReminders") || "[]");

  setCompletedItems(savedCompleted);
}, []);

const toggleReminder = (id: number) => {
  const reminder = reminders.find((r) => r.id === id);

  if (!reminder) return;

  const updatedReminders = reminders.filter(
    (r) => r.id !== id
  );

  const updatedCompleted = [
    ...completedItems,
    reminder,
  ];

  setReminders(updatedReminders);
  setCompletedItems(updatedCompleted);

  localStorage.setItem(
    "reminders",
    JSON.stringify(updatedReminders)
  );

  localStorage.setItem(
    "completedReminders",
    JSON.stringify(updatedCompleted)
  );
};
const moveToActive = (id: number) => {
  const reminder = completedItems.find(
    (item) => item.id === id
  );

  if (!reminder) return;

  const updatedCompleted = completedItems.filter(
    (item) => item.id !== id
  );

  const updatedActive = [
    ...reminders,
    {
      ...reminder,
      completed: false,
      icon: "schedule",
      colorClass: "border-primary-container",
    },
  ];

  setCompletedItems(updatedCompleted);
  setReminders(updatedActive);

  localStorage.setItem(
    "completedReminders",
    JSON.stringify(updatedCompleted)
  );

  localStorage.setItem(
    "reminders",
    JSON.stringify(updatedActive)
  );
};
const deleteReminder = (id: number) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this reminder?"
  );

  if (!confirmed) return;

  const updated = reminders.filter(
    (item) => item.id !== id
  );

  setReminders(updated);

  localStorage.setItem(
    "reminders",
    JSON.stringify(updated)
  );
};

const editReminder = (id: number) => {
  const reminder = reminders.find(
    (r) => r.id === id
  );

  if (!reminder) return;

  const newTitle = prompt(
    "Edit Reminder Title",
    reminder.title
  );

  if (!newTitle) return;

  const updated = reminders.map((item) =>
    item.id === id
      ? {
          ...item,
          title: newTitle,
        }
      : item
  );

  setReminders(updated);

  localStorage.setItem(
    "reminders",
    JSON.stringify(updated)
  );
};
const sortedReminders = [...reminders].sort(
  (a, b) => {
    const dateA = new Date(
      `${a.date} ${a.time}`
    ).getTime();

    const dateB = new Date(
      `${b.date} ${b.time}`
    ).getTime();

    return dateA - dateB;
  }
);
  return (
    
    <div className="w-full px-4 mt-6 space-y-6">
      {/* Welcome Greeting & Visual Accent */}
      <section className="relative h-32 rounded-3xl overflow-hidden mb-lg shadow-2xl bg-gradient-to-br from-primary-container to-secondary-container">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 p-lg flex flex-col justify-end h-full">
          <p className="font-label-lg text-label-lg text-on-primary-container uppercase tracking-widest opacity-80">Today's Focus</p>
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-white">
            {reminders.filter(r => !r.completed).length} Reminders
          </h2>
        </div>
      </section>

      {/* Active Reminders Section */}
      <section className="space-y-md">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-title-md text-title-md text-white truncate">Active Reminders</h3>
          <span className="font-label-lg text-label-lg text-primary-fixed bg-primary-container/20 px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
            {reminders.filter(r => !r.completed).length} pending
          </span>
        </div>
        
        <div className="grid gap-4 w-full">
          {sortedReminders.map(reminder => (
            <div 
              key={reminder.id}
               className={`group relative overflow-visible w-full max-w-full bg-surface-container-high rounded-2xl p-md flex items-center justify-between border-l-4 ${reminder.colorClass} transition-all duration-300 hover:bg-surface-container-highest ${reminder.completed ? 'opacity-40' : ''}`}
            >
              <div className="flex items-center gap-md min-w-0 flex-1">
                <div className="relative flex items-center justify-center flex-shrink-0">
                  <input 
                    type="checkbox" 
                    checked={reminder.completed}
                    onChange={() => toggleReminder(reminder.id)}
                    className="w-6 h-6 rounded-md bg-transparent border-2 border-outline-variant checked:bg-primary-container checked:border-primary-container transition-colors cursor-pointer appearance-none" 
                  />
                  <span className={`material-symbols-outlined absolute text-[16px] pointer-events-none transition-opacity text-on-primary-container ${reminder.completed ? 'opacity-100' : 'opacity-0'}`}>
                    check
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className={`font-title-md text-title-md text-on-surface transition-all truncate ${reminder.completed ? 'line-through' : ''}`}>
                    {reminder.title}
                  </h4>
                  <div className="flex items-center gap-sm text-on-surface-variant overflow-hidden">
                    <span className="material-symbols-outlined text-[16px] flex-shrink-0">{reminder.icon}</span>
                    <span className="font-body-md text-body-md whitespace-nowrap">{reminder.time}</span>
                    <span className="mx-1 text-outline flex-shrink-0">•</span>
                    <span className="font-body-md text-body-md truncate">{reminder.frequency || reminder.date}</span>
                  </div>
                </div>
              </div>
              <div className="relative">
  <button
    onClick={() =>
      setMenuOpen(
        menuOpen === reminder.id
          ? null
          : reminder.id
      )
    }
    className="p-2 text-on-surface-variant"
  >
    <span className="material-symbols-outlined">
      more_vert
    </span>
  </button>

  {menuOpen === reminder.id && (
  <div
    style={{
      position: "absolute",
      top: "40px",
      right: "0",
      backgroundColor: "#ffffff",
      border: "2px solid #d1d5db",
      borderRadius: "12px",
      width: "130px",
      zIndex: 99999,
      boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
      overflow: "hidden",
    }}
  >
    <button
      onClick={() => editReminder(reminder.id)}
      style={{
        width: "100%",
        padding: "12px",
        textAlign: "left",
        backgroundColor: "white",
        color: "black",
        border: "none",
        borderBottom: "1px solid #d1d5db",
        cursor: "pointer",
      }}
    >
      Edit
    </button>

    <button
      onClick={() => deleteReminder(reminder.id)}
      style={{
        width: "100%",
        padding: "12px",
        textAlign: "left",
        backgroundColor: "white",
        color: "#dc2626",
        border: "none",
        cursor: "pointer",
      }}
    >
      Delete
    </button>
  </div>
)}
</div>
            </div>
          ))}
        </div>
      </section>

      {/* Completed Section */}
      <section className="space-y-md pt-lg border-t border-surface-variant">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-title-md text-title-md text-white truncate">Completed</h3>
          <span className="font-label-lg text-label-lg text-white flex-shrink-0">{completedItems.length} today</span>
        </div>
        
        <div className="grid gap-gutter opacity-40">
          {completedItems.map(item => (
            <div key={item.id} className="bg-surface-container-low rounded-2xl p-md flex items-center justify-between">
              <div className="flex items-center gap-md min-w-0 flex-1">
                <div className="flex items-center justify-center flex-shrink-0">
  <input
    type="checkbox"
    checked={true}
    onChange={() => moveToActive(item.id)}
    className="w-6 h-6 cursor-pointer"
  />
</div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-title-md text-title-md text-on-surface line-through truncate">{item.title}</h4>
                  <div className="flex items-center gap-sm text-on-surface-variant overflow-hidden">
                    <span className="font-body-md text-body-md whitespace-nowrap">{item.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
