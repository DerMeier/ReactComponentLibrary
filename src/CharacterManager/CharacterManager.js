import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';
import './CharacterManager.css';

class CharacterManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        };
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    };

    removeCharacter = name => {
        this.setState((prevState) => ({
            characters: prevState.characters.filter((character) => {
                return character.name !== name;
            })
        }));
    };

    render() {
        return (
            <div className="container">
                <Table
                    characters={this.state.characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}


export default CharacterManager;