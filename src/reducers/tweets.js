import { RECEIEVE_TWEETS } from '../action/tweets';

export default function tweets (state = {}, action ) {
  switch(action.type) {
    case RECEIEVE_TWEETS: 
    return { 
      ...state,
      ...action.tweets
    }
    default:
        return state 
  }
}