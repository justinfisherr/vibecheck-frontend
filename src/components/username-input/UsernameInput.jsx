import React, { useState, useRef } from 'react';
import SearchResults from '../search-results/SearchResults';

import arrow from '../../images/arrow-right-solid.svg';
import './username-input.css';

import useFetch from '../../hooks/useFetch/useFetch';
import useSubmit from '../../hooks/useSubmit/useSubmit';

export default function UsernameInput({ setResponseData, vibeId }) {
	// Ref
	const currentInputValue = useRef();

	// Custom Hooks
	const sumbitCompare = useSubmit(vibeId, setResponseData);
	const [searchResults, getSearchResults] = useFetch(currentInputValue);

	// State
	const [input, setInput] = useState('');

	// Handler Functions
	function handleSend(input) {
		if (input) {
			sumbitCompare(input);
			setInput('');
		}
	}

	function handleInputChange(value) {
		currentInputValue.current = value;
		getSearchResults(value);
		setInput(value);
	}

	function handleKeyDown({ code, target }) {
		if (code === 'Enter' || code === 'NumpadEnter') {
			handleSend(target.value);
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
					value={input}
					onChange={(e) => handleInputChange(e.target.value)}
					onKeyDown={(e) => handleKeyDown(e)}
				/>

				<button
					className='compare-button'
					type='submit'
					onClick={() => handleSend(input)}>
					<img src={arrow} className='compare-arrow' alt='' />
				</button>
			</div>
			<div className='search-results-aligner'>
				<SearchResults
					results={searchResults}
					vibeId={vibeId}
					input={input}
					handleSend={handleSend}
				/>
			</div>
		</div>
	);
}
