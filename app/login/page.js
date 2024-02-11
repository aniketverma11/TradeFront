'use client'

import ActionFormCard from "/Components/Common/ActionFormCard";
import LoginForm from "/Components/Login/LoginForm";
import {Col, Row} from "antd";
import Intro from "/Components/Common/Intro";

const LoginPage = () => {
    return (
        <Row className={'ht-100 flex-grow'}>
            <Col span={8}>
                <ActionFormCard>
                    <LoginForm/>
                </ActionFormCard>
            </Col>
            <Col span={16}>
                <Intro />
            </Col>
        </Row>
    )
}

export default LoginPage