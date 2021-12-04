import useInput from '../../hooks/use-input';
import MainBtn from '../UI/MainBtn';

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		);
};

const isNotEmpty = (value) => value.trim() !== '';
const emailValidate = (value) => value.trim() !== '' && validateEmail(value);

const FormCheckout = (props) => {
	const {
		changeValueHandler: firstNameChangeHandler,
		onBlur: firstNameBlurHandler,
		resetInput: resetFirstName,
		isValid: isFirstNameValid,
		isError: isFirstNameError,
		enteredValue: enteredFirstName,
	} = useInput(isNotEmpty);

	const {
		changeValueHandler: lastNameChangeHandler,
		onBlur: lastNameBlurHandler,
		resetInput: resetLastName,
		isValid: isLastNameValid,
		isError: isLastNameError,
		enteredValue: enteredLastName,
	} = useInput(isNotEmpty);

	const {
		changeValueHandler: addressChangeHandler,
		onBlur: addressBlurHandler,
		resetInput: resetAddress,
		isValid: isAddressValid,
		isError: isAddressError,
		enteredValue: enteredAddress,
	} = useInput(isNotEmpty);

	const {
		changeValueHandler: stateChangeHandler,
		onBlur: stateBlurHandler,
		resetInput: resetState,
		isValid: isStateValid,
		isError: isStateError,
		enteredValue: enteredState,
	} = useInput(isNotEmpty);

	const {
		changeValueHandler: countryChangeHandler,
		onBlur: countryBlurHandler,
		resetInput: resetCountry,
		isValid: isCountryValid,
		isError: isCountryError,
		enteredValue: enteredCountry,
	} = useInput(isNotEmpty);

	const {
		changeValueHandler: emailChangeHandler,
		onBlur: emailBlurHandler,
		resetInput: resetEmail,
		isValid: isEmailValid,
		isError: isEmailError,
		enteredValue: enteredEmail,
	} = useInput(emailValidate);

	const {
		changeValueHandler: phoneChangeHandler,
		onBlur: phoneBlurHandler,
		resetInput: resetPhone,
		isValid: isPhoneValid,
		isError: isPhoneError,
		enteredValue: enteredPhone,
	} = useInput(isNotEmpty);

	const firstNameClassName = `w-full border-2 h-10 rounded-md mt-2 pl-2 
		focus:ring-2 ring-red-400 focus:outline-none focus:border-red-400 
		${isFirstNameError && 'bg-red-500 text-white'}`;

	const lastNameClassName = `w-full border-2 h-10 rounded-md mt-2 pl-2 
		focus:ring-2 ring-red-400 focus:outline-none focus:border-red-400 
		${isLastNameError && 'bg-red-500 text-white'}`;

	const addressClassName = `w-full border-2 h-10 rounded-md mt-2 pl-2 
		focus:ring-2 ring-red-400 focus:outline-none focus:border-red-400 
		${isAddressError && 'bg-red-500 text-white'}`;

	const stateClassName = `w-full border-2 h-10 rounded-md mt-2 pl-2 
		focus:ring-2 ring-red-400 focus:outline-none focus:border-red-400 
		${isStateError && 'bg-red-500 text-white'}`;

	const countryClassName = `w-full border-2 h-10 rounded-md mt-2 pl-2 
		focus:ring-2 ring-red-400 focus:outline-none focus:border-red-400 
		${isCountryError && 'bg-red-500 text-white'}`;

	const emailClassName = `w-full border-2 h-10 rounded-md mt-2 pl-2 
		focus:ring-2 ring-red-400 focus:outline-none focus:border-red-400 
		${isEmailError && 'bg-red-500 text-white'}`;

	const phoneClassName = `w-full border-2 h-10 rounded-md mt-2 pl-2 
		focus:ring-2 ring-red-400 focus:outline-none focus:border-red-400
		${isPhoneError && 'bg-red-500 text-white'}`;

	const resetInput = () => {
		resetAddress();
		resetCountry();
		resetEmail();
		resetFirstName();
		resetLastName();
		resetPhone();
		resetState();
	};

	const isValid =
		isFirstNameValid &&
		isLastNameValid &&
		isAddressValid &&
		isStateValid & isCountryValid &&
		isEmailValid &&
		isPhoneValid;

	const submitHandler = (event) => {
		event.preventDefault();
		if (!isValid) return;
		console.log(123);
	};

	return (
		<form onSubmit={submitHandler} className='border-2 sm:p-4 lg:p-12'>
			<div className='grid grid-cols-2 gap-4'>
				<div>
					<label className='text-gray-900' htmlFor='firstName'>
						<span className='text-red-400 text-xl'> * </span>
						First Name
					</label>
					<input
						type='text'
						value={enteredFirstName}
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
						className={firstNameClassName}
					/>
					{isFirstNameError && (
						<p className='text-red-500'>Need Valid First Name</p>
					)}
				</div>
				<div>
					<label className='text-gray-900' htmlFor='lastName'>
						<span className='text-red-500 text-xl'> * </span>
						Last Name
					</label>
					<input
						type='text'
						value={enteredLastName}
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
						className={lastNameClassName}
					/>
					{isLastNameError && (
						<p className='text-red-500'>Need Valid LastName</p>
					)}
				</div>
			</div>
			<div className='mt-4'>
				<label className='text-gray-900' htmlFor='address'>
					<span className='text-red-500 text-xl'> * </span>
					Address
				</label>
				<input
					type='text'
					value={enteredAddress}
					onChange={addressChangeHandler}
					onBlur={addressBlurHandler}
					className={addressClassName}
				/>
				{isAddressError && <p className='text-red-500'>Need Valid Address</p>}
			</div>
			<div className='grid grid-cols-2 gap-4 mt-4'>
				<div>
					<label className='text-gray-900' htmlFor='state'>
						<span className='text-red-500 text-xl'> * </span>
						State
					</label>
					<input
						type='text'
						value={enteredState}
						onChange={stateChangeHandler}
						onBlur={stateBlurHandler}
						className={stateClassName}
					/>
					{isStateError && <p className='text-red-500'>Need Valid State</p>}
				</div>
				<div>
					<label className='text-gray-900' htmlFor='country'>
						<span className='text-red-500 text-xl'> * </span>
						Country
					</label>
					<input
						type='text'
						value={enteredCountry}
						onChange={countryChangeHandler}
						onBlur={countryBlurHandler}
						className={countryClassName}
					/>
					{isCountryError && <p className='text-red-500'>Need Valid Country</p>}
				</div>
			</div>
			<div className='grid grid-cols-2 gap-4 mt-4'>
				<div>
					<label className='text-gray-900' htmlFor='email'>
						<span className='text-red-500 text-xl'> * </span>
						Email
					</label>
					<input
						type='text'
						value={enteredEmail}
						onChange={emailChangeHandler}
						onBlur={emailBlurHandler}
						className={emailClassName}
					/>
					{isEmailError && <p className='text-red-500'>Need Valid Email</p>}
				</div>
				<div>
					<label className='text-gray-900' htmlFor='phone'>
						<span className='text-red-500 text-xl'> * </span>
						Phone
					</label>
					<input
						type='text'
						placeholder='Phone Number'
						value={enteredPhone}
						onChange={phoneChangeHandler}
						onBlur={phoneBlurHandler}
						className={phoneClassName}
					/>
					{isPhoneError && <p className='text-red-500'>Need Valid Phone</p>}
				</div>
			</div>
			<div className='mt-4'>
				<label className='text-gray-900' htmlFor='phone'>
					Order Note
				</label>
				<textarea
					className='w-full mt-2 border-2 rounded-md focus:ring-2 ring-red-400 focus:outline-none focus:border-red-400 pl-2'
					name='note'
					id='note'
					cols='30'
					rows='5'></textarea>
			</div>
			<div className='mt-4'>
				<MainBtn className='w-full'>Place Order</MainBtn>
			</div>
		</form>
	);
};

export default FormCheckout;
