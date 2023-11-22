import React from 'react'

import { useSelector } from 'react-redux'
import { Link ,useNavigate} from 'react-router-dom'



function UserHome() {

  const navigate = useNavigate()
  const authentication_user = useSelector(state => state.authentication_user)
 
  return (
   
<div className="row my-4 mx-4">
<div className="col-md-6 mb-4"style={{backgroundColor: '#eee'}}>
    <span className="shadow-1-strong mb-3">{authentication_user.isAuthenticated?<>Welcome Back {authentication_user.name} ! </>:<>Hello Human!!</>}</span>
    <p className="">
      This Project includes the Django-Rest Framework, 
      JWT Token Authentication, 
      React.
      Enjoy the experience by Logging In.
    </p>
    {authentication_user.isAuthenticated?<>
      <Link type="button" className="btn btn-primary" to='/profile'>Go To Profile  ! </Link></>
      :<><Link type="button" className="btn btn-primary" to='/login'>Login</Link></>}
    
   
  </div>
  <div className="col-md-6 mb-4">
    <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
      <img src="https://images.hdqwalls.com/wallpapers/marshmello-dj-material-design-logo-to.jpg" className="img-fluid" />
      <a href="#">
        <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
      </a>
    </div>
  </div>

  
</div>

  )
}

export default UserHome