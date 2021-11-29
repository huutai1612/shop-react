import FooterContent from './FooterContent';
import FooterMap from './FooterMap';

const Footer = (props) => {
	return (
		<footer className='bg-red-400 mt-16 py-16'>
			<div className='container mx-auto grid grid-cols-12 gap-10 text-white'>
				<FooterMap />
				<FooterContent />
			</div>
		</footer>
	);
};

export default Footer;
