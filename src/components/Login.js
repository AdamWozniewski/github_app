import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {
    reduxForm,
    Field
} from 'redux-form';
import { IconButton } from 'material-ui';
import { AvNewReleases } from 'material-ui/svg-icons/index.es';
import '../assets/styles/login.less';

const renderTextField = ({
     input,
     label,
     meta: { touched, error },
     ...custom
 }) => (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />
);

class Login extends Component {
    constructor(params) {
        super(params);
        this.login = this.login.bind(this);
    }
    handleClose = () => {
        this.props.hideLoginModal()
    };
    login (params) {
        this.props.loginPerson(params);
    }
    render () {
        const actions = [
            <FlatButton
                label='Cancel'
                primary={true}
                onClick={this.handleClose}
            />,

        ];
        return (
            <Dialog
                title='Login'
                actions={actions}
                modal={false}
                open={this.props.app.loginModal}
                onRequestClose={this.handleClose}
            >
                <div className='app_login-info'>
                    <IconButton tooltip={`
                    Login: admin,
                    password: admin
                `}>
                        <AvNewReleases />
                    </IconButton>
                </div>
                <form
                    ref='loginForm'
                    action=''
                    onSubmit={this.props.handleSubmit(this.login)}
                >
                    <Field
                        name='login'
                        component={renderTextField}
                        label='Login'
                    /><br />
                    <Field
                        name='psswd'
                        component={renderTextField}
                        label='Password'
                    /><br />
                    <FlatButton
                        label='Submit'
                        primary={true}
                        keyboardFocused={true}
                        type='submit'
                    />
                </form>
            </Dialog>
        )
    }
}

export default reduxForm({
    form: 'loginForm'
})(Login)