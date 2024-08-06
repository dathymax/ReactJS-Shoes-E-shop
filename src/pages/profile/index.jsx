import React, { useState } from 'react'
import "./styles.scss"
import ProfileInformation from './components/ProfileInformation';
import Ordered from './components/Ordered';

const ProfilePage = () => {
    const [tabKey, setTabKey] = useState("profile");
    const tabs = [
        { key: "profile", label: "Profile" },
        { key: "ordered", label: "Order list" },
    ];


    const handleChangeTab = (key) => {
        setTabKey(key);
    }

    const genComponentByTab = (tabKey) => {
        switch (tabKey) {
            case "profile":
                return <ProfileInformation />
            case "ordered":
                return <Ordered />
            default:
                break;
        }
    }

    return (
        <section className='container content profile'>
            <div className="flex items-center justify-between mb-10">
                <h1 className='text-36 font-bold'>Profile</h1>
            </div>

            <div className="grid grid-cols-5 gap-4">
                <ul className="col-span-1 p-4 bg-white">
                    {tabs.map(tab => {
                        return (
                            <li
                                key={tab.key}
                                style={{ color: tabKey === tab.key ? "#1B1B1B" : "#5F5F5F" }}
                                className='mb-8 cursor-pointer font-semi'
                                onClick={() => handleChangeTab(tab.key)}
                            >
                                {tab.label}
                            </li>
                        )
                    })}
                </ul>

                {genComponentByTab(tabKey)}
            </div>
        </section>
    )
}

export default ProfilePage