import React, { Fragment, useState } from "react";
import "./Style/Gallery.css";
import Data from "../data.js";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Gallery() {
const [data ,setdata]=useState(Data)

const filteritem = (Item)=>{

const update = Data.filter((elem)=>{
return elem.category == Item


}) 
setdata(update)
}

return (
    <Fragment>
      <h1 className="mt-3 text-center main-heading">
        Order your Favourite Dishes
      </h1>
      <hr />

      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button className="btn btn-success"  onClick={()=>filteritem('breakfast')}style={{cursor:'pointer'}}>breakfast</button>
          <button className="btn btn-success"  onClick={()=>filteritem('lunch')}style={{cursor:'pointer'}}>Lunch</button>
          <button className="btn btn-success"  onClick={()=>filteritem('dinner')}style={{cursor:'pointer'}}>Dinner</button>
          <button className="btn btn-success"  onClick={()=>setdata(Data)}style={{cursor:'pointer'}}>All</button>
        </div>
      </div>
      <div style={{ height:'8rem' , margin :'1rem 0rem',alignItems:'center' ,justifyContent :'center' }}>
      <div style = {{display:'flex'}}>      {
       data.map((elem)=>{
        const {id ,name,category,price,description,image}  =elem
       return ( 
      <Card style={{cursor:'pointer' ,width :'190px', margin : 'auto'}} key ={id}>
      <Card.Img variant="white" src={image} height = {'180px'}/>
      <Card.Body> 
        <Card.Title>{name}</Card.Title>
        <Card.Text>{ description }</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{price}</ListGroup.Item>
        <ListGroup.Item style={{border:'1px solid black'}}>{category}</ListGroup.Item>
     
     
      </ListGroup>
     
    </Card>
)})        
}
</div>
</div>

</Fragment>
);
}
