import ItemInShop from './ItemInShop';

export const DUMMY_ITEM = [
	{
		id: 'm1',
		title: 'i1',
		price: 200,
		description: 'Some Description',
		image:
			'https://sakurafashion.vn/upload/images_294/69118708_2762636780423259_3359439349241348096_n.jpg',
	},
	{
		id: 'm2',
		title: 'i2',
		description: 'Some Description',
		price: 300,
		image:
			'https://360boutique.vn/wp-content/uploads/2018/08/5-xu-huong-thoi-trang-nam-khong-the-bo-lo-trong-nam-nay-hinh-anh-1.jpg',
	},
	{
		id: 'm3',
		title: 'i3',
		description: 'Some Description',
		price: 250,
		image:
			'https://file.hstatic.net/200000053174/file/ban-nen-luu-y-khong-cai-cuc-cuoi-cung-cua-vest-blazer_d4d63a938a84436482a5b4d85e269432.jpg',
	},
];

const ShopItem = (props) => {
	const product = DUMMY_ITEM.map((product) => (
		<ItemInShop
			key={product.id}
			id={product.id}
			title={product.title}
			price={product.price}
			image={product.image}
		/>
	));

	return (
		<div className='cols-start-4 col-span-9 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
			{product}
		</div>
	);
};

export default ShopItem;
