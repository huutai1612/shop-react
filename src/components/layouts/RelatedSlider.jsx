import RelatedCarousel from '../UI/RelatedCarousel';

const RelatedSlider = (props) => {
	return (
		<div className={`container mx-auto mt-16`}>
			<div className={`flex justify-items-start`}>
				<div className={`border-l-4 h-20 border-red-400`}></div>
				<h2 className={` ml-4 text-3xl uppercase`}>
					DISCOVER <br /> THE COLLECTIONS
				</h2>
			</div>
			<div className={`mt-8`}>
				<RelatedCarousel />
			</div>
		</div>
	);
};

export default RelatedSlider;
