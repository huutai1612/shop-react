const FooterMap = (props) => {
	return (
		<div className='col-span-8'>
			<iframe
				className='rounded-md'
				title='address'
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5372849377895!2d106.68898511524102!3d10.77009976225441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3da9ade37d%3A0x34d5d89414b37f23!2zMTAwIE5ndXnhu4VuIFRyw6NpLCBQaMaw4budbmcgUGjhuqFtIE5nxakgTMOjbywgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1638175044190!5m2!1sen!2s'
				height='380'
				style={{ border: 0 }}
				loading='lazy'></iframe>
		</div>
	);
};

export default FooterMap;
