import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export default function MenuProvider({ children }) {
  const [Menu, setMenu] = useState(null);

  let removeFromMenu = (id) => {
    setMenu((i) => i.filter((el) => el._id !== id));
  };

  let getCategory = (category) => {
    return Menu.filter((i) => i.category == category);
  };

  let updateMenu = (id, newUpdate) => {
    let updatedMenu = Menu.map((game) => {
      if (game._id == id) {
        return newUpdate;
      }

      return game;
    });
    setMenu(updatedMenu);
  };

  let addToMenu = (newItem) => {
    let newMenu = [...Menu, newItem];

    setMenu(newMenu);
  };

  return (
    <MenuContext.Provider
      value={{
        Menu,
        setMenu,
        removeFromMenu,
        getCategory,
        updateMenu,
        addToMenu
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}