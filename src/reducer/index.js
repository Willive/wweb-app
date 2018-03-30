import { handleActions, createAction } from 'redux-actions'

export const eventInfoRequested = createAction('EVENT_INFO_REQUESTED')
export const eventInfoReceived = createAction('EVENT_INFO_RECEIVED')

const initialState = {attendees:[]}
export default handleActions({
  [eventInfoReceived]: (state, { payload, error }) => ({
    ...state,
    attendees: payload,
    error: error
  })
}
  , initialState)