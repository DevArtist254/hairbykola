import {Outlet, Link} from "react-router-dom"

function Root() {
 return (
  <>
   <nav>
    <Link to="/home">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/userdashboard">User</Link>
    <Link to="/cart">Cart</Link>
   </nav>
   <div>
    <Outlet />
   </div>
  </>
 )
}

export default Root
