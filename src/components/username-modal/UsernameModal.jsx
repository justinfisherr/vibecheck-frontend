import React, { useRef } from 'react';
import xIcon from '../../images/x-solid.svg';
import './username-modal.css';

export default function UsernameModal({ openModal, setOpenModal, userData }) {
  const currentInputValue = useRef('');
  const changeUserNameInput = useRef();

  function handleCloseModal({ target }) {
    if (target.id === 'allow-close') {
      setOpenModal(false);
      currentInputValue.current = '';
      console.log(changeUserNameInput);
      changeUserNameInput.current.value = '';
    }
  }

  function handleSaveNewUsername(newUsername) {
    alert(newUsername);
  }
  function handleKeyDown() {}
  function handleInputChange(value) {
    currentInputValue.current = value;
  }

  return (
    <div
      className={`username-modal-container ${
        openModal ? '' : 'hide-username-modal'
      }`}
      id='allow-close'
      onClick={(e) => handleCloseModal(e)}
    >
      <div className='change-username-input-container'>
        <h3 className='change-username-title'>Change your Vibe ID</h3>
        <div
          className='close-username-modal-x'
          onClick={(e) => handleCloseModal(e)}
        >
          <img
            src={xIcon}
            className='x-icon'
            id='allow-close'
            alt='close window icon'
          />
        </div>

        <div className='change-username-input-wrapper'>
          <p className='at-symbol'>ID</p>
          <input
            type='text'
            className='change-username-input'
            ref={changeUserNameInput}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />

          <button
            className='save-username-button'
            type='submit'
            onClick={() => handleSaveNewUsername(currentInputValue.current)}
          >
            Save
          </button>
        </div>
        <p className='change-username-modal-subtext'>
          Your ID: {userData.vibeId}
        </p>
      </div>
    </div>
  );
}
