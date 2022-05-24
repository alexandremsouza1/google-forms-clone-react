import React from 'react';


export default function Select ({ options })  {
  debugger
  return (
    <div className="select-block">
      <select>
        <option value="">Selecione uma opção</option>
        { options && options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}