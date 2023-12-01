import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const FoodPurchase = () => {

    const food = useLoaderData()

    const { _id, food_image, food_name, food_category, price, made_by, food_origin, description } = food;

    const { user } = useContext(AuthContext)

    const handlePurchase = e => {
        e.preventDefault();
        const form = e.target;


    }

    return (
        < div >
            <h2 className='text-center mb-10 text-3xl border-2 rounded-xl p-5'>Food Name: {food_name}</h2>

            <div className="rounded-lg mt-10 bg-[#F3F3F3] p-5 lg:p-24">
                <form onSubmit={handlePurchase}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Food Name */}

                        <input defaultValue={food_name} placeholder="Food Name" className="border-2 p-3 rounded-lg" type="text" name="name" id="" />

                        {/* Food Price */}

                        <input defaultValue={price} placeholder="Food Price" className="border-2 p-3 rounded-lg" type="text" name="price" id="" />

                        {/* Quantity */}

                        <input placeholder="Quantity" className="border-2 p-3 rounded-lg" type="text" name="quantity" id="" />

                        {/* Buyer Name */}

                        <input defaultValue={user?.displayName} placeholder="Buyer Name" className="border-2 p-3 rounded-lg" type="text" name="name" id="" />

                        {/* Buyer Email */}

                        <input defaultValue={user?.email} placeholder="Buyer Email" className="border-2 p-3 rounded-lg" type="email" name="email" id="" />

                        <input className="border-2 p-3 rounded-lg" type="date" name="date" id="" />

                    </div>
                    <button className="btn w-full bg-[red] text-white mt-6">Order Confirm</button>
                </form>
            </div>
        </div >
    );
};

export default FoodPurchase;