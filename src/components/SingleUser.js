import React, { Component } from 'react';
import Link from 'react-router-dom/es/Link';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import {
    List,
    ListItem
} from 'material-ui/List';
import Loader from './Loader';
import routes from '../static/routes';
import Searcher from './Searcher';
import '../assets/styles/singleUser.less';

class SingleUser extends Component {
    constructor (params) {
        super(params);
        this.state = {
            repos: []
        };
        this.loadUserInfo = this.loadUserInfo.bind(this);
    }
    loadUserInfo () {
        const actuallyUser = this.props.users.usersList.find(user => user.id === +this.props.params.id);
        actuallyUser
            ? this.props.getRepo(actuallyUser.repos_url).then(values => {
                this.setState({
                    repos: values
                })
            }).catch(err => {
                console.log('asfafs')
            })
            : null;
    }

    renderRepos (repos) {
        return repos.map((item, index) => {
            return (
                <Link
                    to={{
                        pathname:`${this.props.params.id}${routes.repo}${item.id}`,
                        state: item
                    }}
                    key={index}
                    className='app_single-user-repos'
                >
                    <ListItem
                        primaryText={<h3>{item.name}</h3>}
                        leftIcon={<ContentInbox/>}
                        secondaryText={
                            <p>
                                {item.description}
                                <span className='app_single-user-repos-info'><strong>{item.language}</strong><span>Last update: {item.updated_at}</span></span><br/>
                            </p>
                          }
                        secondaryTextLines={2}
                    />
                </Link>
            )
        });
    }
    componentDidMount () {
        this.loadUserInfo();
    }
    render () {
        return (
            <div>
                <Searcher
                    items={this.state.repos}
                    id={this.props.params.id}
                />
                <h1>User: </h1>
                {this.state.repos.length
                    ? (
                        <List>
                            {this.renderRepos(this.state.repos)}
                        </List>
                    )
                    : <Loader/>
                }
            </div>
        );
    }
}

export default SingleUser;