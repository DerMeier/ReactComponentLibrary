import React, {Component} from 'react';
import './ComponentNavigation.css';

class ComponentNavigation extends Component {
    render() {
        const menuItems = [
            {
                id: 'charManager',
                label: 'Character Manager',
            },
            {
                id: 'productsList',
                label: 'Product List',
            }
        ];

        return (
            <nav className="nav">
                <ul className="nav-list">
                    {menuItems.map(item => (
                        <li
                            key={item.id}
                            onClick={() => this.props.changeComponentHandler(item.id)}
                            className={`nav-item ${this.props.activeComponent === item.id ? 'active' : ''}`}>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default ComponentNavigation