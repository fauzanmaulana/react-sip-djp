import { useToast } from "@chakra-ui/toast";
import React, { createContext } from "react";
import { useState } from "react/cjs/react.development";
import Api from "../../Api";
import CreateToast from "../../components/utils/CreateToast";
import { serviceLocalStorage } from "../../Helper";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const toast = useToast();

	// all product state
	const [products, setProducts] = useState([]);

	// show product state
	const [product, setProduct] = useState({
		id: "",
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
				CreateToast(toast, "success", result.message);
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
				e.target.reset();
				CreateToast(toast, "success", result.message);
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

	return (
		<ProductContext.Provider
			value={{
				loading,
				products,
				product,
				setProduct,
				getProducts,
				showProduct,
				createProduct,
				updateProduct,
				deleteProduct,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

export { ProductContext, ProductProvider };
