import * as React from 'react';
import Layout from "../Layout";
import {ProCard} from "@ant-design/pro-components";
import {Breadcrumb, Button, Col, Row} from "antd";
import SearchBar from "../../components/SearchBar";
import ProjectCardDisplay from "../../components/ProjectCardDisplay";
import {mapHashTagsListToHasTags} from "../../Utils/utils";

const PastProjects: React.FC = () => {
    const hashTagsList: string[] = ['All', '#regeng', '#userexperience', '#opsmanagement']
    return (
        <div>
            <ProCard direction="column" ghost gutter={[0, 16]}>
                <ProCard style={{ height: 225 }}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <h2>My Projects</h2>
                    <div style={{height: '50px', flexDirection: 'column', justifyContent: 'center'}}>
                        <SearchBar placeholder={"Search Here..."}/>
                    </div>
                    <div>
                        Stages:
                        &nbsp;
                        <Button style={{
                            borderRadius: 30,
                            borderColor: 'transparent',
                            backgroundColor:'rgb( 141, 207, 248, 0.5)',
                            color:'#1890FF',
                            marginRight:10,
                            marginBottom:10
                        }}>
                            All
                        </Button>
                        <Button style={{
                            borderRadius: 30,
                            borderColor: 'transparent',
                            backgroundColor:'rgb(240, 245, 255, 1)',
                            color:'#2F54EB',
                            marginRight:10,
                            marginBottom:10
                        }}>
                            Submitted
                        </Button>
                        <Button style={{
                            borderRadius: 30,
                            borderColor: 'transparent',
                            backgroundColor:'rgb(255, 241, 240, 1)',
                            color:'#F5222D',
                            marginRight:10,
                            marginBottom:10
                        }}>
                            Rejected
                        </Button>
                        <Button style={{
                            borderRadius: 30,
                            borderColor: 'transparent',
                            backgroundColor:'rgb(246, 255, 237, 1)',
                            color:'#52C41A',
                            marginRight:10,
                            marginBottom:10
                        }}>
                            Implemented
                        </Button>
                    </div>
                    <div>
                        Topic Filters:
                        &nbsp;
                        {mapHashTagsListToHasTags(hashTagsList)}
                    </div>
                </ProCard>
                <div className="site-card-wrapper">
                    <Row gutter={16} style={{height: 'wrapContent'}}>
                        <Col span={8}>
                            <ProjectCardDisplay
                                imageSrc="https://user-images.githubusercontent.com/8186664/44953195-581e3d80-aec4-11e8-8dcb-54b9db38ec11.png"
                                projectTitle="Centralised documentation platform"
                                projectDescription="A centralised documentation platform that users can easily search for documentations with ease. Akin to having a google search bar."
                                projectStatus="Rejected"
                            />
                        </Col>
                        <Col span={8}>
                            <ProjectCardDisplay
                                imageSrc="https://raw.githubusercontent.com/bichenkk/react-starter/master/github/screenshot.png"
                                projectTitle="Centralised Admin Portal"
                                projectDescription="All in one portal where GS users can access to apply for leaves, claim reimbursement etc... Can also integrate allow permission access request here"
                                projectStatus="Implemented" />
                        </Col>
                        <Col span={8}>
                            <ProjectCardDisplay
                                imageSrc="https://gw.alipayobjects.com/zos/antfincdn/P31ZGMwzGe/d5365860-f7c6-4abe-98c0-36d6b1b3a65a.png"
                                projectTitle="Big Data Platform"
                                projectDescription="A dashboard that aggregates data and visualise them. Allows customisation and integrates easily with other platform such as Grafana"
                                projectStatus="Rejected" />
                        </Col>
                        <Col span={8}>
                            <ProjectCardDisplay
                                imageSrc="https://repository-images.githubusercontent.com/34526884/8e0a5095-5d82-425c-a54f-a0cb51743a12"
                                projectTitle="Community Service Registration Portal"
                                projectDescription="Centralised platform for all the available community service that GS is holding. Allows GS users to easily start doing Community Services and also find friends to tag along."
                                projectStatus="Submitted" />
                        </Col>
                        <Col span={8}>
                            <ProjectCardDisplay
                                imageSrc="https://miro.medium.com/max/1400/1*wR795-5eki5Wo2O2Q02J5w.png"
                                projectTitle="Groupbuy Food App"
                                projectDescription="A GrabFood like application that allows GS user to easily place order for food. Aggregates the available stores from different application such as GrabFood, FoodPanda and Deliveryroo"
                                projectStatus="Rejected" />
                        </Col>
                        <Col span={8}>
                            <ProjectCardDisplay
                                imageSrc="https://sptechnet.files.wordpress.com/2020/07/ant-table.png?w=1024"
                                projectTitle="Alternate FrontEnd Component Library"
                                projectDescription="An alternative to GS UI Toolkit and allows for more customisation."
                                projectStatus="Submitted" />
                        </Col>
                    </Row>
                </div>
            </ProCard>
        </div>
    );
};

export default  PastProjects;