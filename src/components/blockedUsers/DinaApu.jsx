import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import friends1 from '../../assets/friends1.png'
import { getDatabase, onValue, remove, ref } from 'firebase/database';
import { useSelector } from 'react-redux';

const BlockedUser = () => {

    const data = useSelector((selector) => selector?.userInfo?.value?.user);
    console.log(data?.uid, "blockData");
    const [blockList, setBlockList] = useState([]);
    const db = getDatabase();

    useEffect(() => {
        const blockUserRef = ref(db, "block");
        onValue(blockUserRef, (snapshot) => {
            let arr = [];
            snapshot.forEach((item) => {
                if (item.val().blockerId === data.uid) {
                    arr.push({
                        ...item.val(),
                        key: item.key,
                    });
                }
            });
            setBlockList(arr);
        });
    }, []);
    console.log(blockList);

    const handleUnblock = (item) => {
        remove(ref(db, "block/" + item.key));
    };
    return (
        <div className='shadow-lg rounded-lg px-5 py-3 font-primary text-primary mt-10'>
            <div className='flex justify-between items-center'>
                <h3 className='font-semibold text-[20px]'>Blocked Users</h3>
                <BsThreeDotsVertical className='text-[20px]' />
            </div>

            <div className='px-2 h-[400px] overflow-y-scroll custom-scrollbar'>
                {
                    blockList.map((item) => (
                        <div key={item.key} className='flex justify-between items-center mt-[17px] border-b-2 border-[#b0a9a9] pb-[10px]'>
                            <div className='flex items-center'>
                                <img src={friends1} alt="#friends1" />
                                <div className='ml-[14px]'>
                                    <h4 className='font-semibold text-[14px]'>{item.blockedName}</h4>
                                    <p className='font-medium text-[10px] text-[#4D4D4D]'>Today, 8:56pm</p>
                                </div>
                            </div>



                            {item.blockerId === data.uid && (
                                <button
                                    onClick={() => handleUnblock(item)}
                                    className="font-semibold text-[20px] text-white bg-primary px-2 rounded-[5px]"
                                >
                                    Unblock
                                </button>
                            )}


                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BlockedUser;
