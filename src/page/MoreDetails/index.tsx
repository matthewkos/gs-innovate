import * as React from "react";
import Layout from "../Layout";
import {ProCard, ProFormRadio} from "@ant-design/pro-components";
import {Breadcrumb, Button, Select} from "antd";

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
            <ProCard direction="column" ghost gutter={[0, 16]} wrap>
                <ProCard style={{ height: 20 }} />
                <ProCard gutter={16} ghost style={{ height: 400 }}>
                    <ProCard>
                        <ProFormRadio.Group
                            name="radio-vertical"
                            layout="vertical"
                            label="Does this idea exist?"
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
                        <div>
                            Team Members:
                            <Select placeholder='Search for members'></Select>
                        </div>
                        <div>
                            Reviewers (optional):
                            <Select placeholder='Search for reviewers'></Select>
                        </div>
                        <div>
                            <Button type='primary'>Submit</Button>
                            <Button>Save</Button>
                        </div>
                    </ProCard>
                </ProCard>
            </ProCard>
        </div>
    );
    return <Layout body={body} />;
};

export default MoreDetails;