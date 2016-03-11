'use strict';
import React, {
    Component,
    Navigator
} from 'react-native';

import CardDeckContainer from './CardDeckContainer';
import SearchContainer from './SearchContainer';

const cards = [
    { picture: require('../img/cogs_technology_mechanics_industry_engineer_process.png'), tags: ['1'] },
    { picture: require('../img/factory_industry_production_manfacturing_commerce.png'), tags: ['2'] },
    { picture: require('../img/flag_signal_nation_identification_start.png'), tags: ['3'] },
    { picture: require('../img/light_bulb_idea_inspiration_innovation_thought_invention_brightness.png'), tags: ['4'] },
    { picture: require('../img/magnet_appeal_attract_bait_attraction_energy_strength.png'), tags: ['5'] },
    { picture: require('../img/magnifying_glass_focus_search_detail_specialisation.png'), tags: ['6'] },
    { picture: require('../img/mountain_objective_obstacle_challenge.png'), tags: ['7'] },
    { picture: require('../img/puzzle_piece_part_fitting_interlocking_detail_share_collaborate.png'), tags: ['8'] },
    { picture: require('../img/target_objective_hit_solution_clarity.png'), tags: ['9'] },
    { picture: require('../img/carrying_hauling_holding.png'), tags: ['10'] },
    { picture: require('../img/heavy_overstretched.png'), tags: ['11'] },
    { picture: require('../img/walking_running.png'), tags: ['12'] }
];

class Ikanz extends Component {
    constructor(props) {
        super(props);
    }

    renderScene(route, navigator) {
        switch (route.id) {
            case 'cards':
                return (<CardDeckContainer navigator={navigator} cards={cards}/>);
            case 'search':
                return (<SearchContainer navigator={navigator} />);
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