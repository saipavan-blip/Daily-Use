export interface Recipe {
  id: number;
  title: string;
  category: string;
  categoryColor: string;
  protein: number;
  kcal: number;
  carbs: number;
  fats: number;
  imageAlt: string;
  imageUrl: string;
  videoUrl?: string;
  ingredients: string[];
  steps: string[];
  notes?: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Chicken sandwich",
    category: "Snacks",
    categoryColor:"bg-blue-600 text-white",
    protein: 40,
    kcal: 350,
    carbs: 35,
    fats: 10,
    imageAlt: "A gourmet high-protein bowl featuring seared ahi tuna slices...",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDE0rsg97NDEdmS0TMEzaEtSlBsxxjnT7Rg_bSiZEyUQuq-D9z53dsLbfA_9XSRF0YK8oq0dG-ZDcUtAjkD0CNkRNHIibwiWmP93Z214LgDYmSkW_LnwskrIIwhjgxLLO4pHTtT2mYOwQ-4DMriqfiWy0BgoetAjpuUQIdSxF5w8KY6rA-ydDVL7E_yavDEYZrcmO-oKOybAMr0tqtZ6Dearii45Z_KukStDsa88ZM-haPjVIHYjUJByVZI0h3g0TqBIJ7DIvzoOt9N",
    videoUrl: "/videos/Chicken sandwich.mp4",
    ingredients: [
      "2 slices Whole Wheat Bread",
      "150g Grilled Chicken Breast",
      "1 slice Low-fat Swiss Cheese",
      "Lettuce & Tomato",
      "1 tbsp Light Mayo or Mustard"
    ],
    steps: [
      "Toast the whole wheat bread to your liking.",
      "Spread light mayo or mustard on the bread.",
      "Layer lettuce and tomato slices.",
      "Add grilled chicken breast and top with a slice of Swiss cheese.",
      "Close the sandwich, cut in half, and enjoy!"
    ],
    notes: "A great on-the-go snack or quick meal. Can be made ahead of time."
  },
  {
  id: 2,
  title: "Soya Chunk Fried Rice",
  category: "Lunch",
  categoryColor: "bg-blue-600 text-white",

  protein: 30,
  kcal: 450,
  carbs: 55,
  fats: 10,

  imageAlt: "High protein soya chunk fried rice",

  imageUrl: "/images/recipes/soya-fried-rice.jpg",
  videoUrl: "/videos/soya-fried-rice.mp4",

  ingredients: [
    "1 cup cooked rice",
    "50g soya chunks",
    "1 onion",
    "1 carrot",
    "1 capsicum",
    "1 tbsp oil",
    "Salt",
    "Pepper"
  ],

  steps: [
    "Boil and squeeze the soya chunks.",
    "Heat oil and saute onion, carrot and capsicum.",
    "Add soya chunks and cook for 3 minutes.",
    "Add cooked rice and mix well.",
    "Season with salt and pepper.",
    "Cook for 2 minutes and serve hot."
  ],

  notes: "High-protein lunch option for muscle building."
},
{
  id: 3,
  title: "Paneer Omelette",
  category: "Breakfast",
  categoryColor: "bg-blue-600 text-white",

  protein: 35,
  kcal: 380,
  carbs: 8,
  fats: 22,

  imageAlt: "High protein paneer omelette",

  imageUrl: "/images/recipes/paneer-omelette.jpg",
  videoUrl: "/videos/paneer-omelette.mp4",

  ingredients: [
    "3 whole eggs",
    "100g paneer",
    "1 onion",
    "1 green chilli",
    "Salt",
    "Black pepper",
    "1 tsp oil"
  ],

  steps: [
    "Beat the eggs in a bowl.",
    "Add crumbled paneer, onion and green chilli.",
    "Season with salt and pepper.",
    "Heat a pan with oil.",
    "Pour the mixture and cook on medium flame.",
    "Flip carefully and cook both sides.",
    "Serve hot."
  ],

  notes: "Excellent high-protein breakfast for muscle building."
},
{
  id: 4,
  title: "Paneer Salad",
  category: "Snacks",
  categoryColor: "bg-blue-600 text-white",

  protein: 28,
  kcal: 320,
  carbs: 12,
  fats: 18,

  imageAlt: "Fresh high protein paneer salad",

  imageUrl: "/images/recipes/paneer-salad.jpg",
  videoUrl: "/videos/paneer-salad.mp4",

  ingredients: [
    "150g paneer cubes",
    "1 cucumber",
    "1 tomato",
    "1 onion",
    "Lettuce leaves",
    "1 tsp lemon juice",
    "Salt",
    "Black pepper"
  ],

  steps: [
    "Cut paneer and vegetables into small pieces.",
    "Add them to a large bowl.",
    "Season with salt and black pepper.",
    "Add lemon juice and mix well.",
    "Garnish with lettuce leaves.",
    "Serve fresh."
  ],

  notes: "Light, nutritious and high in protein. Ideal for fat loss and muscle maintenance."
},
{
  id: 5,
  title: "Soya Balls",
  category: "Snacks",
  categoryColor: "bg-blue-600 text-white",

  protein: 25,
  kcal: 280,
  carbs: 20,
  fats: 8,

  imageAlt: "Protein rich soya balls",

  imageUrl: "/images/recipes/soya-balls.jpg",
  videoUrl: "/videos/soya-balls.mp4",

  ingredients: [
    "100g soya chunks",
    "1 potato",
    "Onion",
    "Green chilli",
    "Salt",
    "Spices"
  ],

  steps: [
    "Boil and squeeze soya chunks.",
    "Grind with potato and spices.",
    "Make small balls.",
    "Air fry or shallow fry.",
    "Serve hot."
  ],

  notes: "High-protein snack for evening hunger."
},
{
  id: 6,
  title: "Bhatani Sandwich",
  category: "Breakfast",
  categoryColor: "bg-blue-600 text-white",

  protein: 18,
  kcal: 320,
  carbs: 40,
  fats: 8,

  imageAlt: "Green peas sandwich",

  imageUrl: "/images/recipes/bhatani-sandwich.jpg",
  videoUrl: "/videos/bhatani-sandwich.mp4",

  ingredients: [
    "Bread slices",
    "Green peas",
    "Onion",
    "Salt",
    "Pepper"
  ],

  steps: [
    "Boil peas and mash them.",
    "Mix with onion and spices.",
    "Spread between bread slices.",
    "Toast until golden brown.",
    "Serve hot."
  ],

  notes: "Healthy breakfast with good fiber and protein."
},
{
  id: 7,
  title: "Soya Chunks Curry",
  category: "Dinner",
  categoryColor: "bg-blue-600 text-white",

  protein: 35,
  kcal: 380,
  carbs: 18,
  fats: 12,

  imageAlt: "Soya chunks curry for chapati",

  imageUrl: "/images/recipes/soya-chunks-curry.jpg",
  videoUrl: "/videos/soya-chunks-curry.mp4",

  ingredients: [
    "100g soya chunks",
    "2 onions",
    "2 tomatoes",
    "Ginger garlic paste",
    "Spices",
    "Oil"
  ],

  steps: [
    "Boil and squeeze soya chunks.",
    "Prepare onion tomato gravy.",
    "Add spices and cook well.",
    "Add soya chunks.",
    "Simmer for 10 minutes.",
    "Serve with chapati."
  ],

  notes: "Excellent high-protein curry for lunch or dinner."
},
{
  id: 8,
  title: "Paneer Bowl",
  category: "Lunch",
  categoryColor: "bg-blue-600 text-white",

  protein: 32,
  kcal: 420,
  carbs: 25,
  fats: 20,

  imageAlt: "Healthy paneer bowl",

  imageUrl: "/images/recipes/paneer-bowl.jpg",
  videoUrl: "/videos/paneer-bowl.mp4",

  ingredients: [
    "200g paneer",
    "Vegetables",
    "Lettuce",
    "Seasonings"
  ],

  steps: [
    "Cook paneer cubes.",
    "Prepare vegetables.",
    "Arrange in a bowl.",
    "Serve fresh."
  ],

  notes: "High-protein balanced meal."
},
{
  id: 9,
  title: "Chicken Rice with Curd Salad",
  category: "Lunch",
  categoryColor: "bg-blue-600 text-white",

  protein: 45,
  kcal: 550,
  carbs: 55,
  fats: 12,

  imageAlt: "Chicken rice with cucumber curd salad",

  imageUrl: "/images/recipes/chicken-rice-curd-salad.jpg",
  videoUrl: "/videos/chicken-rice-curd-salad.mp4",

  ingredients: [
    "200g chicken breast",
    "1 cup rice",
    "Curd",
    "Cucumber",
    "Salt"
  ],

  steps: [
    "Cook rice.",
    "Grill chicken.",
    "Prepare cucumber curd salad.",
    "Serve together."
  ],

  notes: "Perfect post-workout meal."
},
{
  id: 10,
  title: "Brown Bread with Peanut Butter",
  category: "Pre-Workout",
  categoryColor: "bg-blue-600 text-white",

  protein: 15,
  kcal: 300,
  carbs: 30,
  fats: 14,

  imageAlt: "Brown bread with peanut butter",

  imageUrl: "/images/recipes/brown-bread-peanut-butter.jpg",
  videoUrl: "/videos/brown-bread-peanut-butter.mp4",

  ingredients: [
    "2 slices brown bread",
    "2 tbsp peanut butter"
  ],

  steps: [
    "Toast bread.",
    "Spread peanut butter.",
    "Serve immediately."
  ],

  notes: "Quick breakfast and energy source."
},
{
  id: 11,
  title: "Lemon Ginger Turmeric Water",
  category: "Pre-Workout",
  categoryColor: "bg-blue-600 text-white",
  protein: 0,
  kcal: 15,
  carbs: 3,
  fats: 0,

  imageAlt: "Lemon ginger turmeric drink",

  imageUrl: "/images/recipes/lemon-ginger-water.jpg",
  videoUrl: "/videos/lemon-ginger-water.mp4",

  ingredients: [
    "1 glass water",
    "Lemon juice",
    "Ginger",
    "Turmeric",
    "Pinch of salt"
  ],

  steps: [
    "Add ingredients to water.",
    "Mix well.",
    "Drink fresh."
  ],

  notes: "Refreshing drink before workouts."
},
{
  id: 12,
  title: "Groundnut Salad",
  category: "Snacks",
  categoryColor: "bg-blue-600 text-white",

  protein: 18,
  kcal: 280,
  carbs: 15,
  fats: 18,

  imageAlt: "Groundnut salad",

  imageUrl: "/images/recipes/groundnut-salad.jpg",
  videoUrl: "/videos/groundnut-salad.mp4",

  ingredients: [
    "Boiled groundnuts",
    "Onion",
    "Tomato",
    "Coriander",
    "Lemon juice",
    "Salt"
  ],

  steps: [
    "Mix all ingredients in a bowl.",
    "Add lemon juice.",
    "Serve fresh."
  ],

  notes: "Protein-rich evening snack."
}
];
