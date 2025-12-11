import React, { useState } from 'react';

import profile from "../images/profile.png"

import { useDispatch, useSelector } from 'react-redux';
import { getDatabase, ref, set, update } from 'firebase/database';
import { getAuth, updateProfile } from 'firebase/auth';
import { userNameUpdate } from '../slices/userSlice';

const SettingsInfo = () => {

    const db = getDatabase()
    const auth = getAuth()
    // **user not defined Error** solve hoise ai variable deye... dec-10..
    const user = auth.currentUser;

    // redux er kahini korba,,, dec-10
    const dispatch = useDispatch()

    //Bring Data from Database - profile update part 
    const data = useSelector((selector) => (selector.userDetails.value))

    

    const [show, setShow] = useState(false)

    // profile name edit work... dec-10
    // const [showDisplayName, setShowDisplayName] = useState(data.displayName || " ")

    // finally used this one dec-11...
    const [newName, setNewName] = useState(data.displayName)

    const handleEditNameShow = () => {
        setShow(!show)
    }
    const handleEditName = () => {
        console.log(newName);
        updateProfile(auth.currentUser, {
            displayName: newName,
        })
         update(ref(db, 'users/' + user.uid), {
             username: newName,
             
         }).then(() => {
            dispatch(userNameUpdate(newName))
        }).catch((error) => {
        console.log(error, "Name Update work Error");
        
        })

    }

    return (
        <div className="min-h-screen font-primary bg-primary shadow-2xl shadow-black p-6 mt-2 rounded-xl ml-4">
            <div className="md:w-5xl mx-auto">
                {/* Search Bar */}
                <div className="mb-6 relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20 text-lg">🔍</span>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-gray-950 border border-gray-800 rounded-lg pl-12 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white text-xl">
                        ⋮
                    </button>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Profile Settings Card */}
                    <div className="bg-primary/50 shadow-2xl shadow-black rounded-2xl border-2 border-red-500 p-6 relative">
                        <button className="absolute top-4 right-4 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs hover:bg-red-600 transition-colors">
                            ⓘ
                        </button>

                        <h2 className="text-lg font-semibold text-white mb-6">Profile Settings</h2>

                        {/* Profile Picture Section */}
                        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-800">
                            <div className="relative group cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center overflow-hidden ring-2 ring-gray-800">
                                    <img src={profile} alt="Profile" className="w-full h-full" />
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white text-xl">📷</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-white">
                                    {data?.displayName}
                                </h3>
                                <p className="text-gray-400 text-sm flex items-center gap-1">
                                    Stay home <span className="text-yellow-400">🏠</span> stay <span className="text-yellow-400">😊</span>
                                </p>
                            </div>
                        </div>

                        {/* Settings Options */}
                        <div className="space-y-1">

                            {/* working on profile edit dec-09... dec-10 following */}
                            <button onClick={handleEditNameShow}
                                className="w-full flex items-center gap-3 px-3 py-3 text-white hover:bg-gray-900 rounded-lg transition-colors text-left">
                                <span className="text-gray-400 text-lg flex-shrink-0">✏️</span>
                                <span className="text-sm">Edit Profile Name.</span>

                            </button>
                            {/* profile name edit work... dec-10 */}
                            {
                                show &&
                                <div>
                                    <input
                                            onChange={(e) => setNewName(e.target.value)}
                                            value={newName}
                                        type="text" placeholder='Edit Profile Name...'
                                        className='w-[320px] border-2 rounded-lg border-white text-sm text-white py-2 pl-4 mr-2' />
                                    <button onClick={handleEditName}
                                        className='border-2 rounded-lg border-white text-sm text-white p-2 hover:bg-white hover:text-black '>Update Name</button>
                                </div>
                            }
                            <button className="w-full flex items-center gap-3 px-3 py-3 text-white hover:bg-gray-900 rounded-lg transition-colors text-left">
                                <span className="text-gray-400 text-lg flex-shrink-0">💬</span>
                                <span className="text-sm">Edit Profile Status Info.</span>
                            </button>
                            <button className="w-full flex items-center gap-3 px-3 py-3 text-white hover:bg-gray-900 rounded-lg transition-colors text-left">
                                <span className="text-gray-400 text-lg flex-shrink-0">📷</span>
                                <span className="text-sm">Edit Profile Photo.</span>
                            </button>
                            <button className="w-full flex items-center gap-3 px-3 py-3 text-white hover:bg-gray-900 rounded-lg transition-colors text-left">
                                <span className="text-gray-400 text-lg flex-shrink-0">❓</span>
                                <span className="text-sm">Help.</span>
                            </button>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
                            <p className="text-gray-500 text-xs">Chat App</p>
                        </div>

                        {/* Corner Decorations */}
                        <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-red-500 rounded-bl"></div>
                        <div className="absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2 border-red-500 rounded-br"></div>
                    </div>

                    {/* Account Settings Card */}
                    <div className="bg-primary/50 shadow-2xl shadow-black rounded-2xl border-2 border-gray-800 p-6 relative">
                        <h2 className="text-lg font-semibold text-white mb-6">Account Settings</h2>

                        {/* Settings Options */}
                        <div className="space-y-4">
                            <button className="w-full flex items-center gap-3 px-3 py-3 text-white hover:bg-gray-900 rounded-lg transition-colors text-left">
                                <span className="text-gray-400 text-lg flex-shrink-0">🔑</span>
                                <span className="text-sm">Change Password.</span>
                            </button>
                            <button className="w-full flex items-center gap-3 px-3 py-3 text-white hover:bg-gray-900 rounded-lg transition-colors text-left">
                                <span className="text-gray-400 text-lg flex-shrink-0">🗑️</span>
                                <span className="text-sm">Delete Account.</span>
                            </button>
                        </div>

                        <div className="mt-56 pt-6 border-t border-gray-800 text-center">
                            <p className="text-gray-500 text-xs">Chat App</p>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <div className="flex justify-center mt-6">
                    <button className="px-8 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg font-medium transition-colors">
                        Edit a file
                    </button>
                </div>
            </div>
        </div>
    );
}
export default SettingsInfo