'use strict';
import React, {
    Component,
    Image,
    ListView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import Search from '../components/Search'

class SearchContainer extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            term: '',
            results: [],
            dataSource: ds.cloneWithRows(this.genRows({}))
        };
        this.getSearchResults = this.getSearchResults.bind(this);
        this.pressRow = this.pressRow.bind(this);
        this.genRows = this.genRows.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    getSearchResults() {
        let t = this.state.term;
        // do search
        this.setState({
            results: [t]
        });
    }

    renderRow(rowData, sectionID, rowID) {
        var imgSource = this.props.cards[0].picture;
        return (
            <TouchableHighlight onPress={() => this.pressRow(rowID)} underlayColor='rgba(0,0,0,0)'>
                <View>
                    <View style={styles.row}>
                        <Image style={styles.thumb} source={imgSource} />
                        <Text style={styles.text}>
                            {rowData}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    genRows(pressData) {
        var dataBlob = [];
        for (var ii = 0; ii < 100; ii++) {
            var pressedText = pressData[ii] ? ' (X)' : '';
            dataBlob.push('Cell ' + ii + pressedText);
        }
        return dataBlob;
    }

    pressRow(rowID) {
        this._pressData[rowID] = !this._pressData[rowID];
        this.setState({dataSource: this.state.dataSource.cloneWithRows(
            this.genRows(this._pressData)
        )});
    }

    render() {
        return (
            <View style={styles.container}>
                <Search getSearchResults={this.getSearchResults} />
                <ListView contentContainerStyle={styles.list}
                          dataSource={this.state.dataSource}
                          renderRow={this.renderRow}
                />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    row: {
        justifyContent: 'center',
        padding: 5,
        margin: 10,
        width: 100,
        height: 100,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CCC'
    },
    thumb: {
        width: 64,
        height: 64
    },
    text: {
        flex: 1,
        marginTop: 5,
        fontWeight: 'bold'
    }
});

module.exports = SearchContainer;
