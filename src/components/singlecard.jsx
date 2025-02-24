import React, {Component} from "react";
export default class Singlecard extends Component{
    state={
        count:0,
        card:null
    }
    handleincrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handledecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    fetchproducts=()=>{
        fetch(`https://fakestoreapi.com/products/${this.state.count}`)
        .then(res=>res.json())
        .then(data=>this.setState({card:data}))
    }
    componentDidMount(){
        console.log("are you coming")
        this.fetchproducts()
       
    }
    componentDidUpdate(a,prevstate,c){
        // console.log(_,prevstate,_)
 if(prevstate.count!==this.state.count){
    this.fetchproducts()
    }
}
    
render(){
    console.log("render")
    return(
        <div>{
<h1>{this.state.card && this.state.card.title}</h1>
}
{this.state.count}
<button onClick={this.handledecrement}>previous</button>

<button onClick={this.handleincrement}>next</button>
</div>
    )
}
}