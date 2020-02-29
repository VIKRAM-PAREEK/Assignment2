import React from 'react';
export default class DisplayList extends React.Component{
    render(){
        return(
            <ol>
            {this.props.list.map( (list, i)=><a color="black" onClick={this.props.handleDelete.bind(null,list)}><li>{list}</li></a>)}
            </ol>
        );
    }
}