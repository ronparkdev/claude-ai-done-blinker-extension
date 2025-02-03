(() => {
  let isPrevRunning = null;

  function send(isRunning) {
    chrome.runtime.sendMessage({
      type: "STATUS_CHANGE",
      isRunning: isRunning,
      action: "PLAY_SOUND",
    });
  }

  // 상태 체크 및 처리
  function checkStatus() {
    const isChatPage = new URL(window.location.href).pathname.startsWith(
      "/chat/"
    );

    const svgElement = document.querySelector(
      "div.w-8.text-accent-brand.inline-block.select-none svg"
    );

    if (!svgElement) {
      return;
    }

    const viewBoxOffset = svgElement
      .getAttribute("viewBox")
      .split(" ")
      .map(Number)[3];
    if (Number.isNaN(viewBoxOffset)) {
      return;
    }

    const isRunning = isChatPage && viewBoxOffset !== 100;

    if (isPrevRunning === isRunning) {
      return;
    }

    if (isPrevRunning !== null && isChatPage) {
      send(isRunning);
    }

    // console.log(isRunning ? "Running" : "Not Running");
    isPrevRunning = isRunning;
  }

  // 주기적으로 상태 체크
  setInterval(checkStatus, 100);
})();
