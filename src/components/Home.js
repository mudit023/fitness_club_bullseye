import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.css';

function Home(props) {
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const addressRef = useRef();

  const addMemberHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const number = numberRef.current.value;
    const address = addressRef.current.value;
    const obj = {
      name,
      email,
      number,
      address
    }
  
    props.setterInfo(obj);
  }
  return (
    <div className={classes.container}>
      <h1>Fitness Club Registration</h1>
        <form className={classes.card} onSubmit={addMemberHandler}>
          <input type="text" placeholder="Name" ref={nameRef}/>
          <input type="email" placeholder="Email" ref={emailRef}/>
          <input type="tel" placeholder="Phone Number" ref={numberRef}/>
          <input type="text" placeholder="Address" ref={addressRef}/>
          <button className={classes.addBtn} type="submit">Add Member</button>
        </form>
      <Link to='/list' className={classes.ViewBtn}>View Member List</Link>
    </div>
  )
}

export default Home