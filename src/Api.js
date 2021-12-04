import { baseUrl } from "./Utils";

class Api {
	// * Login Api (POST)
	static async postLogin(data) {
		const response = await fetch(`${baseUrl}/login`, {
			method: "POST",
			headers: new Headers({
				Accept: "application/json",
			}),
			body: data,
		});
		return await response.json();
	}

	// * Register Api (POST)
	static async postRegister(data) {
		const response = await fetch(`${baseUrl}/register`, {
			method: "POST",
			headers: new Headers({
				Accept: "application/json",
			}),
			body: data,
		});
		return await response.json();
	}

	static async postLogout(user_token) {
		const response = await fetch(`${baseUrl}/logout`, {
			method: "POST",
			headers: new Headers({
				Accept: "application/json",
				Authorization: `Bearer ${user_token}`,
			}),
		});
		return await response.json();
	}
}

export default Api;
