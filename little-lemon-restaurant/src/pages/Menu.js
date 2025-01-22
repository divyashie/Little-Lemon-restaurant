import React from 'react'; 
import MealCard from '../components/MealCard';
import mealsData from "../components/meals.json"; 
import "./Menu.css";

const Menu = () => {
    return (
      <section className="menu">
        <h2>Our Menu</h2>
        <div className="menu-container">
          {mealsData.meal_card.map((meal, index) => (
            <MealCard key={index} meal={meal} />
          ))}
        </div>
      </section>
    );
  };

export default Menu; 