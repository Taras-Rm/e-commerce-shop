import { CategoryI } from "@/types/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type ContextType = {
  category: SelectedCategory | null;
  setCategory: (categoryData: CategoryI) => void;
};

const CategorySelectionContext = createContext<ContextType | null>(null);

export const useCategorySelection = () => {
  const context = useContext(CategorySelectionContext);

  if (!context) {
    throw new Error(
      "context has to be used within <CategorySelectionContext.Provider>"
    );
  }

  return context;
};

type SelectedCategory = {
  id: number;
  hasSubCategories: boolean;
};

export const CategorySelectionProvider = ({ children }: PropsWithChildren) => {
  const [category, setCategory] = useState<SelectedCategory | null>(null);

  const setActiveCategory = (categoryData: CategoryI) => {
    setCategory({
      id: categoryData.id,
      hasSubCategories: categoryData.subCategories.length > 0,
    });
  };

  return (
    <CategorySelectionContext.Provider
      value={{ category, setCategory: setActiveCategory }}
    >
      {children}
    </CategorySelectionContext.Provider>
  );
};
