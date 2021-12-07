import { Fragment, useRef } from 'react';
import BreadCrumb from '../components/UI/BreadCrumb';
import { NavLink } from 'react-router-dom';
import LadingContact from '../components/layouts/LandingContact';
import ContactContent from '../components/footer/ContactContent';
import useInput from '../hooks/use-input';
import MainBtn from '../components/UI/MainBtn';

const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		);
};

const emailValidate = (value) => value.trim() !== '' && validateEmail(value);

const Contact = (props) => {
	const {
		changeValueHandler: emailChangeHandler,
		onBlur: emailBlurHandler,
		resetInput: resetEmail,
		isValid: isEmailValid,
		isError: isEmailError,
		enteredValue: enteredEmail,
	} = useInput(emailValidate);

	const noteRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		if (!isEmailValid) return;

		console.log(enteredEmail, noteRef.current.value);
		noteRef.current.value = '';
		resetEmail();
	};

	const emailClassName = `w-full border-2 h-10 rounded-md mt-2 pl-2 
		focus:ring-2 ring-red-400 focus:outline-none focus:border-red-400 
		${isEmailError && 'bg-red-500 text-white'}`;

	return (
		<Fragment>
			<BreadCrumb>
				<NavLink className='text-red-400' to='/'>
					Home /{' '}
				</NavLink>
				<span> Contact</span>
			</BreadCrumb>
			<LadingContact />
			<section className='container mx-auto mt-20 grid grid-cols-2 gap-4'>
				<div>
					<h2 className='text-3xl mb-4'>Our Company</h2>
					<p className='mb-4'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quo{' '}
						<br />
						quia cupiditate, dolore possimus quidem maxime, neque beatae. Fuga{' '}
						<br />
						maxime quos recusandae ratione earum atque, quam sunt dolorem illum
						dolor.
					</p>
					<ContactContent isContact={true} />
				</div>
				<div>
					<h2 className='text-3xl mb-4'>Send us an Email</h2>
					<form onSubmit={submitHandler} className='flex flex-col'>
						<input
							type='email'
							value={enteredEmail}
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
							className={emailClassName}
							placeholder='Your email'
						/>
						{isEmailError && <p className='text-red-500'>Need Valid Email</p>}
						<textarea
							className='w-full mt-2 border-2 rounded-md focus:ring-2 ring-red-400 focus:outline-none focus:border-red-400 pl-2'
							placeholder='Writes your note here....'
							name='note'
							ref={noteRef}
							id='note'
							cols='30'
							rows='5'></textarea>
						<MainBtn className='mt-8'>Send Us Message</MainBtn>
					</form>
				</div>
			</section>
		</Fragment>
	);
};

export default Contact;
