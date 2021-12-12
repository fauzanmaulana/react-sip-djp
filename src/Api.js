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

	// * Logout Api (POST)
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

	// * Profile Api (GET)
	static async getProfile(user_token) {
		const response = await fetch(`${baseUrl}/profile`, {
			method: "GET",
			headers: new Headers({
				Accept: "application/json",
				Authorization: `Bearer ${user_token}`,
			}),
		});
		return await response.json();
	}

	// * All Category Api (Get)
	static async getCategory(user_token) {
		const response = await fetch(`${baseUrl}/category/all`, {
			method: "GET",
			headers: new Headers({
				Accept: "application/json",
				Authorization: `Bearer ${user_token}`,
			}),
		});
		return await response.json();
	}

	// * Get Category By ID Api (Get)
	static async showCategory(user_token, id) {
		const response = await fetch(`${baseUrl}/category/${id}`, {
			method: "GET",
			headers: new Headers({
				Accept: "application/json",
				Authorization: `Bearer ${user_token}`,
			}),
		});
		return await response.json();
	}

	// * Create Category Api (POST)
	static async createCategory(user_token, data) {
		const response = await fetch(`${baseUrl}/category`, {
			method: "POST",
			headers: new Headers({
				Accept: "application/json",
				Authorization: `Bearer ${user_token}`,
			}),
			body: data,
		});
		return await response.json();
	}

	// * Update Category By ID Api (Get)
	static async updateCategory(user_token, id, data) {
		const response = await fetch(`${baseUrl}/category/${id}`, {
			method: "PUT",
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${user_token}`,
			},
			body: data,
		});
		return await response.json();
	}

	// * Delete Category Api (DELETE)
	static async deleteCategory(user_token, id) {
		const response = await fetch(`${baseUrl}/category/${id}`, {
			method: "DELETE",
			headers: new Headers({
				Accept: "application/json",
				Authorization: `Bearer ${user_token}`,
			}),
		});
		return await response.json();
	}

	// * All Product Api (Get)
	static async getProduct(user_token) {
		const response = await fetch(`${baseUrl}/product/all`, {
			method: "GET",
			headers: new Headers({
				Accept: "application/json",
				Authorization: `Bearer ${user_token}`,
			}),
		});
		return await response.json();
	}

	// * Show Product Api (GET)
	static async showProduct(user_token, id) {
		const response = await fetch(`${baseUrl}/product/${id}`, {
			method: "GET",
			headers: new Headers({
				Accept: "application/json",
				Authorization: `Bearer ${user_token}`,
			}),
		});
		return await response.json();
	}

	// * Create Product Api (POST)
	static async createProduct(user_token, data) {
		const response = await fetch(`${baseUrl}/product`, {
			method: "POST",
			headers: new Headers({
				Accept: "application/json",
				Authorization: `Bearer ${user_token}`,
			}),
			body: data,
		});
		return await response.json();
	}

	// * Update Product Api (GET)
	static async updateProduct(user_token, id, data) {
		const response = await fetch(`${baseUrl}/product/update/${id}`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				Authorization: `Bearer ${user_token}`,
			},
			body: data,
		});
		return await response.json();
	}

	// * Delete Product Api (Delete)
	static async deleteProduct(user_token, id) {
		const response = await fetch(`${baseUrl}/product/${id}`, {
			method: "DELETE",
			headers: new Headers({
				Accept: "application/json",
				Authorization: `Bearer ${user_token}`,
			}),
		});
		return await response.json();
	}

	// * Get Sales Api (GET)
	static async getSales(user_token) {
		const response = await fetch(`${baseUrl}/transaction/all`, {
			method: "GET",
			headers: new Headers({
				Accept: "application/json",
				Authorization: `Bearer ${user_token}`,
			}),
		});
		return await response.json();
	}

	// * Get Sales Api (GET)
	static async importSales(user_token, body) {
		const response = await fetch(`${baseUrl}/transaction/import`, {
			method: "POST",
			headers: new Headers({
				Accept: "application/json",
				Authorization: `Bearer ${user_token}`,
			}),
			body: body,
		});
		return await response.json();
	}

	// * Get Sales Chart Api (GET)
	static async getChartSales(user_token, body) {
		const response = await fetch(`${baseUrl}/transaction/graph`, {
			method: "GET",
			headers: new Headers({
				Accept: "application/json",
				Authorization: `Bearer ${user_token}`,
			}),
			body: body,
		});
		return await response.json();
	}
}

export default Api;
