"use client";

import { useState } from "react";
import Link from "next/link";
import { recipes } from "@/data/recipes";

export default function RecipesPage() {
  const [activeCategory, setActiveCategory] = useState("All Recipes");

  const categories = [
    "All Recipes", "Breakfast", "Lunch", "Dinner", "Snacks", "Pre-Workout", "Post-Workout"
  ];

  return (
    <div className="pt-4 px-container-margin max-w-2xl mx-auto">
      {/* Hero Header */}
      <section className="mb-lg">
        <h2 className="font-display-lg text-display-lg text-primary mb-xs">Fuel Your Body</h2>
        <p className="text-white text-lg leading-7 max-w-full">
          High-protein meals precision-engineered for performance and recovery.
        </p>
      </section>

      {/* Category Chips */}
      <nav className="flex flex-col gap-3 mb-xl">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-none px-5 py-2 rounded-full font-label-lg text-label-lg active:scale-95 transition-all ${activeCategory === cat
              ? "bg-primary-container text-on-primary-container"
              : "bg-surface-container-high text-on-surface hover:bg-surface-variant"
              }`}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Recipe Feed */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        {recipes
          .filter((r) => activeCategory === "All Recipes" || r.category === activeCategory || r.category === activeCategory.replace(/s$/, "") || r.category + "s" === activeCategory)
          .map((recipe) => (
          <Link href={`/recipes/${recipe.id}`} key={recipe.id} className="block group">
            <article
              className="relative rounded-xl overflow-hidden bg-surface-container aspect-[4/5] shadow-lg border border-outline-variant/30 transition-all hover:border-primary-container/50 active:scale-[0.98]"
            >
            <div className="absolute inset-0 z-0">
              {recipe.videoUrl ? (
                <video
                  src={recipe.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  aria-label={recipe.imageAlt}
                  style={{ backgroundImage: `url('${recipe.imageUrl}')` }}
                ></div>
              )}
              <div className="absolute inset-0 recipe-card-gradient"></div>
            </div>

            

            <div className="absolute bottom-0 left-0 p-md z-10 w-full">
              <span className={`inline-block px-2 py-0.5 rounded-sm font-label-lg text-[10px] uppercase tracking-wider mb-2 ${recipe.categoryColor}`}>
                {recipe.category}
              </span>
              <h3 className="font-title-md text-title-md text-white mb-2">{recipe.title}</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-baseline gap-1">
                  <span className="font-metric-xl text-2xl text-secondary-container">{recipe.protein}</span>
                  <span className="font-label-lg text-white/80 uppercase">Protein</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-metric-xl text-2xl text-white">{recipe.kcal}</span>
                  <span className="font-label-lg text-white/80 uppercase">kcal</span>
                </div>
              </div>
            </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
