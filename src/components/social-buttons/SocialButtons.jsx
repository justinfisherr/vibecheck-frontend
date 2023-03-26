import React, { useRef, useEffect, useState } from 'react';

import ShareScreen from '../share-screen/ShareScreen';
import html2canvas from 'html2canvas';
import xIcon from '../../images/x-solid.svg';

import './social-button.css';

export default function SocialButtons() {
	const shareUrl = 'https://vibecheck.com';
	const shareButtonClicked = useRef(false);
	const downloadClicked = useRef(false);
	const [runShare, setRunShare] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const modalShareClicked = useRef(false);
	const myRef = useRef();

	useEffect(() => {
		const captureElement = async (element) => {
			const canvas = await html2canvas(element, {
				allowTaint: true,
				useCORS: true,
				onclone: (el) => {
					const elementsWithShiftedDownwardText = el.querySelectorAll(
						'.shifted-text'
					);
					elementsWithShiftedDownwardText.forEach((element) => {
						element.style.transform = 'translateY(-30%)';
					});
					const test = el.querySelector('.modal-wrapper');
					test.style.display = 'flex';
				},
			});

			const oldImage = document.querySelector('.rendered-img');
			if (oldImage) {
				oldImage.remove();
			}

			const modal = document.querySelector('.modal-img-wrapper');
			const img = document.createElement('img');
			img.src = canvas.toDataURL('image/png');
			img.className = 'rendered-img';
			modal.appendChild(img);

			if (downloadClicked.current) {
				const link = document.createElement('a');
				link.href = canvas.toDataURL('image/png');
				link.setAttribute('download', `Vibecheck.png`);
				document.body.appendChild(link);
				link.click();
				link.parentNode.removeChild(link);
			}

			let blob = await new Promise((resolve) =>
				canvas.toBlob(resolve, 'image/png')
			);
			return blob;
		};

		async function test(blob) {
			try {
				await navigator.share({
					url: shareUrl,
					title: 'vibecheck.io',
					text: 'Check your music compatability',
					files: [
						new File([blob], 'image.png', {
							type: 'image/png',
						}),
					],
				});
			} catch (err) {
				console.log(err);
			}
		}

		if (shareButtonClicked.current) {
			shareButtonClicked.current = false;
			setRunShare(false);
			captureElement(myRef.current).then(async (blob) => {
				if (!modalShareClicked.current && !downloadClicked.current) {
					await test(blob);
				}
				modalShareClicked.current = false;
				downloadClicked.current = false;
			});
		}
	}, [runShare]);

	function handleShareClick() {
		shareButtonClicked.current = true;
		setRunShare(true);
	}

	function toggleModal() {
		setShowModal((currentValue) => !currentValue);
		modalShareClicked.current = true;
		handleShareClick();
	}

	function handleDownload() {
		downloadClicked.current = true;
		handleShareClick();
	}

	function handleModalClick(e) {
		if (e.target.className === 'modal') {
			toggleModal();
		}
	}

	return (
		<div className='social-buttons-container'>
			<button className='share-button' onClick={() => toggleModal()}>
				SHARE
			</button>

			<div
				onClick={(e) => handleModalClick(e)}
				className={`modal${showModal ? '' : ' hide'}`}>
				<div className='modal-content'>
					<div className='close-button' onClick={() => toggleModal()}>
						<img src={xIcon} className='x-icon' alt='close window icon' />
					</div>
					<div className='modal-img-wrapper'>
						<ShareScreen myRef={myRef} />
					</div>
					<div className='modal-buttons-container'>
						<button className='modal-button' onClick={() => handleDownload()}>
							DOWNLOAD
						</button>
						<button className='modal-button' onClick={() => handleShareClick()}>
							SHARE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
