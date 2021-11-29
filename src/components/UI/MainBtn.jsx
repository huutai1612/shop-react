const MainBtn = (props) => {
	return (
		<button
			onClick={props.onClick}
			className={`${props.className} bg-red-400 py-2 px-6 rounded-md`}>
			{props.children}
		</button>
	);
};

export default MainBtn;
