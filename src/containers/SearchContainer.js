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
import _ from 'underscore'

class SearchContainer extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.cardData.pictures)
        };
        this.getSearchResults = this.getSearchResults.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    componentWillMount() {
        this.pressData = {};
    }

    getSearchResults(query) {
        let regex = new RegExp(query, 'gi');
        let tags = _.filter(this.props.cardData.tags, (tag) => {
            return tag.name.match(regex) != null;
        });

        let tagIds = _.flatten(_.map(tags, (tag) => {
            return tag.pictures;
        }));

        this.setState({dataSource: this.state.dataSource.cloneWithRows(
            _.filter(this.props.cardData.pictures, (picture) => {
                return _.indexOf(tagIds, picture.id) > -1;
            })
        )});
    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableHighlight onPress={() => this.pressRow(rowID)} underlayColor='rgba(0,0,0,0)'>
                <View>
                    <View style={styles.row}>
                        <Image style={styles.thumb} source={rowData.src} />
                        <Text style={styles.text}>
                            {rowData.id}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
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
