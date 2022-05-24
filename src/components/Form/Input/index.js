import React from 'react';


export default function Input ({ props }) {
  return (
    <div className="input-block">
      <input type="text" {...props} />
    </div>
  );
}