import React from "react";
import AppContext from "../context";

export const Info = ({ title, img, descrition }) => {
    const {setCartOpened} = React.useContext(AppContext)

    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column">
            <img
                className="mb-20"
                width={120}
                src={img}
                alt="empty"
            />
            <h2>{title}</h2>
            <p className="opacity-6">
                {descrition}
            </p>
            <button onClick={() => {setCartOpened(false)}} className="greenButton">
                <img src={"img/arrow.svg"} alt="arrow" />
                Вернуться назад
            </button>
        </div>
    );
};

export default Info;
