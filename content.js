(() => {
  let isPrevRunning = null;

  // 상태 체크 및 처리
  function checkStatus() {
    const hasElement = document.querySelector("svg.w-full.fill-current");
    if (isPrevRunning === null && !hasElement) {
      return;
    }

    const isRunning = !hasElement;

    if (isPrevRunning !== isRunning) {
      if (isPrevRunning !== null) {
        // background script에 메시지 전송 (오디오 재생 포함)
        chrome.runtime.sendMessage({
          type: "STATUS_CHANGE",
          isRunning: isRunning,
          action: "PLAY_SOUND",
        });
      }
      console.log(isRunning ? "Running" : "Not Running");
      isPrevRunning = isRunning;
    }
  }

  // 주기적으로 상태 체크
  setInterval(checkStatus, 100);
})();
