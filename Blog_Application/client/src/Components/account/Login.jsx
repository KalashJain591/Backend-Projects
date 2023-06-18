import React, { useState } from 'react'


const signUpValues = {
    username: "",
    password: "",
    email: ""
}

export default function Login() {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const [account, toggleaccount] = useState(0);
    const [signup, setSignUp] = useState(signUpValues);
    const toggleSignup = () => {
        toggleaccount(!account);
        // console.log(account);
    }
    const SetAccountValues = (e) => {
        console.log(e.target.name + ":" + e.target.value);
        if (!account)
            setSignUp({ ...signup, [e.target.name]: e.target.value });

    }
   const signupUser=()=>{
    
   }
     

    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">

                                    {account ? <h3 className="mb-5">Log In</h3> : <h3 className="mb-5">Sign Up</h3>}

                                    {!account ? <div className="form-outline mb-4">
                                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" onChange={(e) => SetAccountValues(e)} name="email" />
                                        <label className="form-label" for="typeEmailX-2">Email</label>
                                    </div> : <div></div>}

                                    <div className="form-outline mb-4">
                                        <input type="text" id="typeEmailX-2" className="form-control form-control-lg" onChange={(e) => SetAccountValues(e)} name="username" />
                                        <label className="form-label" for="typeEmailX-2">Username</label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" onChange={(e) => SetAccountValues(e)} name="password" />
                                        <label className="form-label" for="typePasswordX-2">Password</label>
                                    </div>

                                    {account ? <><button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                                        <h5 className='text-Center my-3'>OR</h5>
                                        <button className="btn btn-success btn-lg btn-block" type="submit" onClick={() => toggleSignup()}>Don't have an Account</button>
                                    </> : <><button className="btn btn-dark btn-lg btn-block" type="submit" onClick={()=>signupUser()}>Sign Up </button>
                                        <h5 className='text-Center my-3'>OR</h5>
                                        
                                        <button className="btn btn-success btn-lg btn-block" type="submit" onClick={() => toggleSignup()}>Already have an account ? </button> </>}



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
