import React, { useRef, useContext, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import { Container, Label } from './styles';
import { useDebounce } from 'use-debounce';
import Board from '../Board';

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const [value, setValue] = useState('');
  const { move } = useContext(BoardContext);
  const [ propValue ] = useDebounce(value, 1000);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const formatProp = (data) => {
    const dados = data.map((value,index) => {
      return { 'value': index, 'label': value }
    })
    return (dados)
  };

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  })

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        
      </header>
      <p>{data.title}</p>
      { data.component && <data.component options={formatProp(propValue.split(','))}/> }
      <p>Props</p>
      <input type="text" onChange={onChange} value={value} />
    </Container>
  );
}
