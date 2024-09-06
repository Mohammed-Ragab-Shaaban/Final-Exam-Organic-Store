import AllProducts from "./AllProducts";
import ProductsFilter from "./ProductsFilter";

export default function EveryThing() {
  return (
    <div className="py-5" style={{backgroundColor:"var(--bgProducts)"}} >
        <div className="container row ">

            <div className="col-12 col-md-4 border-start "> <ProductsFilter /> </div>
            <div className="col-12 col-md-8 "> <AllProducts /> </div>

        </div>
    </div>
  )
}
