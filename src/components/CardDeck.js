'use strict';
import React, {Component} from "react";
import {Animated, PanResponder, View} from "react-native";
import Card from "./Card";

const SWIPE_THRESHOLD = 20;

class CardDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY(),
            enter: new Animated.Value(0.5),
            currentCard: this.props.initialCard
        };
        this.animateEntrance = this.animateEntrance.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    animateEntrance() {
        Animated.spring(this.state.enter, { toValue: 1, friction: 8 } ).start();
    }

    componentDidMount() {
        this.animateEntrance();
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderGrant: (e, gestureState) => {
                this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
                this.state.pan.setValue({x: 0, y: 0});
            },
            onPanResponderMove: Animated.event([null, {dx: this.state.pan.x, dy: this.state.pan.y}]),
            onPanResponderRelease: (e, {vx, vy}) => {
                this.state.pan.flattenOffset();
                var velocity;

                if (vx >= 0) {
                    velocity = this.clamp(vx, 3, 5);
                }
                else if (vx < 0) {
                    velocity = this.clamp(vx * -1, 3, 5) * -1;
                }

                if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD ||
                    Math.abs(this.state.pan.y._value) > SWIPE_THRESHOLD) {
                    Animated.decay(this.state.pan, {
                        velocity: {x: velocity, y: vy},
                        deceleration: 0.98
                    }).start(this.resetState)
                }
                else {
                    Animated.spring(this.state.pan, {
                        toValue: {x: 0, y: 0},
                        friction: 4
                    }).start()
                }
            }
        });
    }

    clamp(value, min, max) {
        return min < max  ? (value < min ? min : value > max ? max : value) : (value < max ? max : value > min ? min : value)
    }

    resetState() {
        this.state.pan.setValue({x: 0, y: 0});
        this.state.enter.setValue(0);
        this.setState({
            currentCard: this.props.getNextCard()
        });
        this.animateEntrance();
    }

    render() {
        let { pan, enter, } = this.state;
        let [translateX, translateY] = [pan.x, pan.y];
        let rotate = pan.x.interpolate({inputRange: [-300, 0, 340], outputRange: ["-30deg", "0deg", "30deg"]});
        let opacity = pan.x.interpolate({inputRange: [-300, 0, 340], outputRange: [0.5, 1, 0.5]});
        let scale = enter;
        let animatedCardStyles = {transform: [{translateX}, {translateY}, {rotate}, {scale}], opacity};

        return (
            <View>
                <Card picture={this.state.currentCard.src}
                      animationStyles={animatedCardStyles}
                      panResponder={this._panResponder}
                      style={{zIndex: 1}}
                />
            </View>
        );
    }
}

module.exports = CardDeck;
