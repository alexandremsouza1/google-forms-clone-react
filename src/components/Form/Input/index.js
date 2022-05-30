import React from 'react';


export default function Input ( props ) {
  return (
    <div className="input-block">
       { props.options && props.options.map( ( option, index ) => (
         
         <div className="input-block-option" key={ index }>
            <input type={props.type} name={props.name}  />
            {' '}
            <label>{ option.label } </label>
          </div>
        ) ) }
    </div>
  );
}