import React, { useEffect } from "react";

const Index = () => {
	useEffect(() => {
		console.log("index dashboard loaded");
		return () => {
			console.log("component dashboard unmount");
		};
	});
	return <div>dashboard page</div>;
};

export default Index;
