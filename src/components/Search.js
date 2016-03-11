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

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
            </View>
        )
    }
}

module.exports = Search;
