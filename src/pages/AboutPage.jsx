import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import LandingAboutUs from '../components/layouts/LandingAboutUs';
import BreadCrumb from '../components/UI/BreadCrumb';
import Card from '../components/UI/Card';

const About = (props) => {
	return (
		<Fragment>
			<BreadCrumb>
				<NavLink className='text-red-400' to='/'>
					Home /{' '}
				</NavLink>
				<span> About us</span>
			</BreadCrumb>
			<LandingAboutUs />
			<section className='container mx-auto mt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				<Card className='p-4'>
					<img
						className='object-contain'
						src='https://demo.themefisher.com/adrian/images/about/about-1.jpg'
						alt='mission'
					/>
					<h2 className='text-2xl font-semibold mt-4'>Our Mission</h2>
					<p className='text-lg'>
						Praesent blandit dolorhon quam. In vemi sit amet augue congue
						elementum. Morbi in ipsum sit amet pede facilisis laoreet.
					</p>
				</Card>
				<Card className='p-4'>
					<img
						className='object-contain'
						src='https://demo.themefisher.com/adrian/images/about/about-3.jpg'
						alt='vision'
					/>
					<h2 className='text-2xl font-semibold mt-4'>Our Vision</h2>
					<p className='text-lg'>
						Lights together to you’re together. You’ll. Form. Moving created
						one. Darkness whales fourth from own moved.
					</p>
				</Card>
				<Card className='p-4'>
					<img
						className='object-contain'
						src='https://demo.themefisher.com/adrian/images/about/about-2.jpg'
						alt='statement'
					/>
					<h2 className='text-2xl font-semibold mt-4'>Statement</h2>
					<p className='text-lg'>
						Praesent blandit dolorhon quam. In vemi sit amet augue congue
						elementum. Morbi in ipsum sit amet pede facilisis laoreet.
					</p>
				</Card>
			</section>
		</Fragment>
	);
};

export default About;
