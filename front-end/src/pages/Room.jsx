// Room.jsx
import React, { useState } from 'react';
import ItemsForm from '../forms/Itemsform';

const Room = () => {
    const [roommates, setRoommates] = useState([]);
    const [roommateName, setRoommateName] = useState('');
    const [roommateForm, setRoommateForm] = useState(false);
    const [showItemForm, setShowItemForm] = useState(false);
    const [itemsData, setItemsData] = useState({});
    const [currentRoommate, setCurrentRoommate] = useState('');
    const [showSummaryTable, setShowSummaryTable] = useState(false);

    const addRoommate = () => {
        if (roommateName.trim() !== '') {
            setRoommates([...roommates, roommateName]);
            setItemsData({
                ...itemsData,
                [roommateName]: [],
            });
            setRoommateName('');
            setRoommateForm(false);
        }
    };

    const toggleItemForm = (roommate) => {
        setShowItemForm(!showItemForm);
        setCurrentRoommate(roommate);
    };

    const calculateTotalAmount = (amounts) => {
        return amounts.reduce((total, amount) => total + amount, 0);
    };

    const calculateGrandTotal = () => {
        let grandTotal = 0;
        for (const roommate in itemsData) {
            grandTotal += calculateTotalAmount(itemsData[roommate].flatMap(item => item.amounts));
        }
        return grandTotal;
    };

    const calculatePerPersonAmount = () => {
        const totalPeople = roommates.length;
        const grandTotal = calculateGrandTotal();
        return grandTotal / totalPeople;
    };

    const calculateAmountOwed = (roommate) => {
        const perPersonAmount = calculatePerPersonAmount();
        const roommateTotal = calculateTotalAmount(itemsData[roommate]?.flatMap(item => item.amounts));
        return perPersonAmount - roommateTotal;
    };

    return (
        <>
            {showItemForm && (
                <ItemsForm
                    onClose={() => setShowItemForm(false)}
                    onItemsFormSubmit={(data) => {
                        setItemsData({
                            ...itemsData,
                            [currentRoommate]: [...itemsData[currentRoommate], data],
                        });
                    }}
                />
            )}

            <div className="bg-000 text-white min-h-screen flex flex-col lg:flex-row mx-auto my-auto bg-cover bg-center font-league"
                style={{
                    backgroundImage: 'url("/src/assets/bg.jpg")',
                }}>
                <div className="w-4/5 lg:w-1/5 container mx-auto mt-12 lg:mt-24 lg:ml-48">
                    <h1 className="text-4xl text-ff4a26 font-med mb-4">RoomName</h1>

                    <div className="mb-6">
                        <button
                            className="border border-white hover:bg-9C9C9C hover:border-000 hover:text-000 text-white font-bold py-2 px-4 rounded-lg"
                            onClick={() => setRoommateForm(true)}
                        >
                            + Add Roommate
                        </button>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-3">Roommates :</h2>
                        <ol>
                            {roommates.map((roommate, index) => (
                                <li
                                    key={index}
                                    className="border border-white hover:border-000 hover:bg-9C9C9C hover:text-000 h-12 flex justify-between items-center cursor-pointer text-xl text-center font-normal mb-3 p-2 text-white rounded-lg"
                                >
                                    {roommate}
                                    <div className="text-base font-normal text-white  ">
                                        <button
                                            className="bg-45aa9c  hover:bg-116D6E hover:text-000 py-1 px-3 rounded mr-2"
                                            onClick={() => toggleItemForm(roommate)}
                                        >
                                            Add
                                        </button>
                                        <button
                                            className="bg-ff4a26 hover:bg-a33327  hover:text-000 py-1 px-3 rounded"
                                            onClick={() => {
                                                toggleItemForm(roommate);
                                                setShowItemForm(false);
                                            }}
                                        >
                                            View
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Roommates form */}
                    {roommateForm && (
                        <div className="mt-4">
                            <label className="block mb-2 text-lg font-normal tracking-wide ">
                                Name :
                                <input
                                    className=" text-000 bg-F7F7F7 font-norr border border-000 rounded-md p-1.5 w-full"
                                    type="text"
                                    value={roommateName}
                                    onChange={(e) => setRoommateName(e.target.value)}
                                />
                            </label>
                            <button
                                className="bg-45aa9c hover:bg-116D6E text-white hover:text-000 font-bold py-1 px-4 rounded mr-2"
                                onClick={addRoommate}
                            >
                                Add
                            </button>
                            <button
                                className="bg-ff4a26 hover:bg-a33327  text-white hover:text-000 font-bold py-1 px-2 rounded"
                                onClick={() => setRoommateForm(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>

                <div className="w-4/5 lg:w-7/12 container mx-auto mt-2 lg:ml-36">
                    {roommates.map((roommate, index) => (
                        <div key={index} className={`mt-8 ${roommate === currentRoommate ? 'block' : 'hidden'}`}>
                            <h2 className="text-3xl text-45aa9c font-bold tracking-wide mb-2">{roommate}</h2>
                            <table className="text-center w-full lg:w-2/3 text-000 border border-white bg-9C9C9C">
                                <thead>
                                    <tr>
                                        <th className="md:py-2 md:px-4 border-r border-b  border-000">S.No</th>
                                        <th className="md:py-2 md:px-4 border-r border-b border-000 w-32">Date</th>
                                        <th className="md:py-2 md:px-4 border-r border-b border-000">Items</th>
                                        <th className="md:py-2 md:px-4 border-r border-b border-000">Amounts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {itemsData[roommate]?.map((item, itemIndex) => (
                                        <tr key={itemIndex}>
                                            <td className="md:py-1 md:px-4 border-r border-b border-000 font-normal text-center">{itemIndex + 1}</td>
                                            <td className="md:py-1 md:px-4 border-r border-b border-000 ">{item.date}</td>
                                            <td className="md:py-1 md:px-4 border-r border-b border-000 ">{item.items.join(', ')}</td>
                                            <td className="md:py-1 md:px-4 border-r border-b border-000 ">
                                                {item.amounts.join(', ')}
                                                <br />
                                                Total Amount: {calculateTotalAmount(item.amounts)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-4 tracking-wider">



                                <p className="text-xl font-bold">Room's Total :  Rs. {calculateGrandTotal().toFixed(2)}</p>
                                <p className="text-xl font-bold">Per Person :  Rs. {calculatePerPersonAmount().toFixed(2)}</p>

                            </div>
                        </div>
                    ))}

                    {/* Toggleable Summary Table */}

                    <div className={`overflow-x-auto ${showSummaryTable ? 'block' : 'hidden'}`}>
                        <h2 className="text-3xl text-45aas9c  font-bold tracking-wide mt-6  mb-2">Summary Table :</h2>
                        <table className="text-center w-full lg:w-2/3 bg-9C9C9C border border-white text-000 ">
                            <thead>
                                <tr>
                                    <th className="md:py-2 md:px-4  border-r border-b  border-000">S.No</th>
                                    <th className="md:py-2 md:px-4  border-r border-b border-000">Roommate</th>
                                    <th className="md:py-2 md:px-4  border-r border-b border-000 ">Total Amount</th>
                                    <th className="md:py-2 md:px-4  border-r border-b border-000 ">Amount Owed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roommates.map((roommate, index) => (
                                    <tr key={index}>
                                        <td className="md:py-1 md:px-4  border-r border-b border-000 text-center">{index + 1}</td>
                                        <td className="md:py-1 md:px-4  border-r border-b border-000">{roommate}</td>
                                        <td className="md:py-1 md:px-4  border-r border-b border-000">
                                            {calculateTotalAmount(itemsData[roommate]?.flatMap(item => item.amounts)).toFixed(2)}
                                        </td>
                                        <td className="md:py-1 md:px-4  border-r border-b border-000">
                                            {calculateAmountOwed(roommate).toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>

                    {/* Button to toggle the summary table */}
                    <button
                        className="border border-white hover:border-000 bg-000 hover:bg-ff4a26 text-white hover:text-000 font-bold py-2 px-4 rounded mt-4"
                        onClick={() => setShowSummaryTable(!showSummaryTable)}
                    >
                        {showSummaryTable ? 'Hide Summary Table' : 'Show Summary Table'}
                    </button>
                </div>


            </div >
        </>
    );
};

export default Room;
