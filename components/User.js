import React, { PropTypes, Component } from 'react'

export default class User extends Component {
    render() {
        const { name } = this.props;
        return <div>
            <p>Hola, {name}!</p>
        </div>
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired
};