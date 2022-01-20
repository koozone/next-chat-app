import {useRef} from 'react';
import Header, {Header1, Header2, Header3} from '../component/header';
import {Icon, A, Button, Img, Input, Label, Text, Basket, Toggle, Box} from '../component/ui_ds4';
import {UseCount} from '../hook/useCount';
import {UseData} from '../hook/useData';
import {UseModal} from '../hook/useModal';
import {UseSideMenu} from '../hook/useSideMenu';
import Todo from './todo';

const Fieldset = ({children, title}) => {
	return (
		<fieldset className="m-3 p-3 space-y-2 border-[1px] border-slate-400 rounded-lg bg-black/5">
			<legend>
				<span className="p-2 text-xl text-black/80 font-semibold">{title}</span>
			</legend>
			{children}
		</fieldset>
	);
};
const Group = ({children}) => {
	return <div className="space-x-2">{children}</div>;
};

const Item2 = (props) => {
	const {value, data, changeRadio} = props;

	return (
		<Toggle deco="toggle-default" team="align" name={value} checked={data.align.includes(value)} onChange={changeRadio}>
			<Box deco="box-item" />
			<Icon deco="font-warning" className="pr-2">{`bx-align-${value}`}</Icon>
			<Text deco="font-default">{value}</Text>
		</Toggle>
	);
};

