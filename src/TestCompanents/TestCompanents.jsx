import React from 'react';
import {useState} from "react";
import style from "../TestCompanents/TestCompanents.module.css"

const TestComponents = () => {
   const[count, setCount] = useState (0);
    let BtnPlus = ()=> {setCount (count +1)};
    let BtnMinus = ()=> {setCount (count -1)};
    const [data,setData] = useState([]);

    const getData = () => {
        const url ="https://jsonplaceholder.typicode.com/users";

        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))

        /*
        CREATE-POST;
        R-GET
        U - PUT
        D-DELETE
        */
    }


    return (
        <div>
            <button style={{width:"80px", height:"50px", backgroundColor:"lightblue",borderRadius:"8px"}} onClick={BtnPlus}> + 1</button>
            <button style={{width:"80px", height:"50px", backgroundColor:"lightblue",borderRadius:"8px"}}  onClick={BtnMinus}> - 1</button>
            <button onClick={getData}>Запрос данных</button>
            <p style={{color:"red", paddingLeft:"80px",fontSize:"20px"}}>{count}</p>
            {
                data.map((item) =>{
                    return (
                        <div className={style.divBord}>
                            <p key={item.id}>Name:{item.name}</p>
                            <p key={item.id}>Email:{item.email}</p>
                            <p key={item.id}>Phone:{item.phone}</p>
                            <p key={item.id}>Website:{item.website}</p>
                        </div>

                    )
                })
            }
        </div>
    );
};

export default TestComponents;