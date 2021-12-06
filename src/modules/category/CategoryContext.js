import { useToast } from "@chakra-ui/toast";
import React, { createContext } from "react";
import { useState } from "react/cjs/react.development";
import Api from "../../Api";
import CreateToast from "../../components/utils/CreateToast";
import { serviceLocalStorage } from "../../Helper";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
	const toast = useToast();

	// all category state
	const [categories, setCategories] = useState([]);

	// show category state
	const [category, setCategory] = useState({
		name: "",
		status: "",
	});

	// loading state
	const [loading, setLoading] = useState(false);

	const getCategories = async () => {
		setLoading(true);

		try {
			const result = await Api.getCategory(serviceLocalStorage("user_token"));

			if (result.success) {
				setCategories(result.data);
			}
		} catch (error) {
			console.error(error);
		}
		setLoading(false);
	};

	const showCategory = async (id) => {
		try {
			const result = await Api.showCategory(
				serviceLocalStorage("user_token"),
				id
			);

			if (result.success) {
				setCategory(result.data);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const createCategory = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		setLoading(true);

		try {
			const result = await Api.createCategory(
				serviceLocalStorage("user_token"),
				formData
			);

			if (result.success) {
				e.target.reset();
				CreateToast(toast, "success", result.message);
			}
		} catch (error) {
			console.error(error);
		}

		setLoading(false);
	};

	const updateCategory = async (e, id) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = {
			name: formData.get("name"),
			status: formData.get("status"),
		};

		setLoading(true);

		try {
			const result = await Api.updateCategory(
				serviceLocalStorage("user_token"),
				id,
				new URLSearchParams(data)
			);

			if (result.success) {
				e.target.reset();
				CreateToast(toast, "success", result.message);
			}
		} catch (error) {
			console.error(error);
		}

		setLoading(false);
	};

	const deleteCategory = async (id) => {
		setCategories((current) =>
			current.filter((category) => category.id !== id)
		);

		CreateToast(toast, "success", "Delete Data Success");

		await Api.deleteCategory(serviceLocalStorage("user_token"), id);
	};

	return (
		<CategoryContext.Provider
			value={{
				loading,
				categories,
				setCategories,
				category,
				setCategory,
				getCategories,
				showCategory,
				createCategory,
				updateCategory,
				deleteCategory,
			}}
		>
			{children}
		</CategoryContext.Provider>
	);
};

export { CategoryContext, CategoryProvider };
