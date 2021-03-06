import React from 'react';

const cardList = [
	{
		src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		alt: "Front of men's Basic Tee in black.",
		value: 'Basic Tee',
		label: 'Basic Tee',
		tag: 'Black',
		price: '$15',
	},
	{
		src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
		alt: "Front of men's Basic Tee in white.",
		value: 'Basic Tee',
		label: 'Basic Tee',
		tag: 'Aspen White',
		price: '$25',
	},
	{
		src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
		alt: "Front of men's Basic Tee in dark gray.",
		value: 'Basic Tee',
		label: 'Basic Tee',
		tag: 'Charcoal',
		price: '$35',
	},
	{
		src: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
		alt: "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
		value: 'Artwork Tee',
		label: 'Artwork Tee',
		tag: 'Iso Dots',
		price: '$45',
	},
];

export const CardItem = (props) => {
	const {label, tag, price, src, alt} = props;

	return (
		<div className="group relative">
			<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
				<img src={src} alt={alt} className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					<h3 className="text-sm text-gray-700">
						<a href="#">
							<span aria-hidden="true" className="absolute inset-0"></span>
							{label}
						</a>
					</h3>
					<p className="mt-1 text-sm text-gray-500">{tag}</p>
				</div>
				<p className="text-sm font-medium text-gray-900">{price}</p>
			</div>
		</div>
	);
};

export const Dress = () => {
	return (
		// <body className="antialiased font-sans bg-gray-200 overflow-hidden">
		// <div className="" style="">
		<div className="bg-white">
			<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

				<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{cardList.map((item, index) => (
						<CardItem key={index} {...item} />
					))}
				</div>
			</div>
		</div>
		// </div>
		// </body>
	);
};

export default Dress;
