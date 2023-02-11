import React from 'react'
import Home from '../components/Home'

function HomePage(props) {
  return (
    <Home setterInfo={props.nameHandler}/>
  )
}

export default HomePage