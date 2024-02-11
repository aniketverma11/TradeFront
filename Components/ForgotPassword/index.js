import {GreenTickIcon, TradeRytIcon} from "/Utils/svgs";
import {Button, Form, Input} from "antd";
import Link from "next/link";

const ForgotPasswordCard = () => {
    return (
        <div className={'login-form-main forgot-password-card-main d-flex align-items-center'}>
            <TradeRytIcon/>
            <div className={'heading d-flex justify-content-center'}>
                Forgot Password
            </div>
            <Form
                layout={'vertical'}
                className={'w-100'}
            >
                <Form.Item
                    name='email'
                    label={'Email'}
                    className={'form-label'}
                >
                    <Input type={'email'}/>
                </Form.Item>
                <Form.Item>
                    <Button className={'primary-button w-100 d-flex flex-center'} size={'large'} htmlType={'submit'}>
                        Send
                    </Button>
                </Form.Item>
            </Form>
            <Link href={'/login'} className={'back-to-login'}>Back to Login</Link>
            <div className={'success-message d-flex align-items-center'}>
                <GreenTickIcon />
                Check your Email to reset your password.
            </div>
        </div>
    )
}

export default ForgotPasswordCard