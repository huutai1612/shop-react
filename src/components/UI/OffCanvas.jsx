import { CSSTransition } from 'react-transition-group';
import { TiDeleteOutline } from 'react-icons/all';
import styles from './OffCanvas.module.css';

const OffCanvas = (props) => {
	console.log(props.className);
	return (
		<CSSTransition
			in={props.show}
			timeout={2000}
			unmountOnExit
			mountOnEnter
			classNames={{
				enter: styles.open,
				exit: styles.close,
			}}>
			<div
				className={`fixed right-0 top-0 lg:hidden flex-col sm:flex  
          sm:w-80 h-screen z-10 shadow-xl bg-white
      `}>
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
