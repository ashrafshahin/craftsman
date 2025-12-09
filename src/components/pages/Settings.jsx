import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import SettingsInfo from '../settings/SettingsInfo'


const Settings = () => {
    return (
        <div>
            <div className='md:flex my-10 m-5 '>
                <div className='mr-2 '>
                    <Sidebar active="settings" />
                </div>
                <div className=' '>
                    <SettingsInfo />
                </div>
                {/* <div className=''>

                    <div className=''>
                        <SettingsInfo />
                    </div>
                    <div className='mx-2'>
                        
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default Settings