import {useEffect, useRef} from 'react';
import Header, {Header1, Header2, Header3} from '../component/header';
import {ButtonNormal, Fieldset, Group, Item, Item2, ToggleCheckbox, ToggleRadio, ToggleSwitch, ToggleNormal, Chip, Highlight} from '../component/temp_ds';
import {Icon, A, Button, Img, Input, Label, Text, Basket, Toggle, Box} from '../component/ui_ds4';
import {UseCount} from '../hook/useCount';
import {UseData} from '../hook/useData';
import {UseModal} from '../hook/useModal';
import {UseSideMenu} from '../hook/useSideMenu';
import ChipSample from './chipSample';
import Todo from './todo';

// const Fieldset = ({children, title}) => {
// 	return (
// 		<fieldset className="m-3 p-3 space-y-2 border-[1px] border-slate-400 rounded-lg bg-black/5">
// 			<legend>
// 				<span className="p-2 text-xl text-black/80 font-semibold">{title}</span>
// 			</legend>
// 			{children}
// 		</fieldset>
// 	);
// };
// const Group = ({children}) => {
// 	return <div className="space-x-2">{children}</div>;
// };

// const Item2 = (props) => {
// 	const {value, data, changeRadio} = props;

// 	return (
// 		<Toggle deco="basket-default" team="align" name={value} checked={data.align.includes(value)} onChange={changeRadio}>
// 			<Box deco="box-item" />
// 			<Icon deco="font-warning">{`bx-align-${value}`}</Icon>
// 			<Text deco="font-default">{value}</Text>
// 		</Toggle>
// 	);
// };

// const Item = (props) => {
// 	const {value, data, changeRadio} = props;

// 	return (
// 		<Toggle deco="basket-list-col" team="align" name={value} checked={data.align.includes(value)} onChange={changeRadio}>
// 			<Box deco="box-list-col" />
// 			<Icon deco="font-warning">{`bx-align-${value}`}</Icon>
// 			<Text deco="font-default">{value}</Text>
// 		</Toggle>
// 	);
// };

// const ButtonPrimary = (props) => {
// 	const {children, className, icon, iconR, text, team, name, onClick, onChange, checked, disabled} = props;

// 	return (
// 		<Button deco="basket-default box-primary" className={className} name={name} onClick={onClick} checked={checked} disabled={disabled}>
// 			<Icon deco="font-default" className="text-lg mr-2 last:mr-0">
// 				{icon}
// 			</Icon>
// 			<Text deco="font-primary">{text}</Text>
// 			{children}
// 			<Icon deco="font-primary" className="text-lg ml-2 first:ml-0">
// 				{iconR}
// 			</Icon>
// 		</Button>
// 	);
// };

// const ToggleSuccess = (props) => {
// 	const {children, className, icon, iconR, text, team, name, onClick, onChange, checked, disabled} = props;

// 	return (
// 		<Toggle deco="basket-default box-success" className={className} name={name} onChange={onChange} checked={checked} disabled={disabled}>
// 			<Icon deco="font-default" className="text-lg mr-2 last:mr-0">
// 				{icon}
// 			</Icon>
// 			<Text deco="font-success">{text}</Text>
// 			{children}
// 			<Icon deco="font-success" className="text-lg ml-2 first:ml-0">
// 				{iconR}
// 			</Icon>
// 		</Toggle>
// 	);
// };

// const ToggleWarning = (props) => {
// 	const {children, className, icon, iconR, text, team, name, onClick, onChange, checked, disabled} = props;

// 	return (
// 		<Toggle deco="basket-default box-warning" className={className} name={name} onChange={onChange} checked={checked} disabled={disabled}>
// 			<Icon deco="font-default" className="text-lg mr-2 last:mr-0">
// 				{icon}
// 			</Icon>
// 			<Text deco="font-warning">{text}</Text>
// 			{children}
// 			<Icon deco="font-warning" className="text-lg ml-2 first:ml-0">
// 				{iconR}
// 			</Icon>
// 		</Toggle>
// 	);
// };

// const ToggleCheckbox = (props) => {
// 	const {children, className, icon, iconR, text, team, name, onClick, onChange, checked, disabled} = props;

// 	return (
// 		<Toggle deco="basket-default" className={className} team={team} name={name} onChange={onChange} checked={checked} disabled={disabled}>
// 			<Box deco="box-checkbox" className="mr-2 last:mr-0" />
// 			<Icon deco="font-checkbox-dot">bxs-chevron-down</Icon>
// 			<Text deco="font-toggle">{text}</Text>
// 			{children}
// 		</Toggle>
// 	);
// };

