import ReactModal from 'react-modal';

ReactModal.setAppElement('#__next');

const MyModal = ({onSubmit, onClose}) => {
	const handleClickSubmit = () => {
		onSubmit();
	};

	const handleClickCancel = () => {
		onClose();
	};

	return (
		<ReactModal
			isOpen
			onRequestClose={handleClickCancel}
			style={{
				overlay: {
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
				},
				content: {
					position: 'absolute',
					top: '200px',
					left: '200px',
					right: '200px',
					bottom: '200px',
					border: '1px solid #ccc',
					background: '#fff',
					overflow: 'auto',
					WebkitOverflowScrolling: 'touch',
					borderRadius: '12px',
					outline: 'none',
					padding: '20px',
				},
			}}
		>
			<div>모달 입니다.</div>

			<div>
				<button onClick={handleClickSubmit}>확인</button>
				<button onClick={handleClickCancel}>취소</button>
			</div>
		</ReactModal>
	);
};

export default MyModal;
