import * as React from 'react';
import Layout from '../Layout';
import {PageContainer, ProCard, ProForm, ProFormGroup, ProFormText} from "@ant-design/pro-components";
import {Breadcrumb, Button, PageHeader, Tabs} from "antd";
import SearchBar from "../../components/SearchBar";
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
                    <TextArea name="Title" placeholder='Give your project a name' />
                </ProFormGroup>
                < ProFormGroup>
                    <ProFormText width="xl" name="Problem Statement" label="Problem Statement" placeholder='Give your project a name' />
                </ProFormGroup>
                < ProFormGroup>
                    <ProFormText width="xl" name="Proposed Solution" label="Proposed Solution" placeholder='Give your project a name' />
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