import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";


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
            <h1>Hello: {purchasing.length}</h1>
        </div>
    );
};

export default Purchasing;