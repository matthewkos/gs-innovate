import { Avatar, Tooltip } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';

const AvatarGroup: React.FC = () => (
    <Avatar.Group>
        <Tooltip title="Lim, Jeremy" placement="top">
            <Avatar src="https://joeschmoe.io/api/v1/jon" />
        </Tooltip>
        <Avatar style={{ backgroundColor: '#f56a00' }}>J</Avatar>
        <Tooltip title="Wong, Justina" placement="top">
            <Avatar style={{ backgroundColor: '#87d068' }} src="https://joeschmoe.io/api/v1/jess" />
        </Tooltip>
        <Avatar style={{ backgroundColor: '#1890ff' }} src="https://joeschmoe.io/api/v1/jack" />
    </Avatar.Group>
)

export default AvatarGroup;