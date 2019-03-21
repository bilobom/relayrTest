import React from 'react';
import {  Snackbar, IconButton } from '@material-ui/core';
import { Close as CloseIcon} from '@material-ui/icons';
import { connect } from "react-redux";



class Info extends React.Component {
  state = {
    open: false,
   
  };
  
  componentWillReceiveProps(nextProps){
    this.setState({open:true})
  }
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const {message} = this.props.info;
    return (
      <div>
        
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={3000}
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

const mapStateToProps = state => ({
  info: state.info
});


export default connect(mapStateToProps)(Info);