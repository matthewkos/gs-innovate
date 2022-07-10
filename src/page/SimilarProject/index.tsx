import * as React from 'react';
import Layout from "../Layout";
import {ProCard} from "@ant-design/pro-components";
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import {Avatar, Divider, Tooltip, Breadcrumb, Select, Button} from "antd";
import AvatarGroup from "../../components/Avatar";
import {useNavigate} from "react-router-dom";


const body1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est placerat. Lacus vestibulum sed arcu non odio euismod lacinia. At tempor commodo ullamcorper a. At elementum eu facilisis sed odio morbi quis commodo. Quisque egestas diam in arcu cursus euismod. Elit sed vulputate mi sit amet. Varius morbi enim nunc faucibus a pellentesque sit amet. Tellus in hac habitasse platea dictumst vestibulum. Id faucibus nisl tincidunt eget nullam. Pretium fusce id velit ut tortor. Aliquam sem et tortor consequat id porta nibh venenatis cras. Arcu dui vivamus arcu felis bibendum ut. Suscipit adipiscing bibendum est ultricies integer quis auctor.\n" +
    "\n" +
    "Amet consectetur adipiscing elit ut. Quis imperdiet massa tincidunt nunc pulvinar. Ac ut consequat semper viverra nam libero justo laoreet sit. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Auctor urna nunc id cursus metus. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Libero nunc consequat interdum varius. Faucibus in ornare quam viverra orci sagittis eu. Sit amet consectetur adipiscing elit pellentesque. Sagittis vitae et leo duis ut diam quam nulla. Sapien nec sagittis aliquam malesuada bibendum. Magna etiam tempor orci eu lobortis. Penatibus et magnis dis parturient montes. Nulla pellentesque dignissim enim sit amet."

const body2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt dui ut ornare lectus sit amet est placerat. Lacus vestibulum sed arcu non odio euismod lacinia. At tempor commodo ullamcorper a. At elementum eu facilisis sed odio morbi quis commodo. Quisque egestas diam in arcu cursus euismod. Elit sed vulputate mi sit amet. Varius morbi enim nunc faucibus a pellentesque sit amet. Tellus in hac habitasse platea dictumst vestibulum. Id faucibus nisl tincidunt eget nullam. Pretium fusce id velit ut tortor. Aliquam sem et tortor consequat id porta nibh venenatis cras. Arcu dui vivamus arcu felis bibendum ut. Suscipit adipiscing bibendum est ultricies integer quis auctor."

const Index: React.FC = () => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/new_proposal');
        }
    ;
    const body = (
        <div>
            <ProCard direction="column" ghost gutter={[0, 16]}>
                <ProCard style={{ height: 'wrap_content', marginBottom: 20}}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Proposal Form</Breadcrumb.Item>
                        <Breadcrumb.Item>Idea</Breadcrumb.Item>
                        <Breadcrumb.Item>Similar Projects</Breadcrumb.Item>
                        <Breadcrumb.Item>Project Information</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1>Improved Search Engine for GS Firmwide Search</h1>
                    <AvatarGroup />
                    <div style={{paddingTop:20, color:'rgb(255, 0, 0, 0.45)'}}>SME Review Failed</div>
                </ProCard>
            </ProCard>
            <ProCard direction="column" ghost gutter={[0, 16]}>
                <ProCard style={{ height: '100%' }}>
                    <ProCard>
                        <h2>Project Description</h2>
                        <div style={{marginBottom: 30}}>
                            {body1}
                        </div>
                        <h2>Evaluation</h2>
                        <div>
                            {body2}
                        </div>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop: 40}}>
                            <Button onClick={onClick}>Back to Similar Projects</Button>
                            <Button type='primary'>Next Project</Button>
                        </div>
                    </ProCard>
                </ProCard>
            </ProCard>
        </div>
    );
    return (
        <Layout body={body} />
    )
};

export default Index;