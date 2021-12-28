import Link from 'next/link';
import {useDog} from '../hook/useDog';
import {ImageA} from './button';
import {Toggle} from './toggle';

export const BoxItem2 = () => {
	return (
		<Link href="#">
			<a
				href="/new"
				className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-sm leading-6 text-gray-900 font-medium py-3"
			>
				<i className="bx bx-bookmark-plus text-4xl group-hover:text-blue-500 mb-1 text-gray-400" />
				New project
			</a>
		</Link>
	);
};

export const BoxItem = ({children, item = {}}) => {
	const [imageList, imageRefresh] = useDog({count: 1 + Math.round(Math.random() * 4)});
	const {href = '#', icon, isSelect = false} = item;
	const css = isSelect ? 'bg-sky-300 text-white' : 'bg-gray-50 hover:text-red-900';

	return (
		<Link href={href}>
			<a className="block hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-gray-200 shadow-sm flex justify-between items-center">
				<dl className="flex-auto grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
					<div>
						<dt className="sr-only">Title</dt>
						<dd className="group-hover:text-white font-semibold text-gray-900">
							{item.title}
						</dd>
					</div>
					<div>
						<dt className="sr-only">Category</dt>
						<dd className="group-hover:text-blue-200">{item.category}</dd>
					</div>
					<div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
						<dt className="sr-only">Users</dt>
						<dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
							{imageList.map((item, index) => (
								<img
									key={index}
									src={item.src}
									alt=""
									className="w-8 h-8 object-cover rounded-full bg-gray-100 ring-2 ring-white"
									loading="lazy"
								/>
							))}
						</dd>
					</div>
				</dl>
				<div className="ml-5">
					<Toggle />
				</div>
			</a>
		</Link>
	);
};

export default BoxItem;
