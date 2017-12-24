import React, { Component } from 'react';
import {
    Avatar,
    Divider,
    List,
    ListItem,
    Subheader
} from 'material-ui';
import {
    ActionAssignment,
    ActionInfo,
    EditorInsertChart,
    FileFolder
} from 'material-ui/svg-icons/index.es';
import {
    blue500,
    yellow600
} from 'material-ui/styles/colors';

class SingleRepo extends Component {
    constructor(params) {
        super(params);
        this.state = {
            repoInfo: this.props.location.state || {}
        }
    }
    render() {
        return (
            <div className='app_single-repo'>
                <List>
                    <Subheader inset={true}>Primary info</Subheader>
                    <ListItem
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                        rightIcon={<ActionInfo />}
                        primaryText={this.props.location.state.name}
                        secondaryText={`ID: ${this.props.location.state.id}`}
                    />
                    <ListItem
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                        rightIcon={<ActionInfo />}
                        primaryText='Create at:'
                        secondaryText={this.props.location.state.created_at}
                    />
                    <ListItem
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                        rightIcon={<ActionInfo />}
                        primaryText={`Size: ${this.props.location.state.size}`}
                        secondaryText={this.props.location.state.updated_at}
                    />
                </List>
                <Divider inset={true} />
                <List>
                    <Subheader inset={true}>Secondary info</Subheader>
                    <ListItem
                        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={blue500} />}
                        rightIcon={<ActionInfo />}
                        primaryText={
                            <a
                                href={this.props.location.state.svn_url}
                                target='_blank'
                            >Repo URL</a>
                        }
                        secondaryText={`Forks: ${this.props.location.state.forks}`}
                    />
                    <ListItem
                        leftAvatar={<Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />}
                        rightIcon={<ActionInfo />}
                        primaryText="Language"
                        secondaryText={this.props.location.state.language}
                    />
                </List>
            </div>
        );
    }
}

export default SingleRepo;