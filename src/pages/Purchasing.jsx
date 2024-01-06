import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Purchase from "./Purchase";
import Swal from "sweetalert2";


const Purchasing = () => {

    const { user } = useContext(AuthContext);

    const [purchasings, setPurchasings] = useState([]);

    const url = `https://food-restaurant-server.vercel.app/purchasing?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPurchasings(data)
            })
    }, [url])

    // ---------- Delete part ---------------

    const handleDelete = id => {
        const proceed = confirm("Are You Sure?")
        if (proceed) {
            fetch(`https://food-restaurant-server.vercel.app/purchasing/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        const remaining = purchasings.filter(purchasing => purchasing._id !== id)
                        setPurchasings(remaining);
                    }
                })
        }
    }


    // ----------- Update part ------------------

    const handlePurchasingConfirm = id => {
        fetch(`https://food-restaurant-server.vercel.app/purchasing/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // update status
                    const remaining = purchasings.filter(purchasing => purchasing._id !== id)
                    const updated = purchasings.find(purchasing => purchasing._id !== id)
                    updated.status = 'confirm'
                    const newPurchasings = [updated, ...remaining]
                    setPurchasings(newPurchasings)
                }
            })
    }

    return (
        <div>
            <h1 className="mb-10 text-center text-3xl border-2 p-5 rounded-xl">Your Purchasing: {purchasings.length}</h1>
            <div className="space-y-10">
                {
                    purchasings.map(purchasing => <Purchase
                        key={purchasing._id}
                        purchasing={purchasing}
                        handleDelete={handleDelete}
                        handlePurchasingConfirm={handlePurchasingConfirm}>
                    </Purchase>)
                }
            </div>
        </div>
    );
};

export default Purchasing;