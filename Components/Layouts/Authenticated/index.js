import Sider from "/Components/Layouts/Sider";
import {Col, Row} from "antd";
import Navbar from "/Components/Layouts/Navbar";


const AuthenticatedLayout = ({children}) => {
    return (
        <Row className={'auth-layout-main ht-100'}>
            <Col span={4}>
                <Sider />
            </Col>
            <Col span={20} className={'d-flex right-main'}>
                <Navbar />
                <div className={'flex-grow'}>
                    {children}
                </div>
            </Col>
        </Row>
    )
}

export default AuthenticatedLayout