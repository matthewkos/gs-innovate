import * as React from "react";
import {ProCard} from "@ant-design/pro-components";
import {Avatar, Breadcrumb, PageHeader, Table, Tabs} from "antd";
import {ColumnsType} from "antd/lib/table/interface";
import StatusTag from "../../components/StatusTag";
import {ForumPost} from "../MainPage";

const {TabPane} = Tabs;

type RecordType = {
    proposal: string[],
    sme: string[],
    md: string[],
}

const dataSource: RecordType[] = [
    {
        proposal: ['Proposal Submission', 'DONE'],
        sme: ['Pitch to SME', 'DONE'],
        md: ['Pitch to MD', 'NOT STARTED'],
    },
    {
        proposal: ['SME Matching', 'DONE'],
        sme: ['Pitch Evaluation', 'DONE'],
        md: ['Pitch Evaluation', 'NOT STARTED'],
    },
    {
        proposal: ['Proposal Evaluation', 'DONE'],
        sme: ['Product Refinement', 'IN PROGRESS'],
        md: ['Product Refinement', 'NOT STARTED'],
    },
    {
        proposal: [],
        sme: ['MD Matching', 'NOT STARTED'],
        md: ['Final Evaluation', 'NOT STARTED'],
    }
]

const columns: ColumnsType<RecordType> = [
    {
        title: 'Proposal Stage',
        dataIndex: 'proposal',
        key: 'proposal',
        render: ((_, {proposal}) =>
            {return <StatusTag hashTag={proposal[0]} status={proposal[1]} />}
        )
    },
    {
        title: 'SME Review Stage',
        dataIndex: 'sme',
        key: 'sme',
        render: ((_, {sme}) =>
            {return <StatusTag hashTag={sme[0]} status={sme[1]} />}
        )
    },
    {
        title: 'MD Review Stage',
        dataIndex: 'md',
        key: 'md',
        render: ((_, {md}) =>
            {return <StatusTag hashTag={md[0]} status={md[1]} />}
        )
    }
]

export const ReviewerCard = (image: string,
                          name: string,
                          role: string,
                          bordered: boolean) => {
    return (
        <ProCard colSpan='100%' bordered={bordered}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10,}}>
                <div style={{minWidth: 32, minHeight: 32, aspectRatio: 'auto'}}>
                    <Avatar></Avatar>
                </div>
                <div>
                    <div style={{overflow: "hidden",marginLeft: 16, fontSize: '1.25em', fontWeight: "bold"}}>
                        {name}
                    </div>
                    <div style={{overflow: "hidden",marginLeft: 16, fontSize: '1em', opacity: '50%'}}>
                        {role}
                    </div>
                    <div style={{overflow: "hidden",marginLeft: 16, fontSize: '0.8em', color: '#1890FF'}}>
                        Symphony | Email
                    </div>
                </div>

            </div>
        </ProCard>
    );
}

const MyProjectDetails: React.FC = () => {
    const body = (
      <div>
          <ProCard style={{ height: 165 }}>
              <Breadcrumb>
                  <Breadcrumb.Item>My Projects</Breadcrumb.Item>
                  <Breadcrumb.Item>Project Information</Breadcrumb.Item>
              </Breadcrumb>
              <h2>Have a centralised lunch ordering system</h2>
              <PageHeader
                  footer={
                      <Tabs defaultActiveKey="1">
                          <TabPane tab="Progress" key="1" />
                          <TabPane tab="Feedback" key="2" />
                      </Tabs>
                  }>
              </PageHeader>
          </ProCard>
          <div>&nbsp;</div>
          <ProCard gutter={[8, 8]} ghost style={{ height: '100%' }}>
            <ProCard>
                <Table
                    bordered={false}
                    dataSource={dataSource}
                    columns={columns}>
                </Table>
            </ProCard>
              <ProCard colSpan='20%' title='Reviewers' headerBordered split='horizontal' style={{height: '100%'}}>
                  {ReviewerCard('1', 'Lim, Jeremy', 'Regulatory Engineering',true)}
                  {ReviewerCard('1', 'Koo, Tin Lok', 'DSML QF',true)}
                  {ReviewerCard('1', 'Wong, Justina', 'Slang SDLC',true)}
              </ProCard>
          </ProCard>
      </div>
    );
    return (
        body
    )
};

export default MyProjectDetails;