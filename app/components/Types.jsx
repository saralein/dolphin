import React from 'react';
import faker from 'faker';

const showCategories = (categories, activeCategory, updateCategory) => {
  return categories.map(category => {
    let style = '';

    if (category === activeCategory) style = 'is-active';

    return (
      <li key={category} className={style}>
        <a href="#" onClick={() => updateCategory(category)}>{category}</a>
      </li>
    )
  })
}

const showExamples = (type, activeCategory, num) => {
  const examples = [];

  for (let i = 0; i < num; i++) {
    examples.push(<span key={`${type}-${i}`}className="example">{faker[activeCategory][type]()}<br /></span>)
  }

  return examples;
}

const showTypes = activeCategory => {
  console.log('keys', Object.keys(activeCategory), faker[activeCategory])
  return Object.keys(faker[activeCategory]).map(type => {
    return (
      <li key={type}>{type}<br />
        {showExamples(type, activeCategory, 3).map(ex => ex)}
      </li>
    )
  })
}

const Types = ({toggleModal, categories, activeCategory, updateCategory}) => {
  return (
    <div className="types">
      <div
        onClick={toggleModal}
        className="align-right">
          <i className="align-right x fi-x" />
      </div>
      <h5>Types</h5>

      <ul className="menu">
        {showCategories(categories, activeCategory, updateCategory)}
      </ul>

      <ul>
        {showTypes(activeCategory)}
      </ul>
    </div>
  )
}

export default Types;
