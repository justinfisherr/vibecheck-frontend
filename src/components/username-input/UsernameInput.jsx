import React, { useState, useRef } from 'react';
import './username-input.css';
import arrow from '../../images/arrow-right-solid.svg';
import SearchResults from '../search-results/SearchResults';
import useSubmit from '../../hooks/useSubmit/useSubmit';
import useFetch from '../../hooks/useFetch/useFetch';

export default function UsernameInput({ setResponseData, vibeId }) {
	// State
	const currentInputValue = useRef();
	const [userInput, setInput] = useState('');

	// Custom Hooks
	const sumbitCompare = useSubmit(vibeId, setResponseData);
	const [searchResults, getSearchResultsFor] = useFetch(currentInputValue);

	// Handler Functions
	function handleSend(chosenUser) {
		if (chosenUser) {
			sumbitCompare(chosenUser);
			setInput('');
		}
	}

	function handleInputChange(newUserInput) {
		currentInputValue.current = newUserInput;
		getSearchResultsFor(newUserInput);
		setInput(newUserInput);
	}

	function handleKeyDown({ code, target }) {
		if (code === 'Enter' || code === 'NumpadEnter') {
			const chosenUser = target.value;
			handleSend(chosenUser);
		}
	}

	return (
		<div className='username-form'>
			<div
				className={`input-wrapper ${
					searchResults.data.length !== 0 ? 'bottom-line' : ''
				}`}>
				<p className='at-symbol'>ID</p>
				<input
					type='text'
					className='username-input'
					value={userInput}
					onChange={(e) => handleInputChange(e.target.value)}
					onKeyDown={(e) => handleKeyDown(e)}
				/>

				<button
					className='compare-button'
					type='submit'
					onClick={() => handleSend(userInput)}>
					<img src={arrow} className='compare-arrow' alt='' />
				</button>
			</div>
			<div className='search-results-aligner'>
				<SearchResults
					results={searchResults}
					vibeId={vibeId}
					input={userInput}
					handleSend={handleSend}
				/>
			</div>
		</div>
	);
}
