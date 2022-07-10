import * as React from "react";
import Layout from "../Layout";
import {ProCard, ProFormRadio} from "@ant-design/pro-components";
import {Breadcrumb, Button, Checkbox, Form, Radio, Row, Select, Space} from "antd";

const MoreDetails: React.FC = () => {
    const body = (
        <div>
            <ProCard direction="column" ghost gutter={[0, 16]}>
                <ProCard style={{ height: 150 }}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Proposal Form</Breadcrumb.Item>
                        <Breadcrumb.Item>Idea</Breadcrumb.Item>
                        <Breadcrumb.Item>Similar Projects</Breadcrumb.Item>
                        <Breadcrumb.Item>More Details</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1>More Details</h1>
                    <div>Enter some details and you're good to go!</div>
                </ProCard>
            </ProCard>
            <ProCard direction="column" ghost gutter={[0, 16]}>
                <ProCard style={{marginTop:20}}>
                    <Form
                        name="New Proposal Details"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}>  
                        <Form.Item
                            name="existing" 
                            label="Does this idea exist?"
                            rules={[{ required: true, message: 'Please input your idea!' }]}
                            style={{paddingBottom:10}}
                        >
                            <ProFormRadio.Group
                                name="radio-vertical"
                                layout="vertical"
                                options={[
                                    {
                                        label: 'No',
                                        value: 'a',
                                    },
                                    {
                                        label: 'Yes, but we are improving it',
                                        value: 'b',
                                    }
                                ]}
                            />
                        </Form.Item>
                        <Form.Item
                            name="members" 
                            label="Team Members"
                            style={{paddingBottom:10}}
                        >
                            <Select placeholder="Find team members..."></Select>
                        </Form.Item>
                        <Form.Item
                            name="reviewers" 
                            label="Reviewers (optional)"
                            style={{paddingBottom:10}}
                        >
                            <Select placeholder="Find reviewers..."></Select>
                        </Form.Item>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                            <Button>Save & Exit</Button>
                            <Button type='primary'>Submit</Button>
                        </div>
                    </Form>
                </ProCard>
            </ProCard>
        </div>
    );
    return <Layout body={body} />;
};

export default MoreDetails;