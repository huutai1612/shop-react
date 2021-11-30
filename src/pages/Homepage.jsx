import LandingPage from '../components/layouts/LandingPage';
import RelatedSlider from '../components/layouts/RelatedSlider';

const Homepage = (props) => {
	return (
		<section className='mt-4'>
			<LandingPage />
			<RelatedSlider />
		</section>
	);
};

export default Homepage;
