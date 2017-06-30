import React from 'react';

const Actions = () => {
  return (
    <div className="grid-x grid-padding-x">
      <div className="medium-3 cell">
        <button
          type="button"
          className="primary button">
            <i className="fi-upload-cloud size-18 pad-right" />
            Load into org
        </button>
      </div>
      <div className="medium-3 cell">
        <button
          type="button"
          className="primary button">
            <i className="fi-save size-18 pad-right" />
            Save
        </button>
      </div>
    </div>
  )
}

export default Actions;
