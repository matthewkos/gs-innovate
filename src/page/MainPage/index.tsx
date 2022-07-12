import * as React from "react";
import { ProCard } from '@ant-design/pro-components' ;
import {Avatar, Breadcrumb, Button, PageHeader, Select, Tabs, Tag} from 'antd' ;
import SearchBar from "../../components/SearchBar";

const { TabPane } = Tabs;

export const ForumPost = (image: string,
                   title: string,
                   body: string,
                   likes: number,
                   comments: number,
                   postdate: number,
                   bordered: boolean) => {
    return (
        <ProCard colSpan='100%' bordered={bordered}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10,}}>
                <div style={{minWidth: 32, minHeight: 32, aspectRatio: 'auto'}}>
                    <Avatar src={image}></Avatar>
                </div>
                <div style={{overflow: "hidden",marginLeft: 16, fontSize: '1.25em', fontWeight: "bold"}}>
                    {title}
                </div>
            </div>
            <p style={{overflowWrap: "break-word", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"}}>
                {body}
            </p>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <div style={{color: "#00000080"}}>
                    <span style={{cursor: "pointer"}}>{likes} Likes</span> | <span style={{cursor: "pointer"}}>{comments} Comments</span>
                </div>
                <div style={{color: "#00000080"}}>
                    {postdate} days ago
                </div>
            </div>
        </ProCard>
    );
}

const TrendingTopicsList = ['#regeng', '#userexperience', '#sdlc', '']

const MainPage: React.FC = () => {
    return (
        <div>
            <ProCard direction="column" ghost gutter={[0, 16]}>
                <ProCard style={{ height: 200 }}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1>Ideas Hub</h1>
                    <div>
                        <SearchBar placeholder={"Search Here..."}/>
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
                        <ProCard  style={{ height: 'wrap-content'}}>
                            <div style={{ display: 'flex', flexDirection: 'row', paddingBottom: 50}}>
                                <div style={{paddingRight: 20}}>Filters:</div>
                                <div style={{paddingRight: 15}}>All</div>
                                <div style={{paddingRight: 15}}>#userexperience</div>
                                <div style={{paddingRight: 15}}>#opsmanagement</div>
                                <div style={{paddingRight: 15}}>#technology</div>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div style={{paddingRight: 50}}>
                                    Author:
                                    <Select style={{paddingLeft: 10}} size='middle' placeholder='Unlimited'></Select>
                                </div>
                                <div style={{paddingRight: 50}}>
                                    Ratings:
                                    <Select style={{paddingLeft: 10}} size='middle' placeholder='Unlimited'></Select>
                                </div>
                            </div>
                        </ProCard>
                        <ProCard style={{ height: 600 }} split='horizontal'>
                            {ForumPost('https://joeschmoe.io/api/v1/josephine', 'Centralised Documentation Platform', 'Justina Wong is very nice', 2, 1, 69,true)}
                            {ForumPost('https://joeschmoe.io/api/v1/joe', 'Centralised Documentation Platform', 'Justina Wong is a very helpful', 2, 1, 69,false)}
                            {ForumPost('https://joeschmoe.io/api/v1/jack', 'Centralised Documentation Platform', 'Justina Wong is not a bully', 2, 1, 69,true)}
                            {ForumPost('https://joeschmoe.io/api/v1/jill', 'Centralised Documentation Platform', 'Justina Wong is a very helpful', 2, 1, 69,false)}
                        </ProCard>
                    </ProCard>
                    <ProCard gutter={[8, 8]} ghost wrap split='horizontal'>
                        <Button style={{fontSize: 18, height: 64, width: 'matchParent', margin: 4}} type='primary'>Create Post</Button>
                        <ProCard colSpan='100%' style={{ height: 'fit-content' }} title='Trending Topics' headerBordered>
                            <div style={{height: '100%'}}>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #regeng
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #userexperience
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #sdlc
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #operationsmanagement
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #secdb
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #engineering
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #devtools
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #technology
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #gs-ui-toolkit
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #workflow
                                </Button>
                            </div>
                        </ProCard>
                        <ProCard colSpan='100%' style={{ height: 'fit-content' }} title='Subscribed Topics' headerBordered>
                            <div style={{height: '100%'}}>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #regeng
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #userexperience
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #sdlc
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #operationsmanagement
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #secdb
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #engineering
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #devtools
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #technology
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #gs-ui-toolkit
                                </Button>
                                <Button style={{
                                    borderRadius: 30,
                                    borderColor: 'transparent',
                                    backgroundColor:'rgb( 141, 207, 248, 0.5)',
                                    color:'#1890FF',
                                    marginRight:10,
                                    marginBottom:10
                                }}>
                                    #workflow
                                </Button>
                            </div>
                        </ProCard>
                    </ProCard>
                </ProCard>
            </ProCard>
        </div>
    );
};

export default MainPage;
