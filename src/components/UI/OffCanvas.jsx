import { CSSTransition } from 'react-transition-group';
import { TiDeleteOutline } from 'react-icons/all';
import styles from './OffCanvas.module.css';

const timing = {
	enter: 500,
	exit: 1000,
};

const OffCanvas = (props) => {
	const hiddenClasses = props.tittle === 'Menu' ? 'lg:hidden' : '';
	return (
		<CSSTransition
			in={props.show}
			timeout={timing}
			unmountOnExit
			classNames={{
				enter: '',
				enterActive: styles.open,
				exit: styles.close,
			}}>
			<div
				className={`fixed right-0 top-0 flex-col sm:flex
					sm:w-80 h-screen z-10 shadow-xl bg-white
					${hiddenClasses}`}>
				<div className='flex justify-around items-center mt-5'>
					<TiDeleteOutline
						onClick={props.close}
						className='text-5xl cursor-pointer hover:text-red-400'
					/>
					<h2 className='text-2xl text-red-400 ml-24'>{props.title}</h2>
				</div>
				<div className={props.className}>{props.children}</div>
			</div>
		</CSSTransition>
	);
};

export default OffCanvas;
