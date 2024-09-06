import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './SingleProduct.css'


export default function SingleProduct() {

  const saleStyle ={
    backgroundColor: "var(--bgGreen)",
    color: "var(--white)",
    padding: "15px",
    borderRadius: "100px" ,
    position: "absolute",
    top: "-10px",
    left: "-10px",
        }
    const offStyle ={
        backgroundColor: "var(--bgDanger)",
        color: "var(--white)",
        padding: "15px",
        borderRadius: "100px" ,
        position: "absolute",
        top: "-10px",
        left: "-10px",
        }

  const params = useParams();
  const [product , setProduct] =  useState([]);
  
  useEffect(()=>{
      axios.get("http://localhost:1337/api/groceries-cats/"+ +params.id + "?populate=*" ).then((res)=>{
        console.log(res.data);
        setProduct(res.data.data);
      }).catch((err)=>{
        // console.log(err.message);
      })
  },[])
  console.log(product);
// console.log(product);
// console.log(params);

// const trueFalseCondition = product.attributes.state ;
  return (
    <div className="py-5" style={{backgroundColor:"var(--bgProducts)"}} >
     
      <div className="container row m-auto">
                    <div className="col-12 col-md-6 position-relative">
                    {/* <span style={product.attributes.state == true ? saleStyle : offStyle } >
                          {product.attributes.state ? "sale" : "off"}
                    </span> */}
                   {/* <img src={"http://localhost:1337"+ product.attributes.Image.data.attributes.url} alt="product-Image" /> */}
                 </div>

                <div className="col-12 col-md-6">
                  {/* <h2> {product.attributes.name} </h2> */}
                  {/* <h4>£{product.attributes.price}  <span style={{fontSize:"70%",fontStyle:"italic"}}>+ Free Shipping</span></h4> */}
                  <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>
                  <input type="number" style={{width:"15%",textAlign:"center"}}/>

                  <button className={ product.attributes.state ? "addToCartSale" : "addToCartOff"} 
                    type="button"  disabled={!product.attributes.state}> 
                    Add To Cart    
                  </button>
                  </div>
              </div>
          {/* {
            product.map((el,index)=>{
              return(
                <div className="container row m-auto">
                    <div className="col-12 col-md-6 position-relative">
                    <span style={el.attributes.state == true ? saleStyle : offStyle } >
                          {el.attributes.state ? "sale" : "off"}
                    </span>
                   <img src={"http://localhost:1337"+ el.attributes.Image.data.attributes.url} alt="product-Image" />
                 </div>

                <div className="col-12 col-md-6">
                  <h2> {el.attributes.name} </h2>
                  <h4>£{el.attributes.price}  <span style={{fontSize:"70%",fontStyle:"italic"}}>+ Free Shipping</span></h4>
                  <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>
                  <input type="number" style={{width:"15%",textAlign:"center"}}/>

                  <button className={ el.attributes.state ? "addToCartSale" : "addToCartOff"} 
                    type="button"  disabled={!el.attributes.state}> 
                    Add To Cart    
                  </button>
                  </div>
              </div>

              )
            })
          } */}

    </div>
  )
}



