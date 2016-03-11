'use strict';
import React, {
    Component,
    StyleSheet,
    TouchableHighlight,
    Text,
    View
} from 'react-native';
import CardDeck from '../components/CardDeck'

class CardDeckContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCardIndex: 0
        };
        this.getNextCard = this.getNextCard.bind(this);
    }

    getNextCard() {
        let i = this.state.currentCardIndex + 1;
        this.setState({
            currentCardIndex: i
        });
        return this.props.cards[this.state.currentCardIndex];
    }

    render() {
        if (this.props.cards === null || (typeof this.props.cards == 'undefined')) {
            return <Text>Loading...</Text>
        }
        if(this.state.currentCardIndex === this.props.cards.length) {
            return <Text>No cards!</Text>;
        }
        return this.renderCardView(this.props.cards[0]);
    }

    navSearch() {
        this.props.navigator.push({
            id: 'getSearchResults'
        })
    }

    renderCardView(card) {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.navSearch.bind(this)}>
                    <Text>Search</Text>
                </TouchableHighlight>
                <CardDeck initialCard={card} getNextCard={this.getNextCard} />
            </View>
        )
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

module.exports = CardDeckContainer;
