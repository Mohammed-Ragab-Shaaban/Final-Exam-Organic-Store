import paypal from '../../assets/paypal.png'
import payneer from '../../assets/payoneer.png'
import MasterCard from '../../assets/masterCard.png'



export default function BuyPage() {
  return (
    <div style={{backgroundColor:"var(--bgProducts)"}}>
        <div className="container py-4">
          <h3 className="text-center mb-3">Selected Products</h3>
            <div>
              <table className="table table-secondary">
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>count</th>
                  <th>price</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td colSpan={2}>Total</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
              </table>
            </div>
        </div>

        <div className="container py-4">
          <h3 className="text-center mb-3">Payment Method</h3>
              <p>Please select your favorite Payment Method:</p>

              <div className="d-flex gap-2">
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html">Paypal</label><br />
               <img src={paypal} alt="Picture" style={{width:"50px"}} />
              </div>

              <div className="d-flex gap-2">
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html">Payoneer</label><br />
               <img src={payneer} alt="Picture" style={{width:"50px"}} />
              </div>
              <div className="d-flex gap-2">
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label for="html">MasterCard</label><br />
                <img src={MasterCard} alt="Picture" style={{width:"40px"}} />
              </div>


            <div className='text-center'> <button style={{width:"100%"}} className='btn btn-success mt-3'>Buy Now</button></div>
            
        </div>
    </div>
  )
}
