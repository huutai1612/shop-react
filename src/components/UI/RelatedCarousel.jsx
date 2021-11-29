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
			<Slider infinite={true} autoplay={2000}>
				{slides.map((item, index) => (
					<div
						key={index}
						className='flex justify-end items-end'
						style={{
							background: `url('${item.image}') no-repeat -300% 10%`,
						}}>
						<div>
							<ShopBtn>{item.title}</ShopBtn>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default RelatedCarousel;
