(function () {
  window.resetDailyTasksIfNeeded = function (state, today) {
    if (state.progressDay === today) {
      return false;
    }

    state.progressDay = today;
    state.completedToday = [];
    state.retellText = "";
    state.journalText = "";
    state.quizScore = 0;
    state.shadowRounds = 0;
    return true;
  };
})();
