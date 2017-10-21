import {timer} from "./timer"

const state = {
  time: 0,
  lapTimes: []
}

const reducer = function(prevState = state, action) {

  return {
    time: timer(prevState.time, action)
  }
}


export default reducer;
