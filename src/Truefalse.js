import React from 'react'


export default class Truefalse extends React.Component {

    render() {
        return (
            <div>
                <form>                    
                    {<input type="radio" name="option" value='true' onChange={this.props.onChange} />}
                    <label>True</label><br></br>
                    {<input type="radio" name="option" value='false' onChange={this.props.onChange} />}
                    <label>False</label>                   
                </form>
            </div>
        )
    }
}