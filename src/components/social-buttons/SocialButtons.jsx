import './social-button.css';

import html2canvas from 'html2canvas';
import React, { useContext, useEffect, useRef, useState } from 'react';

import { animationContext } from '../../context/animationContext';
import xIcon from '../../images/x-solid.svg';
import ShareScreen from '../share-screen/ShareScreen';
import Spinner from '../spinner/Spinner';

export default function SocialButtons() {
	const shareUrl = 'thevibecheck.io';
	const shareButtonClicked = useRef(false);
	const downloadClicked = useRef(false);
	const shareClickedBefore = useRef(false);
	const [runShare, setRunShare] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [shareLoading, setShareLoading] = useState(false);
	const modalShareClicked = useRef(false);
	const myRef = useRef();
	const animationData = useContext(animationContext);

	useEffect(() => {
		const captureElement = async (element) => {
			const canvas = await html2canvas(element, {
				allowTaint: true,
				useCORS: true,
				onclone: (el) => {
					const elementsWithShiftedDownwardText =
						el.querySelectorAll('.shifted-text');
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
			setShareLoading(false);
			shareClickedBefore.current = true;

			if (downloadClicked.current) {
				const link = document.createElement('a');
				link.href = canvas.toDataURL('image/png');
				link.setAttribute('download', 'Vibecheck.png');
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
			await navigator.share({
				url: shareUrl,
				title: 'thevibecheck.io',
				text: `${animationData.current.users.user2.username} and I are a ${animationData.current.match_profile.match_percent}% match according to our music taste! Test your compatibility at thevibecheck.io`,
				files: [
					new File([blob], 'image.png', {
						type: 'image/png',
					}),
				],
			});
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
		setShareLoading(true);
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

	function handleModalClick({ target }) {
		if (target.id === 'allow-close') {
			toggleModal();
		}
	}

	return (
		<div className='social-buttons-container'>
			<button
				className='button social-button focus-outline'
				tabIndex='0'
				onClick={() => toggleModal()}>
				SHARE
			</button>

			<div
				onClick={(e) => handleModalClick(e)}
				tabIndex='0'
				id='allow-close'
				className={`focus-outline modal ${showModal ? '' : 'hide'}`}>
				<div className='modal-content'>
					<div className='modal-img-wrapper'>
						{shareLoading && !shareClickedBefore.current && <Spinner />}
						<ShareScreen myRef={myRef} />
					</div>
					<div className='modal-buttons-container'>
						<button
							className='modal-button focus-outline'
							tabIndex='0'
							onClick={() => handleDownload()}>
							DOWNLOAD
						</button>
						<button
							className='modal-button focus-outline'
							tabIndex='0'
							onClick={() => handleShareClick()}>
							SHARE
						</button>
					</div>

					<p className='plug-text'>
						Like Vibe Check? Follow us{' '}
						<a
							className='plug-link focus-outline'
							href='https://www.linkedin.com/in/justinthedev/'
							target='_blank'
							rel='noopener noreferrer'>
							Justin Fisher
						</a>{' '}
						and{' '}
						<a
							className='plug-link focus-outline'
							href='https://www.linkedin.com/in/webdevlex/'
							target='_blank'
							rel='noopener noreferrer'>
							Alexis Martin
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
