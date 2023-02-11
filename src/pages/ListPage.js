import React from 'react'
import List from '../components/List'

function ListPage(props) {
  return (
    <List listInfo={props.listInfo}/>
  )
}

export default ListPage