import {Button, Checkbox, Form, Input} from "antd";
import {GoogleIcon} from "/Utils/svgs";
import Link from "next/link";

const SignupForm = () => {
    return (
        <main className={'login-form-main'}>
            <div className={'form-heading pt-20 pb-30'}>
                Sign In
            </div>
            <Form
                layout={'vertical'}
            >
                <Form.Item
                    name='first_name'
                    label={'First Name'}
                    className={'form-label'}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name='email'
                    label={'Email'}
                    className={'form-label'}
                >
                    <Input type={'email'}/>
                </Form.Item>
                <Form.Item
                    name='username'
                    label={'Username'}
                    className={'form-label'}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name='password'
                    label={'Password'}
                    className={'form-label'}
                >
                    <Input type={'password'}/>
                </Form.Item>
                <Form.Item
                    name="privacy_policy"
                    className={"privacy-policy-checkbox"}
                    rules={[
                        {
                            required: true,
                            message: "Please accept the Privacy Policy"
                        }
                    ]}
                >
                    <Checkbox.Group>
                        <Checkbox value="privacy_policy_check">I have read and agree to the
                            <span className={"terms-and-condition"}> Terms and Conditions
                            </span>
                        </Checkbox>
                    </Checkbox.Group>
                </Form.Item>

                <Form.Item>
                    <Button className={'primary-button w-100 d-flex flex-center'} size={'large'} htmlType={'submit'}>
                        Sign Up
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button className={'google-button d-flex flex-center w-100'} size={'large'}>
                        <GoogleIcon/>
                        Sign In With Google
                    </Button>
                </Form.Item>
            </Form>
            <div className={'links-container d-flex'}>
                <div>
                    Already a user?
                    <Link href={'/login'} className={'link'}> Login</Link>
                </div>
                <div>
                    By clicking ‘Sign Up’ you agree to our
                    <span className={'fw-500 terms-of-use'}> Terms of Use</span>
                </div>
            </div>
        </main>
    )
}

export default SignupForm