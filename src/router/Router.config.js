// import Indexpage from "../components/index"
// import Cartpage from "../components/cart"
// import Userpage from "../components/User"

import Loadable from "react-loadable"
import Loading from "../common/Loading"

const Indexpage = Loadable({
    loader:()=>import('../components/index'),
    loading:Loading,
})

const Cartpage = Loadable({
    loader:()=>import('../components/cart'),
    loading:Loading,
})

const Userpage = Loadable({
    loader:()=>import('../components/User'),
    loading:Loading,
})

export default{
    routes:[{
        path:'/',
        component:Indexpage,
        children:[{
            path:'/index',
            component:Cartpage,
            children:[{
                path:'/index/cart',
                component:Cartpage
            }]
        },{
            path:'/user',
            component:Userpage
        }]
    }]
}