export const serviceLocalStorage = (key, value = null) => {
	if (value === "remove") {
		localStorage.removeItem(key);
	} else if (value !== null) {
		localStorage.setItem(key, value);
	} else {
		return localStorage.getItem(key, value);
	}
};

export const rupiahFormat = (number) => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	}).format(number);
};

export const generateSKU = () => {
	return (Math.random() + 1).toString(32).substring(7);
};
