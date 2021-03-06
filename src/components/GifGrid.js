import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import propTypes from 'prop-types';

export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);

  return (
      <>
        <h3>{category}</h3>
        {loading && <p>Cargando...</p>}
        <div className='card-grid'>
                        
                {
                    data.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            
        </div>
      </>
    
  )
}

/* GifGrid.propTypes = {

} */