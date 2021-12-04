import { useState } from 'react';

const useInput = (validate) => {
	const [isBlur, setIsBlur] = useState(false);
	const [enteredValue, setEnteredValue] = useState('');

	const changeValueHandler = (event) => setEnteredValue(event.target.value);

	const onBlur = () => setIsBlur(true);

	const resetInput = () => {
		setIsBlur(false);
		setEnteredValue('');
	};

	const isValid = validate(enteredValue);
	const isError = isBlur && !isValid;

	return {
		changeValueHandler,
		onBlur,
		resetInput,
		isValid,
		isError,
		enteredValue,
	};
};

export default useInput;
