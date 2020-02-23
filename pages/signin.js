import React from 'react';
import { Layout,Card } from 'antd';
import { Row, Col } from 'antd';

const { Content } = Layout;

import "./signin.scss";

const Signin = props => (
    <div>
                <Row className="loginbox-container">
                    <Col xl={{ span: 12 , offset: 6}}  xs={{ span: 24}}>
                        <Card className="loginbox">
                            Working
                        </Card>
                    </Col>
                </Row>
    </div>
);


export default Signin;