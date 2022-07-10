import * as React from 'react';
import {Button} from "antd";

interface Props {
    hashTag: string,
}

/**
 * Simple component to display HashTags
 * @param props
 * @constructor
 */
const HashTags: React.FC<Props> = (props) => {
    const {hashTag} = props;
    return (
        <Button style={{
            borderRadius: 30,
            borderColor: 'transparent',
            backgroundColor:'rgb( 141, 207, 248, 0.5)',
            color:'#1890FF',
            marginRight:10,
            marginBottom:10
        }}>
            {hashTag}
        </Button>
    );
};

export default HashTags;