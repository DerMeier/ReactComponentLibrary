import React from 'react';

/**
 * Presentational component, doesn't extent React.Component just returns JSX
 */
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
};

const TableBody = props => {
    const rows = props.characters.map((character, index) => {
        return (
            <tr key={index}>
                <td>{character.name}</td>
                <td>{character.job}</td>
                <td><button onClick={() => props.removeCharacter(character.name)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
};

const Table = ({ characters, removeCharacter }) => (
    <table>
        <TableHeader/>
        <TableBody
            characters={characters}
            removeCharacter={removeCharacter} />
    </table>
);

export default Table;