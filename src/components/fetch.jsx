import { Component } from "react";

class Fetchproducts extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
  console.log("constructor")
    }
    componentDidMount(){
        console.log("mounting")

        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>this.setState({data}))
    }
    render(){
        console.log("render")
        console.log("render",this.state)
        return(
            <>
            { this.state.data.map((item,index)=>{
                return(
                    <>
                    <div style={{border:"2px solid black",marginBlock:"20px"}} key={item.id}>
                        <div>
                            <img src={item.image} height={100} width={100}></img>
                        </div>
                        <div>
                            <h2>{item.title}</h2>
                            <h2>{item.price}</h2>
                            <h2>{item.description}</h2>
                        </div>
                    </div>
                    </>
                )

            })}
            </>
        )
    }
}
export default Fetchproducts