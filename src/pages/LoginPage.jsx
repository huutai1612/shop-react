import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Login.module.css';
import MainBtn from '../components/UI/MainBtn';
import useInput from '../hooks/use-input';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setToken } from '../store/tokenSlice';
import { useNavigate } from 'react-router';

const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBc5VF87x1-LlW-8eUc7mumG29o9rbx1rA`;
const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBc5VF87x1-LlW-8eUc7mumG29o9rbx1rA`;

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		);
};

const isGreater6 = (value) => value.trim().length > 6;

const LoginPage = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const {
		changeValueHandler: emailChangeHandler,
		onBlur: emailBlurHandler,
		resetInput: resetEmail,
		isValid: isEmailValid,
		isError: isEmailError,
		enteredValue: enteredEmail,
	} = useInput(validateEmail);
	const {
		changeValueHandler: passwordChangeHandler,
		onBlur: passwordBlurHandler,
		resetInput: resetPassword,
		isValid: isPasswordValid,
		isError: isPasswordError,
		enteredValue: enteredPassword,
	} = useInput(isGreater6);

	const dispatch = useDispatch();

	const emailClassName = `w-full border-2 h-12 rounded-md mt-2 pl-2 
		focus:ring-2 ring-red-400 focus:outline-none focus:border-red-400 
		${isEmailError && 'bg-red-500 text-white'}`;

	const passwordClassName = `w-full border-2 h-12 rounded-md mt-2 pl-2 
		focus:ring-2 ring-red-400 focus:outline-none focus:border-red-400 
		${isPasswordError && 'bg-red-500 text-white'}`;

	const resetInput = () => {
		resetEmail();
		resetPassword();
	};

	const isValid = isEmailValid && isPasswordValid;
	const navigate = useNavigate();

	const data = {
		email: enteredEmail,
		password: enteredPassword,
		returnSecureToken: false,
	};
	const option = {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const submitHandler = (event) => {
		event.preventDefault();
		try {
			if (!isValid) throw new Error('Please enter valid Email Or Password');

			if (isLoggedIn) {
				fetch(SIGN_IN_URL, option)
					.then((response) => response.json())
					.then((data) => {
						if (data.error) {
							toast.error(data.error.message);
							return;
						} else {
							toast.success('Successfully Login');
							dispatch(setToken(data.idToken));
							navigate('/');
						}
					})
					.then(resetInput)
					.catch((error) => toast.error(error));
			} else {
				fetch(SIGN_UP_URL, option)
					.then((response) => response.json())
					.then((data) => {
						if (data.error) {
							toast.error(data.error.message);
							return;
						} else {
							toast.success('Success Sign up Account Please Login');
							setIsLoggedIn(true);
						}
					})
					.then(resetInput)
					.catch((error) => toast.error(error));
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<Fragment>
			{ReactDOM.createPortal(
				<ToastContainer
					position='top-right'
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					limit={2}
				/>,
				document.getElementById('toast'),
			)}
			<section className='py-20'>
				<div
					className={`${styles.login} flex flex-col items-center shadow-xl py-4 border-2 border-red-400 rounded-lg`}>
					<h1 className='text-3xl text-red-400 py-8 border-b-2 border-red-400'>
						{isLoggedIn ? 'Login To Your Account' : 'Sign Up Your Account'}
					</h1>
					<form onSubmit={submitHandler} className='mt-8 w-full px-6'>
						<div className='flex justify-between items-center'>
							<label htmlFor='email' className='text-red-400'>
								Email :
							</label>
							<div className='w-3/4'>
								<input
									type='email'
									value={enteredEmail}
									onChange={emailChangeHandler}
									onBlur={emailBlurHandler}
									className={emailClassName}
								/>
								{isEmailError && (
									<p className='text-red-500'>Need valid Email</p>
								)}
							</div>
						</div>
						<div className='flex justify-between items-center mt-4'>
							<label htmlFor='password' className='text-red-400'>
								Password :
							</label>
							<div className='w-3/4'>
								<input
									type='password'
									value={enteredPassword}
									onChange={passwordChangeHandler}
									onBlur={passwordBlurHandler}
									className={passwordClassName}
								/>
								{isPasswordError && (
									<p className='text-red-500'>
										Password must have length greater than 6
									</p>
								)}
							</div>
						</div>
						<div className='mt-4 flex item-center'>
							<h2
								onClick={() => setIsLoggedIn((prevState) => !prevState)}
								className='text-xl text-blue-400 cursor-pointer hover:text-red-400 border-b-2 hover:border-red-400'>
								Click Here
							</h2>
							<p className='text-xl ml-2'>
								{isLoggedIn
									? `if you don't have Account`
									: `to Log In If You have account`}
							</p>
						</div>
						<div className='flex justify-end mt-4'>
							<MainBtn>{isLoggedIn ? 'Login' : 'Sign Up'}</MainBtn>
						</div>
					</form>
				</div>
			</section>
		</Fragment>
	);
};

export default LoginPage;
