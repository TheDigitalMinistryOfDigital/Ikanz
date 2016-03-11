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
        this.props.getSearchResults(text.text);
    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.textChanged({text})}
                    value={this.state.text}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width:300,
        borderColor: '#000',
        backgroundColor: '#fff',
        borderWidth: 1
    }
});

module.exports = Search;
