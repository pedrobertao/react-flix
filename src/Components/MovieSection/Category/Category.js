import React from 'react';
import './Category.css';
import CategoryRows from './CategoryRows/CategoryRows';

const Category = (props) => {
    return (
        <div className="Category">
            {<CategoryRows />}
        </div>
    )
}

export default Category