// ItemsForm.jsx
import React, { useState } from 'react';

const ItemsForm = ({ onClose, onItemsFormSubmit }) => {
    const [formData, setFormData] = useState({
        date: '',
        items: '',
        amounts: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Convert the comma-separated strings to arrays
        const itemsArray = formData.items.split(',').map(item => item.trim());
        const amountsArray = formData.amounts.split(',').map(amount => parseFloat(amount.trim()));

        // Combine arrays into an array of objects
        const data = {
            date: formData.date,
            items: itemsArray,
            amounts: amountsArray,
        };

        // Call the callback function to submit the form data
        onItemsFormSubmit(data);

        // Close the form after submission
        onClose();
    };

    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 font-league ">
                <form onSubmit={handleSubmit} className="w-96 h-1/2/4 px-8 py-8 bg-white rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold mb-5">Spendings Log Form</h2>
                    <div className="mb-5">
                        <label htmlFor="date" className="block text-000 font-normal mb-1">Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full border border-00000029 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="items" className="block text-000  font-normal mb-1">Items:</label>
                        <input
                            type="text"
                            id="items"
                            name="items"
                            value={formData.items}
                            onChange={handleChange}
                            className="w-full border border-00000029 rounded-md p-2"
                            required
                        />
                    </div>
                    <div className="mb-7">
                        <label htmlFor="amounts" className="block text-000  font-normal mb-1">Amounts:</label>
                        <input
                            type="text"
                            id="amounts"
                            name="amounts"
                            value={formData.amounts}
                            onChange={handleChange}
                            className="w-full border border-00000029 rounded-md p-2"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-000 text-white hover:bg-9C9C9C hover:text-000 border hover:border-000 p-2 rounded-md  mr-3 font-normal"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-500 hover:text-000 p-2 rounded font-normal"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ItemsForm;
