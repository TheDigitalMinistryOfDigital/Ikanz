'use strict';
import React, {Component} from "react";
import {Animated, Image, StyleSheet} from "react-native";

class Card extends Component {
    render() {
        return (
            <Animated.View style={[styles.card, this.props.animationStyles]} {...this.props.panResponder.panHandlers}>
                <Image source={this.props.picture} style={styles.picture} resizeMode={'contain'} />
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    picture: {
        width: 260,
        height: 260
    }
});

module.exports = Card;
