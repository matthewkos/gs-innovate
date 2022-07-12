import * as React from 'react';
import {ProCard} from "@ant-design/pro-components";
import {Breadcrumb, Space, Table, Tag} from "antd";
import SearchBar from "../../components/SearchBar";
import {mapHashTagsListToHasTags} from "../../Utils/utils";
import {ColumnsType} from "antd/lib/table/interface";
import AvatarGroup from "../../components/Avatar";
import {useNavigate} from "react-router-dom";

type RecordType = {
    type: string[],
    title: string,
    member: string,
    stage: string
}

const dataSource: RecordType[] = [
    {
        type: ['Draft'],
        title: 'Make a centralised metrics dashboard',
        member: 'test',
        stage: 'Finish finding similar projects'
    },
    {
        type: ['Rejected'],
        title: 'Operations reporting system',
        member: 'test',
        stage: 'Proposal rejected'
    },
    {
        type: ['Submitted'],
        title: 'Have a centralised lunch ordering system',
        member: 'test',
        stage: 'Looking for SME Reviewers'
    },
    {
        type: ['Implemented'],
        title: 'Make a firmwide innovation platform for GS',
        member: 'test',
        stage: 'See product progress'
    },
    {
        type: ['Submitted'],
        title: 'Cloud application metrics dashboard',
        member: 'test',
        stage: 'Pending MD review'
    }
];

const columns: ColumnsType<RecordType> = [
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        render: (_, { type }) => (
            <>
                {type.map((tag: string) => {
                    let color;
                    if (tag === 'Submitted') {
                        color = 'geekblue'
                    } else if (tag === 'Rejected') {
                        color = 'red'
                    } else if (tag === 'Implemented') {
                        color = 'green'
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Members',
        dataIndex: 'member',
        key: 'member',
        render: (_, {member}) =>
            <AvatarGroup/>
    },
    {
        title: 'Stage',
        dataIndex: 'stage',
        key: 'stage',
        render: (_, record) =>
            <Space size='middle'>
                <a>{record.stage}</a>
            </Space>
    },
];

const MyProjects: React.FC = () => {
    const navigate = useNavigate();
    const hashTagsList: string[] = ['All', 'Drafts', 'Submitted', 'Rejected', 'Implemented']
    const body = (
      <div>
          <ProCard style={{ height: 200 }}>
              <Breadcrumb>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
              </Breadcrumb>
              <h2>My Projects</h2>
              <div style={{height: '50px', flexDirection: 'column', justifyContent: 'center'}}>
                  <SearchBar placeholder={"Search Here..."}/>
              </div>
              <div>
                  Filters:
                  &nbsp;
                  {mapHashTagsListToHasTags(hashTagsList)}
              </div>
          </ProCard>
          <div>&nbsp;</div>
          <ProCard>
              <Table
                  dataSource={dataSource}
                  columns={columns}
                  onRow={(record, rowIndex) => {
                      return {
                          onClick: event => navigate('/details')
                      }
                  }}
              />
          </ProCard>
      </div>
    );
    return (
        body
    )
};


export default MyProjects;