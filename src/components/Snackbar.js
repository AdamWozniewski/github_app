import React, {Component} from 'react';
import Snackbar from 'material-ui/Snackbar';

class SnackbarInfo extends Component {
    constructor (params) {
        super(params);
        this.state = {
            open: this.props.app.snackbar || false
        }
    }
    handleRequestClose = () => {
        this.setState({
            open: false,
        });
        this.props.hideSnackbar();
    };
    componentWillReceiveProps (next) {
        this.setState({
            open: next.app.snackbar
        })
    }
    render () {
        return (
            <Snackbar
                open={this.state.open}
                message="Data fault"
                autoHideDuration={3000}
                onRequestClose={this.handleRequestClose}
            />
        )
    }
}

export default SnackbarInfo;