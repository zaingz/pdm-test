import React, { Component } from 'react';
import './App.css';
import Attributes from './Components/Attributes'
import Values from './Components/Values'
import { connect } from 'react-redux'

import { fetchAttributes, setAttribute } from './Actions/AttributesActions'
import { fetchValues, setValue } from './Actions/ValuesActions'


function mapStateToProps({ attributes, values }) {
  return {
    attributes: attributes.toJS(),
    values: values.toJS()
  }
}


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    this.props.dispatch(fetchAttributes())
    this.props.dispatch(fetchValues())
  }

  attributeSelect = (attribute) => {
    this.props.dispatch(setAttribute(attribute))
  }

  valueSelect = (attribute, value) => {
    if (Object.keys(attribute).length)
      this.props.dispatch(setValue(attribute, value))
    else
      alert('No Attriute selected')
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src='https://www.paramount-data-management.com/img/pdm_logo_head.png'
          className="App-logo" alt="logo" />
        </div>
        <div className="App-intro">
          <Attributes
            selectedAttribute={this.props.attributes.selectedAttribute}
            attributeSelect={this.attributeSelect}
            attributes={this.props.attributes.data}
          />

          <Values
            valueSelect={this.valueSelect}
            selectedAttribute={this.props.attributes.selectedAttribute}
            values={this.props.values}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App)