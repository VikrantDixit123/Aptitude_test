import React from 'react'
import Checkbox from './CheckBox';
import Radiobuttons from './Radiobuttons';

import Truefalse from './Truefalse';

export default class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: 'false'
        }
    }
    handleChange = () => {
        if (this.state.checked === 'false')
            this.setState({ checked: 'true' });
        else {

            this.setState({ checked: 'false' });
        }
    }
    render() {
        if (this.props.opt === 'checkbox') {                                     // for Checkbox
            return (

                <div>
                    <Checkbox
                        number='1.'
                        onChange={this.handleChange}
                        label='First'
                    />
                    <Checkbox
                        number='2.'
                        onChange={this.handleChange}
                        label='Second'
                    />
                    <Checkbox
                        number='3.'
                        onChange={this.handleChange}
                        label='Third'
                    />
                    <Checkbox
                        number='4.'
                        label='Fourth'
                    />
                </div>
            );
        }

        else if (this.props.opt === 'radiobtn') {                                //for Radio Bottons
            return (

                <div>
                    <Radiobuttons
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                </div>
            );
        }

        else if (this.props.opt === 'TrueFalse') {                                //for True False
            return (

                <div>
                    <Truefalse
                        onChange={this.handleChange}
                    />
                </div>
            );
        }
    }
}

