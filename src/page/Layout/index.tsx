import * as React from 'react';
import {Avatar, Badge, Button, Tag} from "antd";
import {
    AppstoreOutlined,
    BellOutlined,
    FormOutlined,
    ProfileOutlined,
    QuestionCircleOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {PageContainer, ProLayout} from "@ant-design/pro-components";

const defaultProps = {
    routes : [
        {
            path : '/proposal' ,
            name : 'New Proposal' ,
            icon : <FormOutlined /> ,
        } ,
        {
            path : '/ideahub' ,
            name : 'Ideas Hub' ,
            icon : <AppstoreOutlined /> ,
        } ,
        {
            path : '/pastprojects' ,
            name : 'Past Projects' ,
            icon : <ProfileOutlined />,
        } ,
        {
            path : '/myprojects' ,
            name : 'My Projects' ,
            icon : <UserOutlined />,
        } ,
    ] ,
};

const Layout: React.FC = () => {
    const navigation = useNavigate();
    const location = useLocation();
    return (
        <ProLayout
            route={defaultProps}
            location={{
                pathname: location.pathname,
            }}
            navTheme="light"
            fixSiderbar
            headerRender={false}
            menuItemRender={(item, dom) => (
                <a
                    onClick={() => {
                        navigation(item.path || '/');
                    }}
                >
                    {dom}
                </a>
            )}
            rightContentRender = { ( ) => (
                <div>
                    <Avatar shape = "square" size = "small" icon = { < UserOutlined /> }/>
                    <p>Hello</p>
                </div>
            ) }
        >
            <PageContainer
                tags={<Tag icon={<ProfileOutlined />} color="blue">GS Innovate</Tag>}
                header={{
                    style: {
                        // backgroundColor: '#001529',
                        padding: '4px 16px',
                        position: 'fixed',
                        top: 0,
                        width: '100%',
                        left: 0,
                        zIndex: 999,
                        boxShadow: '0 2px 8px #f0f1f2',
                        // color: "white",
                    },
                }}
                style={{
                    paddingTop: 48,
                }}
                extra={[
                    <Button key="5" icon={<QuestionCircleOutlined />} type='text'></Button>, ,
                    <span>
                                <Badge count={11} size='small'>
                                <Button key="6" icon={<BellOutlined />} type='text'></Button>
                                </Badge>
                            </span>,
                    <Avatar src="https://joeschmoe.io/api/v1/random"/>,
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignContent: 'center'}}>
                        Wong, Justina
                    </div>
                ]}
            >
                <Outlet />
            </PageContainer>
        </ProLayout>
    );
};

export default Layout;