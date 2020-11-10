import React, { Component } from 'react';
import GetList from './Components/List/GetList/GetList';
import "./App.css"
import WithClass from './Components/HOC/WithClass';
class App extends Component {
    state = { 
        product:[
            {id:"akaka",name:"soap",price:30, quanty:3},
            {id:"aa",name:"pen",price:3, quanty:30},
            {id:"pppp",name:"notebook",price:30, quanty:12},

        ],
        list:false
     }
     handleViewList=()=>{
        this.setState({list:true})
   
         
     }
   handleDelete=(index)=>{
       const newProduct=this.state.product;
       newProduct.splice(index,1);
       this.setState({
           product:newProduct
       })
   }
handleEdit=(event,id)=>{
    const pindex=this.state.product.findIndex(p=>{
        return p.id===id;
    });
    const newProduct={...this.state.product[pindex]};
    console.log(newProduct)
    newProduct.quanty=event.target.value;
    const anyProduct=[...this.state.product];
    anyProduct[pindex]=newProduct;
    console.log(anyProduct)
    this.setState({
      product:anyProduct
    })
   
}
    render() { 
let arrlist=null;
if(this.state.list){
    arrlist=(
        <div className="allCard">
       
        {
            this.state.product.map((myproduct,index)=>{
                return <GetList name={myproduct.name}
                price={myproduct.price}
                quanty={myproduct.quanty}
                deleteClick={()=>this.handleDelete(index)}
                editClick={(event)=>this.handleEdit(event,myproduct.id)}
                key={myproduct.id}
                />
            })
        }
        </div>
    )
}
        return ( 
            <WithClass classes="main">
            
                <h1>Welcome to Online Shoppy</h1>
                <button className="view-button" onClick={this.handleViewList}>View List</button>
                {/* <button >Login</button> */}
               {arrlist}
           
               
      
            </WithClass>
         );
    }
}
 
export default App;