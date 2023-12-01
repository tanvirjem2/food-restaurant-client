import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Purchase from "./Purchase";


const Purchasing = () => {

    const { user } = useContext(AuthContext);

    const [purchasing, setPurchasing] = useState([]);

    const url = `http://localhost:5000/purchasing?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPurchasing(data)
            })
    }, [url])

    return (
        <div>
            <h1 className="mb-10 text-center text-3xl border-2 p-5 rounded-xl">Your Purchasing: {purchasing.length}</h1>
            <div className="space-y-6 my-10">
                {
                    purchasing.map(booking => <Purchase key={booking._id} booking={booking}></Purchase>)
                }
            </div>
        </div>
    );
};

export default Purchasing;