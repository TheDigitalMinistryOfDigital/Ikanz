'use strict';
import React, {Component} from "react";
import {Image, ListView, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import Search from "../components/Search";
import _ from "lodash";
import Data from './Data';

class SearchContainer extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(Data.pictures)
        };
        this.getSearchResults = this.getSearchResults.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.pressRow = this.pressRow.bind(this);
    }

    getSearchResults(query) {
        let regex = new RegExp(_.escapeRegExp(query), 'gi');

        let tags = _.filter(Data.tags, (tag) => {
            return tag.name.match(regex) !== null;
        });

        let tagIds = _.flatten(_.map(tags, (tag) => {
            return tag.pictures;
        }));

        this.setState({dataSource: this.state.dataSource.cloneWithRows(
            _.filter(Data.pictures, (picture) => {
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
        let index = _.findIndex(Data.pictures, (picture) => {
            return picture.id === rowData.id;
        });

        const { navigate } = this.props.navigation;
        navigate('Cards', { currentCardIndex: index });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableHighlight onPress={() => navigate('Cards', { cardData: Data })}>
                        <Text style={styles.cardsButton}>Ikanz</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.search}>
                    <Search getSearchResults={this.getSearchResults} />
                </View>
                <ListView contentContainerStyle={styles.list}
                          dataSource={this.state.dataSource}
                          renderRow={this.renderRow}
                          enableEmptySections={true} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
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
        padding: 4,
        width: 80,
        height: 80
    },
    picture: {
        width: 64,
        height: 64
    },
    cardsButton: {
        color: '#111',
        padding: 10,
        fontSize: 18
    },
    header: {
        alignItems: 'flex-start',
        paddingLeft: 10
    }
});

module.exports = SearchContainer;
