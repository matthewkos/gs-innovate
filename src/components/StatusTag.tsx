import * as React from 'react';
import {Button} from "antd";
import {CheckCircleOutlined, SyncOutlined, ClockCircleOutlined} from '@ant-design/icons'

interface Props {
    hashTag: string,
    status?: string,
}

/**
 * Simple component to display HashTags
 * @param props
 * @constructor
 */
const StatusTag: React.FC<Props> = (props) => {
    const {hashTag, status} = props;
    let color, backgroundColor, icon;
    if (status === 'DONE') {
        color = '#52C41A'
        backgroundColor = '#F6FFED'
        icon = <CheckCircleOutlined />
    } else if (status == 'IN PROGRESS') {
        color = '#1890FF'
        backgroundColor = '#E6F7FF'
        icon = <SyncOutlined />
    } else if (status == "NOT STARTED") {
        color = '#000000'
        backgroundColor = '#FAFAFA'
        icon = <ClockCircleOutlined />
    }
    return (
        <Button
            style={{
                height: '50px',
                borderRadius: 30,
                borderColor: 'transparent',
                backgroundColor:backgroundColor,
                color:color,
                marginRight:10,
                marginBottom:10,
            }}
            icon={icon}
        >
            {hashTag}
        </Button>
    );
};

export default StatusTag;