// const ToggleRadio = (props) => {
// 	const {children, className, icon, iconR, text, team, name, onClick, onChange, checked, disabled} = props;

// 	return (
// 		<Toggle deco="basket-default" className={className} team={team} name={name} onChange={onChange} checked={checked} disabled={disabled}>
// 			<Box deco="box-radio" className="mr-2 last:mr-0" />
// 			<Box deco="box-radio-dot" />
// 			<Text deco="font-toggle">{text}</Text>
// 			{children}
// 		</Toggle>
// 	);
// };

// const ToggleSwitch = (props) => {
// 	const {children, className, icon, iconR, text, team, name, onChange, onClick, checked, disabled} = props;

// 	return (
// 		<Toggle deco="basket-default" className={className} name={name} onChange={onChange} checked={checked} disabled={disabled}>
// 			<Box deco="box-switch" className="mr-2 last:mr-0" />
// 			<Box deco="box-switch-dot" />
// 			<Text deco="font-toggle">{text}</Text>
// 			{children}
// 		</Toggle>
// 	);
// };

const CodeUseData = () => {
	const idInput = useRef(null);
	const [data, runData] = UseData({
		id: 'koozone',
		password: '123',
	});

	const onChageInput = (event) => {
		const {name, value} = event.currentTarget;

		runData.change(name, value);
	};
	const onClickReset = (event) => {
		const {name} = event.currentTarget;

		runData.reset(name);
	};
	const onClickResetAll = (event) => {
		runData.reset();

		idInput.current.focus();
	};

	return (
		<>
			<Group>
				<Text deco="font-danger">id : </Text>
				<Input type="text" deco="basket-default box-success font-primary" value={data.id} name="id" placeholder="id 입력" onChange={onChageInput} className="w-[150px]" ref={idInput}>
					<Icon deco="font-warning">bx-user</Icon>
				</Input>
				<Button deco="basket-default box-primary" name="id" onClick={onClickReset}>
					<Text deco="font-primary">reset</Text>
				</Button>
				<Label deco="font-success" text={data.id} />
			</Group>
			<Group>
				<Text deco="font-danger">password : </Text>
				<Input type="password" deco="basket-default box-success font-primary" value={data.password} name="password" placeholder="password 입력" onChange={onChageInput} className="w-[150px]">
					<Icon deco="font-warning">bx-key</Icon>
				</Input>
				<Button deco="basket-default box-primary" name="password" onClick={onClickReset}>
					<Text deco="font-primary">reset</Text>
				</Button>
				<Label deco="font-success" text={data.password} />
			</Group>

			<Group>
				<Button deco="basket-default box-danger" onClick={onClickResetAll}>
					<Text deco="font-danger">reset</Text>
				</Button>
				<Label deco="font-success" text={JSON.stringify(data)} />
			</Group>
		</>
	);
};

const CodeUseCount = () => {
	const [count, runCount] = UseCount({
		coffee: 0,
		bread: 10,
	});

	const onChageInput = (event) => {
		const {name, value} = event.currentTarget;

		runCount.change({
			name,
			value,
		});
	};
	const onClickIncrement = (event) => {
		const {name} = event.currentTarget;

		runCount.increment({
			name,
		});
	};
	const onClickDecrement = (event) => {
		const {name} = event.currentTarget;

		runCount.decrement({
			name,
		});
	};
	const onClickReset = (event) => {
		const {name} = event.currentTarget;

		runCount.reset({
			name,
		});
	};
	const onClickResetAll = (event) => {
		runCount.reset();
	};

	return (
		<>
			<Group>
				<Text deco="font-danger">coffee : </Text>
				<Input type="text" deco="basket-default box-success font-primary" value={count.coffee} name="coffee" placeholder="coffee 입력" onChange={onChageInput} className="w-[80px]">
					<Icon deco="font-warning">bx-coffee-togo</Icon>
				</Input>
				<Button deco="basket-default box-primary" name="coffee" onClick={onClickIncrement}>
					<Icon deco="font-primary">bx-message-square-add</Icon>
				</Button>
				<Button deco="basket-default box-primary" name="coffee" onClick={onClickDecrement}>
					<Icon deco="font-primary">bx-message-square-minus</Icon>
				</Button>
				<Button deco="basket-default box-primary" name="coffee" onClick={onClickReset}>
					<Text deco="font-primary">reset</Text>
				</Button>
				<Label deco="font-success" text={count.coffee.toString()} />
			</Group>
			<Group>
				<Text deco="font-danger">bread : </Text>
				<Input type="text" deco="basket-default box-success font-primary" value={count.bread} name="bread" placeholder="bread 입력" onChange={onChageInput} className="w-[80px]">
					<Icon deco="font-warning">bx-baguette</Icon>
				</Input>
				<Button deco="basket-default box-primary" name="bread" onClick={onClickIncrement}>
					<Icon deco="font-primary">bx-message-square-add</Icon>
				</Button>
				<Button deco="basket-default box-primary" name="bread" onClick={onClickDecrement}>
					<Icon deco="font-primary">bx-message-square-minus</Icon>
				</Button>
				<Button deco="basket-default box-primary" name="bread" onClick={onClickReset}>
					<Text deco="font-primary">reset</Text>
				</Button>
				<Label deco="font-success" text={count.bread.toString()} />
			</Group>
			<Group>
				<Button deco="basket-default box-danger" onClick={onClickResetAll}>
					<Text deco="font-danger">reset</Text>
				</Button>
				<Label deco="font-success" text={JSON.stringify(count)} />
			</Group>
		</>
	);
};

