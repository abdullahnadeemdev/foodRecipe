import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    time: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "ingredients") {
      value = value.split(",").map((item) => item.trim());
    }
    if (name === "file") {
      value = e.target.files[0];
    }

    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Recipe:", recipe);
    await axios
      .post("http://localhost:3000/recipe", recipe, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: "bearer " + localStorage.getItem("TOKEN"),
        },
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Share Your <span className="text-emerald-600">Recipe</span>
        </h2>
        <p className="text-gray-500">
          Fill in the details to add a new dish to the blog.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Field */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-semibold text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="e.g. Classic Beef Tacos"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-black"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cooking Time */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-semibold text-gray-700">
              Cooking Time
            </label>
            <input
              type="text"
              name="time"
              placeholder="e.g. 20min"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-black"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col space-y-1">
            <label className="text-sm font-semibold text-gray-700">
              Recipe Image
            </label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 cursor-pointer"
            />
          </div>
        </div>

        {/* Ingredients */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-semibold text-gray-700">
            Ingredients
          </label>
          <textarea
            name="ingredients"
            placeholder="Separate ingredients with commas..."
            rows="3"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-black"
            required
          ></textarea>
        </div>

        {/* Instructions */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-semibold text-gray-700">
            Instructions
          </label>
          <textarea
            name="instructions"
            placeholder="Describe the steps..."
            rows="5"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-black"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-100 transition-all active:scale-[0.98]"
        >
          Publish Recipe
        </button>
      </form>
    </div>
  );
};

export default AddFood;
