'use client'

import {Button, Dropdown, Select, Space} from "antd";
import Image from "next/image";
import {AddIcon, DropdownIcon} from "/Utils/svgs";
import {useState} from "react";

const tagList = [
    {
        label: 'Symbol',
        id: 'label'
    },
    {
        label: 'Setup',
        id: 'setup'
    },
    {
        label: 'Side',
        id: 'side'
    },
]

const selectOptions = [
    {
        label: 'My Portfolio 1',
        value: 'p1'
    },
    {
        label: 'My Portfolio 2',
        value: 'p2'
    },
    {
        label: 'My Portfolio 3',
        value: 'p3'
    },
]

const Navbar = () => {
    const [selectedPortfolio, setSelectedPortfolio] = useState(selectOptions[0]?.value)

    return (
        <nav className={'navbar-main d-flex'}>
            <div className={'content-main d-flex flex-center'}>
                <div className={'utility-main d-flex flex-center'}>
                    <div className={'tags-container d-flex flex-center'}>
                        {tagList?.map(item => (
                            <div className={'tag'} key={item?.id}>
                                {item?.label}
                            </div>
                        ))}
                    </div>
                    <Button className={'add-tag d-flex flex-center ht-100'}>
                        <AddIcon/>
                        Add
                    </Button>
                </div>
                <Button
                    className={'blue-button add-trade-btn'}
                    size={'large'}
                >
                    Add Trades
                </Button>
                <div className={'profile-main d-flex flex-center'}>
                    <div className={'profile-img-main d-flex flex-center'}>
                        <Image
                            src={'/Assets/profileImg.png'}
                            alt={'profile=img'}
                            height={40}
                            width={40}
                        />
                    </div>
                    <Select
                        options={selectOptions}
                        value={selectedPortfolio}
                        onChange={(val) => setSelectedPortfolio(val)}
                        suffixIcon={<DropdownIcon />}
                        className={'profile-select'}
                        size={'large'}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar