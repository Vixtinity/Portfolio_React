import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Qsomos from '../pages/www/site/Qsomos';
import Home from '../pages/www/site/Home';
import Servicios from '../pages/www/site/Servicios';

export const AppRoutes = () => {
  return (

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qsomos" element={<Qsomos />} />
        <Route path="/servicios" element={<Servicios />} />
    </Routes>
  )
}
export default AppRoutes;
