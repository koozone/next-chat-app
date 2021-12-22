import Nav from '../component/nav';
import NavItem from '../component/navItem';
import Header, {Header3} from '../component/header';
import List from '../component/list';
import ListItem from '../component/listItem';

export default function list() {
	const boxList = [{}];

	return (
		<>
			<Header3 />
			<div className="divide-y divide-red-900">
				<Nav>
					<NavItem>item1</NavItem>
					<NavItem isSelect={true}>item2</NavItem>
					<NavItem>item3</NavItem>
				</Nav>
				<List>
					{boxList.map((item, index) => (
						<li key={index}>
							<ListItem item={item}>{item.content}</ListItem>
						</li>
					))}
				</List>
			</div>
		</>
	);
}
