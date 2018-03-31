import { put, takeLatest, all, call } from 'redux-saga/effects'
import { eventInfoRequested, eventInfoReceived } from '../reducer'
import fetchJsonp from 'fetch-jsonp'

const eventURL = (key) => `https://api.meetup.com/reactjs-dallas/events?key=${key}&sign=true&photo-host=public&page=1`
const rsvpURL = (key, eventID) => `https://api.meetup.com/reactjs-dallas/events/${eventID}/rsvps?key=${key}&sign=true&photo-host=pub`
const signedURL = 'https://api.meetup.com/reactjs-dallas/events/pbbdwnyxgbnb/rsvps?photo-host=public&sig_id=251251761&sig=20475124f18160edd094a0455d04b08b41634aba'

function* fetchRSVPS({ payload }) {
  try {
    let id
    if (payload) {
      let response = yield call(fetchJsonp, eventURL(payload))
      let { data: eventData } = yield call(response.json)
      
      if (eventData.errors) {
        const [error] = eventData.errors
        yield put(eventInfoReceived(Error(error.message)))
        return
      }
      
      id = eventData.length && eventData[0].id
    }

    const url = id ? rsvpURL(payload, id) : signedURL
    const response = yield call(fetchJsonp, url)
    const { data } = yield call(response.json) || { data: [] }
    const members = data.map(el => ({ response: el.response, guests: el.guests, name: el.member.name, thumb_link: el.member.photo.thumb_link }))
    yield put(eventInfoReceived(members))
  } catch (e) {
    yield put(eventInfoReceived(e))
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(eventInfoRequested, fetchRSVPS),
  ])
}