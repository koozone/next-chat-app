import {useEffect, useRef} from 'react';
import Header, {Header1, Header2, Header3} from '../component/header';
import {Fieldset, Group, Item, Item2, ToggleCheckbox, ToggleRadio, ToggleSwitch, Chip, Highlight} from '../component/temp_ds';
import {Icon, A, Button, Img, Input, Label, Text, Basket, Toggle, Box} from '../component/ui_ds6';
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
						<Text key={index} theme="success-A" className="block">{`${item[0]} : ${JSON.stringify(item[1])}`}</Text>
					))}
				</Group>
			</Fieldset>

			<Fieldset title="Img">
				<Group className="space-y-4">
					<Img src="/coffee.jpg" className="w-[50px] aspect-square" />
					<Img src="/soup.jpg" className="w-[100px]" />
					<Img src="/soup.jpg" className="w-[100px] aspect-square" />
				</Group>
			</Fieldset>

			<Fieldset title="Icon">
				{/* <Group>
					<Icon deco="font-default">bx-user-plus</Icon>
					<Icon deco="font-default">bx-leaf</Icon>
					<Icon deco="font-danger">bx-align-middle</Icon>
					<Icon deco="font-primary">bx-search-alt-2</Icon>
				</Group> */}
				<Group>
					<Label theme="default-C-sm-md-full" icon="bx-user-plus" />
					<Label theme="default-B4-2xl-md-full" icon="bx-leaf" />
					<Label theme="danger-E-2xl-lg-lg" icon="bx-align-middle" />
					<Label theme="primary-G-xl-lg-full" icon="bx-search-alt-2" />
					<Button
						theme="primary-G2-xl-lg-full"
						icon="bx-search-alt-2"
						center={
							<Text theme="danger-21-3xl" className="px-5">
								ICON
							</Text>
						}
					></Button>
				</Group>
			</Fieldset>

			<Fieldset title="Text">
				{/* <Group>
					<Text deco="font-primary" className="italic">
						lorem story
					</Text>
					<Text deco="font-default">
						Lorem ipsum dolor sit amet <Text deco="font-danger">consectetur</Text> adipisicing elit.
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
				</Group> */}
				<Group>
					<Text theme="primary-A" className="leading-10">
						Lorem ipsum <Text theme="success-2">dolor sit amet</Text> consectetur <Text theme="danger-2-lg">Text Sample</Text> Iusto debitis nihil <Label theme="F-primary-sm-xs">Label Sample</Label> similique accusantium{' '}
						<A theme="danger-B2D1-md-xs" href="/view/sample">
							A Sample
						</A>{' '}
						ut, libero dolorem nulla quod dolorum. <Button theme="danger-B2D1-sm-sm">Button Sample</Button>, ipsam{' '}
						<Toggle theme="danger-B2D1-sm-md" name="agree" checked={data.agree} onChange={changeSwitch}>
							Toggle Sample{data.agree ? ' (ON)' : ' (OFF)'}
						</Toggle>{' '}
						dolore facere neque numquam saepe?
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
				<Group className="space-y-4">
					<Label theme="primary-C" icon="bx-star" text="Start : ">
						<Button theme="warning-E2H1-sm-xs-lg">Earum suscipit repellat officia quibusdam ipsum nisi optio</Button>
					</Label>
					<Label deco="font-primary" icon="bx-leaf" text="leaf" />
					<Label deco="font-primary" text="asdas" />
					<Label theme="default-HL-md-xs-full" icon="bx-star" text="Sample ">
						<Button theme="danger-AD-sm-md-full" icon="bxs-x-circle" />
					</Label>
					<Toggle theme="default-HL-md-md-full" icon="bx-star" text="Sample " name="agree" checked={data.agree} onChange={changeSwitch} left={<Label theme="success-BF-2xl-xl-full" icon="bx-leaf" />} right={<Label theme="danger-AF-lg-md-full" icon="bxs-x-circle" />} />
					<Toggle theme="default-DF-md-md-full" icon="bx-star" text="Sample " name="agree" checked={data.agree} onChange={changeSwitch} left={<Label theme="success-DF-xs-xs-full" img="/bean.jpg" />} right={<Label theme="danger-AF-lg-md-full" icon="bxs-x-circle" />} />
					<Basket theme="default-DF-md-md-full" icon="bx-star" text="Sample " name="agree" checked={data.agree} onChange={changeSwitch} left={<Label theme="success-DF-xs-xs-full" img="/shell.jpg" />} right={<Button theme="danger-AF-lg-md-full" icon="bxs-x-circle" />} />
					<Button theme="default-DF-xs-md-full" img="/noodle.jpg" text="Compose Coffee" />
					<Button theme="default-DF-sm-md-full" img="/noodle.jpg" text="Compose Coffee" />
					<Button theme="default-DF-md-md-full" img="/noodle.jpg" text="Compose Coffee" />
					<Button theme="default-DF-lg-md-full" img="/noodle.jpg" text="Compose Coffee" />
					<Button theme="default-DF-xl-md-full" img="/noodle.jpg" text="Compose Coffee" />
					<Button theme="default-DF-2xl-md-lg" img="/noodle.jpg" text="Compose Coffee" />

					<Button theme="primary-E1F2-lg-md-full" img="/coffee.jpg" text="TEST">
						<Text theme="danger-1L-xs"> (TEST) </Text>
					</Button>
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
				<Group>
					{/* <Basket theme="primary-H" className="w-[200px] h-[50px]" /> */}
					{/* <Img deco={`box-H-primary`} className={`w-[200px] h-[50px] bg-cover bg-[left_top] hover:bg-[center_center] bg-[url('/shell.jpg')]`} /> */}
					{/* <Button theme="primary-C" className={`w-[200px] h-[50px] bg-cover bg-[left_top] group-hover:bg-[center_center] peer-checked:bg-[right_bottom] bg-[url('/shell.jpg')]`} /> */}
				</Group>
			</Fieldset>

			<Fieldset title="A">
				{/* <Group>
					<Text deco="font-danger">checked(true) : </Text>
					<A href="http://www.google.com" deco="basket-a-primary box-primary">
						<Icon deco="font-danger">bxl-google</Icon>
						<Text deco="font-primary">google</Text>
					</A>
					<A href="http://www.google.com" deco="basket-a-primary box-primary">
						<Icon deco="font-danger">bxl-google</Icon>
						<Text deco="font-primary">google</Text>
					</A>
					<A href="http://www.google.com" deco="basket-a-primary box-high:lx2xf-primary">
						<Icon deco="font-danger">bxl-google</Icon>
						<Text deco="font-high2low-primary">google</Text>
					</A>
					<A href="http://www.google.com" deco="basket-a-primary box-primary">
						<Icon deco="font-danger">bxl-google</Icon>
						<Text deco="font-primary">google</Text>
					</A>
				</Group> */}
				{/* <Group>
					<Text deco="font-danger">checked(false) : </Text>
					<A href="http://www.google.com" deco="basket-a-primary box-primary" checked>
						<Icon deco="font-danger">bxl-google</Icon>
						<Text deco="font-primary">google</Text>
					</A>
					<A href="http://www.google.com" deco="basket-a-primary box-primary" checked>
						<Icon deco="font-danger">bxl-google</Icon>
						<Text deco="font-primary">google</Text>
					</A>
					<A href="http://www.google.com" deco="basket-a-primary box-high:lx2xf-primary" checked>
						<Icon deco="font-danger">bxl-google</Icon>
						<Text deco="font-high2low-primary">google</Text>
					</A>
					<A href="http://www.google.com" deco="basket-a-primary box-primary" checked>
						<Icon deco="font-danger">bxl-google</Icon>
						<Text deco="font-primary">google</Text>
					</A>
				</Group> */}
				<Group>
					<Text deco="font-danger">checked(false) : </Text>
					<A href="http://www.google.com" theme="primary-H2J2-sm-xs" icon="bxl-google" text="google" />
					<A href="http://www.google.com" theme="danger-H2J2-sm-xs" icon="bxl-google">
						<Text deco="font-primary">google</Text>
					</A>
					<A href="http://www.google.com" theme="primary-H2J2-sm-xs" left={<Icon deco="font-success">bxl-google</Icon>}>
						<Text deco="font-primary">google</Text>
					</A>
					<A href="http://www.google.com" theme="primary-A1A2-sm-xs" left={<Icon deco="font-danger">bxl-google</Icon>}>
						google
					</A>
				</Group>
				<Group>
					<Text deco="font-danger">checked(true) : </Text>
					<A href="http://www.google.com" theme="primary-H2J2-sm-xs" icon="bxl-google" text="google" checked />
					<A href="http://www.google.com" theme="danger-H2J2-sm-xs" icon="bxl-google" checked>
						<Text deco="font-primary">google</Text>
					</A>
					<A href="http://www.google.com" theme="primary-H2J2-sm-xs" left={<Icon deco="font-success">bxl-google</Icon>} checked>
						<Text deco="font-primary">google</Text>
					</A>
					<A href="http://www.google.com" theme="primary-A1A2-sm-xs" left={<Icon deco="font-danger">bxl-google</Icon>} checked>
						google
					</A>
				</Group>
				<Group>
					<A href="/" deco="basket-a-primary" className="underline-offset-2">
						<Text deco="font-primary" className="text-xl font-semibold">
							HOME
						</Text>
					</A>
					<A href="/view/sample" deco="basket-a-default box-low:xx2xx-primary">
						<Icon deco="font-primary">bx-user-plus</Icon>
					</A>
					<A href="/view/room" deco="basket-a-default box-low:xx2lx-primary" checked>
						<Icon deco="font-primary">bx-search-alt-2</Icon>
					</A>
					<A href="http://www.naver.com" deco="basket-a-primary">
						<Text deco="font-warning">naver</Text>
					</A>
					<A href="http://www.meta.com" deco="basket-a-primary box-warning font-warning" icon="bxl-meta" text="meta" checked />
				</Group>
				<Group>
					<A href="/" theme="primary-46-xl">
						HOME
					</A>
					<A href="/view/sample" theme="primary-BE-3xl-md-lg2" left={<Icon theme="warning">bx-user-plus</Icon>} />
					<A href="/view/room" deco="basket-a-default box-low:xx2lx-primary" checked>
						<Icon deco="font-primary">bx-search-alt-2</Icon>
					</A>
					<A href="http://www.naver.com" deco="basket-a-primary">
						<Text deco="font-warning">naver</Text>
					</A>
					<A href="http://www.meta.com" deco="basket-a-primary box-warning font-warning" icon="bxl-meta" text="meta" checked />
				</Group>
			</Fieldset>

			<Fieldset title="Button">
				<Group>
					<Button theme="danger-HI-sm-sm-md" icon="bxs-chevron-right" text="Sample" />
					<Button theme="success-DI-sm-sm-xs" icon="bx-user" text="named" name="happy" />
					<Button theme="danger-DI-sm-sm-xs" icon="bx-user-x" text="no named" />
					<Button theme="default-CK-md-md-md" className={'w-[140px]'} icon="bx-user-plus" text="KOOZone" />
					<Button theme="primary-DG-sm-sm-full" icon="bxs-like" text={`like: `} name="countLike" onClick={clickButton}>
						<Text theme="danger-A2L1">{data.countLike}</Text>
					</Button>
					<Button theme="danger-DG-sm-sm-full" icon="bxs-dislike" text={`hate: `} name="countHate" onClick={clickButton}>
						<Text theme="primary-A2L1">{data.countHate}</Text>
					</Button>
					<Button theme="warning-D4G7-lg-lg-md" icon="bxs-chevron-left" iconR="bxs-chevron-right" text="Arrow Button" />
				</Group>

				<Group>
					<Button theme="default-HI-sm-sm-xs">Default</Button>
					<Button theme="primary-HI-sm-sm-xs">Primary</Button>
					<Button theme="success-HI-sm-sm-xs">Success</Button>
					<Button theme="warning-HI-sm-sm-xs">Warning</Button>
					<Button theme="danger-HI-sm-sm-xs" disabled>
						Danger
					</Button>
				</Group>

				<Group>
					<Button theme="default-KL-sm-sm-xs" text="Default" />
					<Button theme="primary-KL-sm-sm-xs" text="Primary" />
					<Button theme="success-KL-sm-sm-xs" text="Success" />
					<Button theme="warning-KL-sm-sm-xs" text="Warning" />
					<Button theme="danger-KL-sm-sm-xs" text="Danger" disabled />
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
					<Toggle theme="primary-CDL/FG" icon="bx-leaf" text="banana" team="fruite" name="banana" checked={data.fruite.includes('banana')} onChange={changeCheckbox} />
					<Toggle theme="primary-CDL/FG" icon="bx-leaf" text="apple" team="fruite" name="apple" checked={data.fruite.includes('apple')} onChange={changeCheckbox} />
					<Toggle theme="primary-CDL/FG" icon="bx-leaf" text="orange" team="fruite" name="orange" checked={data.fruite.includes('orange')} onChange={changeCheckbox} />
					<Toggle theme="primary-CDL/FG" icon="bx-leaf" text="melon" team="fruite" name="melon" checked={data.fruite.includes('melon')} onChange={changeCheckbox} />
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
					<Toggle theme="success-BI/KL" icon="bx-leaf" text="red" team="color" name="red" checked={data.color.includes('red')} onChange={changeRadio} />
					<Toggle theme="success-BI/KL" icon="bx-leaf" text="blue" team="color" name="blue" checked={data.color.includes('blue')} onChange={changeRadio} />
					<Toggle theme="success-BI/KL" icon="bx-leaf" text="yellow" team="color" name="yellow" checked={data.color.includes('yellow')} onChange={changeRadio} />
					<Toggle theme="success-BI/KL" icon="bx-leaf" text="green" team="color" name="green" checked={data.color.includes('green')} onChange={changeRadio} />
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
					<Toggle theme="default/warning-HJ/JH" icon="bx-leaf" text="dog" name="dog" checked={data.dog} onChange={changeSwitch} />
					<Toggle theme="default/warning-HJ/JH" icon="bx-leaf" text="cat" name="cat" checked={data.cat} onChange={changeSwitch} />
					<Toggle theme="default/warning-HJ/JH" icon="bx-leaf" text="bird" name="bird" checked={data.bird} onChange={changeSwitch} />
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

			<Fieldset title="Button (theme)">
				{/* {['default', 'primary', 'success', 'warning', 'danger'].map((item, index) => (
					<Group key={index}>
						<Text deco="font-danger">{item} : </Text>
						<ButtonNormal theme={item} icon="bx-leaf" iconR="bxs-chevron-right" text="Next Step" name="" onClick={() => {}} />
						<ButtonNormal theme={item} icon="bx-leaf" text="Next Step" checked />
						<ButtonNormal theme={item} iconR="bxs-chevron-right" text="다음 단계" />
						<ButtonNormal theme={item} icon="bx-leaf" name="key" checked />
						<ButtonNormal theme={item} text="Menu" name="menu" disabled />
					</Group>
				))} */}
				{['default', 'primary', 'success', 'warning', 'danger'].map((item, index) => (
					<Group key={index}>
						<Text deco="font-danger">{item} : </Text>
						<Button theme={`${item}-HI`} icon="bx-leaf" iconR="bxs-chevron-right" text="Next Step" />
						<Button theme={`${item}-KL`} icon="bx-leaf" text="Next Step" />
						<Button theme={`${item}-GI`} iconR="bxs-chevron-right" text="다음 단계" />
						<Button theme={`${item}-IG`} icon="bx-leaf" />
						<Button theme={`${item}-AL`} text="Menu" />
					</Group>
				))}
			</Fieldset>

			<Fieldset title="Toggle (theme)">
				{/* {['default', 'primary', 'success', 'warning', 'danger'].map((item, index) => (
					<Group key={index}>
						<Text deco="font-danger">{item} : </Text>
						<ToggleNormal theme={item} icon="bx-leaf" iconR="bxs-chevron-right" text="Next Step" name="" onChange={() => {}} />
						<ToggleNormal theme={item} icon="bx-leaf" text="Next Step" checked />
						<ToggleNormal theme={item} iconR="bxs-chevron-right" text="다음 단계" />
						<ToggleNormal theme={item} icon="bx-leaf" name="key" checked />
						<ToggleNormal theme={item} text="Menu" name="menu" disabled />
					</Group>
				))} */}
				{['default', 'primary', 'success', 'warning', 'danger'].map((item, index) => (
					<Group key={index}>
						<Text deco="font-danger">{item} : </Text>
						<Toggle theme={`${item}-HI`} icon="bx-leaf" iconR="bxs-chevron-right" text="Next Step" />
						<Toggle theme={`${item}-KL`} icon="bx-leaf" text="Next Step" />
						<Toggle theme={`${item}-GI`} iconR="bxs-chevron-right" text="다음 단계" />
						<Toggle theme={`${item}-IG`} icon="bx-leaf" />
						<Toggle theme={`${item}-AL`} text="Menu" />
					</Group>
				))}
			</Fieldset>

			<Fieldset title="ToggleCheckbox">
				<Group>
					<Text deco="font-danger">default : </Text>
					{/* <ToggleCheckbox name="checkbox" checked={data.checkbox} onChange={changeSwitch}>
						<Text deco="font-toggle">다음 내용을 확인했습니다.</Text>
					</ToggleCheckbox>
					<ToggleCheckbox />
					<ToggleCheckbox text="동의" checked />
					<ToggleCheckbox text="비동의" disabled /> */}
					<Toggle theme="default-AA2-sm-sm-lg" bg="/checkbox1.png" name="checkbox" checked={data.checkbox} onChange={changeSwitch}>
						다음 내용을 확인했습니다.
					</Toggle>
					<Toggle theme="default-AA2-sm-sm-lg" bg="/checkbox1.png" />
					<Toggle theme="default-AA2-sm-sm-lg" bg="/checkbox1.png" text="동의" checked />
					<Toggle theme="default-AA2-sm-sm-lg" bg="/checkbox1.png" text="비동의" disabled />
				</Group>

				<Toggle theme="danger-GL-md-md-md success-D5I-lg-sm-md4" bg="/sheet_radio6-lg2.png" imgR="/shell.jpg" text="Next" checked={data.checkbox} />
			</Fieldset>

			<Fieldset title="ToggleRadio">
				<Group>
					<Text deco="font-danger">default : </Text>
					{/* <ToggleRadio name="radio" checked={data.radio} onChange={changeSwitch}>
						<Text deco="font-toggle">다음 내용을 확인했습니다.</Text>
					</ToggleRadio>
					<ToggleRadio />
					<ToggleRadio text="동의" checked />
					<ToggleRadio text="비동의" disabled /> */}
					<Toggle theme="default-AA2-sm-sm-lg" bg="/radio1.png" name="radio" checked={data.radio} onChange={changeSwitch}>
						다음 내용을 확인했습니다.
					</Toggle>
					<Toggle theme="default-AA2-sm-sm-lg" bg="/radio1.png" />
					<Toggle theme="default-AA2-sm-sm-lg" bg="/radio1.png" text="동의" checked />
					<Toggle theme="default-AA2-sm-sm-lg" bg="/radio1.png" text="비동의" disabled />
				</Group>
			</Fieldset>

			<Fieldset title="ToggleSwitch">
				<Group>
					<Text deco="font-danger">default : </Text>
					{/* <ToggleSwitch name="agree" checked={data.agree} onChange={changeSwitch}>
						<Text deco="font-toggle">다음 내용을 확인했습니다.</Text>
					</ToggleSwitch>
					<ToggleSwitch />
					<ToggleSwitch text="동의" checked />
					<ToggleSwitch text="비동의" disabled /> */}
					<Toggle theme="default-AA2-sm-sm-lg" bg="/switch1-lg.png" name="switch" checked={data.switch} onChange={changeSwitch}>
						다음 내용을 확인했습니다.
					</Toggle>
					<Toggle theme="default-AA2-sm-sm-lg" bg="/switch1-lg.png" />
					<Toggle theme="default-AA2-sm-sm-lg" bg="/switch1-lg.png" text="동의" checked />
					<Toggle theme="default-AA2-sm-sm-lg" bg="/switch1-lg.png" text="비동의" disabled />
				</Group>
			</Fieldset>
		</>
	);
}
