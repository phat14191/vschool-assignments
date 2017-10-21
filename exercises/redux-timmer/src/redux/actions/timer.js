export function startTimer() {
  return {
    type: "START_TIMER"

  }
}

export function pauseTime() {
  return {
    type: "PAUSE_TIMER"
  }
}

export function lapTimer(currTime) {
  return {
    type: "LAP_TIMER",
    cuurTime
  });
}

export function resetTimer() {
  return {
  type: "RESET_TIMER"
};
}
