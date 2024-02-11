'use client'

import ActionFormCard from "/Components/Common/ActionFormCard";
import LoginForm from "/Components/Login/LoginForm";
import {Col, Row} from "antd";
import Intro from "/Components/Common/Intro";
import SignupForm from "/Components/Signup/SignupForm";

const SignUpPage = () => {
    return (
        <Row className={'ht-100 flex-grow'}>
            <Col span={8}>
                <ActionFormCard>
                    <SignupForm />
                </ActionFormCard>
            </Col>
            <Col span={16}>
                <Intro />
            </Col>
        </Row>
    )
}

export default SignUpPage