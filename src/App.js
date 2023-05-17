import {RouterProvider, createBrowserRouter} from "react-router-dom"
import "./App.css"
import Cart from "./pages/cart"
import LandingPage from "./pages/landing-page"
import Payment from "./pages/payment"
import Products from "./pages/products"
import UserDashboard from "./pages/user-dashboard"
import Nav from "./comps/nav"
import Root from "./pages/root"
import ErrorPage from "./error-page"

const router = createBrowserRouter([
 {
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,
 },
 {
  path: "/home",
  element: <LandingPage />,
  errorElement: <ErrorPage />,
 },
 {
  path: "/cart",
  element: <Cart />,
  errorElement: <ErrorPage />,
 },
 {
  path: "/payment",
  element: <Payment />,
  errorElement: <ErrorPage />,
 },
 {
  path: "/products",
  element: <Products />,
  errorElement: <ErrorPage />,
 },
 {
  path: "/userdashboard",
  element: <UserDashboard />,
  errorElement: <ErrorPage />,
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
