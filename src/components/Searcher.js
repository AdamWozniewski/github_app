import React, { Component } from 'react';
import {
    List,
    ListItem,
    TextField
} from 'material-ui';
import { ContentInbox } from 'material-ui/svg-icons/index';
import Link from 'react-router-dom/es/Link';
import '../assets/styles/searcher.less';

class Searcher extends Component {
    constructor (params) {
        super(params);
        this.state = {
            items: this.props.items || [],
            findingItems: []
        };
        this.find = this.find.bind(this);
    }
    find (params) {
        let query = params.target.value;
        let newArrayIndex = this.state.items.filter(item => {
            return item.name.toLowerCase().includes(query.toLowerCase())
        });
        this.setState({
            findingItems: newArrayIndex
        });
    }
    renderFindingItems () {
        return this.state.findingItems.map((items, index) =>
            <Link key={index} to={`${this.props.id}/repo/${items.id}`}>
                <ListItem
                    leftIcon={<ContentInbox color={'#ccc'} />}
                    primaryText={items.name}
                />
            </Link>
        )
    }
    componentWillReceiveProps (next) {
        this.setState({
            items: next.items
        })
    }
    render () {
        return (
            <div className='app_searcher'>
                <TextField
                    hintText="Find a repo"
                    onChange={this.find}
                /><br />
                <List>
                    {this.renderFindingItems()}
                </List>
            </div>
        )
    }
}

export default Searcher;