import React from 'react';
import { HiUserCircle } from 'react-icons/hi';

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center text-black">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <HiUserCircle className="text-gray-500 text-9xl" />
          <div>
            <h1 className="text-2xl font-semibold">John Doe</h1>
            <p className="text-gray-600">johndoe@example.com</p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Profile Information</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600">Full Name</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                value="John Doe"
              />
            </div>
            <div>
              <label className="text-gray-600">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                value="johndoe@example.com"
              />
            </div>
            <div>
              <label className="text-gray-600">Phone Number</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                value="+1 234 567 890"
              />
            </div>
            <div>
              <label className="text-gray-600">Address</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                value="123 Main St, City, Country"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
