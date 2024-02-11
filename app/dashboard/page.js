"use client"

import {Calendar, Col, Row} from "antd";
import Image from "next/image";
import {ArrowIcon} from "/Utils/svgs";
import dayjs from "dayjs";
import CustomCalendar from "/Components/Common/Calendar";
import DataAbsentCard from "/Components/Dashboard/DataAbsentCard";
import CustomTable from "/Components/Common/CustomTable";

const tableColumns = [
    {
        title: 'STATUS',
        dataIndex: 'status'
    },
    {
        title: 'OPEN DATE',
        dataIndex: 'open_date'
    },
    {
        title: 'SYMBOL',
        dataIndex: 'symbol'
    },
    {
        title: 'ENTRY',
        dataIndex: 'entry'
    },
    {
        title: 'EXIT',
        dataIndex: 'exit'
    },
    {
        title: 'RETURN ₹',
        dataIndex: 'return'
    },
    {
        title: 'SIDE',
        dataIndex: 'side'
    },
    {
        title: 'SETUPS',
        dataIndex: 'setups'
    },
]

const DashboardPage = () => {
    return (
        <div className={'dashboard-main ht-100'}>
            <Row className={'ht-100'}>
                <Col span={16} className={'data-main'}>
                    <Row className={'data-row ht-100'} gutter={[16, 16]}>
                        <Col span={15} className={'data-col'}>
                            <div className={'content-card ht-100 d-flex'}>
                                <div className={'heading'}>
                                    Overview
                                </div>
                                <div className={'flex-grow content'}>
                                    <DataAbsentCard />
                                </div>
                            </div>
                        </Col>
                        <Col span={9} className={'data-col'}>
                            <div className={'content-card ht-100'}>
                                <DataAbsentCard />
                            </div>
                        </Col>
                        <Col span={24} className={'data-col'}>
                            <div className={'content-card ht-100'}>
                                <CustomTable
                                    columnList={tableColumns}
                                    selectable={true}
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={8} className={'calendar-main'}>
                    <CustomCalendar />
                </Col>
            </Row>
        </div>
    )
}

export default DashboardPage