'use strict';
import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Search from '../components/Search'

class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    render() {
        return <Search />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffcc'
    }
});

module.exports = SearchContainer;
