import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const EnterRoomForm = ({ onEnter, onCancel }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        roomName: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to authenticate with the existing room data
        navigate('/room')
        onEnter(formData);
    };

    const handleCancel = () => {
        // Trigger the onCancel function, which was passed as a prop from the parent component
        onCancel();
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 font-league ">
            <form onSubmit={handleSubmit} className="w-96 h-1/2/4 px-8 py-8 bg-white rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold mb-5">Enter Room</h2>

                <div className="mb-5">
                    <label htmlFor="roomName" className="block text-000  font-normal mb-1">
                        Room Name:
                    </label>
                    <input
                        type="text"
                        id="roomName"
                        name="roomName"
                        value={formData.roomName}
                        onChange={handleChange}
                        className="w-full border border-00000029 rounded-md p-2"
                        required
                    />
                </div>

                <div className="mb-7">
                    <label htmlFor="password" className="block text-000  font-normal mb-1">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border border-00000029 rounded-md p-2"
                        required
                    />
                </div>

                <div className="flex justify-end">
                    <button type="submit" className="bg-000 text-white hover:bg-9C9C9C hover:text-000 border hover:border-000 p-2 rounded-md  mr-3 font-normal">
                        Enter Room
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="text-gray-500 hover:text-000 p-2 rounded font-normal"
                    >
                        Cancel
                    </button>

                </div>
            </form>
        </div>
    );
};

export default EnterRoomForm;
