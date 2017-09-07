import Immutable from 'immutable'

export default function (state = Immutable.fromJS([]), action) {
  switch (action.type) {
    case 'FETCH_VALUES_SUCCESS':
      return Immutable.fromJS(action.payload)

    default:
      return state
  }

}
