
# Relayr Frontend Challenge
![alt text](https://raw.githubusercontent.com/bilobom/relayrTest/master/public/screenShot.png)

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
3. In package.json there is, `"proxy": "http://127.0.0.1:8888"` to proxy API requests
4. In package.json `"start": "react-scripts start | node ./api-server.js"` starting two command by piping.
5. I used Material ui to style my app.
### Instruction

1. `npm install`
2. `npm start`
