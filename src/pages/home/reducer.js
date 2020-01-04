import dotProp from 'dot-prop-immutable'
import {createAction, handleActions} from 'redux-actions'

const setUserName = createAction('HOME/USERNAME')
const initState = {
  username: 'dno'
}
export const fetchUserName = value => dispatch => {
  return dispatch(setUserName(value))
}
const reducer = handleActions({
  [setUserName]: (state, {payload}) => {
    return dotProp.set(state, 'username', payload)
  }
}, initState)
export default reducer
