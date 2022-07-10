import * as React from 'react';
import Layout from "../Layout";
import {ProCard} from "@ant-design/pro-components";
import {Breadcrumb, Button, Col, Row} from "antd";
import SearchBar from "../../components/SearchBar";
import ProjectCardDisplay from "../../components/ProjectCardDisplay";
import {mapHashTagsListToHasTags} from "../../Utils/utils";

const PastProjects: React.FC = () => {
    const hashTagsList: string[] = ['All', '#regeng', '#userexperience', '#opsmanagement']
    const body = (
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
                              projectStatus="Rejected" />
                      </Col>
                      <Col span={8}>
                          <ProjectCardDisplay
                              imageSrc="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                              projectTitle="Centralised documentation platform"
                              projectDescription="Vel enim pulvinar massa pharetra, ultricies sed."
                              projectStatus="Rejected" />
                      </Col>
                  </Row>
              </div>
          </ProCard>
      </div>
    );
    return <Layout body={body} />
};

export default  PastProjects;