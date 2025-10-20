import { useState } from "react";
import data from "./data";
import './styles.css'


export function Accordian(){
    const[selected,setSelected] = useState(null);
    
    function handleSingleSelection(getCurrentId){
        console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null: getCurrentId);
    }

    return(
        
        <div className="wrapper">
           {data && data.length > 0 ?
            data.map((dataItem)=>{
                return(
                    <div onClick={()=>handleSingleSelection(dataItem.id)} key={dataItem.id} className="item">
                        <div className="tittle">
                            <h3>{dataItem.question}</h3>
                            <span className="acc-wrapper-button">+</span>
                        </div>
                        <div className="content">
                            {selected === dataItem.id ? <div>{dataItem.answer}</div> : null} 
                        </div>
                    </div>
                );
            }) 
            :<div>NO Data Found!</div>}
        </div>
    );
}