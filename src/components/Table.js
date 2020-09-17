
import React, { Component } from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

export default class Table extends Component {
    render() {        
        const {charactersData, removeCharacter} = this.props;

        return (
            <table className="table table-striped">
                <TableHeader />
                <TableBody charactersData={charactersData} removeCharacter={removeCharacter}/>
            </table>
        )
    }
}