import {
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
} from "@chakra-ui/number-input";
import React from "react";

const InputNumber = ({ styles, ...attrs }) => {
	return (
		<NumberInput {...attrs}>
			<NumberInputField style={styles} />
			<NumberInputStepper>
				<NumberIncrementStepper />
				<NumberDecrementStepper />
			</NumberInputStepper>
		</NumberInput>
	);
};

export default InputNumber;
