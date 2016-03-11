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
            currentCardIndex: props.currentCardIndex || 0
        };
        this.getNextCard = this.getNextCard.bind(this);
    }

    getNextCard() {
        let i = (this.state.currentCardIndex === (this.props.cardData.pictures.length - 1)) ? 0 : this.state.currentCardIndex + 1;
        this.setState({
            currentCardIndex: i
        });
        return this.props.cardData.pictures[this.state.currentCardIndex];
    }

    render() {
        if (this.props.cardData === null || (typeof this.props.cardData == 'undefined')) {
            return <Text>Loading...</Text>
        }
        return this.renderCardView(this.props.cardData.pictures[this.state.currentCardIndex]);
    }

    navSearch() {
        this.props.navigator.push({
            id: 'search',
            title: 'Search'
        })
    }

    renderCardView(card) {
        return (
            <View style={styles.container}>
                <View style={{alignItems: 'flex-end'}}>
                    <TouchableHighlight onPress={this.navSearch.bind(this)}>
                        <Text style={{color: '#fff', padding: 10}}>Search</Text>
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
        backgroundColor: '#000'
    },
    cards: {
        padding: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

module.exports = CardDeckContainer;
