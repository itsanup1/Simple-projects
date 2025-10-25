import {FaStar} from 'react-icons/fa'
import './styles.css'
import { useState } from 'react';

export function StarRating({noOfStars}){
    noOfStars = 5;
    const[rating,setRating] = useState(null);
    const[hover,setHover] = useState(null);

    function handleClick(getCurrentIndex){
        console.log(getCurrentIndex);
    }
    return(
        <div>
            {[...Array(noOfStars)].map((_,index)=>{
                return(
                    <FaStar className='stars'
                    key={index}
                    onClick={()=>handleClick(index)}
                    />
                );
                
            })}
            
        </div>
    );
}