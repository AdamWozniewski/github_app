import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SingleUser from './SingleUser';
import SingleRepo from './SingleRepo';
import WelcomeComponent from './WelcomeComponent';
import GridUsers from './Grid';
import Loader from './Loader';
import Login from './Login';
import routes from '../static/routes';
import SnackbarInfo from "./Snackbar";

class Main extends Component {
    componentDidMount () {
        this.props.importGithubUsers();
        this.props.loadFavourities();
    }
    render () {
        return (
            <div>
                <WelcomeComponent {...this.props}/>
                {this.props.users.loggedPerson !== null
                    ? (
                        <div className='app_main-content'>
                            <Route exact path={routes.root} component={() => <GridUsers {...this.props}/>}/>
                            <Route exact path={routes.singleUser} component={({match})=> <SingleUser {...this.props} params={match.params}/>}/>
                            <Route exact path={routes.singleUserRepo} render={(props) => <SingleRepo {...props}/>} />
                            {this.props.app.loader
                                ? <Loader/>
                                : null
                            }
                            <SnackbarInfo {...this.props}/>
                        </div>
                    )
                    : (
                        <Login {...this.props}/>
                    )
                }
            </div>
        );
    }
}

export default Main;