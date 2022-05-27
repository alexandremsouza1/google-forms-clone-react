import React from 'react';


export default function Select (props)  {
  return (
    <div className="select-block">
      <select>
        <option value="">Selecione uma opção</option>
        { props.options && props.options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}