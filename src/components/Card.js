'use strict';
import React, { Component } from 'react';
import {
    Animated,
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
        width: 282,
        height: 282,
        borderStyle: 'solid',
        borderColor: '#cccccc',
        borderWidth: 1
    },
    picture: {
        width: 280,
        height: 280
    }
});

module.exports = Card;