const Item = (props) => {
	const {value, data, changeRadio} = props;

	return (
		<Toggle deco="toggle-list-col" team="align" name={value} checked={data.align.includes(value)} onChange={changeRadio}>
			<Box deco="box-list-col" />
			<Icon deco="font-warning" className="pr-2">{`bx-align-${value}`}</Icon>
			<Text deco="font-default">{value}</Text>
		</Toggle>
	);
};

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
				<Input
					type="text"
					deco="input-default box-success font-input-primary"
					value={data.id}
					name="id"
					placeholder="id 입력"
					onChange={onChageInput}
					className="w-[150px]"
					ref={idInput}
				>
					<Icon deco="font-warning" className="pr-2">
						bx-user
					</Icon>
				</Input>
				<Button deco="button-default box-primary" name="id" onClick={onClickReset}>
					<Text deco="font-primary">reset</Text>
				</Button>
				<Label deco="font-success" text={data.id} />
			</Group>
			<Group>
				<Text deco="font-danger">password : </Text>
				<Input
					type="password"
					deco="input-default box-success font-input-primary"
					value={data.password}
					name="password"
					placeholder="password 입력"
					onChange={onChageInput}
					className="w-[150px]"
				>
					<Icon deco="font-warning" className="pr-2">
						bx-key
					</Icon>
				</Input>
				<Button deco="button-default box-primary" name="password" onClick={onClickReset}>
					<Text deco="font-primary">reset</Text>
				</Button>
				<Label deco="font-success" text={data.password} />
			</Group>

			<Group>
				<Button deco="button-default box-danger" onClick={onClickResetAll}>
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
				<Input
					type="text"
					deco="input-default box-success font-input-primary"
					value={count.coffee}
					name="coffee"
					placeholder="coffee 입력"
					onChange={onChageInput}
					className="w-[80px]"
				>
					<Icon deco="font-warning" className="pr-2">
						bx-coffee-togo
					</Icon>
				</Input>
				<Button deco="button-default box-primary" name="coffee" onClick={onClickIncrement}>
					<Icon deco="font-primary">bx-message-square-add</Icon>
				</Button>
				<Button deco="button-default box-primary" name="coffee" onClick={onClickDecrement}>
					<Icon deco="font-primary">bx-message-square-minus</Icon>
				</Button>
				<Button deco="button-default box-primary" name="coffee" onClick={onClickReset}>
					<Text deco="font-primary">reset</Text>
				</Button>
				<Label deco="font-success" text={count.coffee.toString()} />
			</Group>
			<Group>
				<Text deco="font-danger">bread : </Text>
				<Input
					type="text"
					deco="input-default box-success font-input-primary"
					value={count.bread}
					name="bread"
					placeholder="bread 입력"
					onChange={onChageInput}
					className="w-[80px]"
				>
					<Icon deco="font-warning" className="pr-2">
						bx-baguette
					</Icon>
				</Input>
				<Button deco="button-default box-primary" name="bread" onClick={onClickIncrement}>
					<Icon deco="font-primary">bx-message-square-add</Icon>
				</Button>
				<Button deco="button-default box-primary" name="bread" onClick={onClickDecrement}>
					<Icon deco="font-primary">bx-message-square-minus</Icon>
				</Button>
				<Button deco="button-default box-primary" name="bread" onClick={onClickReset}>
					<Text deco="font-primary">reset</Text>
				</Button>
				<Label deco="font-success" text={count.bread.toString()} />
			</Group>
			<Group>
				<Button deco="button-default box-danger" onClick={onClickResetAll}>
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

			<Fieldset title="icon">
				<Group>
					<Icon deco="font-default">bx-user-plus</Icon>
					<Icon deco="font-default">bx-leaf</Icon>
					<Icon deco="font-danger">bx-align-middle</Icon>
					<Icon deco="font-primary">bx-search-alt-2</Icon>
				</Group>
			</Fieldset>

			<Fieldset title="text">
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

			<Fieldset title="label">
				<Group>
					<Label deco="font-primary" icon="bx-star" text="Start : ">
						<Text deco="font-warning">Earum suscipit repellat officia quibusdam ipsum nisi optio</Text>
					</Label>
					<Label deco="font-primary" icon="bx-leaf" text="leaf" />
					<Label deco="font-primary" text="asdas" />
					<Label deco="font-danger" text="Sample" />
				</Group>
			</Fieldset>

			<Fieldset title="basket">
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

			<Fieldset title="a">
				<Group>
					<A href="/" deco="a-primary" className="underline-offset-2">
						<Text deco="font-primary" className="text-xl font-semibold">
							HOME
						</Text>
					</A>
					<A href="/view/sample" deco="a-default box-primary">
						<Icon deco="font-default">bx-user-plus</Icon>
					</A>
					<A href="/view/room" deco="a-default">
						<Icon deco="font-primary">bx-search-alt-2</Icon>
					</A>
					<A href="http://www.google.com" deco="a-primary box-success" checked>
						<Icon deco="font-primary">bxl-google</Icon>
						<Text deco="font-primary">google</Text>
					</A>
					<A href="http://www.naver.com" deco="a-primary">
						<Text deco="font-default">naver</Text>
					</A>
					<A href="http://www.meta.com" deco="a-primary box-warning font-warning" icon="bxl-meta" text="meta" checked>
						{/* <Box deco="box-warning" /> */}
						{/* <Icon deco="font-primary">bxl-meta</Icon> */}
						{/* <Text deco="font-default">meta</Text> */}
					</A>
				</Group>
			</Fieldset>

			<Fieldset title="button">
				<Group>
					<Button deco="button-default box-primary">
						{/* <BoxEx deco="box-primary" /> */}
						<Text deco="font-primary" className="font-xl">
							BG
						</Text>
						<Icon deco="font-primary">bxs-chevron-right</Icon>
						<Text deco="font-danger">Sample</Text>
					</Button>
					<Button deco="button-default box-success font-danger" name="happy" icon="bx-user">
						<Text deco="font-success">named</Text>
					</Button>
					<Button deco="button-default box-danger font-success" icon="bx-user-x" text="no name" />
					<Button deco="button-default box-primary font-success" icon="bx-user-plus" text="KOOZone" />
					<Button deco="button-default box-primary font-danger" className="text-2xl" icon="bx-user-plus" iconR="bxs-chevron-right" text="...">
						<Icon deco="font-primary">bxs-chevron-left</Icon>
						<Text deco="font-primary">asdas</Text>
					</Button>
					<Button deco="button-default box-danger" checked>
						{/* <BoxEx deco="box-danger" /> */}
						<Text deco="font-danger">Sample</Text>
					</Button>
					<Button deco="button-default box-success font-primary" icon="bxs-like" text="like:" name="countLike" onClick={clickButton}>
						<Text deco="font-danger">{data.countLike.toString()}</Text>
					</Button>
					<Button deco="button-default box-warning font-danger" icon="bxs-dislike" text="hate:" name="countHate" onClick={clickButton}>
						<Text deco="font-primary">{data.countHate.toString()}</Text>
					</Button>
				</Group>

				<Group>
					<Button deco="button-default">
						<Box deco="box-default" />
						<Label deco="font-default" text="Default" />
					</Button>
					<Button deco="button-default">
						<Box deco="box-primary" />
						<Label deco="font-primary" text="Primary" />
					</Button>
					<Button deco="button-default">
						<Box deco="box-success" />
						<Label deco="font-success" text="Success" />
					</Button>
					<Button deco="button-default">
						<Box deco="box-warning" />
						<Label deco="font-warning" text="Warning" />
					</Button>
					<Button deco="button-default" disabled>
						<Box deco="box-danger" />
						<Label deco="font-danger" text="Danger" />
					</Button>
				</Group>

				<Group>
					<Button deco="button-default" checked>
						<Box deco="box-default" />
						<Label deco="font-default" text="Default" />
					</Button>
					<Button deco="button-default" checked>
						<Box deco="box-primary" />
						<Label deco="font-primary" text="Primary" />
					</Button>
					<Button deco="button-default" checked>
						<Box deco="box-success" />
						<Label deco="font-success" text="Success" />
					</Button>
					<Button deco="button-default" checked>
						<Box deco="box-warning" />
						<Label deco="font-warning" text="Warning" />
					</Button>
					<Button deco="button-default" checked>
						<Box deco="box-danger" />
						<Label deco="font-danger" text="Danger" />
					</Button>
				</Group>
			</Fieldset>

			<Fieldset title="toggle">
				<Group>
					<Toggle deco="toggle-default">
						<Box deco="box-default" />
						<Text deco="font-default">Default</Text>
					</Toggle>
					<Toggle deco="toggle-default">
						<Box deco="box-primary" />
						<Text deco="font-primary">Primary</Text>
					</Toggle>
					<Toggle deco="toggle-default">
						<Box deco="box-primary" />
						<Icon deco="font-default">bx-leaf</Icon>
						{/* <Text deco="font-primary">Primary</Text> */}
					</Toggle>
					<Toggle deco="toggle-default">
						<Box deco="box-primary" />
						<Icon deco="font-danger">bx-leaf</Icon>
						<Text deco="font-primary">다음단계</Text>
					</Toggle>
					<Toggle deco="toggle-default">
						<Box deco="box-success" />
						<Icon deco="font-default">bx-leaf</Icon>
						<Text deco="font-success">다음단계</Text>
						<Icon deco="font-success">bxs-chevron-right</Icon>
					</Toggle>
					<Toggle deco="toggle-default" disabled>
						<Box deco="box-danger" />
						<Icon deco="font-default">bx-leaf</Icon>
						<Text deco="font-danger">다음단계</Text>
						<Icon deco="font-danger">bxs-chevron-right</Icon>
					</Toggle>
				</Group>
			</Fieldset>

			<Fieldset title="toggle (checkbox)">
				<Group>
					<Toggle deco="toggle-default">
						<Box deco="box-checkbox" />
						<Icon deco="font-checkbox-dot">bxs-chevron-down</Icon>
						{/* <I icon="bxs-checkbox" className={css_on} />
						<I icon="bx-checkbox-checked" className={css_off} /> */}
						<Text deco="font-toggle">Checkbox</Text>
					</Toggle>
					<Toggle deco="toggle-default" checked>
						<Box deco="box-checkbox" />
						<Icon deco="font-checkbox-dot">bxs-chevron-down</Icon>
						<Text deco="font-toggle">Checked Checkbox</Text>
					</Toggle>
					<Toggle deco="toggle-default" disabled>
						<Box deco="box-checkbox" />
						<Icon deco="font-checkbox-dot">bxs-chevron-down</Icon>
						<Text deco="font-toggle">Disabled Checkbox</Text>
					</Toggle>
					<Toggle deco="toggle-default" checked disabled>
						<Box deco="box-checkbox" />
						<Icon deco="font-checkbox-dot">bxs-chevron-down</Icon>
						<Text deco="font-toggle">Disabled Checked Checkbox</Text>
					</Toggle>
				</Group>

				<Group>
					<Text deco="font-danger">fruite : </Text>
					<Toggle deco="toggle-default" team="fruite" name="banana" checked={data.fruite.includes('banana')} onChange={changeCheckbox}>
						<Box deco="box-checkbox" />
						<Icon deco="font-checkbox-dot">bxs-chevron-down</Icon>
						<Text deco="font-toggle">banana</Text>
					</Toggle>
					<Toggle deco="toggle-default" team="fruite" name="apple" checked={data.fruite.includes('apple')} onChange={changeCheckbox}>
						<Box deco="box-checkbox" />
						<Icon deco="font-checkbox-dot">bxs-chevron-down</Icon>
						<Text deco="font-toggle">apple</Text>
					</Toggle>
					<Toggle deco="toggle-default" team="fruite" name="orange" checked={data.fruite.includes('orange')} onChange={changeCheckbox}>
						<Box deco="box-checkbox" />
						<Icon deco="font-checkbox-dot">bxs-chevron-down</Icon>
						<Text deco="font-toggle">orange</Text>
					</Toggle>
					<Toggle deco="toggle-default" team="fruite" name="melon" checked={data.fruite.includes('melon')} onChange={changeCheckbox}>
						<Box deco="box-checkbox" />
						<Icon deco="font-checkbox-dot">bxs-chevron-down</Icon>
						<Text deco="font-toggle">melon</Text>
					</Toggle>
				</Group>

				<Group>
					<Text deco="font-danger">fruite : </Text>
					<Toggle deco="toggle-default" team="fruite" name="banana" checked={data.fruite.includes('banana')} onChange={changeCheckbox}>
						<Box deco="box-success" />
						<Icon deco="font-default">bx-leaf</Icon>
						<Text deco="font-success">banana</Text>
					</Toggle>
					<Toggle deco="toggle-default" team="fruite" name="apple" checked={data.fruite.includes('apple')} onChange={changeCheckbox}>
						<Box deco="box-success" />
						<Icon deco="font-default">bx-leaf</Icon>
						<Text deco="font-success">apple</Text>
					</Toggle>
					<Toggle deco="toggle-default" team="fruite" name="orange" checked={data.fruite.includes('orange')} onChange={changeCheckbox}>
						<Box deco="box-success" />
						<Icon deco="font-default">bx-leaf</Icon>
						<Text deco="font-success">orange</Text>
					</Toggle>
					<Toggle deco="toggle-default" team="fruite" name="melon" checked={data.fruite.includes('melon')} onChange={changeCheckbox} disabled>
						<Box deco="box-success" />
						<Icon deco="font-default">bx-leaf</Icon>
						<Text deco="font-success">melon</Text>
					</Toggle>
				</Group>
			</Fieldset>

			<Fieldset title="toggle (radio)">
				<Group>
					<Toggle deco="toggle-default">
						<Box deco="box-radio" />
						<Box deco="box-radio-dot" />
						{/* <I icon="bxs-checkbox" className={css_on} />
						<I icon="bx-checkbox-checked" className={css_off} /> */}
						<Text deco="font-toggle">Radio</Text>
					</Toggle>
					<Toggle deco="toggle-default" checked>
						<Box deco="box-radio" />
						<Box deco="box-radio-dot" />
						<Text deco="font-toggle">Checked Radio</Text>
					</Toggle>
					<Toggle deco="toggle-default" disabled>
						<Box deco="box-radio" />
						<Box deco="box-radio-dot" />
						<Text deco="font-toggle">Disabled Radio</Text>
					</Toggle>
					<Toggle deco="toggle-default" checked disabled>
						<Box deco="box-radio" />
						<Box deco="box-radio-dot" />
						<Text deco="font-toggle">Disabled Checked Radio</Text>
					</Toggle>
				</Group>

				<Group>
					<Text deco="font-danger">color : </Text>
					<Toggle deco="toggle-default" team="color" name="red" checked={data.color.includes('red')} onChange={changeRadio}>
						<Box deco="box-radio" />
						<Box deco="box-radio-dot" />
						<Text deco="font-toggle">red</Text>
					</Toggle>
					<Toggle deco="toggle-default" team="color" name="blue" checked={data.color.includes('blue')} onChange={changeRadio}>
						<Box deco="box-radio" />
						<Box deco="box-radio-dot" />
						<Text deco="font-toggle">blue</Text>
					</Toggle>
					<Toggle deco="toggle-default" team="color" name="yellow" checked={data.color.includes('yellow')} onChange={changeRadio}>
						<Box deco="box-radio" />
						<Box deco="box-radio-dot" />
						<Text deco="font-toggle">yellow</Text>
					</Toggle>
					<Toggle deco="toggle-default" team="color" name="green" checked={data.color.includes('green')} onChange={changeRadio}>
						<Box deco="box-radio" />
						<Box deco="box-radio-dot" />
						<Text deco="font-toggle">green</Text>
					</Toggle>
				</Group>

				<Group>
					<Text deco="font-success">color : </Text>
					<Toggle deco="toggle-default" team="color" name="red" checked={data.color.includes('red')} onChange={changeRadio}>
						<Box deco="box-warning" />
						<Icon deco="font-default">bx-leaf</Icon>
						<Text deco="font-warning">red</Text>
					</Toggle>
					<Toggle deco="toggle-default" team="color" name="blue" checked={data.color.includes('blue')} onChange={changeRadio}>
						<Box deco="box-warning" />
						<Icon deco="font-default">bx-leaf</Icon>
						<Text deco="font-warning">blue</Text>
					</Toggle>
					<Toggle deco="toggle-default" team="color" name="yellow" checked={data.color.includes('yellow')} onChange={changeRadio}>
						<Box deco="box-warning" />
						<Icon deco="font-default">bx-leaf</Icon>
						<Text deco="font-warning">yellow</Text>
					</Toggle>
					<Toggle deco="toggle-default" team="color" name="green" checked={data.color.includes('green')} onChange={changeRadio} disabled>
						<Box deco="box-warning" />
						<Icon deco="font-default">bx-leaf</Icon>
						<Text deco="font-warning">green</Text>
					</Toggle>
				</Group>
			</Fieldset>

			<Fieldset title="toggle (switch)">
				<Group>
					<Toggle deco="toggle-default">
						<Box deco="box-switch" />
						<Box deco="box-switch-dot" />
						{/* <I icon="bxs-checkbox" className={css_on} />
						<I icon="bx-checkbox-checked" className={css_off} /> */}
						<Text deco="font-toggle">Switch</Text>
					</Toggle>
					<Toggle deco="toggle-default" checked>
						<Box deco="box-switch" />
						<Box deco="box-switch-dot" />
						<Text deco="font-toggle">Checked Switch</Text>
					</Toggle>
					<Toggle deco="toggle-default" disabled>
						<Box deco="box-switch" />
						<Box deco="box-switch-dot" />
						<Text deco="font-toggle">Disabled Switch</Text>
					</Toggle>
					<Toggle deco="toggle-default" checked disabled>
						<Box deco="box-switch" />
						<Box deco="box-switch-dot" />
						<Text deco="font-toggle">Disabled Checked Switch</Text>
					</Toggle>
				</Group>

				<Group>
					<Text deco="font-danger">animal : </Text>
					<Toggle deco="toggle-default" name="dog" checked={data.dog} onChange={changeSwitch}>
						<Box deco="box-switch" />
						<Box deco="box-switch-dot" />
						<Text deco="font-toggle">dog</Text>
					</Toggle>
					<Toggle deco="toggle-default" name="cat" checked={data.cat} onChange={changeSwitch}>
						<Box deco="box-switch" />
						<Box deco="box-switch-dot" />
						<Text deco="font-toggle">cat</Text>
					</Toggle>
					<Toggle deco="toggle-default" name="bird" checked={data.bird} onChange={changeSwitch}>
						<Box deco="box-switch" />
						<Box deco="box-switch-dot" />
						<Text deco="font-toggle">bird</Text>
					</Toggle>
				</Group>
			</Fieldset>

			<Fieldset title="list">
				<Group>
					<ul className="flex items-center divide-x divide-black/20">
						<li className="px-4 first:pl-0 last:pr-0">
							<Button deco="button-default">
								<Box deco="box-trans" />
								<Icon deco="font-default">bx-user-plus</Icon>
								<Label deco="font-default" text="Share" />
							</Button>
						</li>
						<li className="px-4 first:pl-0 last:pr-0">
							<Button deco="button-default">
								<Box deco="box-trans" />
								<Icon deco="font-default">bx-trash</Icon>
								<Label deco="font-default" text="Delete" />
							</Button>
						</li>
						<li className="px-4 first:pl-0 last:pr-0">
							<Button deco="button-default">
								<Box deco="box-trans" />
								<Icon deco="font-default">bx-edit-alt</Icon>
								<Label deco="font-default" text="Rename" />
							</Button>
						</li>
						<li className="px-4 first:pl-0 last:pr-0">
							<Button deco="button-default">
								<Box deco="box-trans" />
								<Icon deco="font-default">bx-file</Icon>
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

			<Fieldset title="input">
				<Group>
					<Text deco="font-danger">nick : </Text>
					<Input
						type="text"
						deco="input-default font-input-primary"
						className="w-[180px]"
						name="nick"
						value={data.nick}
						placeholder="nick 입력"
						onChange={chageInput}
					>
						<Box deco="box-default" />
						<Icon deco="font-danger" className="pr-0">
							bx-user
						</Icon>
						<Text deco="font-warning" className="pr-2 flex-none">
							NICK :
						</Text>
					</Input>
					<Input
						type="text"
						deco="input-default box-default font-input-primary"
						icon="bx-user"
						name="nick"
						value={data.nick}
						placeholder="nick 입력"
						onChange={chageInput}
						disabled
					>
						{/* <BoxEx deco="box-default" /> */}
						{/* <Icon deco="font-danger">bx-user</Icon> */}
						<Text deco="font-success">nick : </Text>
					</Input>
				</Group>

				<Group>
					<Text deco="font-danger">key : </Text>
					<Input
						type="key"
						deco="input-default font-input-primary"
						className="w-[120px]"
						name="key"
						value={data.key}
						placeholder="key 입력"
						onChange={chageInput}
					>
						<Box deco="box-success" />
						<Icon deco="font-danger" className="pr-2">
							bx-key
						</Icon>
					</Input>
					<Input
						type="text"
						deco="input-default box-danger font-input-primary"
						icon="bx-key"
						name="key2"
						value={data.key}
						placeholder="key 입력"
						onChange={chageInput}
						disabled
					>
						{/* <BoxEx deco="box-round" /> */}
						{/* <Icon deco="font-danger">bx-key</Icon> */}
					</Input>
				</Group>

				<Group>
					<Text deco="font-danger">search : </Text>
					<Input
						type="text"
						deco="input-default font-input-primary"
						className="w-[180px] text-xl"
						name="search"
						value={data.search}
						placeholder="search 입력"
						onChange={chageInput}
					>
						<Box deco="box-round" />
						<Icon deco="font-primary" className="pr-2">
							bx-search-alt-2
						</Icon>
					</Input>
					<Input
						type="text"
						deco="input-default box-round font-input-primary"
						icon="bx-search-alt-2"
						name="search2"
						value={data.search}
						placeholder="search 입력"
						onChange={chageInput}
						disabled
					>
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
					<Button deco="button-default" name="openModal" onClick={clickButton}>
						<Box deco="box-default" />
						<Label deco="font-default" text="open modal" />
					</Button>
					<Button deco="button-default" name="openModal" onClick={clickButton} disabled>
						<Box deco="box-default" />
						<Label deco="font-default" text="open modal" />
					</Button>
				</Group>
			</Fieldset>

			<Fieldset title="UseSideMenu (useContext 사용)">
				<Group>
					<Button deco="button-default" name="showSidemenu" onClick={clickButton} checked>
						<Box deco="box-default" />
						<Label deco="font-default" text="show sidemonu" />
					</Button>
				</Group>
			</Fieldset>
		</>
	);
}