export default function code() {
	const [data, runData] = UseData({
		nick: 'pinkpanda',
		key: '',
		search: '',
		fruite: ['orange', 'banana'],
		color: ['yellow'],
		align: [],
		dog: false,
		cat: true,
		bird: false,
		countLike: 0,
		countHate: 0,
	});
	const [modal, runModal] = UseModal();
	const [sideMenu, runSideMenu] = UseSideMenu();

	const clickButton = (event) => {
		const {name} = event.currentTarget;

		if (name == 'openModal') {
			runModal.open();
		} else if (name == 'showSidemenu') {
			runSideMenu.open();
		} else if (name == 'countLike') {
			runData.change(name, data[name] + 1);
		} else if (name == 'countHate') {
			runData.change(name, data[name] + 1);
		}
	};

	const changeCheckbox = (event) => {
		const {name, checked} = event.currentTarget;
		const {team} = event.currentTarget.dataset;
		console.log('team', team);
		if (checked) {
			runData.change(team, [...data[team], name]);
		} else {
			runData.change(
				team,
				data[team].filter((item) => item != name)
			);
		}
	};

	const changeRadio = (event) => {
		const {name} = event.currentTarget;
		const {team} = event.currentTarget.dataset;

		runData.change(team, [name]);
	};

	const changeSwitch = (event) => {
		const {name, checked} = event.currentTarget;

		runData.change(name, checked);
	};

	const chageInput = (event) => {
		const {name, value} = event.currentTarget;

		runData.change(name, value);
	};

	return (
		<>
			<Header />

			<Fieldset title="data">
				<Group>
					{Object.entries(data).map((item, index) => (
						<Text key={index} deco="font-success" className="block">{`${item[0]} : ${JSON.stringify(item[1])}`}</Text>
					))}
				</Group>
			</Fieldset>

			<Fieldset title="Icon">
				<Group>
					<Icon deco="font-default">bx-user-plus</Icon>
					<Icon deco="font-default">bx-leaf</Icon>
					<Icon deco="font-danger">bx-align-middle</Icon>
					<Icon deco="font-primary">bx-search-alt-2</Icon>
				</Group>
			</Fieldset>

			<Fieldset title="Text">
				<Group>
					<Text deco="font-primary" className="italic">
						lorem story
					</Text>
					<Text deco="font-default">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						<Text deco="font-danger" className="underline">
							<Icon deco="font-primary">bx-leaf</Icon>
							Aliquam sequi hic sint!
						</Text>
						Earum suscipit repellat officia quibusdam ipsum nisi optio,{' '}
						<Text deco="font-success" className="line-through">
							omnis ut saepe,
						</Text>{' '}
						nihil voluptatibus commodi placeat iure fugit explicabo!
					</Text>
				</Group>
			</Fieldset>

			<Fieldset title="Label">
				<Group>
					<Label deco="font-primary" icon="bx-star" text="Start : ">
						<Text deco="font-warning">Earum suscipit repellat officia quibusdam ipsum nisi optio</Text>
					</Label>
					<Label deco="font-primary" icon="bx-leaf" text="leaf" />
					<Label deco="font-primary" text="asdas" />
					<Label deco="font-danger" text="Sample" />
				</Group>
			</Fieldset>

			<Fieldset title="Basket">
				<Group>
					<Basket deco="basket-mini box-round" checked>
						<Icon deco="font-primary">bxs-heart</Icon>
						<Text deco="font-danger">910</Text>
					</Basket>
					<Basket deco="basket-mini box-round">
						<Label deco="font-danger" icon="bxs-heart" text="472" />
					</Basket>
					<Basket deco="basket-mini box-round font-primary" text="288" disabled>
						<Label deco="font-danger" icon="bxs-heart" />
					</Basket>
					<Basket deco="basket-mini box-round font-primary" icon="bxs-heart">
						<Label deco="font-danger" text="772" />
					</Basket>
					<Basket deco="basket-mini box-round font-warning" icon="bxs-heart" text="321" />
					<Basket deco="basket-mini box-round font-primary" icon="bxs-heart" text="567" checked />
					<Basket deco="basket-default">
						<Box deco="box-round" />
						<Label deco="font-default" text="134" />
					</Basket>
					<Basket deco="basket-mini" checked>
						<Box deco="box-danger" />
						<Label deco="font-danger" text="8798" />
					</Basket>
					<Basket deco="basket-mini box-round font-danger" text="234" checked></Basket>
				</Group>

				<Group>
					<Basket deco="basket-default box-primary font-success" icon="bx-user-plus" text="KOOZone" />
					<Basket deco="basket-default font-success" text="..." checked>
						<Box deco="box-success" />
					</Basket>
					<Basket deco="basket-default" className="w-[200px] h-[50px]">
						<Box deco="box-primary" />
					</Basket>
					<Basket deco="basket-default box-danger" className="w-[100px] h-[30px]" checked>
						{/* <BoxEx deco="box-danger" /> */}
					</Basket>
				</Group>
			</Fieldset>

			<Fieldset title="A">
				<Group>
					<Text deco="font-danger">checked(true) : </Text>
					<A href="http://www.google.com" deco="basket-a-primary box-primary">
						<Icon deco="font-danger">bxl-google</Icon>
						<Text deco="font-primary">google</Text>
					</A>
					<A href="http://www.google.com" deco="basket-a-primary box-trans-primary">
						<Icon deco="font-danger">bxl-google</Icon>
						<Text deco="font-primary">google</Text>
					</A>
					<A href="http://www.google.com" deco="basket-a-primary box-primary">
						<Icon deco="font-trans-danger">bxl-google</Icon>
						<Text deco="font-trans-primary">google</Text>
					</A>
					<A href="http://www.google.com" deco="basket-a-primary box-trans-primary">
						<Icon deco="font-trans-danger">bxl-google</Icon>
						<Text deco="font-trans-primary">google</Text>
					</A>
				</Group>
				<Group>
					<Text deco="font-danger">checked(false) : </Text>
					<A href="http://www.google.com" deco="basket-a-primary box-primary" checked>
						<Icon deco="font-danger">bxl-google</Icon>
						<Text deco="font-primary">google</Text>
					</A>
					<A href="http://www.google.com" deco="basket-a-primary box-trans-primary" checked>
						<Icon deco="font-danger">bxl-google</Icon>
						<Text deco="font-primary">google</Text>
					</A>
					<A href="http://www.google.com" deco="basket-a-primary box-primary" checked>
						<Icon deco="font-trans-danger">bxl-google</Icon>
						<Text deco="font-trans-primary">google</Text>
					</A>
					<A href="http://www.google.com" deco="basket-a-primary box-trans-primary" checked>
						<Icon deco="font-trans-danger">bxl-google</Icon>
						<Text deco="font-trans-primary">google</Text>
					</A>
				</Group>
				<Group>
					<A href="/" deco="basket-a-primary" className="underline-offset-2">
						<Text deco="font-primary" className="text-xl font-semibold">
							HOME
						</Text>
					</A>
					<A href="/view/sample" deco="basket-a-default box-trans-primary">
						<Icon deco="font-trans-primary">bx-user-plus</Icon>
					</A>
					<A href="/view/room" deco="basket-a-default box-trans-primary" checked>
						<Icon deco="font-trans-primary">bx-search-alt-2</Icon>
					</A>
					<A href="http://www.naver.com" deco="basket-a-primary">
						<Text deco="font-default">naver</Text>
					</A>
					<A href="http://www.meta.com" deco="basket-a-primary box-warning font-warning" icon="bxl-meta" text="meta" checked>
						{/* <Box deco="box-warning" /> */}
						{/* <Icon deco="font-primary">bxl-meta</Icon> */}
						{/* <Text deco="font-default">meta</Text> */}
					</A>
				</Group>
			</Fieldset>

			<Fieldset title="Button">
				<Group>
					<Button deco="basket-default box-primary">
						{/* <BoxEx deco="box-primary" /> */}
						<Text deco="font-primary" className="font-xl">
							BG
						</Text>
						<Icon deco="font-primary">bxs-chevron-right</Icon>
						<Text deco="font-danger">Sample</Text>
					</Button>
					<Button deco="basket-default box-success" name="happy">
						<Icon deco="font-danger">bx-user</Icon>
						<Text deco="font-success">named</Text>
					</Button>
					<Button deco="basket-default box-danger font-success" icon="bx-user-x" text="no name" />
					<Button deco="basket-default box-primary font-success" icon="bx-user-plus" text="KOOZone" />
					<Button deco="basket-default box-primary font-danger" className="text-2xl" icon="bx-user-plus" iconR="bxs-chevron-right" text="...">
						<Icon deco="font-primary">bxs-chevron-left</Icon>
						<Text deco="font-primary">asdas</Text>
					</Button>
					<Button deco="basket-default box-danger" checked>
						{/* <BoxEx deco="box-danger" /> */}
						<Text deco="font-danger">Sample</Text>
					</Button>
					<Button deco="basket-default box-success font-primary" icon="bxs-like" text="like:" name="countLike" onClick={clickButton}>
						<Text deco="font-danger">{data.countLike.toString()}</Text>
					</Button>
					<Button deco="basket-default box-warning font-danger" icon="bxs-dislike" text="hate:" name="countHate" onClick={clickButton}>
						<Text deco="font-primary">{data.countHate.toString()}</Text>
					</Button>
				</Group>

				<Group>
					<Button deco="basket-default">
						<Box deco="box-default" />
						<Label deco="font-default" text="Default" />
					</Button>
					<Button deco="basket-default">
						<Box deco="box-primary" />
						<Label deco="font-primary" text="Primary" />
					</Button>
					<Button deco="basket-default">
						<Box deco="box-success" />
						<Label deco="font-success" text="Success" />
					</Button>
					<Button deco="basket-default">
						<Box deco="box-warning" />
						<Label deco="font-warning" text="Warning" />
					</Button>
					<Button deco="basket-default" disabled>
						<Box deco="box-danger" />
						<Label deco="font-danger" text="Danger" />
					</Button>
				</Group>

				<Group>
					<Button deco="basket-default" checked>
						<Box deco="box-default" />
						<Label deco="font-default" text="Default" />
					</Button>
					<Button deco="basket-default" checked>
						<Box deco="box-primary" />
						<Label deco="font-primary" text="Primary" />
					</Button>
					<Button deco="basket-default" checked>
						<Box deco="box-success" />
						<Label deco="font-success" text="Success" />
					</Button>
					<Button deco="basket-default" checked>
						<Box deco="box-warning" />
						<Label deco="font-warning" text="Warning" />
					</Button>
					<Button deco="basket-default" checked>
						<Box deco="box-danger" />
						<Label deco="font-danger" text="Danger" />
					</Button>
				</Group>
			</Fieldset>

			<Fieldset title="Toggle">
				<Group>
					<Toggle deco="basket-default">
						<Box deco="box-default" />
						<Text deco="font-default">Default</Text>
					</Toggle>
					<Toggle deco="basket-default">
						<Box deco="box-primary" />
						<Text deco="font-primary">Primary</Text>
					</Toggle>
					<Toggle deco="basket-default">
						<Box deco="box-primary" />
						<Icon deco="font-default">bx-leaf</Icon>
						{/* <Text deco="font-primary">Primary</Text> */}
					</Toggle>
					<Toggle deco="basket-default">
						<Box deco="box-primary" />
						<Icon deco="font-danger">bx-leaf</Icon>
						<Text deco="font-primary">다음단계</Text>
					</Toggle>
					<Toggle deco="basket-default">
						<Box deco="box-success" />
						<Icon deco="font-default">bx-leaf</Icon>
						<Text deco="font-success">다음단계</Text>
						<Icon deco="font-success">bxs-chevron-right</Icon>
					</Toggle>
					<Toggle deco="basket-default" disabled>
						<Box deco="box-danger" />
						<Icon deco="font-default">bx-leaf</Icon>
						<Text deco="font-danger">다음단계</Text>
						<Icon deco="font-danger">bxs-chevron-right</Icon>
					</Toggle>
				</Group>
			</Fieldset>

			<Fieldset title="Toggle (checkbox)">
				<Group>
					<ToggleCheckbox>
						<Text deco="font-toggle">Checkbox</Text>
					</ToggleCheckbox>
					<ToggleCheckbox checked>
						<Text deco="font-toggle">Checked Checkbox</Text>
					</ToggleCheckbox>
					<ToggleCheckbox disabled>
						<Text deco="font-toggle">Disabled Checkbox</Text>
					</ToggleCheckbox>
					<ToggleCheckbox checked disabled>
						<Text deco="font-toggle">Disabled Checked Checkbox</Text>
					</ToggleCheckbox>
				</Group>

				<Group>
					<Text deco="font-danger">fruite : </Text>
					<ToggleCheckbox text="바나나" team="fruite" name="banana" checked={data.fruite.includes('banana')} onChange={changeCheckbox} />
					<ToggleCheckbox text="사과" team="fruite" name="apple" checked={data.fruite.includes('apple')} onChange={changeCheckbox} />
					<ToggleCheckbox text="오렌지" team="fruite" name="orange" checked={data.fruite.includes('orange')} onChange={changeCheckbox} />
					<ToggleCheckbox text="멜론" team="fruite" name="melon" checked={data.fruite.includes('melon')} onChange={changeCheckbox} />
				</Group>

				<Group>
					<Text deco="font-danger">fruite : </Text>
					<ToggleNormal theme="primary" icon="bx-leaf" text="banana" team="fruite" name="banana" checked={data.fruite.includes('banana')} onChange={changeCheckbox} />
					<ToggleNormal theme="primary" icon="bx-leaf" text="apple" team="fruite" name="apple" checked={data.fruite.includes('apple')} onChange={changeCheckbox} />
					<ToggleNormal theme="primary" icon="bx-leaf" text="orange" team="fruite" name="orange" checked={data.fruite.includes('orange')} onChange={changeCheckbox} />
					<ToggleNormal theme="primary" icon="bx-leaf" text="melon" team="fruite" name="melon" checked={data.fruite.includes('melon')} onChange={changeCheckbox} />
				</Group>
			</Fieldset>

			<Fieldset title="Toggle (radio)">
				<Group>
					<ToggleRadio>
						<Text deco="font-toggle">Radio</Text>
					</ToggleRadio>
					<ToggleRadio checked>
						<Text deco="font-toggle">Checked Radio</Text>
					</ToggleRadio>
					<ToggleRadio disabled>
						<Text deco="font-toggle">Disabled Radio</Text>
					</ToggleRadio>
					<ToggleRadio checked disabled>
						<Text deco="font-toggle">Disabled Checked Radio</Text>
					</ToggleRadio>
				</Group>

				<Group>
					<Text deco="font-danger">color : </Text>
					<ToggleRadio text="빨강" team="color" name="red" checked={data.color.includes('red')} onChange={changeRadio} />
					<ToggleRadio text="파랑" team="color" name="blue" checked={data.color.includes('blue')} onChange={changeRadio} />
					<ToggleRadio text="노랑" team="color" name="yellow" checked={data.color.includes('yellow')} onChange={changeRadio} />
					<ToggleRadio text="초록" team="color" name="green" checked={data.color.includes('green')} onChange={changeRadio} />
				</Group>

				<Group>
					<Text deco="font-success">color : </Text>
					<ToggleNormal theme="success" icon="bx-leaf" text="red" team="color" name="red" checked={data.color.includes('red')} onChange={changeRadio} />
					<ToggleNormal theme="success" icon="bx-leaf" text="blue" team="color" name="blue" checked={data.color.includes('blue')} onChange={changeRadio} />
					<ToggleNormal theme="success" icon="bx-leaf" text="yellow" team="color" name="yellow" checked={data.color.includes('yellow')} onChange={changeRadio} />
					<ToggleNormal theme="success" icon="bx-leaf" text="green" team="color" name="green" checked={data.color.includes('green')} onChange={changeRadio} />
				</Group>
			</Fieldset>

			<Fieldset title="Toggle (switch)">
				<Group>
					<ToggleSwitch>
						<Text deco="font-toggle">Switch</Text>
					</ToggleSwitch>
					<ToggleSwitch checked>
						<Text deco="font-toggle">Checked Switch</Text>
					</ToggleSwitch>
					<ToggleSwitch disabled>
						<Text deco="font-toggle">Disabled Switch</Text>
					</ToggleSwitch>
					<ToggleSwitch checked disabled>
						<Text deco="font-toggle">Disabled Checked Switch</Text>
					</ToggleSwitch>
				</Group>

				<Group>
					<Text deco="font-danger">animal : </Text>
					<ToggleSwitch text="강아지" name="dog" checked={data.dog} onChange={changeSwitch} />
					<ToggleSwitch text="고양이" name="cat" checked={data.cat} onChange={changeSwitch} />
					<ToggleSwitch text="비둘기" name="bird" checked={data.bird} onChange={changeSwitch} />
				</Group>

				<Group>
					<Text deco="font-success">color : </Text>
					<ToggleNormal theme="warning" icon="bx-leaf" text="dog" name="dog" checked={data.dog} onChange={changeSwitch} />
					<ToggleNormal theme="warning" icon="bx-leaf" text="cat" name="cat" checked={data.cat} onChange={changeSwitch} />
					<ToggleNormal theme="warning" icon="bx-leaf" text="bird" name="bird" checked={data.bird} onChange={changeSwitch} />
				</Group>
			</Fieldset>

			<Fieldset title="List">
				<Group>
					<ul className="flex items-center divide-x divide-black/20">
						<li className="px-4 first:pl-0 last:pr-0">
							<Button deco="basket-default">
								<Box deco="box-trans" />
								<Icon deco="font-success">bx-user-plus</Icon>
								<Label deco="font-default" text="Share" />
							</Button>
						</li>
						<li className="px-4 first:pl-0 last:pr-0">
							<Button deco="basket-default">
								<Box deco="box-trans" />
								<Icon deco="font-success">bx-trash</Icon>
								<Label deco="font-default" text="Delete" />
							</Button>
						</li>
						<li className="px-4 first:pl-0 last:pr-0">
							<Button deco="basket-default">
								<Box deco="box-trans" />
								<Icon deco="font-success">bx-edit-alt</Icon>
								<Label deco="font-default" text="Rename" />
							</Button>
						</li>
						<li className="px-4 first:pl-0 last:pr-0">
							<Button deco="basket-default">
								<Box deco="box-trans" />
								<Icon deco="font-success">bx-file</Icon>
								<Label deco="font-default" text="Move" />
							</Button>
						</li>
					</ul>
				</Group>

				<Group>
					<Text deco="font-danger">align : </Text>
					<span>
						<Item2 value="left" data={data} changeRadio={changeRadio} />
						<Item2 value="middle" data={data} changeRadio={changeRadio} />
						<Item2 value="right" data={data} changeRadio={changeRadio} />
						<Item2 value="justify" data={data} changeRadio={changeRadio} />
					</span>
				</Group>

				<Group>
					<div className="flex flex-col items-stretch w-[200px]">
						<Item value="justify" data={data} changeRadio={changeRadio} />
						<Item value="left" data={data} changeRadio={changeRadio} />
						<Item value="middle" data={data} changeRadio={changeRadio} />
						<Item value="right" data={data} changeRadio={changeRadio} />
					</div>
				</Group>
			</Fieldset>

			<Fieldset title="Input">
				<Group>
					<Text deco="font-danger">nick : </Text>
					<Input type="text" deco="basket-default font-default" className="w-[280px]" name="nick" value={data.nick} placeholder="nick 입력" onChange={chageInput}>
						<Box deco="box-default" />
						<Icon deco="font-danger">bx-user</Icon>
						<Text deco="font-warning" className="flex-none">
							NICK :
						</Text>
					</Input>
					<Input type="text" deco="basket-default box-default font-default" icon="bx-user" name="nick" value={data.nick} placeholder="nick 입력" onChange={chageInput} disabled>
						{/* <BoxEx deco="box-default" /> */}
						{/* <Icon deco="font-danger">bx-user</Icon> */}
						<Text deco="font-success">nick : </Text>
					</Input>
				</Group>

				<Group>
					<Text deco="font-danger">key : </Text>
					<Input type="password" deco="basket-default font-danger" className="w-[120px]" name="key" value={data.key} placeholder="key 입력" onChange={chageInput}>
						<Box deco="box-success" />
						<Icon deco="font-danger">bx-key</Icon>
					</Input>
					<Input type="text" deco="basket-default box-danger font-danger" icon="bx-key" name="key2" value={data.key} placeholder="key 입력" onChange={chageInput} disabled>
						{/* <BoxEx deco="box-round" /> */}
						{/* <Icon deco="font-danger">bx-key</Icon> */}
					</Input>
				</Group>

				<Group>
					<Text deco="font-danger">search : </Text>
					<Input type="text" deco="basket-default font-primary" className="w-[180px] text-xl" name="search" value={data.search} placeholder="search 입력" onChange={chageInput}>
						<Box deco="box-round" />
						<Icon deco="font-primary">bx-search-alt-2</Icon>
					</Input>
					<Input type="text" deco="basket-default box-round font-primary" icon="bx-search-alt-2" name="search2" value={data.search} placeholder="search 입력" onChange={chageInput} disabled>
						{/* <BoxEx deco="box-round" /> */}
						{/* <Icon deco="font-primary">bx-search-alt-2</Icon> */}
					</Input>
				</Group>
			</Fieldset>

			<Fieldset title="UseData (useState 사용)">
				<CodeUseData />
			</Fieldset>

			<Fieldset title="UseCount (useReducer 사용)">
				<CodeUseCount />
			</Fieldset>

			<Fieldset title="Todo">
				<Todo />
			</Fieldset>

			<Fieldset title="UseModal (useContext 사용)">
				<Group>
					<Button deco="basket-default" name="openModal" onClick={clickButton}>
						<Box deco="box-default" />
						<Label deco="font-default" text="open modal" />
					</Button>
					<Button deco="basket-default" name="openModal" onClick={clickButton} disabled>
						<Box deco="box-default" />
						<Label deco="font-default" text="open modal" />
					</Button>
				</Group>
			</Fieldset>

			<Fieldset title="UseSideMenu (useContext 사용)">
				<Group>
					<Button deco="basket-default" name="showSidemenu" onClick={clickButton} checked>
						<Box deco="box-default" />
						<Label deco="font-default" text="show sidemonu" />
					</Button>
				</Group>
			</Fieldset>

			<Fieldset title="Chip">
				<ChipSample />
			</Fieldset>

			<Fieldset title="ButtonNormal">
				{['default', 'primary', 'success', 'warning', 'danger'].map((item, index) => (
					<Group key={index}>
						<Text deco="font-danger">{item} : </Text>
						<ButtonNormal theme={item} icon="bx-leaf" iconR="bxs-chevron-right" text="Next Step" name="" onClick={() => {}} />
						<ButtonNormal theme={item} icon="bx-leaf" text="Next Step" checked />
						<ButtonNormal theme={item} iconR="bxs-chevron-right" text="다음 단계" />
						<ButtonNormal theme={item} icon="bx-leaf" name="key" checked />
						<ButtonNormal theme={item} text="Menu" name="menu" disabled />
					</Group>
				))}
			</Fieldset>

			<Fieldset title="ToggleNormal">
				{['default', 'primary', 'success', 'warning', 'danger'].map((item, index) => (
					<Group key={index}>
						<Text deco="font-danger">{item} : </Text>
						<ToggleNormal theme={item} icon="bx-leaf" iconR="bxs-chevron-right" text="Next Step" name="" onChange={() => {}} />
						<ToggleNormal theme={item} icon="bx-leaf" text="Next Step" checked />
						<ToggleNormal theme={item} iconR="bxs-chevron-right" text="다음 단계" />
						<ToggleNormal theme={item} icon="bx-leaf" name="key" checked />
						<ToggleNormal theme={item} text="Menu" name="menu" disabled />
					</Group>
				))}
			</Fieldset>

			<Fieldset title="ToggleCheckbox">
				<Group>
					<Text deco="font-danger">default : </Text>
					<ToggleCheckbox name="checkbox" checked={data.checkbox} onChange={changeSwitch}>
						<Text deco="font-toggle">다음 내용을 확인했습니다.</Text>
					</ToggleCheckbox>
					<ToggleCheckbox />
					<ToggleCheckbox text="동의" checked />
					<ToggleCheckbox text="비동의" disabled />
				</Group>
			</Fieldset>

			<Fieldset title="ToggleRadio">
				<Group>
					<Text deco="font-danger">default : </Text>
					<ToggleRadio name="radio" checked={data.radio} onChange={changeSwitch}>
						<Text deco="font-toggle">다음 내용을 확인했습니다.</Text>
					</ToggleRadio>
					<ToggleRadio />
					<ToggleRadio text="동의" checked />
					<ToggleRadio text="비동의" disabled />
				</Group>
			</Fieldset>

			<Fieldset title="ToggleSwitch">
				<Group>
					<Text deco="font-danger">default : </Text>
					<ToggleSwitch name="agree" checked={data.agree} onChange={changeSwitch}>
						<Text deco="font-toggle">다음 내용을 확인했습니다.</Text>
					</ToggleSwitch>
					<ToggleSwitch />
					<ToggleSwitch text="동의" checked />
					<ToggleSwitch text="비동의" disabled />
				</Group>
			</Fieldset>
		</>
	);
}
