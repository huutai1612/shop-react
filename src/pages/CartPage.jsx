import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import CartTable from '../components/cart/CartTable';
import BreadCrumb from '../components/UI/BreadCrumb';
import MainBtn from '../components/UI/MainBtn';

const CartPage = (props) => {
	const totalAmount = useSelector((state) => state.totalPrice);
	const navigate = useNavigate();

	const navigateToCheckoutHandler = () => navigate('/checkout');

	return (
		<Fragment>
			<BreadCrumb>
				<NavLink className='text-red-400' to='/'>
					Home /{' '}
				</NavLink>
				<span> Cart</span>
			</BreadCrumb>
			<section className='container mx-auto my-4'>
				<CartTable />
				<div className='mt-10 grid grid-cols-3'>
					<div className='col-span-1 col-start-3 border-2 p-4 flex flex-col'>
						<div className='border-b-2 py-2'>
							<h2 className='text-right font-semibold text-xl uppercase'>
								Cart Totals
							</h2>
						</div>
						<div className='py-2 flex justify-between mt-4 border-b-2'>
							<p className='text-gray-400'>Total</p>
							<p className='text-red-400'>
								{' '}
								$ {totalAmount.toFixed(2).toLocaleString()}
							</p>
						</div>
						<div className='py-12'>
							<MainBtn
								onClick={navigateToCheckoutHandler}
								className='w-full uppercase '>
								Proceed to Checkout
							</MainBtn>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default CartPage;
