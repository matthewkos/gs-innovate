import * as React from 'react';
import Layout from '../Layout';
import {PageContainer, ProCard, ProForm, ProFormGroup, ProFormText} from "@ant-design/pro-components";
import {Breadcrumb, Button, PageHeader, Tabs} from "antd";
import TextArea from "antd/lib/input/TextArea";


const { TabPane } = Tabs;

const Index = () => {
    const body = (
        <div>
            <ProCard direction="column" ghost gutter={[0, 16]}>
                <ProCard style={{ height: 150 }}>
                    <Breadcrumb>
                        <Breadcrumb.Item>Proposal Form</Breadcrumb.Item>
                        <Breadcrumb.Item>Idea</Breadcrumb.Item>
                    </Breadcrumb>
                    <h1>Idea</h1>
                    <div>Introduce a problem statement, and how your proposed idea will solve it. We will cross check it with our database of past projects and link you to any similar projects.</div>
                </ProCard>
            </ProCard>
            <div>
                Idea
            </div>
            <ProCard style={{ height: 600 }}>
                < ProFormGroup>
                    <ProFormText width="xl" name="Title" label="Title" placeholder='Give your project a name' />
                </ProFormGroup>
                < ProFormGroup>
                    Problem Statement :
                    <TextArea name="Problem Statement" size='large' style={{width: '1000px'}} placeholder='What problem are you trying to solve' />
                </ProFormGroup>
                < ProFormGroup>
                    Proposed Solution:
                    <TextArea name="Problem Statement" placeholder='How does your proposed idea solve this problem' />
                </ProFormGroup>
                <Button type='primary'>Analyze</Button>
                <Button>Save</Button>
            </ProCard>
        </div>
    );
    return (
        <Layout body={body} />
    )
};

export default Index;