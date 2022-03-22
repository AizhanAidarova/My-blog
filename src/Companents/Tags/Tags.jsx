import React, {useState} from 'react';
import {tagsItem} from "../../Constant";

const Tags = () => {
    const [tag,setTag] = useState('new york');

    const clickTag = () => {
        if (tag === 'new york'){
            setTag('London');
        }else {
            setTag('new york');
        }

    }

    return (
        <>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4 onClick={clickTag}>{tag}</h4>
                </div>
                <div className="w3-container w3-white">
                    <p>
                        {/*<span className="w3-tag w3-black w3-margin-bottom" style={{marginRight:"7px"}}>Travel</span>*/}
                        {tagsItem.map((item,index) =>{
                            return <span key={index} className="w3-tag w3-light-grey w3-small w3-margin-bottom" style={{marginRight:"7px"}}>{item.text}</span>
                            }
                        )}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Tags;