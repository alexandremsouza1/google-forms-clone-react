import React from 'react';
import Ul from './styles';
import { NavLink } from "react-router-dom";



const LeftNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li></li>
      <li>
         <NavLink to="/">Criar Formulário</NavLink>
      </li>
      <li>
         <NavLink to="/answer-form">Responder Formulário</NavLink>
      </li>
      <li>
         <NavLink to="/dashboard-form">Dashboard</NavLink>
      </li>
    </Ul>
  )
}

export default LeftNav