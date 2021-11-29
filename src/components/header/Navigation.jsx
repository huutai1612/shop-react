import { Fragment } from 'react';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
	return (
		<Fragment>
			<NavLink
				className={(isActive) =>
					`${styles.nav} ${isActive ? styles.active : styles.disabled}`
				}
				to='/'>
				Home
			</NavLink>
			<NavLink
				className={(isActive) =>
					`${styles.nav} ${isActive ? styles.active : styles.disabled}`
				}
				to='/shop'>
				Shop
			</NavLink>
			<NavLink
				className={(isActive) =>
					`${styles.nav} ${isActive ? styles.active : styles.disabled}`
				}
				to='/about'>
				About
			</NavLink>
			<NavLink
				className={(isActive) =>
					`${styles.nav} ${isActive ? styles.active : styles.disabled}`
				}
				to='/contact'>
				Contact
			</NavLink>
		</Fragment>
	);
};

export default Navigation;
