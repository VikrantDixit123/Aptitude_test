import React from 'react'


export default class Radiobuttons extends React.Component {

    render() {
        return (
            <div>
                <form>
                    {<input type="radio" name="option" onChange={this.props.onChange} />}
                    <label>First</label><br></br>
                    {<input type="radio" name="option" onChange={this.props.onChange} />}
                    <label>Second</label><br></br>
                    {<input type="radio" name="option" onChange={this.props.onChange} />}
                    <label>Third</label><br></br>
                    {<input type="radio" name="option" onChange={this.props.onChange} />}
                    <label>Fourth</label><br></br>
                </form>
            </div>
        )
    }
}