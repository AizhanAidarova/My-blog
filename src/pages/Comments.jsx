import React from 'react';
import "./Article.css";
import avatar from "../../src/media/icons/hacker.png"
import line from "../../src/media/icons/line.png"

const Comments = () => {
    return (
        <>
            <div className="input">
                <input type="text" placeholder="Имя"/>
                <input className="comm" type="text" placeholder="Введите текст комментария"/>
                <button>Отправить</button>
            </div>
                <img  className="line" style={{width: "120px"}} src={line} alt=""/>
            <div className="comments">
                <img className="hacker" style={{width: "50px"}} src={avatar} alt=""/>
                <h4 className="commH4">Aizhan <span className="date">Date: 22.03.2022 Time: 16:06</span></h4>
                <p className="commP">Ну это только в вакууме и то сферическом. Смотря чем будут передавать, на каких частотах, каковы
                    будут потери на отражение/преломление/поглощение в очень-очень влажной английской атмосфере,
                    излучатель всегда не идеальный, приемник всегда не идеальный...</p>
            </div>
        </>

    );
};

export default Comments;