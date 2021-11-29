import RelatedCarousel from '../UI/RelatedCarousel';

const RelatedSlider = (props) => {
	return (
		<div className={`container mx-auto mt-16`}>
			<div className={`flex flex-col items-center`}>
				<h2 className={`text-center text-3xl uppercase`}>Related Product</h2>
				<div className={`border-b-4 w-1/4 mt-2 border-red-400`}></div>
			</div>
			<div className={`mt-8`}>
				<RelatedCarousel />
			</div>
		</div>
	);
};

export default RelatedSlider;
