import { ProCard, ProLayout } from '@ant-design/pro-components';
import {FormOutlined, ProfileOutlined, AppstoreOutlined, UserOutlined, AntDesignOutlined} from '@ant-design/icons' ;
import * as React from 'react';
import { useState } from 'react';
import {Avatar, Breadcrumb, Button, Card, Col, Row, Tooltip} from 'antd';
import Meta from 'antd/lib/card/Meta';
import AvatarGroup from '../../components/Avatar';
import Layout from "../Layout";
import {useNavigate} from "react-router-dom";
import ProjectCardDisplay from "../../components/ProjectCardDisplay";

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
            <ProCard direction="column" ghost gutter={[0, 16]} style={{marginBottom:20}}>
                <ProCard style={{ height: 150 }}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Proposal Form</Breadcrumb.Item>
                        <Breadcrumb.Item>Idea</Breadcrumb.Item>
                        <Breadcrumb.Item>Similar Projects</Breadcrumb.Item>
                        <Breadcrumb.Item>Project Information</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1>Improved Search Engine for GS Firmwide Search</h1>
                    <div>Projects in our database that are similar to yours</div>
                </ProCard>
            </ProCard>
                <div className="site-card-wrapper">
                    <Row gutter={16} style={{height: 'wrapContent'}}>
                        <Col span={8}>
                            <ProjectCardDisplay
                                imageSrc="https://user-images.githubusercontent.com/8186664/44953195-581e3d80-aec4-11e8-8dcb-54b9db38ec11.png"
                                projectTitle="Centralised documentation platform"
                                projectDescription="Vel enim pulvinar massa pharetra, ultricies sed."
                                projectStatus="Rejected" />
                        </Col>
                        <Col span={8}>
                            <ProjectCardDisplay
                                imageSrc="https://user-images.githubusercontent.com/8186664/44953195-581e3d80-aec4-11e8-8dcb-54b9db38ec11.png"
                                projectTitle="Centralised documentation platform"
                                projectDescription="Vel enim pulvinar massa pharetra, ultricies sed."
                                projectStatus="Implemented" />
                        </Col>
                        <Col span={8}>
                            <ProjectCardDisplay
                                imageSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                projectTitle="Centralised documentation platform"
                                projectDescription="Vel enim pulvinar massa pharetra, ultricies sed."
                                projectStatus="Rejected" />
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