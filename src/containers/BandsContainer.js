import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        {this.props.bands.map((band) => <li >{band.name}</li>)}
        <BandInput addBand={this.props.addBand} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: 'ADD_BAND', band })
})

export default connect((state) => ({bands: state.bands}), mapDispatchToProps)(BandsContainer)
