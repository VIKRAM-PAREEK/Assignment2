import React from 'react';
import {Grid, List, ListItemText} from '@material-ui/core';
export default class DisplayList extends React.Component{
    render(){
        return(
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
       > 
        <List>
          <ListItemText>
            {this.props.list.map( (list, i)=><a href='#' color="black" onClick={this.props.handleDelete.bind(null,list)}><li>{list}</li></a>)}
          </ListItemText>
        </List>
        </Grid>
        );
    }
}