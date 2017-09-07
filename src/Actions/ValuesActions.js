import axios from 'axios'

export const fetchValues = () => {
  return dispatch => {
    axios.get('http://demo0113689.mockable.io/values')
            .then(function (response) {
              dispatch({
                type: 'FETCH_VALUES_SUCCESS',
                payload: response.data
              })
            })
            .catch(function (error) {
              console.log(error)
            })
  }
}

export const setValue = (attribute, value) => {
  return dispatch => {
    dispatch({
      type: 'SET_VALUE',
      payload: { attribute, value }
    })
    axios.patch('http://demo0113689.mockable.io/attribute_values?attribute_id=1&value_id=2')
            .then(function (response) {
              dispatch({
                type: 'SET_VALUE_AFTER_RESPONSE',
                payload: { attribute, value }
              })
            })
            .catch(function (error) {
              console.log(error)
            })
  }
}
