import React from 'react';

const CategoryChooser = (props) => {
    return (
        <div className="category-chooser">
            Categories:
            {props.categories.map(category => (
                <a key={category.name}
                   href={`/${category.path}`}>{category.name}</a>
            ))}
        </div>
    )
};

export default CategoryChooser;