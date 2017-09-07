import Immutable from 'immutable'

export default function (state = Immutable.fromJS({data: [], selectedAttribute: {}}), action) {
  switch (action.type) {
    case 'FETCH_ATTRIBUTES_SUCCESS':
      return state.set('data', Immutable.fromJS(action.payload))
    case 'SELECT_ATTRIBUTE':
      return state.set('selectedAttribute', Immutable.fromJS(action.payload))
    case 'SET_VALUE' :
      const { attribute, value } = action.payload
      const data = state.get('data').toJS()
      let completeAttribute = data.filter(attr => attr.id === attribute.id)
      completeAttribute = completeAttribute[0]
      completeAttribute.values.push(value)
      completeAttribute.values = [...new Set(completeAttribute.values)]

      data[data.findIndex(attr => attr.id === attribute)] = completeAttribute

      return state.set('data', Immutable.fromJS(data)).set('selectedAttribute', Immutable.fromJS(completeAttribute))

    default:
        return state
    }
  
}
