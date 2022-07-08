import React from 'react';
import PropTypes from 'prop-types';
import {Button, Input} from 'antd' ;
import { SearchOutlined } from '@ant-design/icons';

interface SearchBarProps {
    placeholder: string,
}
interface SearchBarState {
    searchText: string,
}
class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    constructor(props: SearchBarProps) {
        super(props);
        this.state = {
            searchText: ""
        }
    }

    static propTypes = {
        placeholder: PropTypes.string,
    }

    static defaultProps = {
        placeholder: "",
    }

    private onSearch = () => {

    }

    private onInput = (input: string | null | undefined) => {
        this.setState({searchText: input || ""})
    }

    render () {
        return (
            <div style={{display: 'flex', width: '100%', flexDirection: "row", justifyContent: 'center'}}>
                <Input style={{maxWidth: "50%", borderRadius: 20}} placeholder={this.props.placeholder || ""} value={this.state.searchText} onInput={
                    ($event)=>
                        // @ts-ignore
                        {this.onInput($event?.target?.value)}
                }/>
                <Button style={{marginLeft: 20}} type="primary" shape="circle" icon={<SearchOutlined />} onClick={()=>{this.onSearch()}}/>
            </div>
        )
    }
}

export default SearchBar;
