

const Food = ({ food }) => {

    const { food_name, food_image, food_category, price } = food

    return (
        <div className="p-5 rounded-xl space-y-6 shadow-xl">
            <div className="text-center space-y-4">
                <img className="mx-auto rounded-xl w-2/3" src={food_image} alt="" />
                <h1>{food_name}</h1>
                <p>{food_category}</p>
            </div>
            <div className="flex items-center gap-6 justify-center">
                <p>{price} $</p>
                <button className="rounded-3xl btn">Details</button>
            </div>
        </div>
    );
};

export default Food;