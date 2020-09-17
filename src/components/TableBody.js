
import React, { Component } from 'react';

export default class TableBody extends Component {    
    render() {        
        const {charactersData, removeCharacter} = this.props;

        const rows = charactersData.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => removeCharacter(index)} className="btn btn-primary" >Delete</button>
                </td>
              </tr>
            )
        })

        return <tbody>{rows}</tbody>
    }
}