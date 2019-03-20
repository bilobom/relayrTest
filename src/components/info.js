import React from 'react';
import {  Snackbar, IconButton } from '@material-ui/core';
import { Close as CloseIcon} from '@material-ui/icons';



class Info extends React.Component {
  state = {
    open: false,
  };
  componentWillReceiveProps(nextProps){
    console.log('nextProps.info',nextProps.info)
  }
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const { info:{message} } = this.props;
    return (
      <div>
        
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}


export default Info;