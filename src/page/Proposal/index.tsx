import * as React from 'react';
import Layout from '../Layout';
import {ProCard} from "@ant-design/pro-components";
import {Breadcrumb, Button, Form, Input, PageHeader, Tabs} from "antd";
import TextArea from "antd/lib/input/TextArea";
import {useNavigate} from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    const onClick = () => {
      navigate('/new_proposal');
    };
    const body = (
        <div style={{height: '100%'}}>
            <ProCard direction="column" ghost gutter={[0, 16]} style={{marginBottom:30}}>
                <ProCard style={{ height: 'wrap_content' }}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Proposal Form</Breadcrumb.Item>
                        <Breadcrumb.Item>Idea</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1>Idea</h1>
                    <div>Introduce a problem statement, and how your proposed idea will solve it. We will cross check it with our database of past projects and link you to any similar projects.</div>
                </ProCard>
            </ProCard>
            <ProCard style={{ height: '100%' }}>
                <Form 
                    name="New Proposal"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label="Project Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input a name!' }]}
                        style={{paddingBottom:10}}
                    >
                        <Input placeholder='Give your project a name.'/>
                    </Form.Item>
                    <Form.Item 
                        name="problem" 
                        label="Problem Statement"
                        rules={[{ required: true, message: 'Please input a problem!' }]}
                        style={{paddingBottom:10}}
                    >
                        <TextArea 
                            placeholder='What problem are you trying to solve?' 
                            showCount maxLength={2000}
                            style={{height:100}}/>
                    </Form.Item>
                    <Form.Item 
                        name="solution" 
                        label="Proposed Solution"
                        rules={[{ required: true, message: 'Please input your idea!' }]}
                        style={{paddingBottom:10}}
                    >
                        <TextArea 
                            placeholder='How does your proposed idea solve this problem?' 
                            showCount maxLength={4000}
                            style={{height:150}}/>
                    </Form.Item>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        <Button type="default" htmlType="submit">
                            Save & Exit
                        </Button>
                        <Button type="primary" htmlType="submit" onClick={onClick}>
                            Continue    
                        </Button>
                    </div>
                </Form>
            </ProCard>
        </div>
    );
    return (
        <Layout body={body} />
    )
};

export default Index;