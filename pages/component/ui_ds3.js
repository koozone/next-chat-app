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

			// case 'icon':
			// 	return <div className={`bx ${icon} pointer-events-none`} />;

			case 'text':
				return <div className={``} />;

			// case 'label':
			// 	return <div className={`inline-flex items-center`} />;

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

			case 'ccc':
				return <div className={`inline-flex justify-center items-center relative`} />;

			case 'input':
				return <div className={`group inline-flex justify-center items-center relative`} />;

			default:
				return <div className={``} />;
		}
	})();

	const element = (() => {
		switch (myDeco) {
			// case 'icon-default':
			// 	return <div className={`text-lg text-black/50 peer-checked:text-white peer-disabled:opacity-30`} />;
			// case 'icon-primary':
			// 	return (
			// 		<div className={`text-lg text-black/50 group-focus-within:text-sky-400 peer-disabled:opacity-30`} />
			// 	);
			// case 'icon-danger':
			// 	return (
			// 		<div
			// 			className={`text-lg text-black/50 group-focus-within:text-rose-400 peer-disabled:opacity-30`}
			// 		/>
			// 	);
			
			case 'text-default':
				return <div className={`mr-2 last:mr-0 text-sm text-slate-800 peer-checked:text-white peer-disabled:opacity-30`} />;
			case 'text-primary':
				return <div className={`mr-2 last:mr-0 text-sm text-sky-800 group-focus-within:text-sky-400 peer-checked:text-white peer-disabled:opacity-30`} />;
			case 'text-success':
				return <div className={`mr-2 last:mr-0 text-sm text-emerald-800 peer-checked:text-white peer-disabled:opacity-30`} />;
			case 'text-warning':
				return <div className={`mr-2 last:mr-0 text-sm text-amber-800 peer-checked:text-white peer-disabled:opacity-30`} />;
			case 'text-danger':
				return <div className={`mr-2 last:mr-0 text-sm text-rose-800 peer-checked:text-white peer-disabled:opacity-30`} />;

			// case 'label-default':
			// 	return <div className={`space-x-3`} />;

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
			case 'box-success':
				return (
					<div
						className={`absolute w-full h-full -z-20 rounded ring-1 ring-emerald-400 bg-emerald-100 group-hover:bg-white peer-checked:bg-emerald-500 peer-checked:ring-emerald-700 group-hover:peer-checked:bg-emerald-600`}
					/>
				);
			case 'box-warning':
				return (
					<div
						className={`absolute w-full h-full -z-20 rounded ring-1 ring-amber-400 bg-amber-100 group-hover:bg-white peer-checked:bg-amber-500 peer-checked:ring-amber-700 group-hover:peer-checked:bg-amber-600`}
					/>
				);
			case 'box-danger':
				return (
					<div
						className={`absolute w-full h-full -z-20 rounded ring-1 ring-rose-400 bg-rose-100 group-hover:bg-white peer-checked:bg-rose-500 peer-checked:ring-rose-700 group-hover:peer-checked:bg-rose-600 peer-disabled:opacity-30`}
					/>
				);
			case 'box-round':
				return (
					<div
					className={`absolute w-full h-full -z-20 rounded-full ring-1 ring-sky-400 bg-sky-100 group-hover:bg-white peer-checked:bg-sky-500 peer-checked:ring-sky-700 group-hover:peer-checked:bg-sky-600 peer-disabled:opacity-30`}
					/>
					);
			case 'box-trans':
				return <div className={`absolute w-full h-full -z-20 rounded bg-black/0 group-hover:bg-black/5`} />;
			case 'box-item':
				return <div className={`absolute w-full h-full -z-20 ring-1 ring-slate-400 bg-slate-100 group-hover:bg-white peer-checked:bg-slate-500 peer-checked:ring-slate-700 group-hover:peer-checked:bg-slate-600 group-first:rounded-l-full group-last:rounded-r-full`} />;
			case 'box-input-round':
				return <div className={`absolute w-full h-full -z-20 rounded-full ring-1 ring-slate-400 bg-slate-100 group-focus-within:ring-sky-400 group-focus-within:bg-white peer-disabled:opacity-30`} />;

			case 'ccc-default':
				return <div className={`p-1`} />;

			case 'button-default':
				return <div className={`p-1`} />;

			case 'input-default':
				return <div className={`p-1`} />;

			case 'type2-default':
				return <div className={`text-sm text-slate-800 placeholder-slate-400 peer-disabled:opacity-30`} />;

			default:
				return <div className={``} />;
		}
	})();

	return `${defaultElement.props.className} | ${element.props.className}`;
};

// const getContent = (props) => {
// 	const {deco = '', icon, iconL, iconR, text} = props;

// 	return (
// 		<>
// 			{icon || iconL ? <I deco={deco} icon={icon || iconL} /> : ''}
// 			{text ? <span>{text}</span> : ''}
// 			{iconR ? <I deco={deco} icon={iconR} /> : ''}
// 		</>
// 	);
// };

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
	// const content = getContent(props);

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

	return <img className={`${`${style} | ${className}`} | ${className}`} name={name} src={src} />;
};

export const I = (props) => {
	const {deco, style, className, icon} = getProps({...props, tag: 'text'});

	// return <i className={`bx ${icon} pointer-events-none ${style} | ${className}`} />;
	return <>
		{
			(icon) ? <i className={`bx ${icon} pointer-events-none ${style} | ${className}`} /> : ''
		}
	</>;
};

