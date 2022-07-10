import * as React from "react";
import {ProCard} from "@ant-design/pro-components";
import {Breadcrumb} from "antd";
import SearchBar from "../../components/SearchBar";
import {mapHashTagsListToHasTags} from "../../Utils/utils";

const MyProjectDetails: React.FC = () => {
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
              </div>
          </ProCard>
      </div>
    );
    return (
        body
    )
};

export default MyProjectDetails;