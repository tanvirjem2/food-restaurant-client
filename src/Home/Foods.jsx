import { useEffect, useState } from "react";
import Food from "./Food";


const Foods = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFoods(data)
            })
    }, [])

    return (
        <div>
            <div className="text-center space-y-6">
                <h1 className="text-5xl font-extrabold">Our Popular Tasty Foods</h1>
                <p className="w-1/2 mx-auto">Savor the goodness with our delicious lineup, featuring Burgers, Fries, Pasta, Sandwiches, Cold Drinks, and Combos – a taste that delights!</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-20">
                {
                    foods.map(food => <Food key={food.id} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;