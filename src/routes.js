import  Home  from "./pages/home/Home";
import  UserList  from "./pages/users/UserList";
import  User  from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import Product from "./pages/Product/Product"
let routes=[
    {path:'/' ,element:<Home/>},
    {path:'/users' ,element:<UserList/>},
    {path:"user/:userId"  ,element:<User/>},
    {path:'/newuser' ,element:<NewUser/>},
    {path:'/products' ,element:<Products/>},
    {path:'/product/:productId' ,element:<Product/>}
]
export default routes;