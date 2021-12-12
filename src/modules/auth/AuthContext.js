import { useToast } from "@chakra-ui/toast";
import React, { createContext } from "react";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";
import Api from "../../Api";
import { CreateToast } from "../../Helper";
import { serviceLocalStorage } from "../../Helper";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const history = useHistory();
	const toast = useToast();

	const [loading, setLoading] = useState(false);
	const [profile, setProfile] = useState(null);
	const [errors, setErrors] = useState({
		message: "",
		errors: {},
	});

	const postLogin = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		setLoading(true);

		try {
			const result = await Api.postLogin(formData);

			if (!result.success) {
				setErrors(result);
				CreateToast(toast, "warning", result.message);
			} else {
				serviceLocalStorage("user_token", result.data.token);
				CreateToast(toast, "success", result.message);
				history.push("/dashboard");
			}
		} catch (error) {
			console.error(error);
		}

		setLoading(false);
	};

	const postRegister = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		setLoading(true);

		try {
			const result = await Api.postRegister(formData);

			if (!result.success) {
				setErrors(result);
				CreateToast(toast, "warning", result.message);
			} else {
				serviceLocalStorage("user_token", result.data.token);
				CreateToast(toast, "success", result.message);
				history.push("/dashboard");
			}
		} catch (error) {
			console.log(error);
		}

		setLoading(false);
	};

	const postLogout = async () => {
		CreateToast(toast, "info", "loading..");
		const result = await Api.postLogout(serviceLocalStorage("user_token"));
		if (result.success) {
			toast.closeAll();
			serviceLocalStorage("user_token", "remove");
			history.push({
				pathname: "/login",
				state: { logoutMessage: result.message },
			});
		}
	};

	const getProfile = async () => {
		try {
			const result = await Api.getProfile(serviceLocalStorage("user_token"));

			if (result.success) {
				setProfile(result.data);
			} else {
				throw Error(result.message);
			}
		} catch (error) {
			// * remove local storage / session storage if token expired
			serviceLocalStorage("user_token", "remove");
			history.push({
				pathname: "/login",
				state: { logoutMessage: "Session has ended" },
			});
		}
	};

	return (
		<AuthContext.Provider
			value={{
				loading,
				profile,
				errors,
				setErrors,
				postLogin,
				postRegister,
				postLogout,
				getProfile,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
