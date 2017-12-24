import React, { Component } from 'react';
import Link from 'react-router-dom/es/Link';
import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Favourite from 'material-ui/svg-icons/action/favorite';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import FavouriteBorder from 'material-ui/svg-icons/action/favorite-border';
import {
    Grid,
    Row,
    Col
} from 'react-material-responsive-grid';
import routes from '../static/routes';
import '../assets/styles/grid.less';

class GridUsers extends Component {
    constructor (params) {
        super(params);
        this.renderAllUsers = this.renderAllUsers.bind(this);
        this.addUserToFavourities = this.addUserToFavourities.bind(this);
        this.userIsFavourite = this.userIsFavourite.bind(this);
        this.refresh = this.refresh.bind(this);
    }
    addUserToFavourities (id) {
        const user = this.props.users.usersList.find(item => item.id === id);
        const isFavourite = this.props.users.favourities.find(userId => userId === id);

        isFavourite !== user.id
            ? this.props.addToFavourities(id)
            : this.props.removeFavourities(id);
    }
    userIsFavourite (id) {
        const user = this.props.users.usersList.find(item => item.id === id);
        const isFavourite = this.props.users.favourities.find(userId => userId === id);

        return isFavourite === user.id
            ? <Favourite color='red'/>
            : <FavouriteBorder color='white'/>
    }
    renderAllUsers (allUsers) {
        return allUsers.usersList.map((item, index) => {
            return (
                <Col
                    xs4={2}
                    sm12={4}
                    lg12={2}
                    xl12={1}
                    key={index}
                >
                    <GridTile
                        title={item.login}
                        className='app_one-user'
                        subtitle={
                            <Link to={`${routes.single}${item.id}`} >
                                <span>by <b>{item.login}</b>
                                    Read more
                                </span>
                            </Link>
                                }
                        actionIcon={
                            <IconButton onClick={() => this.addUserToFavourities(item.id)}>
                                {this.userIsFavourite(item.id)}
                            </IconButton>
                        }
                    >
                        <img src={item.avatar_url} alt={item.login}/>
                    </GridTile>
                </Col>
            );
        })
    }
    renderContent () {
        return this.props.users.usersList.length
            ? (
                <Grid>
                    <Row>
                        {this.renderAllUsers(this.props.users)}
                    </Row>
                </Grid>
            )
            : (<div className='app_one-user-refresh'>
                <IconButton
                    onClick={this.refresh}
                    viewBox={'100 100'}
                >
                    <Refresh/>
                </IconButton>
            </div>)

    }
    refresh () {
        this.props.importGithubUsers();
    }
    render () {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default GridUsers;