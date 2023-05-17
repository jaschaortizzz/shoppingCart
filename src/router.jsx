import React from 'react'
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import AuthLayout from './layouts/authLayout'
import BaseLayout from './layouts/baseLayout'
import MainLayout from './layouts/mainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

export default createBrowserRouter(createRoutesFromElements(
   
    <>
     <Route path='/' element={<AuthLayout/>}>
        <Route index element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
    </Route>

    <Route path='*' element={<NotFound/>}/>
    
    <Route path='dashboard' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
    </Route>

    </>
    
));