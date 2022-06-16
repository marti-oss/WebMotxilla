import React from 'react';
import './switch.css';

const Switch = ({ isOn, handleToggle, onColor }) => {
    return (
      <>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="nenreact-switch-checkbox"
          id={`nenreact-switch-new`}
          type="checkbox"
        />
        <label
          style={{ background: isOn && '#06D6A0' }}
          className="nenreact-switch-label"
          htmlFor={`nenreact-switch-new`}
        >
          <span className={`nenreact-switch-button`} />
        </label>
      </>
    );
};

export default Switch;