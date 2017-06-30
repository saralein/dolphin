import React from 'react';
import faker from 'faker';

const showExamples = (type, num) => {
  const examples = [];

  for (let i = 0; i < num; i++) {
    examples.push(<span key={`${type}-${i}`}className="example">{faker.name[type]()}<br /></span>)
  }

  return examples;
}

const Types = () => {
  return (
    <div className="types">
      <div className="align-right">
        <i className="align-right x fi-x"></i>
      </div>
      <h5>Types</h5>
      <span>Person</span>
      <ul>
        {
          Object.keys(faker.name).map(type => {
            return (
              <li key={type}>{type}<br />
                {showExamples(type, 3).map(ex => ex)}
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}

export default Types;
