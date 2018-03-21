import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import axios from 'axios';

import './Category.css';
import Aux from '../../../hoc/Aux/Aux';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container/Container';
import CategoryRows from './CategoryRows/CategoryRows';

const Category = (props) => {
    return (
        <div className="Category">
            {<CategoryRows />}
        </div>
    )
}

export default Category