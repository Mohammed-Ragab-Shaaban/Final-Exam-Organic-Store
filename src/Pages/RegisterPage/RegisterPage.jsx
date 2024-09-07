import './RegisterPage.css'


export default function RegisterPage() {
  return (
    <div style={{backgroundColor:"var(--bgProducts)"}}>
        <div className="container d-flex flex-column align-items-center py-5">
            <h3>Ragister Now</h3>
    
            <form className='register' style={{width:"100%",margin:"auto"}}>
                <div className="row gap-2 gap-md-0 mb-2"> 
                     <div className="col-12 col-md-6 row">
                        <div className='col col-md-4'>
                            <label htmlFor="fname">First Name</label>
                        </div>
                        <div className='col-12 col-md-8'>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 row">
                        <div className='col col-md-4'>
                            <label htmlFor="lname">Last Name</label>
                        </div>
                        <div className='col-12 col-md-8'>
                            <input type="text" id="lname" name="lasttname" placeholder="Your name.." />
                        </div>
                    </div>
                </div>

                <div className="row gap-2 gap-md-0">
                    <div className="col-12 col-md-6 row">
                        <div className='col col-md-4'>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className='col-12 col-md-8'>
                            <input type="email" id="email" name="email" placeholder="Your email.." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6 row">
                        <div className='col col-md-4'>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className='col-12 col-md-8'>
                            <input type="password" id="password" name="password" placeholder="Your password.." />
                        </div>
                    </div>
                </div>
                <textarea style={{width:"100%",height:"100px", margin:"10px 0px"}}></textarea><br />
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}
