import {
	FiMapPin,
	BsFillTelephoneFill,
	AiOutlineMail,
	BsFillInfoSquareFill,
	AiFillLike,
} from 'react-icons/all';
import MainBtn from '../UI/MainBtn';

const FooterContent = (props) => {
	const submitHandler = (event) => {
		event.preventDefault();
	};

	return (
		<div className='col-span-4 '>
			<div className='flex flex-col'>
				<div className='mt-3 flex items-center'>
					<BsFillInfoSquareFill className='text-2xl' />
					<h2 className='text-xl ml-2 font-semibold uppercase'>Contact Info</h2>
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
						<h2 className='text-xl ml-2 font-semibold uppercase '>Subscribe</h2>
					</div>
					<form onSubmit={submitHandler} className='relative w-3/4'>
						<input
							className={`py-3 pl-6 relative left-0 w-full text-red-400 rounded-md 
								focus:outline-none focus:ring-4 focus:ring-gray-300 focus:border-transparent`}
							type='email'
							placeholder='Email'></input>
						<MainBtn className='absolute top-1 right-1 text-white'>
							Send
						</MainBtn>
					</form>
				</div>
			</div>
		</div>
	);
};

export default FooterContent;
