import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    /* const handleAdd = () => {
        console.log('Hizo click');
        const category = 'hunterXhunter';
        setCategories([...categories, category]);
        
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                        key={category}
                        category={category}
                        />
                    )
                }
            </ol>
        </>
    )

}

export default GifExpertApp;