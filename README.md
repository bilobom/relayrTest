
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

### Description

1. Altought this app doesn't need a redux store, I wanted to showcase the state management should this app scale.
2. I used `create-react-app` instead of the original babel & webpack configuration to make my life easier :) `it has some probelms with redux.`
3. In package.json there is, `"proxy": "http://127.0.0.1:8888"` to roxy API Requests
4. In package.json `"start": "react-scripts start | node ./api-server.js"` starting two command by piping.

### Instruction

1. `npm install`
2. `npm run start`
