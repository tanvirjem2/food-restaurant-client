

const Purchase = ({ purchasing, handleDelete, handlePurchasingConfirm }) => {

    const { _id, photo, email, date, buyerName, foodName, price, quantity, status } = purchasing;

    return (
        <div className="shadow-xl p-5 rounded-lg">
            <div className="flex items-center justify-evenly">
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="flex items-center gap-6">
                    <div>
                        <img className="w-[150px] rounded-xl" src={photo} alt="" />
                    </div>
                    <div className="space-y-4">
                        <p className="font-extrabold">Food: {foodName}</p>
                        <p className="font-extrabold">Price: {price} $</p>
                        <p className="font-extrabold">Quantity: {quantity}</p>
                    </div>
                </div>
                <p className="font-bold">{buyerName}</p>
                <p className="font-bold">{email}</p>
                <p className="font-bold">{date}</p>
                {
                    status === 'confirm' ?
                        <span className="btn font-bold bg-slate-500 rounded-full text-white">confirmed</span> :
                        <button onClick={() => handlePurchasingConfirm(_id)} className="btn rounded-full">Confirm</button>
                }
            </div>
        </div>
    );
};

export default Purchase;