import * as React from "react";
import { CrownOutlined , SmileOutlined , UserOutlined } from '@ant-design/icons' ;
import { PageContainer , ProLayout } from '@ant-design/pro-components' ;
import { Avatar , Button , Input , Result , Tag } from 'antd' ;
import { useState } from 'react' ;

const defaultProps = {
    routes : [
        {
            path : '/welcome' ,
            name : 'Welcome' ,
            icon : < CrownOutlined /> ,
            component : './Welcome' ,
        } ,
        {
            path : '/admin/sub-page2' ,
            name : 'Secondary page' ,
            icon : < UserOutlined /> ,
            component : './Welcome' ,
        } ,
        {
            path : '/admin/sub-page3' ,
            name : 'third-level page' ,
            icon : < SmileOutlined /> ,
            component : './Welcome' ,
        } ,
    ] ,
};

const MainPage: React.FC = () => {
    const [ pathname , setPathname ] = useState ( '/welcome' ) ;
    return (
        <div>
            < ProLayout
                route = { defaultProps }
                location = { {
                    pathname ,
                } }
                fixSiderbar
                headerRender = { false }
                onMenuHeaderClick = { ( e ) => console . log ( e ) }
                menuItemRender = { ( item , dom ) => (
                    < a
                        onClick = { ( ) => {
                            setPathname ( item . path || '/welcome' ) ;
                        } }
                    >
                        { dom }
                    </a>
                    ) }
                rightContentRender = { ( ) => (
                    < div >
                        < Avatar shape = "square" size = "small" icon = { < UserOutlined /> } />
                    </ div >
                ) }
            >
                <PageContainer
                    onBack={() => null}
                    tags={<Tag color="blue">状态一</Tag>}
                    header={{
                        style: {
                            padding: '4px 16px',
                            position: 'fixed',
                            top: 0,
                            width: '100%',
                            left: 0,
                            zIndex: 999,
                            boxShadow: '0 2px 8px #f0f1f2',
                        },
                    }}
                    style={{
                        paddingTop: 48,
                    }}
                    extra={[
                        <Input.Search
                            key="search"
                            style={{
                                width: 240,
                            }}
                        />,
                        <Button key="3">操作一</Button>,
                        <Button key="2" type="primary">
                            操作一
                        </Button>,
                    ]}
                >
                    <div
                        style={{
                            height: '120vh',
                        }}
                    >
                        <Result
                            status="404"
                            style={{
                                height: '100%',
                                background: '#fff',
                            }}
                            title="Hello World"
                            subTitle="Sorry, you are not authorized to access this page."
                            extra={<Button type="primary">Back Home</Button>}
                        />
                    </div>
                </PageContainer>
            </ ProLayout >
        </div>
    );
};

export default MainPage;