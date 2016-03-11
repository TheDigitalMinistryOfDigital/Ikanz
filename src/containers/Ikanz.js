'use strict';
import React, {
    Component,
    Navigator
} from 'react-native';

import CardDeckContainer from './CardDeckContainer';
import SearchContainer from './SearchContainer';

const CARD_DATA = {
    pictures: [
        { id: 1, src: require('../img/cogs_technology_mechanics_industry_engineer_process.png') },
        { id: 2, src: require('../img/factory_industry_production_manfacturing_commerce.png') },
        { id: 3, src: require('../img/flag_signal_nation_identification_start.png') },
        { id: 4, src: require('../img/light_bulb_idea_inspiration_innovation_thought_invention_brightness.png') },
        { id: 5, src: require('../img/magnet_appeal_attract_bait_attraction_energy_strength.png') },
        { id: 6, src: require('../img/magnifying_glass_focus_search_detail_specialisation.png') },
        { id: 7, src: require('../img/mountain_objective_obstacle_challenge.png') },
        { id: 8, src: require('../img/puzzle_piece_part_fitting_interlocking_detail_share_collaborate.png') },
        { id: 9, src: require('../img/target_objective_hit_solution_clarity.png') },
        { id: 10, src: require('../img/carrying_hauling_holding.png') },
        { id: 11, src: require('../img/heavy_overstretched.png') },
        { id: 12, src: require('../img/walking_running.png') }
    ],
    tags: [
        { name: 'cogs', pictures: [1] },
        { name: 'technology', pictures: [1] },
        { name: 'mechanics', pictures: [1] },
        { name: 'industry', pictures: [1, 2] },
        { name: 'engineer', pictures: [1] },
        { name: 'process', pictures: [1] },
        { name: 'factory', pictures: [2] },
        { name: 'production', pictures: [2] },
        { name: 'manufacturing', pictures: [2] },
        { name: 'commerce', pictures: [2] },
        { name: 'flag', pictures: [3] },
        { name: 'signal', pictures: [3] },
        { name: 'nation', pictures: [3] },
        { name: 'identification', pictures: [3] },
        { name: 'start', pictures: [3] },
        { name: 'light', pictures: [4] },
        { name: 'bulb', pictures: [4] },
        { name: 'idea', pictures: [4] },
        { name: 'inspiration', pictures: [4] },
        { name: 'innovation', pictures: [4] },
        { name: 'thought', pictures: [4] },
        { name: 'invention', pictures: [4] },
        { name: 'brightness', pictures: [4] },
        { name: 'magnet', pictures: [5] },
        { name: 'appeal', pictures: [5] },
        { name: 'attract', pictures: [5] },
        { name: 'bait', pictures: [5] },
        { name: 'energy', pictures: [5] },
        { name: 'strength', pictures: [5] },
        { name: 'magnifying', pictures: [6] },
        { name: 'glass', pictures: [6] },
        { name: 'focus', pictures: [6] },
        { name: 'search', pictures: [6] },
        { name: 'detail', pictures: [6] },
        { name: 'specialisation', pictures: [6] },
        { name: 'mountain', pictures: [7] },
        { name: 'objective', pictures: [7] },
        { name: 'obstacle', pictures: [7] },
        { name: 'challenge', pictures: [7] },
        { name: 'puzzle', pictures: [8] },
        { name: 'piece', pictures: [8] },
        { name: 'part', pictures: [8] },
        { name: 'fitting', pictures: [8] },
        { name: 'interlocking', pictures: [8] },
        { name: 'detail', pictures: [8] },
        { name: 'share', pictures: [8] },
        { name: 'collaborate', pictures: [8] },
        { name: 'target', pictures: [9] },
        { name: 'objective', pictures: [9] },
        { name: 'hit', pictures: [9] },
        { name: 'solution', pictures: [9] },
        { name: 'clarity', pictures: [9] },
        { name: 'carrying', pictures: [9] },
        { name: 'hauling', pictures: [9] },
        { name: 'holding', pictures: [9] },
        { name: 'heavy', pictures: [10] },
        { name: 'overstretched', pictures: [11] },
        { name: 'walking', pictures: [12] },
        { name: 'running', pictures: [12] }
    ]
};

class Ikanz extends Component {
    constructor(props) {
        super(props);
    }

    renderScene(route, navigator) {
        switch (route.id) {
            case 'cards':
                return (<CardDeckContainer {...route.props} navigator={navigator} cardData={CARD_DATA} />);
            case 'search':
                return (<SearchContainer {...route.props} navigator={navigator} cardData={CARD_DATA} />);
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={ {id: 'cards'} }
                renderScene={this.renderScene} />
        )
    }
}

module.exports = Ikanz;