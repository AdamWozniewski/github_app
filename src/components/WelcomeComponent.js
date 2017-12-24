import React, { Component } from 'react';
import github from '../assets/images/github.png';
import Link from 'react-router-dom/es/Link';
import { RaisedButton } from 'material-ui';
import {
    ActionExitToApp,
    ActionDone
} from 'material-ui/svg-icons/index.es';
import routes from '../static/routes';
import '../assets/styles/welcomeComponent.less';

class WelcomeComponent extends Component {
    constructor (params) {
        super(params);
        this.loginLogoutAction = this.loginLogoutAction.bind(this);
    }
    loginLogoutAction () {
        !this.props.users.loggedPerson
            ? this.props.showLoginModal()
            : this.props.logoutPerson()
    }
    render () {
        return (
            <div className='app_welcome'>
                <Link to={routes.root}>
                    <img src={github} alt='logo github'/>
                </Link>
                <h1>GitHub App</h1>
                {this.props.users.loggedPerson
                    ? (
                        <RaisedButton
                            label='Logout'
                            labelPosition='before'
                            primary={true}
                            icon={<ActionExitToApp />}
                            onClick={this.loginLogoutAction}
                        />
                    )
                    : (
                        <RaisedButton
                            label='Login'
                            labelPosition='before'
                            primary={true}
                            icon={<ActionDone />}
                            onClick={this.loginLogoutAction}
                        />
                    )
                }
                <hr/>
            </div>
        )
    }
}

export default WelcomeComponent;