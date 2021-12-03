import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import FormCheckout from '../components/form/FormCheckout';
import BreadCrumb from '../components/UI/BreadCrumb';

const CheckoutPage = (props) => {
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
				<div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4'>
					<h1>
						<FormCheckout />
					</h1>
					<h1>Test</h1>
				</div>
			</section>
		</Fragment>
	);
};

export default CheckoutPage;
