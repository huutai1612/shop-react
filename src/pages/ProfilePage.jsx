import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { toast, ToastContainer } from 'react-toastify';
import styles from './Login.module.css';
import 'react-toastify/dist/ReactToastify.css';
import MainBtn from '../components/UI/MainBtn';
import useInput from '../hooks/use-input';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeToken } from '../store/tokenSlice';
import { useNavigate } from 'react-router';

const isGreater6 = (value) => value.trim().length > 6;
const PASSWORD_CHANGE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBc5VF87x1-LlW-8eUc7mumG29o9rbx1rA`;

const ProfilePage = (props) => {
	const idToken = useSelector((state) => state.token.token);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {
		changeValueHandler: passwordChangeHandler,
		onBlur: passwordBlurHandler,
		resetInput: resetPassword,
		isValid: isPasswordValid,
		isError: isPasswordError,
		enteredValue: enteredPassword,
	} = useInput(isGreater6);

	const passwordClassName = `w-full border-2 h-12 rounded-md mt-2 pl-2 
		focus:ring-2 ring-red-400 focus:outline-none focus:border-red-400 
		${isPasswordError && 'bg-red-500 text-white'}`;

	const submitHandler = (event) => {
		event.preventDefault();
		try {
			if (!isPasswordValid) throw new Error('Invalid password');
			const data = {
				idToken,
				password: enteredPassword,
				returnSecureToken: false,
			};

			const option = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			};
			fetch(PASSWORD_CHANGE_URL, option)
				.then((res) => res.json())
				.then((data) => {
					if (data.error) {
						toast.error(data.error.message);
						return;
					}
					toast.success('Successfully Changed Password Please Login again');
					dispatch(removeToken());
					setTimeout(() => {
						navigate('/login');
					}, 2000);
				})
				.catch((error) => toast.error(error.message));
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
						Change Your Password
					</h1>
					<form onSubmit={submitHandler} className='mt-8 w-full px-6'>
						<div className='flex justify-between items-center mt-4'>
							<label htmlFor='password' className='text-red-400'>
								New Password :
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
						<div className='flex justify-end mt-4'>
							<MainBtn>Change Your PassWord</MainBtn>
						</div>
					</form>
				</div>
			</section>
		</Fragment>
	);
};

export default ProfilePage;
