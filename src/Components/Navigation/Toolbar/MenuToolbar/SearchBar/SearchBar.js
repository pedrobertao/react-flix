
import React, { Component } from 'react';
import {
    Search,
    Input
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter, Redirect, Route } from 'react-router-dom';
import * as actionsCreators from '../../../../../store/actions'

class SearchBar extends Component {

    state = {
        value: '',
        isSearching: false
    }
    inputSearchHandler = (event, data) => {
        let query = data.value.replace(/\s/g, '+');
        this.setState({ isSearching: true, value: data.value });
        if (!this.state.isSearching) {
            console.log("CAI AQUI !");
            this.props.history.push('/search');
        }
        this.props.fetchSearchResults(query);
    }

    render() {
        return (
            <Search
                showNoResults={false}
                value={!this.state.isSearching ? '' : this.state.value}
                onBlur={() => { this.setState({ isSearching: false }) }}
                onSearchChange={(e, d) => this.inputSearchHandler(e, d)}
                {...this.props }
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movielist: state.movieList.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSearchResults: (query) => dispatch(actionsCreators.fetchResultsSearch(query))
    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));