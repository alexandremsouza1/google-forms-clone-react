import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { useLocation } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Board from './components/Board';


function getFormatTitle(pathname) {
  switch (pathname) {
    case '/':
      return 'Criar Formulário';
    case '/answer-form':
      return 'Responder Formulário';
    case '/dashboard-form':
      return 'Dashboard';
    default:
      return 'Criar Formulário';
  }
}


function App() {
  const location = useLocation();
  const title = getFormatTitle(location.pathname.replace('/', ''));

  return (
    <DndProvider backend={HTML5Backend}>
      <Header title={ title }/>
      <Board />
      
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
