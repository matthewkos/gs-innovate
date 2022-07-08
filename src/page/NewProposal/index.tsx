import { ProCard, ProLayout } from '@ant-design/pro-components';
import { FormOutlined , ProfileOutlined, AppstoreOutlined } from '@ant-design/icons' ;
import * as React from 'react';
import { useState } from 'react';
import { Avatar, Button, Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import AvatarGroup from '../../components/ProjectCard';

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
    const body = (
        <div>
            <ProLayout
                navTheme='light'
                route = { defaultProps }
                location = { {
                    pathname ,
                } }
                fixSiderbar
                headerRender = { false }
                onMenuHeaderClick = { ( e ) => console . log ( e ) }>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
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
                        <Button>Return to Form</Button>
                        <Button style={{backgroundColor: '#1890FF', color:'white'}}>Continue</Button>
                    </div>
                </div>
                </ProLayout>
        </div>
    );
    return body;
};  

export default NewProposal