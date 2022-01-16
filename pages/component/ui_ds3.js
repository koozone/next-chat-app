import Image from 'next/image';
import Link from 'next/link';
import {forwardRef} from 'react';

const getStyle = (props) => {
	const {tag, icon} = props;
	const myDeco = String(props.deco)
		.replace(/\s+/gm, '##')
		.split('##')
		.filter((item) => item.split('-')[0] == tag)[0];

	const defaultElement = (() => {
		switch (tag) {
			case 'img':
				return <div className={``} />;

			case 'icon':
				return <div className={`bx ${icon} pointer-events-none`} />;

			case 'text':
				return <div className={`inline-flex justify-center items-center`} />;

			case 'box':
				return <div className={``} />;

			case 'type':
				return <div className={`peer absolute top-0 left-0 appearance-none pointer-events-none`} />;
			case 'type2':
				return <div className={`bg-transparent outline-none truncate peer-disabled:opacity-30 peer-disabled:pointer-events-none`} />;

			case 'button':
				return <div className={`inline-flex justify-center items-center relative cursor-pointer select-none`} />;

			case 'a':
			case 'radio':
			case 'checkbox':
				return <div className={`group inline-flex justify-center items-center relative cursor-pointer select-none`} />;

			case 'input':
				return <div className={`group inline-flex justify-center items-center relative`} />;

			default:
				return <div className={``} />;
		}
	})();

	const element = (() => {
		switch (myDeco) {
			case 'icon-default':
				return <div className={`mr-2 last:mr-0 text-lg text-black/50 peer-checked:text-white peer-disabled:opacity-30`} />;
			case 'icon-primary':
				return (
					<div className={`mr-2 last:mr-0 text-lg text-black/50 group-hover:text-sky-800 group-focus-within:text-sky-400 peer-disabled:opacity-30`} />
				);
			case 'icon-danger':
				return (
					<div
						className={`mr-2 last:mr-0 text-lg text-black/50 group-hover:text-rose-800 group-focus-within:text-rose-400 peer-disabled:opacity-30`}
					/>
				);

			case 'text-default':
				return <div className={`text-sm text-slate-800 peer-checked:text-white peer-disabled:opacity-30`} />;
			case 'text-primary':
				return <div className={`text-sm text-sky-800 peer-checked:text-white peer-disabled:opacity-30`} />;
			case 'text-danger':
				return <div className={`text-sm text-rose-800 peer-checked:text-white peer-disabled:opacity-30`} />;

			case 'box-default':
				return (
					<div
						className={`absolute w-full h-full -z-20 rounded ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-slate-500 peer-checked:ring-slate-700 group-hover:peer-checked:bg-slate-600`}
					/>
				);
			case 'box-primary':
				return (
					<div
						className={`absolute w-full h-full -z-20 rounded ring-1 ring-sky-400 bg-sky-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600`}
					/>
				);
			case 'box-danger':
				return (
					<div
						className={`absolute w-full h-full -z-20 rounded ring-1 ring-rose-400 bg-rose-100 group-hover:bg-white peer-checked:bg-rose-500 peer-checked:ring-rose-700 group-hover:peer-checked:bg-rose-600 peer-disabled:opacity-30`}
					/>
				);

			case 'button-default':
				return <div className={`p-1`} />;

			default:
				return <div className={``} />;
		}
	})();

	return `${defaultElement.props.className} | ${element.props.className}`;
};

const getContent = (props) => {
	const {deco = '', icon, iconL, iconR, name} = props;

	return (
		<>
			{icon || iconL ? <I deco={deco} icon={icon || iconL} /> : ''}
			{name ? <span>{name}</span> : ''}
			{iconR ? <I deco={deco} icon={iconR} /> : ''}
		</>
	);
};

const getProps = (props) => {
	const {
		children,
		deco = '',
		className = '',
		href = '',
		onClick = (event) => {
			console.log(`${event.currentTarget.name} click!`);
		},
		onChange = (event) => {
			console.log(`${event.currentTarget.name} change!`);
		},
	} = props;

	const style = getStyle(props);
	const content = getContent(props);

	return {
		...props,
		// children: children ? children : content,
		children,
		deco,
		style,
		className,
		href,
		onClick,
		onChange,
	};
};

export const Img = (props) => {
	const {deco, style, className, name, src} = getProps({...props, tag: 'img'});

	return <img className={`${style} | ${className}`} name={name} src={src} />;
};

export const I = (props) => {
	const {deco, style, className} = getProps({...props, tag: 'icon'});

	return <i className={`${style} | ${className}`} />;
};

