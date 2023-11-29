

const Food = ({ food }) => {

    const { food_name, food_image, food_category, price } = food

    return (
        <div className="p-5 rounded-xl space-y-6 shadow-xl">
            <div className="text-center space-y-4">
                <img className="mx-auto rounded-xl w-1/2" src={food_image} alt="" />
                <h1 className="font-extrabold">{food_name}</h1>
                <p className="text-[gray]">{food_category}</p>
                <p className="text-[red] font-extrabold">$ {price}</p>
            </div>
            <div className="flex items-center gap-6 justify-center">
                <button className="rounded-3xl btn">Details</button>
            </div>
        </div>
    );
};

export default Food;