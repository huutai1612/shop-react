import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import ShopBtn from './ShopBtn';

const slides = [
	{
		title: 'Woman',
		image: 'https://technext.github.io/shopmax/images/model_6.png',
	},
	{
		title: 'Man',
		image: 'https://technext.github.io/shopmax/images/model_5.png',
	},
];

const RelatedCarousel = (props) => {
	return (
		<div>
			<Slider>
				{slides.map((item, index) => (
					<div
						key={index}
						className='flex justify-end items-end pb-8 relative'
						// style={{background: `url('${item.image}') no-repeat left 10%`,	}}
					>
						<div>
							<img
								className='object-contain w-4/6'
								src={item.image}
								alt={item.title}
							/>
							<ShopBtn className='absolute top-1/2 right-4 mt-8 px-4 py-2 text-2xl'>
								{item.title}
							</ShopBtn>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default RelatedCarousel;
