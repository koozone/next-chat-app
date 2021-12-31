import Nav from '../component/nav';
import NavItem from '../component/navItem';
import Header from '../component/header';
import List from '../component/list';
import ListItem from '../component/listItem';
import {useEffect, useState} from 'react';

export default function list() {
	const [movieList, setMovieList] = useState([]);

	useEffect(() => {
		fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
			.then((res) => res.json())
			.then((res) => {
				console.log(res?.data?.movies);
				setMovieList(res?.data?.movies);
			});
	}, []);

	return (
		<>
			<Header />

			<div className="">
				<Nav>
					<NavItem>item1</NavItem>
					<NavItem isSelect={true}>item2</NavItem>
					<NavItem>item3</NavItem>
				</Nav>
				<div className="mx-auto w-auto h-[600px] overflow-auto border-2 rounded-lg border-red-500 bg-lime-50">
					<List>
						{movieList.map((item, index) => (
							<li key={index}>
								<ListItem movie={item}></ListItem>
							</li>
						))}
					</List>
				</div>
			</div>
		</>
	);
}
