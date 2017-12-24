import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import '../assets/styles/loader.less';

class Loader extends Component {
    render () {
        return (
            <div className='app_loader'>
                <CircularProgress size={200} thickness={5} />
            </div>
        )
    }
}

export default Loader;