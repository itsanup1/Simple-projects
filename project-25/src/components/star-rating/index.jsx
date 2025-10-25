import {FaStar} from 'react-icons/fa'
import './styles.css'
import { useState } from 'react';

export function StarRating({noOfStars}){
    const[rating,setRating] = useState(null);
    const[hover,setHover] = useState(null);

    function handleClick(getCurrentIndex){
        console.log(getCurrentIndex);
    }
    function handleMouseEnter(getCurrentIndex){
        console.log("Entered",getCurrentIndex);
    }
    function handleMouseLeave(getCurrentIndex){
        console.log("Left",getCurrentIndex);
    }
    return(
        <div className='star-wrapper'>
            <div className='stars'>
                {[...Array(noOfStars)].map((_,index)=>{
                    index +=1 ;
                    return(
                            <FaStar className='star'
                            key={index}
                            onClick={()=>handleClick(index)}
                            onMouseMove={()=>handleMouseEnter(index)}
                            onMouseLeave={()=>handleMouseLeave(index)}
                            />
                    );
                    
                })}
                
            </div>
        </div>
    );
}