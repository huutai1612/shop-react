import React from 'react';
import ContactContent from './ContactContent';
import FooterMap from './FooterMap';

const Footer = (props) => {
	return (
		<footer className='bg-main mt-16 py-16'>
			<div className='container mx-auto grid grid-cols-12 gap-10 text-red-400'>
				<FooterMap />
				<ContactContent />
			</div>
		</footer>
	);
};

export default React.memo(Footer);
