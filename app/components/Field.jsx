import React from 'react';

const fields = {
  1: {
    value: 'first_name',
    type: 'First name'
  },
  0: {
    value: 'id',
    type: 'Number'
  },
  2: {
    value: 'last_name',
    type: 'Last name'
  }
}

const Field = () => {
  return (
    <div>
      <div className="grid-x grid-padding-x">
        <div className="medium-6 cell">
          <span>Field Name</span>
        </div>
        <div className="medium-6 cell">
          <span>Type</span>
        </div>
      </div>
      <form>
        {
          Object.keys(fields).sort().map(field => {
            return (
              <div key={field} className="grid-x grid-padding-x">
                <div className="medium-6 cell">
                  <input type="text" defaultValue={fields[field].value} />
                </div>
                <div className="medium-6 cell">
                  <div className="input-group">
                    <input className="input-group-field" type="text" defaultValue={fields[field].type} />
                    <span onClick={() => console.log('hi')} className="input-group-label"><i className="fi-pencil"></i></span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </form>
      <div className="grid-x grid-padding-x">
        <div className="medium-6 cell">
          <button type="button" className="primary button">Add another field</button>
        </div>
      </div>
    </div>
  )
}

export default Field;