export const Type = (props) => {
	const {children, deco, style, className, name, id, href, type, onChange, checked, disabled} = getProps({...props, tag: 'type'});

	return <input type={type} className={style} id={id} name={name} onChange={onChange} checked={checked} disabled={disabled} />;
};
export const Type2 = forwardRef((props, ref) => {
	const {children, deco, style, className, name, id, href, type, value, placeholder, onChange, checked, disabled} = getProps({...props, tag: 'type2'});

	return <input type={type} className={style} id={id} name={name} ref={ref} onChange={onChange} value={value} placeholder={placeholder} />;
});

export const Label = (props) => {
	return Text(props);
};
export const Text = (props) => {
	const {children, deco, style, className, icon, iconL, iconR, name} = getProps({...props, tag: 'text'});

	return (
		<div className={`${style} | ${className}`}>
			{/* {children ? ( */}
			<>
				{icon || iconL ? <I deco={deco} icon={icon || iconL} /> : ''}
				{/* {name ? <Text deco={deco}>{name}</Text> :''} */}
				{children}
				{name ? <span>{name}</span> : ''}
				{iconR ? <I deco={deco} icon={iconR} /> : ''}
			</>
			{/* ) : (
			<>
				{icon || iconL ? <I deco={deco} icon={icon || iconL} /> : ''}
				{name ? <Text deco={deco}>{name}</Text> :''}
				{iconR ? <I deco={deco} icon={iconR} /> : ''}
			</>
		)
		} */}
		</div>
	);
};

export const Box = (props) => {
	const {children, deco, style, className, name} = getProps({...props, tag: 'box'});

	return <div className={`${style} | ${className}`}>{children}</div>;
};

export const A = (props) => {
	const {children, deco, style, className, name, href, onChange, checked = false, disabled} = getProps({...props, tag: 'a'});

	return (
		<Link href={href}>
			<label htmlFor={name} className={`${style} | ${className}`}>
				<Type {...props} type="checkbox" checked={checked} />
				{children}
			</label>
		</Link>
	);
};

export const Button = (props) => {
	const {children, deco, style, className, name, href, onClick, checked = false} = getProps({...props, tag: 'button'});

	return (
		<button type="button" className="group" name={name} onClick={onClick}>
			<label htmlFor={name} className={`${style} | ${className}`}>
				<Type {...props} type="checkbox" checked={checked} />
				{children}
			</label>
		</button>
	);
};
export const ButtonEx = (props) => {
	const {children, deco, style, className, icon, iconL, iconR, name, href, onClick, checked = false} = getProps({...props, tag: 'button'});

	return (
		<button type="button" className="group" name={name} onClick={onClick}>
			<label htmlFor={name} className={`${style} | ${className}`}>
				<Type {...props} type="checkbox" checked={checked} />
				{/* {children} */}

				<>
					{/* {icon || iconL || iconR || name || children ? <Box deco={deco}/> : ''} */}
					<Box deco={deco} />
					<Text {...props} />
				</>

				{/* <>
					<Box deco={deco}/>
					<Text {...props} />
				</> */}

				{/* {children ? ( */}
				{/* <>
						<Box deco={deco}/>
						<Text {...props} />
					</> */}
				{/* ) : (
					<>
						<Box deco={deco} />
						{icon || iconL ? <I deco={deco} icon={icon || iconL} /> : ''}
						{name ? <Text deco={deco}>{name}</Text> :''}
						{iconR ? <I deco={deco} icon={iconR} /> : ''}
					</>
					)
				} */}
			</label>
		</button>
	);
};

export const Checkbox = (props) => {
	const {children, deco, style, className, name, id, onChange, checked, disabled} = getProps({...props, tag: 'checkbox'});

	return (
		<label htmlFor={id} className={`${style} | ${className}`}>
			<Type {...props} type="checkbox" />
			{children}
		</label>
	);
};

export const Radio = (props) => {
	const {children, deco, style, className, name, id, onChange, checked, disabled} = getProps({...props, tag: 'radio'});

	return (
		<label htmlFor={id} className={`${style} | ${className}`}>
			<Type {...props} type="radio" />
			{children}
		</label>
	);
};

export const Input = forwardRef((props, ref) => {
	const {children, deco, style, className, name, id, onChange, icon, type, value, placeholder, disabled} = getProps({
		...props,
		tag: 'input',
	});

	return (
		<label htmlFor={id} className={`${style} | ${className}`}>
			<Type {...props} type="button" />
			{children}
			<Type2 {...props} type={type} />
		</label>
	);
});
