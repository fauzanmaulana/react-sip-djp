import React, { createContext } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
	return (
		<CategoryContext.Provider value={"this works"}>
			{children}
		</CategoryContext.Provider>
	);
};

export { CategoryContext, CategoryProvider };
