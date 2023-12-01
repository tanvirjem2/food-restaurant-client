

const Purchase = ({ booking }) => {

    const { photo, email, date, buyerName, foodName, price, quantity } = booking

    return (
        <div className="border-2 p-5 rounded-lg">
            <div className="flex items-center justify-evenly">
                <div className="flex items-center">
                    <div>
                        <img className="w-[200px] rounded-xl" src={photo} alt="" />
                    </div>
                    <div className="space-y-4">
                        <p className="font-extrabold">{foodName}</p>
                        <p className="font-extrabold">{price} $</p>
                        <p className="font-extrabold">{quantity}</p>
                    </div>
                </div>
                <p>{buyerName}</p>
                <p>{email}</p>
                <p>{date}</p>
            </div>
        </div>
    );
};

export default Purchase;