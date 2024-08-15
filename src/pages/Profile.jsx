import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';

const Profile = () => {
    const { user, getProfile, updateProfile } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                await getProfile();
                setFormData({
                    firstName: user?.firstName || '',
                    lastName: user?.lastName || '',
                    email: user?.email || '',
                });
            } catch (error) {
                console.log(`Error Fetching Profile: ${error}`);
            }
        };
        fetchUser();
    }, [getProfile]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleUpdateClick = async () => {
        try {
            if (!user?._id) {
                throw new Error("User ID is not available");
            }
            await updateProfile(user._id, formData);
            setIsEditing(false);
        } catch (error) {
            console.log(`Error Updating Profile: ${error}`);
        }
    };

    useEffect(() => {
        console.log(user);
    }, [user]);



    const handleBackClick = () => {
        setIsEditing(false);
    };

    return (
        <div className="flex justify-center items-center mt-12">
            <div className="w-1/2 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-primary p-6 text-center">
                    <h1 className="text-white text-3xl font-semibold">{isEditing ? 'Edit Profile' : 'Your Profile'}</h1>
                </div>
                <div className="p-6">
                    {user ? (
                        <div className="space-y-6">
                            {!isEditing ? (
                                <>
                                    <div className="flex items-center justify-start">
                                        <span className="text-gray-600 font-medium">Name:</span>
                                        <span className="ml-2 text-gray-900">{user.firstName} {user.lastName}</span>
                                    </div>
                                    <div className="flex items-center justify-start">
                                        <span className="text-gray-600 font-medium">Email:</span>
                                        <span className="ml-2 text-gray-900">{user.email}</span>
                                    </div>
                                    <div className="text-right">
                                        <button
                                            onClick={handleEditClick}
                                            className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-full shadow hover:bg-indigo-600 focus:outline-none"
                                        >
                                            Edit Profile
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <button
                                            onClick={handleBackClick}
                                            className="text-blue-600 hover:underline focus:outline-none"
                                        >
                                            &larr; Back
                                        </button>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-gray-600 font-medium">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-gray-600 font-medium">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-gray-600 font-medium">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="text-right">
                                        <button
                                            onClick={handleUpdateClick}
                                            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 focus:outline-none"
                                        >
                                            Update Profile
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
