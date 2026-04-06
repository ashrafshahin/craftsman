import React, { useEffect, useState } from 'react';
import userImage from '../images/friends.png'

import { HiDotsVertical } from "react-icons/hi";

import { useSelector } from 'react-redux';

import { getDatabase, onValue, push, ref, set } from 'firebase/database';

// date and time setup- dec-8..
import moment from 'moment'

// emoji setup Dec-08
import EmojiPicker from 'emoji-picker-react';
import { ImCross } from "react-icons/im";
import { FaRegSmile } from "react-icons/fa";




const ChatBox = () => {
    // msg sending dec-08
    const db = getDatabase()
    //Get data from Redux dec-08
    const data = useSelector((selector) => (selector.userDetails.value))

    //redux-ar setup work dec-07
    const activeData = useSelector((state) => state.activeChatInfo.value)
    // console.log(activeData);

    // localstorage setup dec-07 , uporer variable name ta 'activeData' asbe...
    localStorage.setItem("activeChatInfo", JSON.stringify(activeData))

    

    // message sending to redux to show on firebase.. dec-08 
    const [msg, SetMsg] = useState('')
    const handleMsg = (e) => {
        if (msg.trim()) {
            set(push(ref(db, "message")), {
                senderID: data?.uid,
                senderName: data?.displayName,
                receiverID: activeData?.ID,
                receiverName: activeData?.name,
                message: msg,
                date: moment().format()
                
            })
            // Clear input after sending, trim() method used dec-08
            SetMsg('');
        }
        console.log(msg);
        
        
    }
    // from firebase - send message to display dec-08 
    // useState ([]) vitore array hobe
    const [msgList, setMsgList] = useState([])
    
    useEffect(() => {
        const messageRef = ref(db, "message")
        onValue(messageRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                if (
                    (data?.uid == item.val().senderID && activeData?.ID == item.val().receiverID)
                    ||
                    (data?.uid == item.val().receiverID && activeData?.ID == item.val().senderID)
                )
                    arr.push(item.val())

            });    
            setMsgList(arr)
        });

    }, [activeData?.ID])
    console.log(msgList, 'check , chat messages');
    // here activeData.ID dele refresh korle data chole jabe na , dec-08,,,

    // emoji setup er jonno dec-08
    const [showEmoji, setShowEmoji] = useState(false)
    
    // emoji dynamic on chatting with emoji dec-09
    const onEmojiClick = (emoji) => {
        console.log(emoji.emoji, 'check emoji');
        SetMsg(msg + emoji.emoji)
        
    }
    
    
    return (
        <div className="flex flex-col h-screen bg-white shadow-lg shadow-black rounded-b-xl">
            {/* Header */}
            <div className="bg-primary text-white px-4 py-3 shadow-t-lg  shadow-black rounded-t-xl  ">
                <div className="flex items-center gap-x-5 ">
                    <div className=''>
                        <img
                            src={userImage}
                            alt="User"
                            className="w-15 h-14 md:w-25 md:h-25 rounded-full object-cover"
                        />
                    </div>

                    <div className='flex justify-end items-center space-x-70 '>
                        <div>
                            {/* kar sathe chatting korchi tar name asbe... dec-07 */}
                            <h2 className="font-bold text-2xl">

                                {
                                    activeData ?
                                        <p>{activeData.name}</p>
                                        :
                                        <p>Unknown</p>
                                }
                            </h2>
                            <p className="text-sm text-gray-300">Online</p>
                        </div>
                        <div>
                            <HiDotsVertical className='text-3xl md:ml-20' />
                        </div>
                    </div>

                </div>
            </div>

            {/* Messages Container */} {/* map for message dec-08 */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {
                    msgList.map((item) => (
                        data?.uid == item.senderID ?
                       // Sent Message design... dec-08
                        <div className="flex items-start space-x-3 justify-end">
                            <div className="bg-primary rounded-lg rounded-tr-none px-4 py-3 max-w-xs">
                                    <p className="text-white text-sm">{ item.message}</p>
                                    <span className="text-xs text-gray-300 mt-1 block text-right">{moment(item.date).fromNow()}</span>
                                    <span className="text-xs text-gray-300 mt-1 block text-right">{moment.locale(item.date)}</span>
                            </div>
                            <img
                                src={userImage}
                                alt="Me"
                                className="w-8 h-8 rounded-full shrink-0 object-cover"
                            />
                            </div>
                            :
                            // Received Message design
                            <div className="flex items-start space-x-3">
                                <img
                                    src={userImage}
                                    alt="User"
                                    className="w-8 h-8 rounded-full shrink-0 object-cover"
                                />
                                <div className="bg-gray-300 rounded-lg rounded-tl-none px-4 py-3 max-w-xs">
                                    <p className="text-gray-900 text-sm">{item.message}</p>
                                    <span className="text-xs text-gray-500 mt-1 block">{moment(item.date).fromNow()}</span>
                                    <span className="text-xs text-gray-300 mt-1 block text-right">{moment.locale(item.date)}</span>
                                </div>
                            </div>
                    ))
                }
                
            
            </div>

            {/* Input Area design */}
            <div className="border-t border-gray-200 bg-white px-6 py-4">

                {/* Image Preview Section */}
                <div className="mb-3 flex flex-wrap gap-2">

                </div>

                <div className="flex items-end space-x-3 relative">

                    {/* Attachment Button */}

                    <label className="shrink-0 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                        <input type="file" className="hidden" accept=".pdf,.doc,.docx,.txt" />
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                    </label>

                    {/* Image Button */}
                    <label className="shrink-0 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                        <input type="file" className="hidden" accept="image/*" multiple />
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </label>

                    {/* Input Field */}
                    {/* emoji design and position fixed dec-09 */}
                    <div className='absolute bottom-13 left-27 '>
                        {
                            showEmoji &&
                            <EmojiPicker onEmojiClick={(emoji) => onEmojiClick(emoji)} />
                        }
                    </div>
                    
                    {/* Chatting with friends- message sending dec-08 */}
                    <div className="flex-1 relative">
                        
                        <input onChange={(e) => SetMsg(e.target.value)}
                   
                        // enter dele message chole jabe dec-08
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleMsg();
                                }
                            }}
                        // value must dete hobe - emoji dynamic kore chatting korte
                            value={msg}
                            type="text"
                            placeholder="Type your message..."
                            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 text-gray-800"
                        />
                        {/* Emoji Button  */}

                        <button onClick={(e)=>setShowEmoji(!showEmoji)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors text-3xl bg-transparent">
                            
                            😊
                                  
                                </button>
                            
                                
                        
                        
                        
                    </div>

                    {/* Send Button design */}

                    {/* Chatting with friends- message sending dec-08 */}
                    {/* <div className='absolute top-[8px] right-[60px] '>
                        <FaRegSmile onClick={(e) => setShowEmoji(!showEmoji)}
                            className='text-[35px] ' />
                    </div> */}
                    <button onClick={handleMsg}
                        className="shrink-0 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>

                {/* File Type Info */}
                <p className="text-xs text-gray-500 mt-2 text-center">
                    Supports: Images (JPG, PNG), Documents (PDF, DOC, DOCX)
                </p>
            </div>
        </div>
    );
}
export default ChatBox