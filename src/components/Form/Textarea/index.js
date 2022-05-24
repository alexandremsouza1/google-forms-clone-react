import React from 'react';


export default function Textarea ({ props }) {
  return (
    <div className="input-block">
      <input type="text" {...props} />
    </div>
  );
}