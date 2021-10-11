import React from 'react'
import mealsImage from "../../assets/FoodIMG.jpg";
import calsses from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        <>
            <header className={calsses.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick = {props.onShowCart}></HeaderCartButton>
            </header>
            <div className={calsses['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food!!" />
            </div>
        </>
    )
}

export default Header
