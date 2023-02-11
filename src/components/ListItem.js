import React from 'react'
import classes from './ListItem.module.css';
function ListItem(props) {
  return (
    <div className={classes.table}>
      <div>{props.name}</div>
      <div>{props.email}</div>
      <div>{props.number}</div>
      <div>{props.address}</div>
    </div>
  )
}

export default ListItem