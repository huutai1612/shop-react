import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = (props) => {
	return (
		<Fragment>
			<NavLink
				className={({ isActive }) =>
					isActive ? styles.active : styles.disabled
				}
				to='/'>
				Home
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive ? styles.active : styles.disabled
				}
				to='/shop'>
				Shop
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive ? styles.active : styles.disabled
				}
				to='/about'>
				About
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive ? styles.active : styles.disabled
				}
				to='/contact'>
				Contact
			</NavLink>
		</Fragment>
	);
};

export default Navigation;
