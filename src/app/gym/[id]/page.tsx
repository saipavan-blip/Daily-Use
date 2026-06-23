"use client";

import { use} from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ExerciseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const searchParams = useSearchParams();
const group = searchParams.get("group");

  const { id } = use(params);

  // Convert slug to title, e.g., "hammer-curl" -> "Hammer Curl"
  const title = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="bg-background flex items-center justify-between px-container-margin h-14 w-full z-40 top-0 sticky">
        <button 
          onClick={() => {
  if (group) {
    router.push(`/gym?group=${group}`);
  } else {
    router.push("/gym");
  }
}}
          className="text-on-surface hover:opacity-80 active:scale-95 transition-transform flex items-center justify-center"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary tracking-tight">
          {title}
        </h1>
        <button className="text-on-surface hover:opacity-80 active:scale-95 transition-transform flex items-center justify-center">
          <span className="material-symbols-outlined">edit</span>
        </button>
      </header>

      <div className="w-full px-4 mt-2">
        {/* Video Player Placeholder */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface-container-highest shadow-2xl mb-lg">
          <video
  className="absolute inset-0 w-full h-full object-cover"
  controls
  poster="/images/gym-placeholder.jpg"
>
  <source src={`/videos/${id}.mp4`} type="video/mp4" />
</video>
          
          
          
        </div>

        {/* Description Section */}
        <section className="mb-lg">
          <h2 className="font-title-md text-title-md text-white mb-sm">
  Description
</h2>
          <p className="text-white text-base leading-8">
            The {title.toLowerCase()} is a classic isolation exercise used to build strength and size. Focus on maintaining a stable core and avoiding any swinging of the upper body during the movement.
          </p>
        </section>

        {/* Bento Grid Metadata */}
        <div className="grid grid-cols-2 gap-gutter mb-lg">
          <div className="bg-gray-900 border border-gray-700 p-md rounded-xl border-l-4 border-[#caf300] flex flex-col justify-between">
            <span className="font-label-lg text-label-lg text-black uppercase tracking-widest font-bold">Target Muscle</span>
            <span className="font-title-md text-title-md text-black mt-xs font-bold">Primary</span>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 p-md rounded-xl flex flex-col justify-between">
            <span className="font-label-lg text-label-lg text-black uppercase tracking-widest font-bold">Sets</span>
            <span className="font-metric-xl text-metric-xl text-black leading-none mt-xs font-bold">3-4</span>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 p-md rounded-xl col-span-2 flex items-center justify-between">
            <div>
              <span className="font-label-lg text-label-lg text-black uppercase tracking-widest font-bold">Target Reps</span>
              <div className="font-metric-xl text-metric-xl text-black leading-none mt-xs font-bold">8-12</div>
            </div>
            <div className="h-12 w-12 rounded-full border-2 border-outline-variant flex items-center justify-center">
              <span className="material-symbols-outlined text-outline">repeat</span>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <section className="mb-xl">
          <div className="flex items-center gap-sm mb-sm">
            <span className="material-symbols-outlined text-blue-500">sticky_note_2</span>
            <h2 className="font-title-md text-title-md text-white">Personal Notes</h2>
          </div>
          <div className="bg-white p-md rounded-xl border border-outline-variant/30 italic text-black font-body-md">
            "Keep elbows pinned to your sides. Squeeze at the top of the movement for 1 second. Control the descent (eccentric) for a 3-count."
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col gap-sm">
          <button className="h-14 w-full bg-surface-container-high text-on-surface rounded-full font-title-md flex items-center justify-center gap-sm active:scale-95 transition-all hover:bg-surface-variant">
            <span className="material-symbols-outlined">video_library</span>
            Replace Video
          </button>
          
          <button className="h-14 w-full border-2 border-error/30 text-error rounded-full font-title-md flex items-center justify-center gap-sm active:scale-95 transition-all hover:bg-error/10">
            <span className="material-symbols-outlined">delete</span>
            Delete Exercise
          </button>
        </div>
      </div>
    </>
  );
}
