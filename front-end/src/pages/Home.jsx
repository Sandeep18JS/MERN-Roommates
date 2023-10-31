import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CreateRoomForm from '../forms/Createroom';
import EnterRoomForm from '../forms/Enterroom';

const Home = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEnterForm, setShowEnterForm] = useState(false);

  const toggleCreateForm = () => {
    setShowCreateForm(!showCreateForm);
  };

  const toggleEnterForm = () => {
    setShowEnterForm(!showEnterForm);
  };

  const handleCreateRoom = (formData) => {
    // Add your logic to handle creating a room
    console.log('Room created:', formData);
    // Close the form after room creation
    setShowCreateForm(false);
  };

  const handleEnterRoom = (formData) => {
    // Add your authentication logic here
    // For example, check if the room with the provided credentials exists
    const authenticatedRoom = /* Your authentication logic */true;

    if (authenticatedRoom) {
      // Successfully entered the room
      // You can perform further actions, e.g., redirect to the room page
      console.log('Entered room:', formData);
    } else {
      // Authentication failed, you can show an error message or handle it as needed
      console.error('Authentication failed');
    }

    // Close the form after authentication attempt
    setShowEnterForm(false);
  };

  return (
    <>
      {showCreateForm && <CreateRoomForm onClose={toggleCreateForm} onCreate={handleCreateRoom} />}
      {showEnterForm && <EnterRoomForm onCancel={toggleEnterForm} onEnter={handleEnterRoom} />}

      <div className='bg-000 mx-auto min-h-screen bg-cover bg-center font-league flex flex-col'
        style={{
          backgroundImage: 'url("/src/assets/bg.jpg")',
        }}>
        <div className=' flex justify-between items-center p-3 bg-0C0C0C text-ff4a26'>
          <h3 className="mr-9 text-2xl font-med ml-4 tracking-wide">Roommates</h3>
          <nav >
            <ul className="flex space-x-4 font-normal">
              <li>
                <Link to="/" className="hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">About</Link>
              </li>
              <li>
                <button onClick={toggleCreateForm} className="hover:text-gray-300">Create Room</button>
              </li>
              <li>
                <button onClick={toggleEnterForm} className="hover:text-gray-300">Enter Room</button>
              </li>
            </ul >
          </nav >
        </div>
        <div className="mt-16 mr-8 ml-8 flex-1 flex items-center justify-center text-white text-2xl text-center font-nor"
        >
          "In the realm of roommates, each day weaves a tapestry of camaraderie and chaos—a lively symphony of shared dreams, a hint of dirty dishes, and an abundance of endless banter."</div>

        <div className='mt-16 w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 flex-1 mx-auto my-auto '
        >
          <h1 className=" text-center text-2xl text-ff4a26 font-bold mt-2 mb-4 tracking-wide">Welcome to Roommates Expense Tracker!
          </h1>

          <p className="text-center font-normal text-9C9C9C tracking-wider	leading-8">"Living together is an adventure filled with shared moments and shared responsibilities. Our app simplifies the financial side of cohabitation—say goodbye to money disputes and hello to transparency! Roommates Expense Tracker ensures everyone is on the same page, making harmonious living easy and headache-free. Because great memories shouldn't come with financial headaches."</p>
        </div>

        <footer className="bg-0C0C0C text-white text-center pt-4 pb-4 mt-6 sm:mt-0  font-norr tracking-tighter">
          <p className='text-lg'>&copy; 2023 Roommates Expense Tracker</p>
        </footer>
      </div >

    </>
  )
}

export default Home