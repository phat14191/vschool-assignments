export function times(prevCurrTime, action) {
  let newTime = [...prevCurrTime];
  switch (action.type) {
    case "START_TIMER":
      return {
        // let timmer = setInterval(...prevCurrTime, 1000);
        time: action.time // ++
      }
    case "PAUSE_TIMER":
      return {
        ...prevCurrTime,
        time: //state.timer
      }
    case "LAP_TIMER":
      return {
        newTime.push(action.time);
        return newTime;
      }
    case "RESET_TIMER"
        return {
          time: 0
        }
    default:
      return prevCurrTime
  }
}
