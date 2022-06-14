import React from 'react';
import '../css/Post.css';
import Moment from 'react-moment';

export function Post(props) {
  return (
    <div className='contenedor-post'>
        <img className='imagen-post' 
        src={props.imagen}
        alt='Imagen del post'/>
        <div className='contenedor-texto-post'> 
          <p className='nombre-post'> by <strong>{props.autor}</strong> el  <Moment format="YYYY/MM/DD">{props.fecha}</Moment></p>
          <p className='texto-post'> {props.texto} </p>
          <p className ='tags-post'>
            { props.tags.map((item,id) => {
              return (
                <button class="btn first">{item}</button>
              )   
            })}
          </p>
        </div>
    </div>
  );
}
