import { useToast } from "@chakra-ui/toast";
import React, { createContext } from "react";
import { useState } from "react/cjs/react.development";
import Api from "../../Api";
import { CreateToast } from "../../Helper";
import { serviceLocalStorage } from "../../Helper";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const toast = useToast();

	// all product state
	const [products, setProducts] = useState([]);
	const [filterSearchKeyword, setFilterSearchKeyword] = useState("");
	const [filterSelectKeyword, setFilterSelectKeyword] = useState("");

	// show product state
	const [product, setProduct] = useState({
		category: {
			id: "",
			name: "",
		},
		name: "",
		description: "",
		price: "",
		sku: "",
		image: "",
		status: "",
	});

	// loading state
	const [loading, setLoading] = useState(false);

	// error state
	const [errors, setErrors] = useState({
		message: "",
		errors: {},
	});

	const getProducts = async () => {
		setLoading(true);

		try {
			const result = await Api.getProduct(serviceLocalStorage("user_token"));

			if (result.success) {
				setProducts(result.data);
			}
		} catch (error) {
			console.error(error);
		}
		setLoading(false);
	};

	const showProduct = async (id) => {
		setLoading(true);
		try {
			const result = await Api.showProduct(
				serviceLocalStorage("user_token"),
				id
			);

			if (result.success) {
				setProduct(result.data);
			}
		} catch (error) {
			console.error(error);
		}
		setLoading(false);
	};

	const createProduct = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		setLoading(true);

		try {
			const result = await Api.createProduct(
				serviceLocalStorage("user_token"),
				formData
			);

			if (result.success) {
				e.target.reset();
				setErrors({
					message: "",
					errors: {},
				});
				CreateToast(toast, "success", result.message);
			} else {
				setErrors(result);
				CreateToast(toast, "warning", result.message);
			}
		} catch (error) {
			console.error(error);
		}

		setLoading(false);
	};

	const updateProduct = async (e, id) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		setLoading(true);

		try {
			const result = await Api.updateProduct(
				serviceLocalStorage("user_token"),
				id,
				formData
			);

			if (result.success) {
				CreateToast(toast, "success", result.message);
				setErrors({
					message: "",
					errors: {},
				});
			} else {
				setErrors(result);
				CreateToast(toast, "warning", result.message);
			}
		} catch (error) {
			console.error(error);
		}

		setLoading(false);
	};

	const deleteProduct = async (id) => {
		setProducts((current) => current.filter((product) => product.id !== id));

		CreateToast(toast, "success", "Delete Data Success");

		await Api.deleteProduct(serviceLocalStorage("user_token"), id);
	};

	const filterCategory = (categoryId) => {
		if (!categoryId) {
			getProducts();
		} else {
			getProducts().then(() => {
				setProducts((current) =>
					current.filter(
						(product) => product.category.id === Number(categoryId)
					)
				);
			});
		}
	};

	const filterSearch = (keyword) => {
		if (!keyword) {
			getProducts();
		} else {
			getProducts().then(() => {
				setProducts((current) =>
					current.filter(
						(product) =>
							product.name.toLowerCase().includes(keyword) ||
							product.price.toString().toLowerCase().includes(keyword)
					)
				);
			});
		}
	};

	return (
		<ProductContext.Provider
			value={{
				loading,
				products,
				product,
				setProduct,
				filterSearchKeyword,
				setFilterSearchKeyword,
				filterSelectKeyword,
				setFilterSelectKeyword,
				errors,
				setErrors,
				getProducts,
				showProduct,
				createProduct,
				updateProduct,
				deleteProduct,
				filterCategory,
				filterSearch,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

export { ProductContext, ProductProvider };
