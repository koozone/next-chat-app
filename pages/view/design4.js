import Header, {Header1, Header2, Header3} from '../component/header';
import {I, A, Button, Img, Input, Label, Text, Basket, Toggle, Box} from '../component/ui_ds4';
import {UseData} from '../hook/useData';
import {UseModal} from '../hook/useModal';
import {UseSideMenu} from '../hook/useSideMenu';

const Fieldset = ({children, title}) => {
	return (
		<fieldset className="m-3 p-3 space-y-2 border-[1px] border-slate-500 rounded-lg">
			<legend>
				<span className="p-2 text-xl font-semibold">{title}</span>
			</legend>
			{children}
		</fieldset>
	);
};
const Group = ({children}) => {
	return <div className="space-x-2">{children}</div>;
};

export default function code() {
	const [data, runData] = UseData({
		id: 'koozone',
		password: '123',
		search: '',
		fruite: ['orange', 'banana'],
		color: ['yellow'],
		align: [],
		dog: false,
		cat: true,
		bird: false,
	});
	const [modal, runModal] = UseModal();
	const [sideMenu, runSideMenu] = UseSideMenu();

	const clickButton = (event) => {
		const {name} = event.currentTarget;

		if (name == 'openModal') {
			runModal.open();
		}
		else if (name == 'showSidemenu') {
			runSideMenu.open();
		}
	}

	const changeCheckbox = (event) => {
		const {name, id, checked} = event.currentTarget;

		if (checked) {
			runData.change(name, [...data[name], id]);
		} else {
			runData.change(
				name,
				data[name].filter((item) => item != id)
			);
		}
	};

	const changeRadio = (event) => {
		const {name, id} = event.currentTarget;

		runData.change(name, [id]);
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
						<div key={index}>{`${item[0]} : ${JSON.stringify(item[1])}`}</div>
					))}
				</Group>
			</Fieldset>

			<Fieldset title="icon">
				<Group>
					<I icon="bx-user-plus" deco="text-default" />
					<I icon="bx-leaf" deco="text-default" />
					<I icon="bx-align-middle" deco="text-danger" />
					<I icon="bx-search-alt-2" deco="text-primary" />
				</Group>
			</Fieldset>

			<Fieldset title="text">
				<Group>
					<Text deco="text-primary">lorem story</Text>
					<Text deco="text-default">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. <Text deco="text-danger" className="underline"><I icon="bx-leaf" />Aliquam sequi hic sint!</Text> Earum suscipit
						repellat officia quibusdam ipsum nisi optio, <Text deco="text-success">omnis ut saepe,</Text> nihil voluptatibus commodi placeat
						iure fugit explicabo!
					</Text>
				</Group>
			</Fieldset>

			<Fieldset title="label">
				<Group>
					<Label deco="text-primary" text="Start">lorem story</Label>
					<Label deco="label-default text-primary" icon="bx-leaf" text="leaf" />
					<Label deco="text-primary" text="asdas" />
					<Label deco="text-danger" text="Sample" />
				</Group>
			</Fieldset>

			<Fieldset title="basket">
				<Group>
					<Basket deco="basket-mini" checked>
						<Box deco="box-round" />
						<Label deco="text-default" text="3" />
					</Basket>
					<Basket deco="basket-default">
						<Box deco="box-round" />
						<Label deco="text-default" text="134" />
					</Basket>
					<Basket deco="basket-mini" checked>
						<Box deco="box-danger" />
						<Label deco="text-danger" text="8798" />
					</Basket>
					<Basket deco="basket-mini box-round text-danger" text="234" checked></Basket>
				</Group>

				<Group>
					<Basket deco="basket-default label-default box-primary text-success" icon="bx-user-plus" text="KOOZone" />
					<Basket deco="basket-default text-success" text="..." checked>
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
					<A href="/view/sample" deco="a-default box-primary">
						<I icon="bx-user-plus" deco="text-default" />
					</A>
					<A href="/view/room" deco="a-default">
						<I icon="bx-search-alt-2" deco="text-primary" />
					</A>
					<A href="http://www.google.com" deco="a-primary box-success">
						<I icon="bxl-google" deco="text-primary" />
						<Text deco="text-primary">google</Text>
					</A>
					<A href="http://www.naver.com" deco="a-primary">
						<Text deco="text-default">naver</Text>
					</A>
					<A href="http://www.naver.com" deco="a-primary box-warning text-warning" icon="bxl-meta" text="meta">
						{/* <Box deco="box-warning" /> */}
						{/* <I icon="bxl-meta" deco="text-primary" /> */}
						{/* <Text deco="text-default">meta</Text> */}
					</A>
				</Group>
			</Fieldset>

			<Fieldset title="button">
				<Group>
					<Button deco="button-default box-primary">
						{/* <BoxEx deco="box-primary" /> */}
						<Text deco="text-primary" className="text-xl">
							BG
						</Text>
						<I deco="text-primary" icon="bxs-chevron-right" />
						<Text deco="text-danger">Sample</Text>
					</Button>
					<Button deco="button-default box-danger text-danger"><Text deco="text-default">asdfasd</Text></Button>
					<Button deco="button-default label-default box-primary text-success" icon="bx-user-plus" text="KOOZone" />
					<Button deco="button-default box-primary text-danger" icon="bx-user-plus" iconR="bxs-chevron-right" text="...">
						<I deco="text-primary" icon="bxs-chevron-left" />
						<Text deco="text-primary">asdas</Text>
					</Button>
					<Button deco="button-default box-danger" checked>
						{/* <BoxEx deco="box-danger" /> */}
						<Text deco="text-danger">Sample</Text>
					</Button>
				</Group>

				<Group>
					<Button deco="button-default">
						<Box deco="box-default" />
						<Label deco="text-default" text="Default" />
					</Button>
					<Button deco="button-default">
						<Box deco="box-primary" />
						<Label deco="text-primary" text="Primary" />
					</Button>
					<Button deco="button-default">
						<Box deco="box-success" />
						<Label deco="text-success" text="Success" />
					</Button>
					<Button deco="button-default">
						<Box deco="box-warning" />
						<Label deco="text-warning" text="Warning" />
					</Button>
					<Button deco="button-default" disabled>
						<Box deco="box-danger" />
						<Label deco="text-danger" text="Danger" />
					</Button>
					<Button deco="button-default" name="openModal" onClick={clickButton}>
						<Box deco="box-default" />
						<Label deco="text-default" text="open modal" />
					</Button>
				</Group>

				<Group>
					<Button deco="button-default" checked>
						<Box deco="box-default" />
						<Label deco="text-default" text="Default" />
					</Button>
					<Button deco="button-default" checked>
						<Box deco="box-primary" />
						<Label deco="text-primary" text="Primary" />
					</Button>
					<Button deco="button-default" checked>
						<Box deco="box-success" />
						<Label deco="text-success" text="Success" />
					</Button>
					<Button deco="button-default" checked>
						<Box deco="box-warning" />
						<Label deco="text-warning" text="Warning" />
					</Button>
					<Button deco="button-default" checked>
						<Box deco="box-danger" />
						<Label deco="text-danger" text="Danger" />
					</Button>
					<Button deco="button-default" name="showSidemenu" onClick={clickButton} checked>
						<Box deco="box-default" />
						<Label deco="text-default" text="show sidemonu" />
					</Button>
				</Group>
			</Fieldset>

			<Fieldset title="toggle">
				<Group>
					<Toggle deco="toggle-default">
						<Box deco="box-default" />
						<Text deco="text-default">Default</Text>
					</Toggle>
					<Toggle deco="toggle-default">
						<Box deco="box-primary" />
						<Text deco="text-primary">Primary</Text>
					</Toggle>
					<Toggle deco="toggle-default">
						<Box deco="box-primary" />
						<I icon="bx-leaf" deco="text-default" />
						{/* <Text deco="text-primary">Primary</Text> */}
					</Toggle>
					<Toggle deco="toggle-default">
						<Box deco="box-primary" />
						<I icon="bx-leaf" deco="text-danger" />
						<Text deco="text-primary">다음단계</Text>
					</Toggle>
					<Toggle deco="toggle-default">
						<Box deco="box-success" />
						<I icon="bx-leaf" deco="text-default" />
						<Text deco="text-success">다음단계</Text>
						<I icon="bxs-chevron-right" deco="text-success" />
					</Toggle>
					<Toggle deco="toggle-default">
						<Box deco="box-danger" />
						<I icon="bx-leaf" deco="text-default" />
						<Text deco="text-danger">다음단계</Text>
						<I icon="bxs-chevron-right" deco="text-danger" />
					</Toggle>
				</Group>
			</Fieldset>

			<Fieldset title="toggle (checkbox)">
				<Group>
					<Toggle deco="toggle-default">
						<Box deco="box-checkbox" />
						<I icon="bxs-chevron-down" deco="text-checkbox-dot" />
						{/* <I icon="bxs-checkbox" className={css_on} />
						<I icon="bx-checkbox-checked" className={css_off} /> */}
						<Text deco="text-toggle">Checkbox</Text>
					</Toggle>
					<Toggle deco="toggle-default" checked>
						<Box deco="box-checkbox" />
						<I icon="bxs-chevron-down" deco="text-checkbox-dot" />
						<Text deco="text-toggle">Checked Checkbox</Text>
					</Toggle>
					<Toggle deco="toggle-default" disabled>
						<Box deco="box-checkbox" />
						<I icon="bxs-chevron-down" deco="text-checkbox-dot" />
						<Text deco="text-toggle">Disabled Checkbox</Text>
					</Toggle>
					<Toggle deco="toggle-default" checked disabled>
						<Box deco="box-checkbox" />
						<I icon="bxs-chevron-down" deco="text-checkbox-dot" />
						<Text deco="text-toggle">Disabled Checked Checkbox</Text>
					</Toggle>
				</Group>

				<Group>
					<Text deco="text-danger">fruite : </Text>
					<Toggle deco="toggle-default" name="fruite" id="banana" checked={data.fruite.includes('banana')} onChange={changeCheckbox}>
						<Box deco="box-checkbox" />
						<I icon="bxs-chevron-down" deco="text-checkbox-dot" />
						<Text deco="text-toggle">banana</Text>
					</Toggle>
					<Toggle deco="toggle-default" name="fruite" id="apple" checked={data.fruite.includes('apple')} onChange={changeCheckbox}>
						<Box deco="box-checkbox" />
						<I icon="bxs-chevron-down" deco="text-checkbox-dot" />
						<Text deco="text-toggle">apple</Text>
					</Toggle>
					<Toggle deco="toggle-default" name="fruite" id="orange" checked={data.fruite.includes('orange')} onChange={changeCheckbox}>
						<Box deco="box-checkbox" />
						<I icon="bxs-chevron-down" deco="text-checkbox-dot" />
						<Text deco="text-toggle">orange</Text>
					</Toggle>
					<Toggle deco="toggle-default" name="fruite" id="melon" checked={data.fruite.includes('melon')} onChange={changeCheckbox}>
						<Box deco="box-checkbox" />
						<I icon="bxs-chevron-down" deco="text-checkbox-dot" />
						<Text deco="text-toggle">melon</Text>
					</Toggle>
				</Group>

				<Group>
					<Text deco="text-danger">fruite : </Text>
					<Toggle deco="toggle-default" name="fruite" id="banana" checked={data.fruite.includes('banana')} onChange={changeCheckbox}>
						<Box deco="box-success" />
						<I icon="bx-leaf" deco="text-default" />
						<Text deco="text-success">banana</Text>
					</Toggle>
					<Toggle deco="toggle-default" name="fruite" id="apple" checked={data.fruite.includes('apple')} onChange={changeCheckbox}>
						<Box deco="box-success" />
						<I icon="bx-leaf" deco="text-default" />
						<Text deco="text-success">apple</Text>
					</Toggle>
					<Toggle deco="toggle-default" name="fruite" id="orange" checked={data.fruite.includes('orange')} onChange={changeCheckbox}>
						<Box deco="box-success" />
						<I icon="bx-leaf" deco="text-default" />
						<Text deco="text-success">orange</Text>
					</Toggle>
					<Toggle deco="toggle-default" name="fruite" id="melon" checked={data.fruite.includes('melon')} onChange={changeCheckbox}>
						<Box deco="box-success" />
						<I icon="bx-leaf" deco="text-default" />
						<Text deco="text-success">melon</Text>
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
						<Text deco="text-toggle">Radio</Text>
					</Toggle>
					<Toggle deco="toggle-default" checked>
						<Box deco="box-radio" />
						<Box deco="box-radio-dot" />
						<Text deco="text-toggle">Checked Radio</Text>
					</Toggle>
					<Toggle deco="toggle-default" disabled>
						<Box deco="box-radio" />
						<Box deco="box-radio-dot" />
						<Text deco="text-toggle">Disabled Radio</Text>
					</Toggle>
					<Toggle deco="toggle-default" checked disabled>
						<Box deco="box-radio" />
						<Box deco="box-radio-dot" />
						<Text deco="text-toggle">Disabled Checked Radio</Text>
					</Toggle>
				</Group>

				<Group>
					<Text deco="text-danger">color : </Text>
					<Toggle deco="toggle-default" name="color" id="red" checked={data.color.includes('red')} onChange={changeRadio}>
						<Box deco="box-radio" />
						<Box deco="box-radio-dot" />
						<Text deco="text-toggle">red</Text>
					</Toggle>
					<Toggle deco="toggle-default" name="color" id="blue" checked={data.color.includes('blue')} onChange={changeRadio}>
						<Box deco="box-radio" />
						<Box deco="box-radio-dot" />
						<Text deco="text-toggle">blue</Text>
					</Toggle>
					<Toggle deco="toggle-default" name="color" id="yellow" checked={data.color.includes('yellow')} onChange={changeRadio}>
						<Box deco="box-radio" />
						<Box deco="box-radio-dot" />
						<Text deco="text-toggle">yellow</Text>
					</Toggle>
					<Toggle deco="toggle-default" name="color" id="green" checked={data.color.includes('green')} onChange={changeRadio}>
						<Box deco="box-radio" />
						<Box deco="box-radio-dot" />
						<Text deco="text-toggle">green</Text>
					</Toggle>
				</Group>

				<Group>
					<Text deco="text-success">color : </Text>
					<Toggle deco="toggle-default" name="color" id="red" checked={data.color.includes('red')} onChange={changeRadio}>
						<Box deco="box-warning" />
						<I icon="bx-leaf" deco="text-default" />
						<Text deco="text-warning">red</Text>
					</Toggle>
					<Toggle deco="toggle-default" name="color" id="blue" checked={data.color.includes('blue')} onChange={changeRadio}>
						<Box deco="box-warning" />
						<I icon="bx-leaf" deco="text-default" />
						<Text deco="text-warning">blue</Text>
					</Toggle>
					<Toggle deco="toggle-default" name="color" id="yellow" checked={data.color.includes('yellow')} onChange={changeRadio}>
						<Box deco="box-warning" />
						<I icon="bx-leaf" deco="text-default" />
						<Text deco="text-warning">yellow</Text>
					</Toggle>
					<Toggle deco="toggle-default" name="color" id="green" checked={data.color.includes('green')} onChange={changeRadio}>
						<Box deco="box-warning" />
						<I icon="bx-leaf" deco="text-default" />
						<Text deco="text-warning">green</Text>
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
						<Text deco="text-toggle">Switch</Text>
					</Toggle>
					<Toggle deco="toggle-default" checked>
						<Box deco="box-switch" />
						<Box deco="box-switch-dot" />
						<Text deco="text-toggle">Checked Switch</Text>
					</Toggle>
					<Toggle deco="toggle-default" disabled>
						<Box deco="box-switch" />
						<Box deco="box-switch-dot" />
						<Text deco="text-toggle">Disabled Switch</Text>
					</Toggle>
					<Toggle deco="toggle-default" checked disabled>
						<Box deco="box-switch" />
						<Box deco="box-switch-dot" />
						<Text deco="text-toggle">Disabled Checked Switch</Text>
					</Toggle>
				</Group>

				<Group>
					<Text deco="text-danger">animal : </Text>
					<Toggle deco="toggle-default" name="dog" checked={data.dog} onChange={changeSwitch}>
						<Box deco="box-switch" />
						<Box deco="box-switch-dot" />
						<Text deco="text-toggle">dog</Text>
					</Toggle>
					<Toggle deco="toggle-default" name="cat" checked={data.cat} onChange={changeSwitch}>
						<Box deco="box-switch" />
						<Box deco="box-switch-dot" />
						<Text deco="text-toggle">cat</Text>
					</Toggle>
					<Toggle deco="toggle-default" name="bird" checked={data.bird} onChange={changeSwitch}>
						<Box deco="box-switch" />
						<Box deco="box-switch-dot" />
						<Text deco="text-toggle">bird</Text>
					</Toggle>
				</Group>
			</Fieldset>

			<Fieldset title="input">
				<Group>
					<Text deco="text-danger">id : </Text>
					<Input type="text" deco="input-default text-primary" name="id" value={data.id} placeholder="id 입력" onChange={chageInput}>
						<Box deco="box-default" />
						<I icon="bx-user" deco="text-danger" />
						<Text deco="text-success">ID : </Text>
					</Input>
					<Input type="text" deco="input-default box-default text-primary" icon="bx-user" name="id" value={data.id} placeholder="id 입력" onChange={chageInput} disabled>
						{/* <BoxEx deco="box-default" /> */}
						{/* <I icon="bx-user" deco="text-danger" /> */}
						<Text deco="text-success">ID : </Text>
					</Input>
				</Group>

				<Group>
					<Text deco="text-danger">password : </Text>
					<Input type="password" deco="input-default text-danger" name="password" value={data.password} placeholder="password 입력" onChange={chageInput}>
						<Box deco="box-danger" />
						<I icon="bx-key" deco="text-danger" />
					</Input>
					<Input type="text" deco="input-default box-danger text-danger" icon="bx-key" name="password" value={data.password} placeholder="password 입력" onChange={chageInput} disabled>
						{/* <BoxEx deco="box-round" /> */}
						{/* <I icon="bx-key" deco="text-danger" /> */}
					</Input>
				</Group>

				<Group>
					<Text deco="text-danger">search : </Text>
					<Input type="text" deco="input-default text-success" name="search" value={data.search} placeholder="search 입력" onChange={chageInput}>
						<Box deco="box-round" />
						<I icon="bx-search-alt-2" deco="text-primary" />
					</Input>
					<Input type="text" deco="input-default box-round text-success" icon="bx-search-alt-2" name="search" value={data.search} placeholder="search 입력" onChange={chageInput} disabled>
						{/* <BoxEx deco="box-round" /> */}
						{/* <I icon="bx-search-alt-2" deco="text-primary" /> */}
					</Input>
				</Group>
			</Fieldset>

			<Fieldset title="list">
				<Group>
					<ul className="flex items-center divide-x divide-black/20 list-none">
						<li className="px-4 first:pl-0 last:pr-0">
							<Button deco="button-default">
								<Box deco="box-trans" />
								<I icon="bx-user-plus" deco="text-default" />
								<Label deco="text-default" text="Share" />
							</Button>
						</li>
						<li className="px-4 first:pl-0 last:pr-0">
							<Button deco="button-default">
								<Box deco="box-trans" />
								<I icon="bx-trash" deco="text-default" />
								<Label deco="text-default" text="Delete" />
							</Button>
						</li>
						<li className="px-4 first:pl-0 last:pr-0">
							<Button deco="button-default">
								<Box deco="box-trans" />
								<I icon="bx-edit-alt" deco="text-default" />
								<Label deco="text-default" text="Rename" />
							</Button>
						</li>
						<li className="px-4 first:pl-0 last:pr-0">
							<Button deco="button-default">
								<Box deco="box-trans" />
								<I icon="bx-file" deco="text-default" />
								<Label deco="text-default" text="Move" />
							</Button>
						</li>
					</ul>
				</Group>

				<Group>
					<Text deco="text-danger">align : </Text>
					<span>
						<Toggle deco="toggle-default" name="align" id="left" checked={data.align.includes('left')} onChange={changeRadio}>
							<Box deco="box-item" />
							<I icon="bx-align-left" deco="text-default" />
							<Text deco="text-default">Left</Text>
						</Toggle>
						<Toggle deco="toggle-default" name="align" id="middle" checked={data.align.includes('middle')} onChange={changeRadio}>
							<Box deco="box-item" />
							<I icon="bx-align-middle" deco="text-default" />
							<Text deco="text-default">Middle</Text>
						</Toggle>
						<Toggle deco="toggle-default" name="align" id="right" checked={data.align.includes('right')} onChange={changeRadio}>
							<Box deco="box-item" />
							<I icon="bx-align-right" deco="text-default" />
							<Text deco="text-default">Right</Text>
						</Toggle>
						<Toggle deco="toggle-default" name="align" id="justify" checked={data.align.includes('justify')} onChange={changeRadio}>
							<Box deco="box-item" />
							<I icon="bx-align-justify" deco="text-default" />
							<Text deco="text-default">Justify</Text>
						</Toggle>
					</span>
				</Group>

				<Group>
					<span>
						<Toggle deco="toggle-default" name="align" id="left" checked={data.align.includes('left')} onChange={changeRadio}>
							<Box deco="box-list-col" />
							<I icon="bx-align-left" deco="text-warning" />
							<Text deco="text-default">Left</Text>
						</Toggle>
						<Toggle deco="toggle-default" name="align" id="middle" checked={data.align.includes('middle')} onChange={changeRadio}>
							<Box deco="box-list-col" />
							<I icon="bx-align-middle" deco="text-warning" />
							<Text deco="text-default">Middle</Text>
						</Toggle>
						<Toggle deco="toggle-default" name="align" id="right" checked={data.align.includes('right')} onChange={changeRadio}>
							<Box deco="box-list-col" />
							<I icon="bx-align-right" deco="text-warning" />
							<Text deco="text-default">Right</Text>
						</Toggle>
						<Toggle deco="toggle-default" name="align" id="justify" checked={data.align.includes('justify')} onChange={changeRadio}>
							<Box deco="box-list-col" />
							<I icon="bx-align-justify" deco="text-warning" />
							<Text deco="text-default">Justify</Text>
						</Toggle>
					</span>
				</Group>
			</Fieldset>
		</>
	);
}
