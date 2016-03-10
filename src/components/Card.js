'use strict';
import React, {
    Animated,
    Component,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Animated.View style={[styles.card, this.props.animationStyles]} {...this.props.panResponder.panHandlers}>
                <Image source={this.props.picture} style={styles.picture} />
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 340,
        padding: 10,
        backgroundColor: '#cccccc'
    },
    picture: {
        width: 280,
        height: 280
    }
});

module.exports = Card;
