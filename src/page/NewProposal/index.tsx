import { ProCard, ProLayout } from '@ant-design/pro-components';
import {FormOutlined, ProfileOutlined, AppstoreOutlined, UserOutlined, AntDesignOutlined} from '@ant-design/icons' ;
import * as React from 'react';
import { useState } from 'react';
import { Breadcrumb, Button, Col, Row} from 'antd';
import {useNavigate} from "react-router-dom";
import ProjectCardDisplay from "../../components/ProjectCardDisplay";

const NewProposal: React.FC = () => {
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
    return (
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
                            projectTitle="Improved Search Engine for GS Firmwide Search"
                            projectDescription="Vel enim pulvinar massa pharetra, ultricies sed."
                            projectStatus="Rejected"
                            onClick={onClick} />
                    </Col>
                    <Col span={8}>
                        <ProjectCardDisplay
                            imageSrc="https://sptechnet.files.wordpress.com/2020/07/ant-table.png?w=1024"
                            projectTitle="Alternate FrontEnd Component Library"
                            projectDescription="An alternative to GS UI Toolkit and allows for more customisation."
                            projectStatus="Implemented" />
                    </Col>
                    <Col span={8}>
                        <ProjectCardDisplay
                            imageSrc="https://miro.medium.com/max/1400/1*wR795-5eki5Wo2O2Q02J5w.png"
                            projectTitle="Groupbuy Food App"
                            projectDescription="A GrabFood like application that allows GS user to easily place order for food. Aggregates the available stores from different application such as GrabFood, FoodPanda and Deliveryroo"
                            projectStatus="Rejected" />
                    </Col>
                </Row>
                <div style={{paddingTop: 20, display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <Button onClick={onClickReturn}>Return to Form</Button>
                    <Button style={{backgroundColor: '#1890FF', color:'white'}} onClick={onClickContinue}>Continue</Button>
                </div>
            </div>
        </div>
    )
};  

export default NewProposal