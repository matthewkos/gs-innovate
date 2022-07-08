import { ProCard, ProLayout } from '@ant-design/pro-components';
import {FormOutlined, ProfileOutlined, AppstoreOutlined, UserOutlined, AntDesignOutlined} from '@ant-design/icons' ;
import * as React from 'react';
import { useState } from 'react';
import {Avatar, Breadcrumb, Button, Card, Col, Row, Tooltip} from 'antd';
import Meta from 'antd/lib/card/Meta';
import AvatarGroup from '../../components/Avatar';
import Layout from "../Layout";
import {useNavigate} from "react-router-dom";

const defaultProps = {
    routes : [
        {
            path : '/welcome' ,
            name : 'GS Innovate' ,
            icon : <FormOutlined /> ,
            component : './Welcome' ,
        } ,
        {
            path : '/admin/sub-page2' ,
            name : 'Past Projects' ,
            icon : <AppstoreOutlined /> ,
            component : './Welcome' ,
        } ,
        {
            path : '/admin/sub-page3' ,
            name : 'Profile' ,
            icon : <ProfileOutlined />,
            component : './Welcome' ,
        } ,
    ] ,
};

const NewProposal: React.FC = () => {
    const [ pathname , setPathname ] = useState ( '/welcome' ) ;
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/proposal/similarproject')
    };
    const onClickReturn = () => {
        navigate('/proposal')
    }
    const onClickContinue = () => {
        navigate('/proposal/moredetail')
    }
    const body = (
        <div>
            <ProCard direction="column" ghost gutter={[0, 16]}>
                <ProCard style={{ height: 150 }}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Proposal Form</Breadcrumb.Item>
                        <Breadcrumb.Item>Idea</Breadcrumb.Item>
                        <Breadcrumb.Item>Similar Projects</Breadcrumb.Item>
                        <Breadcrumb.Item>Project Information</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1>Improved Search Engine for GS Firmwide Search</h1>
                    <div>SME Review Failed</div>
                </ProCard>
            </ProCard>
            <div>
                Similar Project
            </div>
                <div className="site-card-wrapper">
                    <Row gutter={16} style={{height: 600}}>
                        <Col span={8}>
                            <Card
                            onClick={onClick}
                            hoverable
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height="200"/>}
                            >
                                <Meta title="Centralised documentation platform" description="Vel enim pulvinar massa pharetra, ultricies sed." />
                                <div style={{paddingTop: 30, display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                    <div style={{color:'rgba(255, 2, 2, 0.45)', display:'flex', flexDirection:'column', justifyContent:'center'}}>Rejected</div>
                                    <AvatarGroup/>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                hoverable
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height="200"/>}
                                >
                                <Meta title="Centralised documentation platform" description="Vel enim pulvinar massa pharetra, ultricies sed." />
                                <div style={{paddingTop: 30, display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                    <div style={{color:'rgba(4, 190, 0, 0.45)', display:'flex', flexDirection:'column', justifyContent:'center'}}>Implemented</div>
                                    <AvatarGroup/>
                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                hoverable
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height="200"/>}
                                >
                                <Meta title="Centralised documentation platform" description="Vel enim pulvinar massa pharetra, ultricies sed." />
                                <div style={{paddingTop: 30, display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                    <div style={{color:'rgba(255, 2, 2, 0.45)', display:'flex', flexDirection:'column', justifyContent:'center'}}>Rejected</div>
                                    <AvatarGroup/>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <div style={{paddingTop: 20, display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <Button onClick={onClickReturn}>Return to Form</Button>
                        <Button style={{backgroundColor: '#1890FF', color:'white'}} onClick={onClickContinue}>Continue</Button>
                    </div>
                </div>
        </div>
    );
    return <Layout body={body} />;
};  

export default NewProposal