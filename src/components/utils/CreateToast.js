const CreateToast = (toast, status, message) => {
	return toast({
		status,
		description: message,
		duration: 3000,
		isClosable: true,
	});
};

export default CreateToast;