export const Text = (props) => {
	const {children, deco, style, className, icon, iconL, iconR, name} = getProps({...props, tag: 'text'});

	// return <span className={`${style} | ${className}`}>{children}</span>;
	return <>
		{
			(children) ? <span className={`${style} | ${className}`}>{children}</span> : ''
		}
	</>;
};

export const Box = (props) => {
	const {children, deco, style, className, name} = getProps({...props, tag: 'box'});

	return <div className={`${style} | ${className}`}></div>;
};
export const BoxEx = (props) => {
	const {children, deco, style, className, name} = getProps({...props, tag: 'box'});

	return <>
		{
			(style != ' | ') ? <div className={`${style} | ${className}`}></div> : ''
		}
	</>;
};





export const Label = (props) => {
	const {children, deco, style, className, icon, iconL, iconR, text} = getProps({...props, tag: 'label'});

	return <>
		<I deco={deco} icon={icon || iconL} />
		{children}
		<Text deco={deco}>{text}</Text>
		<I deco={deco} icon={iconR} />
	</>
};




export const Type = (props) => {
	const {children, deco, style, className, name, id, href, type, onChange, checked, disabled} = getProps({...props, tag: 'type'});

	return <input type={type} className={`${style} | ${className}`} id={id} name={name} onChange={onChange} checked={checked} disabled={disabled} />;
};
export const Type2 = forwardRef((props, ref) => {
	const {children, deco, style, className, name, id, href, type, value, placeholder, onChange, checked, disabled} = getProps({...props, tag: 'type2'});

	return <input type={type} className={`${style} | ${className}`} id={id} name={name} ref={ref} onChange={onChange} value={value} placeholder={placeholder} />;
});





export const Basket = (props) => {
	const {children, deco, style, className, icon, iconL, iconR, name, text, id, type, onChange, checked = false, disabled} = props;

	return (
		<label htmlFor={id} className={`${style} | ${className}`}>
			<Type {...props} type={type} checked={checked} />
			<Box deco={deco} />
			<Label deco={deco} icon={icon || iconL} iconR={iconR} text={text} />
			{children}
		</label>
	);
};






export const A = (props) => {
	const {children, deco, style, className, name, id, href, onChange, checked = false, disabled} = getProps({...props, tag: 'a'});

	return (
	<Link href={href}>
		<label htmlFor={id} className={`${style} | ${className}`}>
			<Type {...props} type="checkbox" checked={checked} />
			{children}
		</label>
	</Link>
	);
};
export const AEx = (props) => {
	const {children, deco, style, className, name, id, href, onChange, checked = false, disabled} = getProps({...props, tag: 'a'});

	return (
	<Link href={href}>
		<Basket {...newProps} type="checkbox" />
	</Link>
	);
};

export const Button = (props) => {
	const {children, deco, style, className, name, id, href, onClick, checked = false} = getProps({...props, tag: 'button'});

	return (
	<button type="button" className="group" name={name} onClick={onClick}>
		<label htmlFor={id} className={`${style} | ${className}`}>
			<Type {...props} type="checkbox" checked={checked} />
			{children}
		</label>
	</button>
	);
};
export const ButtonEx = (props) => {
	const newProps = getProps({...props, tag: 'button'});
	// const {children, deco, style, className, icon, iconL, iconR, name, text, id, href, onClick, checked = false} = getProps({...props, tag: 'button'});
	const {children, name, onClick} = newProps;

	return (
	<button type="button" className="group" name={name} onClick={onClick}>
		{/* <label htmlFor={id} className={`${style} | ${className}`}>
			<Type {...props} type="checkbox" checked={checked} />
			<Box deco={deco} />
			<Label deco={deco} icon={icon || iconL} iconR={iconR} text={text} />
			{children}
		</label> */}
		<Basket {...newProps} type="checkbox" />
	</button>
	);
};

export const Checkbox = (props) => {
	const {children, deco, style, className, icon, iconL, iconR, name, text, id, onChange, checked, disabled} = getProps({...props, tag: 'checkbox'});

	return (
		<label htmlFor={id} className={`${style} | ${className}`}>
			<Type {...props} type="checkbox" checked={checked} />
			<Box deco={deco} />
			<Label deco={deco} icon={icon || iconL} iconR={iconR} text={text} />
			{children}
		</label>
	);
};
export const CheckboxEx = (props) => {
	// const {children, deco, style, className, icon, iconL, iconR, name, text, id, onChange, checked = false, disabled} = getProps({...props, tag: 'ccc'});
	const newProps = getProps({...props, tag: 'ccc'});
	const {children} = newProps;

	return (
		// <label htmlFor={id} className={`${style} | ${className}`}>
		// 	<Type {...props} type="checkbox" checked={checked} />
		// 	<Box deco={deco} />
		// 	<Label deco={deco} icon={icon || iconL} iconR={iconR} text={text} />
		// 	{children}
		// </label>
		<Basket {...newProps} type="checkbox" />
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
export const InputEx = forwardRef((props, ref) => {
	const newProps = getProps({...props, tag: 'input'});
	// const {children, deco, style, className, name, id, onChange, icon, type, value, placeholder, disabled} = getProps({
	// 	...props,
	// 	tag: 'input',
	// });
	const {children, name, onClick, type} = newProps;

	return (
		// <label htmlFor={id} className={`${style} | ${className}`}>
		// 	<Type {...props} type="button" />
		// 	{children}
		// 	<Type2 {...props} type={type} />
		// </label>
		<Basket {...newProps} type="button">
			{children}
			<Type2 {...props} ref={ref} />
		</Basket>
	);
});
