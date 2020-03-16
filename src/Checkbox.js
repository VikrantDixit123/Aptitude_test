import React from 'react'

export default class CheckBox extends React.Component {

    render() {
        return (
            <div>
                <label>{this.props.number}</label>
                {<input type="checkbox" onChange={this.props.onChange}/>}
                <label>{this.props.label}</label>
            </div>
        )
    }
}

