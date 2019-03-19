import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dispatchGetDeviceReadings } from './redux/actionCreators'

class App extends Component {

  componentDidMount() {
    console.log('Component Did mount')
    this.props.dispatchGetDeviceReadings()
  }
  componentWillReceiveProps(nextProps) {
    const { deviceReadings } = nextProps
    console.log('deviceReadings', deviceReadings)
  }
  render() {
    const { deviceReadings } = this.props
    return (
      <div>
        {deviceReadings.map((reading, index) => {
          return (<h3>{reading.name}</h3>)
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  deviceReadings: state.deviceReadings
})

const mapDispatchToProps = {
  dispatchGetDeviceReadings,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

