"use client";

import { useState } from "react";
import Link from "next/link";

export default function GymPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      name: "Biceps",
      count: 12,
      imageUrl: "/images/gym/biceps.jpg"
    },
    {
      name: "Chest",
      count: 18,
      imageUrl: "/images/gym/chest.jpg"
    },
    {
      name: "Back",
      count: 15,
      imageUrl: "/images/gym/back.jpg"
    },
    {
      name: "Legs",
      count: 24,
      imageUrl: "/images/gym/legs.jpg"
    },
    {
      name: "Shoulders",
      count: 10,
      imageUrl: "/images/gym/shoulders.jpg"
    },
    {
      name: "Triceps",
      count: 8,
      imageUrl: "/images/gym/triceps.jpg"
    },
    {
      name: "Forearms",
      count: 5,
      imageUrl: "/images/gym/forearms.jpg"
    },
    {
      name: "Abs",
      count: 9,
      imageUrl: "/images/gym/abs.jpg"
    }
  ];

  const exercisesMap: Record<string, string[]> = {
    'Biceps': ['Hammer Curl', 'Barbell Curl', 'Incline Dumbbell Curl', 'Preacher Curl', 'Concentration Curl'],
    'Chest': ['Flat Bench Press', 'Incline Dumbbell Press', 'Chest Fly', 'Push-ups', 'Dips'],
    'Back': ['Deadlift', 'Lat Pulldown', 'Bent Over Row', 'Pull-ups', 'Face Pulls'],
    'Legs': ['Back Squat', 'Leg Press', 'Hamstring Curls', 'Calf Raises', 'Lunges'],
    'Shoulders': ['Overhead Press', 'Lateral Raise', 'Front Raise', 'Reverse Pec Deck'],
    'Triceps': ['Tricep Pushdown', 'Skull Crushers', 'Close Grip Bench Press', 'Overhead Extension'],
    'Forearms': ['Wrist Curls', 'Reverse Wrist Curls', 'Farmer\'s Walk'],
    'Abs': ['Crunches', 'Plank', 'Leg Raises', 'Cable Crunches']
  };

  return (
    <div className="flex-1 px-container-margin pt-sm max-w-2xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col mb-lg">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-white mb-xs">Exercise Library</h2>
        <p className="font-body-md text-body-md text-gray-300">Select a muscle group to view specific exercises.</p>
      </div>

      {/* Bento Search Bar */}
      <div className="relative mb-lg">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="material-symbols-outlined text-on-surface-variant text-body-lg">search</span>
        </div>
        <input
  type="text"
  placeholder="Search exercises..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full bg-surface-container-high border-none rounded-xl py-3 pl-10 pr-4 font-body-md text-on-surface focus:ring-2 focus:ring-primary-container outline-none"
/>
      </div>

      {!selectedCategory ? (
        /* Muscle Group Bento Grid */
        
        <div className="grid grid-cols-2 gap-md animate-in fade-in slide-in-from-bottom-4 duration-300">
          {categories
  .filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .map((cat) => (
            <button
  key={cat.name}
  onClick={() => {
    alert("Clicked " + cat.name);
    setSelectedCategory(cat.name);
  }}
  className="group relative aspect-square w-full overflow-hidden rounded-xl active:scale-95 transition-all duration-200 border border-outline-variant/30"
>
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                style={{ backgroundImage: `url('${cat.imageUrl}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 p-md z-20">
                <h3 className="font-title-md text-title-md text-white">{cat.name}</h3>
                <span className="font-label-lg text-label-lg text-primary-container">{cat.count} Exercises</span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        /* Filtered List View */
        <div className="flex flex-col gap-md animate-in fade-in slide-in-from-right duration-300">
          <button 
            className="flex items-center gap-2 text-primary-container font-label-lg text-label-lg mb-md self-start" 
            onClick={() => setSelectedCategory(null)}
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            BACK TO GROUPS
          </button>
          
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-white mb-sm">
            {selectedCategory}
          </h2>
          
          <div className="flex flex-col gap-sm">
            {exercisesMap[selectedCategory]
  .filter((ex) =>
    ex.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .map((ex) => {
              const urlSlug = ex
  .toLowerCase()
  .replace(/'/g, "")
  .replace(/\s+/g, "-");
              return (
                <Link 
                  href={`/gym/${urlSlug}?group=${selectedCategory}`} 
                  key={ex}
                  className="bg-surface-container-high/80 backdrop-blur-md p-md rounded-xl flex items-center justify-between border-l-4 border-primary-container active:scale-95 transition-transform"
                >
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-on-surface">{ex}</span>
                    <span className="font-label-lg text-label-lg text-on-surface-variant">4 Sets • 8-12 Reps</span>
                  </div>
                  <span className="material-symbols-outlined text-primary-container">chevron_right</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
