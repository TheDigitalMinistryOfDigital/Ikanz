'use strict';
import React, {
    Component,
    StyleSheet,
    TextInput,
    View
} from 'react-native';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    textChanged(text) {
        this.setState({text})
        this.props.getSearchResults(text);
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40, width:300, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.textChanged({text})}
                    value={this.state.text}
                />
            </View>
        )
    }
}

module.exports = Search;
