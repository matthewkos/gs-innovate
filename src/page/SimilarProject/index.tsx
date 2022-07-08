import * as React from 'react';
import Layout from "../Layout";
import {ProCard} from "@ant-design/pro-components";
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import {Avatar, Divider, Tooltip, Breadcrumb, Select, Button} from "antd";


const body1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est placerat. Lacus vestibulum sed arcu non odio euismod lacinia. At tempor commodo ullamcorper a. At elementum eu facilisis sed odio morbi quis commodo. Quisque egestas diam in arcu cursus euismod. Elit sed vulputate mi sit amet. Varius morbi enim nunc faucibus a pellentesque sit amet. Tellus in hac habitasse platea dictumst vestibulum. Id faucibus nisl tincidunt eget nullam. Pretium fusce id velit ut tortor. Aliquam sem et tortor consequat id porta nibh venenatis cras. Arcu dui vivamus arcu felis bibendum ut. Suscipit adipiscing bibendum est ultricies integer quis auctor.\n" +
    "\n" +
    "Amet consectetur adipiscing elit ut. Quis imperdiet massa tincidunt nunc pulvinar. Ac ut consequat semper viverra nam libero justo laoreet sit. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Auctor urna nunc id cursus metus. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Libero nunc consequat interdum varius. Faucibus in ornare quam viverra orci sagittis eu. Sit amet consectetur adipiscing elit pellentesque. Sagittis vitae et leo duis ut diam quam nulla. Sapien nec sagittis aliquam malesuada bibendum. Magna etiam tempor orci eu lobortis. Penatibus et magnis dis parturient montes. Nulla pellentesque dignissim enim sit amet."

const body2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est placerat. Lacus vestibulum sed arcu non odio euismod lacinia. At tempor commodo ullamcorper a. At elementum eu facilisis sed odio morbi quis commodo. Quisque egestas diam in arcu cursus euismod. Elit sed vulputate mi sit amet. Varius morbi enim nunc faucibus a pellentesque sit amet. Tellus in hac habitasse platea dictumst vestibulum. Id faucibus nisl tincidunt eget nullam. Pretium fusce id velit ut tortor. Aliquam sem et tortor consequat id porta nibh venenatis cras. Arcu dui vivamus arcu felis bibendum ut. Suscipit adipiscing bibendum est ultricies integer quis auctor."

const Index: React.FC = () => {
    const body = (
        <div>
            <ProCard direction="column" ghost gutter={[0, 16]}>
                <ProCard style={{ height: 175 }}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Proposal Form</Breadcrumb.Item>
                        <Breadcrumb.Item>Idea</Breadcrumb.Item>
                        <Breadcrumb.Item>Similar Projects</Breadcrumb.Item>
                        <Breadcrumb.Item>Project Information</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1>Improved Search Engine for GS Firmwide Search</h1>
                    <Avatar.Group>
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                        <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Tooltip>
                        <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                    </Avatar.Group>
                    <div>SME Review Failed</div>
                </ProCard>
            </ProCard>
            <ProCard direction="column" ghost gutter={[0, 16]} wrap>
                <ProCard style={{ height: 20 }} />
                <ProCard gutter={16} ghost style={{ height: 400 }}>
                    <ProCard>
                        <h2>Project Description</h2>
                        <div>
                            {body1}
                        </div>
                        <h2>Evaluation</h2>
                        <div>
                            {body2}
                        </div>
                    </ProCard>
                </ProCard>
                <div>
                    <div>
                        <Button>Back to Similar Projects</Button>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'right',
                        alignItems: 'center',
                        padding: '8px 16px',
                        gap: '8px'}}>
                        <Button type='primary' >&gt; Next Project</Button>
                    </div>

                </div>

            </ProCard>

        </div>
    );
    return (
        <Layout body={body} />
    )
};

export default Index;