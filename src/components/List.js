import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

function List(props) {
  return (
    <div style={{width:'100vw', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <div style={{border: '1px solid #111', padding:'20px'}}>
        <div style={{ marginBottom: "40px", fontSize: '24px', fontWeight: '600' }}>
          <ul style={{ display: "flex", listStyle: "none", gap: "40px" }}>
            <li>Name</li>
            <li>Email</li>
            <li>Number</li>
            <li>Address</li>
          </ul>
        </div>
        <div>
          {props.listInfo.map((info) => {
            return (
              <ListItem
                name={info.name}
                email={info.email}
                number={info.number}
                address={info.address}
                key={info.id}
              />
            );
          })}
        </div>
        <Link to="/">Back Home</Link>
      </div>
    </div>
  );
}

export default List;
