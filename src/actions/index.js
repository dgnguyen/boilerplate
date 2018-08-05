import axios from 'axios'
export const FETCH_POSTS = 'FETCH_POSTS'

export function fetchPosts() {
  const rootURL = 'http://reduxblog.herokuapp.com/api'
  const apiKey = '?key=DGNGUYEN'
  const request = axios.get(`${rootURL}/posts${apiKey}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}
