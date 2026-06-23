"use client";

import { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { recipes } from "@/data/recipes";

export default function RecipeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center h-full pt-20">
        <h1 className="text-xl text-on-surface">Recipe not found</h1>
        <button onClick={() => router.back()} className="mt-4 text-primary">Go back</button>
      </div>
    );
  }

  return (
    <div className="pb-8">
      {/* Top App Bar with back button overlaid on video/image */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 p-4 flex justify-between items-center pointer-events-none">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto active:scale-95 transition-transform">
          <span className="material-symbols-outlined">favorite_border</span>
        </button>
      </div>

      {/* Hero Media (Video or Image) */}
      <div className="w-full aspect-video relative bg-surface-container-highest">
        {recipe.videoUrl ? (
          <video
            src={recipe.videoUrl}
            controls
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${recipe.imageUrl}')` }}
          />
        )}
      </div>

      {/* Content */}
      <div className="px-container-margin pt-6">
        <div className="flex items-center gap-2 mb-2">
          <span className={`inline-block px-3 py-1 rounded-full font-label-lg text-xs uppercase tracking-wider ${recipe.categoryColor}`}>
            {recipe.category}
          </span>
        </div>
        
        <h1 className="font-headline-lg text-headline-lg text-white mb-6 leading-tight font-bold">
  {recipe.title}
</h1>

        {/* Macros Grid */}
        <div className="grid grid-cols-4 gap-2 mb-8 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/30">
          <div className="flex flex-col items-center">
            <span className="font-metric-xl text-xl text-primary">{recipe.kcal}</span>
            <span className="font-label-lg text-on-surface-variant text-[10px] uppercase">kcal</span>
          </div>
          <div className="flex flex-col items-center border-l border-outline-variant/30">
            <span className="font-metric-xl text-xl text-secondary">{recipe.protein}g</span>
            <span className="font-label-lg text-on-surface-variant text-[10px] uppercase">Protein</span>
          </div>
          <div className="flex flex-col items-center border-l border-outline-variant/30">
            <span className="font-metric-xl text-xl text-secondary">{recipe.carbs}g</span>
            <span className="font-label-lg text-on-surface-variant text-[10px] uppercase">Carbs</span>
          </div>
          <div className="flex flex-col items-center border-l border-outline-variant/30">
            <span className="font-metric-xl text-xl text-secondary">{recipe.fats}g</span>
            <span className="font-label-lg text-on-surface-variant text-[10px] uppercase">Fats</span>
          </div>
        </div>

        {/* Ingredients */}
        <section className="mb-8">
          <h2 className="font-title-md text-title-md text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container">grocery</span>
            Ingredients
          </h2>
          <ul className="space-y-3">
            {recipe.ingredients.map((ingredient, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-sm text-primary mt-1">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface-variant">{ingredient}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Preparation Steps */}
        <section className="mb-8">
          <h2 className="font-title-md text-title-md text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container">blender</span>
            Preparation Steps
          </h2>
          <div className="space-y-6">
            {recipe.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-title-md font-bold">
                  {idx + 1}
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant pt-1 leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Notes */}
        {recipe.notes && (
          <section className="mb-8 bg-surface-container-high p-4 rounded-xl border-l-4 border-primary-container">
            <h3 className="font-label-lg text-label-lg uppercase tracking-widest text-on-surface-variant mb-2">Chef's Notes</h3>
            <p className="font-body-md text-body-md text-on-surface italic">{recipe.notes}</p>
          </section>
        )}
      </div>
    </div>
  );
}
