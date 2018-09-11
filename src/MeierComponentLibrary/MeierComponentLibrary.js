import React, {Component} from 'react';
import ComponentNavigation from './ComponentNavigation'
import CharacterManager from "../CharacterManager/CharacterManager";
import ProductsList from "../ProductsList/ProductsList";

class MeierComponentLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeComponent: "charManager"
        }
    }

    changeActiveComponent = (componentId) => this.setState({activeComponent: componentId});

    /**
     * @param {string} componentId existing component IDs: [charManager, productsList]
     * @returns {*}
     */
    getActiveComponent = (componentId) => {
        if (componentId === "charManager") {
            return (<CharacterManager/>);
        }
        if (componentId === "productsList") {
            return (<ProductsList/>);
        }
    };

    render() {
        return (
            <div>
                <ComponentNavigation
                    activeComponent={this.state.activeComponent}
                    changeComponentHandler={this.changeActiveComponent}/>
                {this.getActiveComponent(this.state.activeComponent)}
            </div>
        );
    };
}

export default MeierComponentLibrary