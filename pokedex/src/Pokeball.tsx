// import React, { useEffect, useState } from 'react'
import { BsChevronRight } from 'react-icons/bs';

function Pokeball () {

    return(
        <div 
            className='h-[70px] w-[70px] aspect-square cursor-pointer bg-white flex justify-center items-center text-black rounded-full absolute left-[37%] top-[10%]'>
            <BsChevronRight size={"2rem"}/>
        </div>
    )
    
}

export default Pokeball;