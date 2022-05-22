import React from 'react';

import { Container } from './styles';
import Burger from '../BurgerMenu';

export default function Header({title}) {
  return (
    <Container>
      <Burger />
      <h1>{ title }</h1>
    </Container>
  );
}
