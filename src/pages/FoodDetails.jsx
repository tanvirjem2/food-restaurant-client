import { Link, useLoaderData } from "react-router-dom";


const FoodDetails = () => {

    const food = useLoaderData();

    const { _id, food_image, food_name, food_category, price, made_by, food_origin, description } = food;

    return (
        <div className="p-10 rounded-xl shadow-xl">
            <div className="grid grid-cols-2">
                <div>
                    <img className="w-96 rounded-xl" src={food_image} alt="" />
                </div>
                <div className="space-y-4">
                    <h1><span className="font-extrabold">Name:</span> {food_name}</h1>
                    <p><span className="font-extrabold">Category:</span> {food_category}</p>
                    <p><span className="font-extrabold">Price:</span> {price} $</p>
                    <p><span className="font-extrabold">Made By:</span> {made_by}</p>
                    <p><span className="font-extrabold">Origin:</span> {food_origin}</p>
                    <p><span className="font-extrabold">Description:</span> {description}</p>
                    <Link to={`/purchase/${_id}`}>
                        <button className="rounded-3xl btn bg-[red] text-white mt-4">Order Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;