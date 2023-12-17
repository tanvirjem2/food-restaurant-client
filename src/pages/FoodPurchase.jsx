import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const FoodPurchase = () => {

    const food = useLoaderData()

    const { _id, food_image, food_name, food_category, price, made_by, food_origin, description } = food;

    const { user } = useContext(AuthContext)

    const handlePurchase = e => {
        e.preventDefault();
        const form = e.target;

        const foodName = form.foodName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const date = form.date.value
        const order = {
            foodName,
            price,
            quantity,
            buyerName: name,
            email,
            photo,
            date
        }
        console.log(order)

        fetch('https://food-restaurant-server.vercel.app/purchasing', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        < div >
            <h2 className='text-center mb-10 text-3xl border-2 rounded-xl p-5'>Food Name: {food_name}</h2>

            <div className="rounded-lg mt-10 bg-[#F3F3F3] p-5 lg:p-24">
                <form onSubmit={handlePurchase}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Food Name */}

                        <input defaultValue={food_name} placeholder="Food Name" className="border-2 p-3 rounded-lg" type="text" name="foodName" id="" />

                        {/* Food Price */}

                        <input defaultValue={price} placeholder="Food Price" className="border-2 p-3 rounded-lg" type="text" name="price" id="" />

                        {/* Quantity */}

                        <input placeholder="Quantity" className="border-2 p-3 rounded-lg" type="text" name="quantity" id="" />

                        {/* Buyer Name */}

                        <input defaultValue={user?.displayName} placeholder="Buyer Name" className="border-2 p-3 rounded-lg" type="text" name="name" id="" />

                        {/* Buyer Email */}

                        <input defaultValue={user?.email} placeholder="Buyer Email" className="border-2 p-3 rounded-lg" type="email" name="email" id="" />

                        {/* Photo */}

                        <input defaultValue={food_image} placeholder="Food Photo" className="border-2 p-3 rounded-lg" type="text" name="photo" id="" />

                        <input className="border-2 p-3 rounded-lg" type="date" name="date" id="" />

                    </div>
                    <button className="btn w-full bg-[red] text-white mt-6">Order Confirm</button>
                </form>
            </div>
        </div >
    );
};

export default FoodPurchase;