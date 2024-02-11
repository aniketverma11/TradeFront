import {Button, Form, Input} from "antd";
import {GoogleIcon} from "/Utils/svgs";
import Link from "next/link";

const LoginForm = () => {
    return (
        <main className={'login-form-main'}>
            <div className={'form-heading pt-20 pb-30'}>
                Log In
            </div>
            <Form
                layout={'vertical'}
            >
                <Form.Item
                    name='email'
                    label={'Email'}
                    className={'form-label'}
                >
                    <Input type={'email'} />
                </Form.Item>
                <Form.Item
                    name='password'
                    label={'Password'}
                    className={'form-label'}
                >
                    <Input type={'password'} />
                </Form.Item>
                <Form.Item>
                    <Button className={'primary-button w-100 d-flex flex-center'} size={'large'} htmlType={'submit'}>
                        Log In
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button className={'google-button d-flex flex-center w-100'} size={'large'}>
                        <GoogleIcon />
                        Sign In With Google
                    </Button>
                </Form.Item>
            </Form>
            <div className={'links-container d-flex'}>
                <div>
                    Forgot your Password?
                    <Link href={'/forgot-password'} className={'link'}> Reset Your Password</Link>
                </div>
                <div>
                    Don’t have an account?
                    <Link href={'/signup'} className={'link'}> Sign up</Link>
                </div>
            </div>
        </main>
    )
}

export default LoginForm