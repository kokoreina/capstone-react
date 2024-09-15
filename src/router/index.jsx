import { createBrowserRouter } from "react-router-dom";

import { lazy } from "react";

import { Usertemplate } from "../atomic/template/user";
//lazy load
const Home=lazy(()=>import("../atomic/page/home/index"))
const Datve =lazy(()=>import("../atomic/page/datve/index"))
const Chitietphim =lazy(()=>import("../atomic/page/Chitietphim/index"))
const Dangky =lazy(()=>import("../atomic/register/dangky/index"))
const Dangnhap =lazy(()=>import("../atomic/register/dangnhap/index"))

export const router= createBrowserRouter([
    {
        path:"/",
        element:<Usertemplate/>,
        children:[
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/datve",
                element:<Datve/>
            },
            {
                path:"/chitietphim",
                element:<Chitietphim/>
            },
            {
                path:"/dangky",
                element:<Dangky/>
            },
            {
                path:"/dangnhap",
                element:<Dangnhap/>
            }
        ]
        
    }
])