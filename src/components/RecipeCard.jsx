export const RecipeCard = ({ addToFavourites, title, ingredients, time }) => {
  return (
    <div className="mt-2 border border-gray-700 rounded-xl p-4 bg-gray-900 text-white space-y-2">
      <h1>{title}</h1>
      <p>{ingredients}</p>
      <p>{time}</p>
      <button className="border rounded-4xl p-0.5" onClick={addToFavourites}>
        Add to Favourites
      </button>
    </div>
  );
};
