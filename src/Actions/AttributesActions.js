import axios from 'axios'

export const fetchAttributes = () => {
  return dispatch => {
    axios.get('http://demo0113689.mockable.io/attribute_values')
            .then(function (response) {
              dispatch({
                type: 'FETCH_ATTRIBUTES_SUCCESS',
                payload: response.data})
            })
            .catch(function (error) {
              console.log(error)
            })
  }
}

export const setAttribute = (attribute) => {
  return {
    type: 'SELECT_ATTRIBUTE',
    payload: attribute
  }
}
