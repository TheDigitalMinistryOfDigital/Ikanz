'use strict';
import React, { Component } from 'react';
import {
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
        this.pressRow = this.pressRow.bind(this);
    }

    getSearchResults(query) {
        let regex = new RegExp(query, 'gi');
        let tags = _.filter(this.props.cardData.tags, (tag) => {
            return tag.name.match(regex) !== null;
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
            <TouchableHighlight onPress={() => this.pressRow(rowData)} underlayColor='rgba(0,0,0,0)'>
                <View style={styles.item}>
                    <Image style={styles.picture} source={rowData.src} />
                </View>
            </TouchableHighlight>
        );
    }

    pressRow(rowData) {
        let index = _.findIndex(this.props.cardData.pictures, (picture) => {
            return picture.id === rowData.id;
        });

        this.props.navigator.push({
            id: 'cards', props: { currentCardIndex: index },
            title: 'Cards'
        });
    }

    navCards() {
        this.props.navigator.push({
            id: 'cards',
            title: 'Cards'
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems: 'flex-start'}}>
                    <TouchableHighlight onPress={this.navCards.bind(this)}>
                        <Text style={{color: '#111', padding: 10}}>Ikanz</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.search}>
                    <Search getSearchResults={this.getSearchResults} />
                </View>
                <ListView contentContainerStyle={styles.list}
                          dataSource={this.state.dataSource}
                          renderRow={this.renderRow} />
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    text: {
        marginTop: 5,
        fontWeight: 'bold'
    },
    search: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    item: {
        margin: 10,
        padding: 5,
        width: 80,
        height: 80
    },
    picture: {
        width: 64,
        height: 64
    }
});

module.exports = SearchContainer;
