import MainRoot from "../pages/MainRoot"
import Home from "../pages/Home"
import AddEmployee from "../pages/AddEmployee"


export const ROUTES=[
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'/add-employee',
                element:<AddEmployee/>
            }

        ]
    }
]