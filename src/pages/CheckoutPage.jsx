import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import FormCheckout from '../components/form/FormCheckout';
import BreadCrumb from '../components/UI/BreadCrumb';
import CartList from '../components/cart/CartList';

const CheckoutPage = (props) => {
	const checkoutHandler = (event, userInfo, isValid, resetInput) => {
		console.log(userInfo, isValid, resetInput);
	};

	return (
		<Fragment>
			<BreadCrumb>
				<NavLink to='/' className='text-red-400'>
					Home /&nbsp;
				</NavLink>
				<NavLink to='/cart' className='text-red-400'>
					Cart /&nbsp;
				</NavLink>
				<span>Checkout</span>
			</BreadCrumb>
			<section className='container mx-auto my-4'>
				<div className='border-2 p-4 text-gray-400 mb-8'>
					<p>
						Returning Customer ?{' '}
						<NavLink className='text-red-400' to='/login'>
							Click here{' '}
						</NavLink>
						to login
					</p>
				</div>
				<div className='grid md:grid-cols-2 sm:grid-cols-1 gap-8'>
					<div>
						<h2 className='font-semibold mb-4 text-2xl uppercase'>
							Your Order
						</h2>
						<div className='border-2 sm:p-4 lg:p-12'>
							<CartList isCheckout={true} />
						</div>
					</div>
					<div>
						<h2 className='font-semibold mb-4 text-2xl uppercase'>
							Billing Details
						</h2>
						<FormCheckout checkout={checkoutHandler} />
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default CheckoutPage;
