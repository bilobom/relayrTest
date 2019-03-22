
# Relayr Frontend Challenge

### Folder Structure

     .
     ├── src                             # source root
     │    ├── api-client                  # API end point for the client
     │    ├── App.js                      # Main App Stack
     │    ├── index.js,serviceWorker.js   # react files
     │    ├── style.css                   # relayr CSS file(empty)
     │    └── README.md                   # this readme
     ...
     ├── component
     │    ├── info.js                     # SnackBar component to show action status
     │    └── singleReading.js            # One device reading component  
     │
     └── redux
          ├── store.js                     # App state store configuration
          ├── reducers.js                  # deviceReading,info & rootReducer
          └── actionCreators.js            # Actions: 
                                           # ----> dispatchGetDeviceReadings,
                                           # ----> dispatchToggleState
                                           # ----> info

