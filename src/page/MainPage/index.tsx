import * as React from "react";
import { FormOutlined , ProfileOutlined , UserOutlined, AppstoreOutlined, QuestionCircleOutlined, BellOutlined } from '@ant-design/icons' ;
import {PageContainer, ProCard, ProLayout} from '@ant-design/pro-components' ;
import {Avatar, Badge, Button, Input, PageHeader, Result, Select, Tabs, Tag} from 'antd' ;
import { useState } from 'react' ;
import {Icon} from "@ant-design/compatible";

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

const { TabPane } = Tabs;

const ForumPost = (image: string, title: string, body: string, likes: number, comments: number, postdate: number, bordered: boolean) => {
    return (
        <ProCard colSpan='100%' bordered={bordered}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Avatar></Avatar>
                <div style={{marginLeft: 10}}>
                    {title}
                </div>
            </div>
            <div>
                {body}
            </div>
            <div>
                {likes} Likes | {comments} Comments
            </div>
            <div>
                {postdate} days ago
            </div>
        </ProCard>
    );
}

const MainPage: React.FC = () => {
    const [ pathname , setPathname ] = useState ( '/welcome' ) ;
    return (
        <div>
            < ProLayout
                navTheme='light'
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
                        <p>Hello</p>
                    </ div >
                ) }
            >
                <PageContainer
                    onBack={() => null}
                    tags={<Tag color="blue">状态一</Tag>}
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
                        // <Input.Search
                        //     key="search"
                        //     style={{
                        //         width: 240,
                        //     }}
                        // />,
                        // <Button key="4" icon={<SearchOutlined />} type='text'></Button>,
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
                    <ProCard direction="column" ghost gutter={[0, 16]}>
                        <ProCard style={{ height: 200 }}>
                            <div>Home TODO: Breadcrumb</div>
                            <div>Ideas Hub</div>
                            <div>
                                <Input></Input><Button type='primary'>Search</Button>
                            </div>
                            <PageHeader
                                footer={
                                    <Tabs defaultActiveKey="1">
                                        <TabPane tab="All Posts" key="1" />
                                        <TabPane tab="Subscribed Posts" key="2" />
                                    </Tabs>
                                }>
                            </PageHeader>
                        </ProCard>
                        <ProCard gutter={[8, 8]} ghost style={{ height: '100%' }}>
                            <ProCard gutter={[8, 8]}  colSpan='70%' ghost wrap split='horizontal'>
                                <ProCard  style={{ height: 200 }}>
                                    <div>Filters:</div>
                                    <div>#options</div>
                                    <div>Other Options: </div>
                                    <div>Author:
                                        <Select size='middle' placeholder='Unlimited'></Select>
                                        Ratings:
                                        <Select size='middle' placeholder='Unlimited'></Select>
                                    </div>
                                </ProCard>
                                <ProCard style={{ height: 600 }} split='horizontal'>
                                    {ForumPost('1', 'Centralised Documentation Platform', 'Justina Wong is a nice person', 2, 1, 69,true)}
                                    {ForumPost('1', 'Centralised Documentation Platform', 'Justina Wong is a very helpful', 2, 1, 69,false)}
                                    {ForumPost('1', 'Centralised Documentation Platform', 'Justina Wong is not a bully', 2, 1, 69,true)}
                                </ProCard>
                            </ProCard>
                            <ProCard gutter={[8, 8]} ghost wrap split='horizontal'>
                                <Button style={{height: 80, width: '100%', margin: 4}} type='primary'>Create Post</Button>
                                <ProCard colSpan='100%' style={{ height: 300 }} title='Trending Topics' headerBordered/>
                                <ProCard colSpan='100%' style={{ height: 200 }} title='Subscribed Topics' headerBordered/>
                            </ProCard>
                        </ProCard>
                    </ProCard>
                    {/*<div*/}
                    {/*    style={{*/}
                    {/*        height: '120vh',*/}
                    {/*    }}*/}
                    {/*>*/}

                    {/*    <Result*/}
                    {/*        status="404"*/}
                    {/*        style={{*/}
                    {/*            height: '70%',*/}
                    {/*            background: '#fff',*/}
                    {/*        }}*/}
                    {/*        title="Hello World"*/}
                    {/*        subTitle="Sorry, you are not authorized to access this page."*/}
                    {/*        extra={<Button type="primary">Back Home</Button>}*/}
                    {/*    />*/}
                    {/*</div>*/}
                </PageContainer>
            </ ProLayout >
        </div>
    );
};

export default MainPage;
