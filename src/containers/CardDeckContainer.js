'use strict';
import React, {
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';
import CardDeck from '../components/CardDeck'

class CardDeckContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCardIndex: 0
        }
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

    renderCardView(card) {
        return (
            <View style={styles.container}>
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
