import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  function addFavorites(id) {
    setFavoriteMeals((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorites(id) {
    setFavoriteMeals((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoriteMeals,
    addFavorites: addFavorites,
    removeFavorites: removeFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
