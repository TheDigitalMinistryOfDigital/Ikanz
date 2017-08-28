'use strict';
import React, {Component} from "react";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import CardDeck from "../components/CardDeck";
import Data from './Data';

class CardDeckContainer extends Component {
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;

        let currentCardIndex = 0;
        if(params !== null
            && typeof params != 'undefined'
            && params.currentCardIndex !== null
            && typeof params.currentCardIndex != 'undefined') {
            currentCardIndex = params.currentCardIndex;
        }

        this.state = {
            currentCardIndex: currentCardIndex,
            cardData: Data
        };
        this.getNextCard = this.getNextCard.bind(this);
    }

    getNextCard() {
        let i = (this.state.currentCardIndex === (this.state.cardData.pictures.length - 1)) ? 0 : this.state.currentCardIndex + 1;
        this.setState({
            currentCardIndex: i
        });
        return this.state.cardData.pictures[this.state.currentCardIndex];
    }

    render() {
        const { params } = this.props.navigation.state;
        if (this.state.cardData === null || (typeof this.state.cardData == 'undefined')) {
            return <Text>Loading... { params }</Text>
        }
        return this.renderCardView(this.state.cardData.pictures[this.state.currentCardIndex]);
    }


    renderCardView(card) {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={{alignItems: 'flex-end'}}>
                    <TouchableHighlight onPress={() => navigate('Search')}>
                        <Text style={{color: '#000', padding: 10}}>Search</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.cards}>
                    <CardDeck initialCard={card} getNextCard={this.getNextCard} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#fff'
    },
    cards: {
        padding: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

module.exports = CardDeckContainer;
