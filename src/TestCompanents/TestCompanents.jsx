import React from 'react';
import {useState} from "react";
import styles from "../TestCompanents/TestCompanents.module.css"

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
                        <div className={styles.container}>
                            <div className={styles.button}>
                                <div >
                                    <h5>{item.name}</h5>
                                </div>
                                <div>
                                    <button>Follow</button>
                                </div>
                            </div>

                            <h6>{item.email}</h6>
                            <p> Phone number:{item.phone}, Website: {item.website}, Company name: {item.company.name}</p>
                            <h6>15K Followers &#9679; 7K Following &#9679; Since April 30,2017</h6>
                        </div>

                    )
                })
            }
        </div>
    );
};

export default TestComponents;