import {RouterProvider, createBrowserRouter} from "react-router-dom"
import "./App.css"
import Cart from "./pages/cart"
import LandingPage from "./pages/landing-page"
import Payment from "./pages/payment"
import Products from "./pages/products"
import UserDashboard from "./pages/user-dashboard"
import Nav from "./comps/nav"

const router = createBrowserRouter([
 {
  path: "/",
  element: <LandingPage />,
 },
 {
  path: "/cart",
  element: <Cart />,
 },
 {
  path: "/payment",
  element: <Payment />,
 },
 {
  path: "/products",
  element: <Products />,
 },
 {
  path: "/userdashboard",
  element: <UserDashboard />,
 },
])

function App() {
 return (
  <div className="App">
   <Nav />
   <RouterProvider router={router} />
  </div>
 )
}

export default App
