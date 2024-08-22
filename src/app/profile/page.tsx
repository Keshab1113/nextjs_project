"use client"
import React, { useState } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

const ProfilePage = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout Successfull");
      router.push("/login");
    } catch (error:any) {
      toast.error("Logout Failed");
    }
  }
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
                value={name}
                placeholder="John Doe"
                onChange={handleChangeName}
              />
            </div>
            <div>
              <label className="text-gray-600">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                value={email}
                placeholder="johndoe@example.com"
                onChange={handleChangeEmail}
              />
            </div>
            <div>
              <label className="text-gray-600">Phone Number</label>
              <input
                type="number"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                value={phone}
                placeholder="+1 234 567 890"
                onChange={handleChangePhone}
              />
            </div>
            <div>
              <label className="text-gray-600">Address</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
                value={address}
                placeholder="123 Main St, City, Country"
                onChange={handleChangeAddress}
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button onClick={logout} className="px-4 py-2 mr-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
              Logout
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
};

export default ProfilePage;
