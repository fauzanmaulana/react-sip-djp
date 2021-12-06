import { useToast } from "@chakra-ui/toast";
import React, { createContext } from "react";
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";
import Api from "../../Api";
import CreateToast from "../../components/utils/CreateToast";
import { serviceLocalStorage } from "../../Helper";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const history = useHistory();
	const toast = useToast();

	const [loading, setLoading] = useState(false);
	const [profile, setProfile] = useState(null);

	const postLogin = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		setLoading(true);

		try {
			const result = await Api.postLogin(formData);

			if (!result.success) {
				setLoading(false);
				CreateToast(toast, "warning", result.message);
			} else {
				serviceLocalStorage("user_token", result.data.token);
				CreateToast(toast, "success", result.message);
				history.push("/dashboard");
			}
		} catch (error) {
			console.error(error);
		}
	};

	const postRegister = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		try {
			const result = await Api.postRegister(formData);

			if (!result.success) {
				setLoading(false);
				CreateToast(toast, "warning", result.message);
			} else {
				serviceLocalStorage("user_token", result.data.token);
				CreateToast(toast, "success", result.message);
				history.push("/dashboard");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const postLogout = async () => {
		CreateToast(toast, "info", "loading..");
		const result = await Api.postLogout(serviceLocalStorage("user_token"));
		if (result.success) {
			toast.closeAll();
			serviceLocalStorage("user_token", "remove");
			history.push({
				pathname: "/auth/login",
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
				throw Error("something error");
			}
		} catch (error) {
			serviceLocalStorage("user_token", "remove");
			history.push({
				pathname: "/auth/login",
				state: { logoutMessage: "Session has ended" },
			});
		}
	};

	return (
		<AuthContext.Provider
			value={{
				loading,
				profile,
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
