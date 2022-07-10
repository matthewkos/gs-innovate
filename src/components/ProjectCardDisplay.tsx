import * as React from 'react';
import {Card} from "antd";
import Meta from "antd/lib/card/Meta";
import AvatarGroup from "./Avatar";

interface Props {
    imageSrc: string,
    projectTitle: string,
    projectDescription: string,
    projectStatus: string,
}

const ProjectCardDisplay: React.FC<Props> = (props) => {
    const {imageSrc, projectTitle, projectDescription, projectStatus} = props;
    const colour = projectStatus === 'Implemented' ? 'rgba(4, 190, 0, 0.45)' : 'rgba(255, 2, 2, 0.45)'
    return (
        <Card
            hoverable
            cover={<img alt="example" src={imageSrc} height="250"/>}
        >
            <Meta title={projectTitle} description={projectDescription} />
            <div style={{paddingTop: 30, display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <div style={{color:colour, display:'flex', flexDirection:'column', justifyContent:'center'}}>{projectStatus}</div>
                <AvatarGroup/>
            </div>
        </Card>
    );
};

export default ProjectCardDisplay;