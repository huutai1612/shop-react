import {
	FiMapPin,
	BsFillTelephoneFill,
	AiOutlineMail,
	BsFillInfoSquareFill,
	AiFillLike,
} from 'react-icons/all';
import MainBtn from '../UI/MainBtn';

const Footer = (props) => {
	const submitHandler = (event) => {
		event.preventDefault();
	};

	return (
		<footer className='bg-red-400 mt-16 py-16'>
			<div className='container mx-auto grid grid-cols-12 gap-10 text-white'>
				<div className='col-span-8'>
					<iframe
						className='rounded-md'
						title='address'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5372849377895!2d106.68898511524102!3d10.77009976225441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3da9ade37d%3A0x34d5d89414b37f23!2zMTAwIE5ndXnhu4VuIFRyw6NpLCBQaMaw4budbmcgUGjhuqFtIE5nxakgTMOjbywgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1638175044190!5m2!1sen!2s'
						height='450'
						style={{ border: 0 }}
						loading='lazy'></iframe>
				</div>
				<div className='col-span-4'>
					<div className='flex flex-col'>
						<div className='mt-3 flex items-center'>
							<BsFillInfoSquareFill className='text-2xl' />
							<h2 className='text-xl ml-2 font-semibold uppercase'>
								Contact Info
							</h2>
						</div>
						<div className='mt-3 flex items-center'>
							<FiMapPin className='text-2xl' />
							<h2 className='text-lg ml-2'>
								100 Nguyễn Trãi <br /> Phường Phạm Ngũ Lão
								<br /> Quận 1 <br /> Thành phố Hồ Chí Minh At this address
							</h2>
						</div>
						<div className='mt-3 flex items-center'>
							<BsFillTelephoneFill className='text-2xl' />
							<h2 className='text-lg ml-2'>+2 392 3929 210</h2>
						</div>
						<div className='mt-3 flex items-center'>
							<AiOutlineMail className='text-2xl' />
							<h2 className='text-lg ml-2'>emailaddress@domain.com</h2>
						</div>
						<div className='mt-3 '>
							<div className='mb-3 flex items-center'>
								<AiFillLike className='text-2xl' />
								<h2 className='text-xl ml-2 font-semibold uppercase '>
									Subscribe
								</h2>
							</div>
							<form onSubmit={submitHandler} className='relative w-3/4'>
								<input
									className={`py-3 pl-6 relative left-0 w-full text-red-400 rounded-md 
								focus:outline-none focus:ring-4 focus:ring-gray-300 focus:border-transparent`}
									type='email'
									placeholder='Email'></input>
								<MainBtn className='absolute top-1 right-1 '>Send</MainBtn>
							</form>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
