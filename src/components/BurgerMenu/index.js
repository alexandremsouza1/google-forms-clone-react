import React,{ useState }  from 'react';
import { StyledBurger } from './styles';
import LeftNav from '../NavBar';

const Burger = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <LeftNav open={open} />
    </>
  );
}

export default Burger;