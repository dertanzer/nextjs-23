import { CrownImage } from '@components/CrownImage';
import React, { Dispatch, SetStateAction } from "react";
import Modal from 'react-modal';

type DialogProps = {
	show: boolean,
	children?: any,
	onClose: Dispatch<SetStateAction<boolean>>
}

export const Dialog: React.FC<DialogProps> = ({ show, onClose, children = null }) => {

	Modal.setAppElement('#__next');

	return (
		<Modal
			isOpen={show}
			contentLabel="Dialog"
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
			preventScroll={true}
			onRequestClose={() => onClose(false)}
			style={{
				overlay: {
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: 'rgba(255, 255, 255, 0.75)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				},
				content: {
					position: 'relative',
					border: 'none',
					background: '#fff',
					overflow: 'auto',
					WebkitOverflowScrolling: 'touch',
					borderRadius: '0px',
					outline: 'none',
					padding: '0px',
					display: 'flex',
					inset: 'unset',
					flexDirection: 'column',
					justifyContent: 'space-around',
					alignItems: 'center',
					width: '100%',
					height: '100%',
					maxWidth: 'min(580px, 80vw)',
					maxHeight: 'min(480px, 80vh)',
				}
			}}
		>
			<div className="ReactModal__Body">
				{children}
				<CrownImage className="modal-crown"/>
			</div>
		</Modal >
	);

}

export default Dialog;