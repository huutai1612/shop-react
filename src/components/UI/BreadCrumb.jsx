const BreadCrumb = (props) => {
	return (
		<div className='my-8 py-4 bg-main '>
			<div className='container mx-auto'>{props.children}</div>
		</div>
	);
};

export default BreadCrumb;
