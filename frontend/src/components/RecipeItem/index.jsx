import React from "react";
import { useLoaderData } from "react-router-dom";

const RecipeItems = () => {
  const allRecipes = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-l-4 border-emerald-500 pl-4">
        Latest Recipes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allRecipes.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
          >
            {/* ✅ FIXED: Changed port to 3000 and added styling */}
            <div className="h-48 bg-emerald-50 overflow-hidden">
              <img
                src={`http://localhost:3000/images/${item.coverImage}`}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.jp/24/059669/ffffff/400x300.png?text=No+Image+Found";
                }}
              />
            </div>

            <div className="p-6 flex flex-col grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                  {item.title}
                </h3>
                <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded">
                  {item.time}
                </span>
              </div>

              <p className="text-gray-600 text-sm line-clamp-3 mb-4 grow">
                {item.instructions}
              </p>

              <div className="mt-auto">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Ingredients
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md italic">
                    {/* ✅ FIXED: Use .join to display the array as a string */}
                    {item.ingredients.join(", ")}
                    {item.ingredients?.length > 3 ? " ..." : ""}
                  </span>
                </div>
              </div>

              <button className="mt-6 w-full py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeItems;
