import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import axios from 'axios';


import Aux from '../../../hoc/Aux';
import CategoryRows from './CategoryRows/CategoryRows';

export default class Category extends Component {

    render() {

        return (
            <div>
                {<CategoryRows />}
            </div>
        )
    }
}