import React, { useState,useCallback } from 'react';
import produce from 'immer';
import { loadLists } from '../../services/api';

import BoardContext from './context';

import List from '../List';

import { Container } from './styles';

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

/*   function move(fromList, toList, from, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];

      draft[fromList].cards.splice(from, 1);
      draft[toList].cards.splice(to, 0, dragged);
    }))
  }
 */
  const handleDrop = useCallback(
    (index, item) => {
      setLists(produce(lists, draft => {
        const dragged = draft[item.listIndex].cards[item.index];
        draft[item.listIndex].cards.splice(item.index, 1);
        draft[index].cards.push(dragged);
      }))
      
    },
    [lists]
  )

  return (
    <BoardContext.Provider value={{ lists }}>
  {/*     <Container>
        <List accepts={['CARD']} onDrop={item => handleDrop(0, item)}  key={lists[0].title} index={0} data={lists[0]} />
        <List accepts={['CARD']} onDrop={item => handleDrop(1, item)}  key={lists[1].title} index={1} size={window.screen.width - 400} data={lists[1]} />
      </Container> */}
      <Container>
        {lists.map((list, index) => 
          <List accepts={['CARD']} 
                onDrop={item => handleDrop(index, item)} 
                key={list.title} 
                index={index} 
                data={list} 
                size={list.size}
          />)}
      </Container>
    </BoardContext.Provider>
  );
}
