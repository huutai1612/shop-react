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

						// style={{background: `url('${item.image}') no-repeat left 10%`,	}}
					>
						<div className='grid grid-cols-8'>
							<img
								className='object-contain w-full col-span-6'
								src={item.image}
								alt={item.title}
							/>
							<ShopBtn className='col-span-2 20 h-10 leading-10 mt-32 text-center'>
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
