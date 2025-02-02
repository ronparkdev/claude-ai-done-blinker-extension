const startAudioUrl = chrome.runtime.getURL("assets/sounds/start.mp3");
const endAudioUrl = chrome.runtime.getURL("assets/sounds/end.mp3");

/**
 * Plays audio files from extension service workers
 * @param {string} source - path of the audio file
 * @param {number} volume - volume of the playback
 */
async function playSound(source = "default.wav", volume = 1) {
  await createOffscreen();
  await chrome.runtime.sendMessage({ play: { source, volume } });
}

// Create the offscreen document if it doesn't already exist
async function createOffscreen() {
  if (await chrome.offscreen.hasDocument()) return;
  await chrome.offscreen.createDocument({
    url: "offscreen.html",
    reasons: ["AUDIO_PLAYBACK"],
    justification: "testing", // details for using the API
  });
}

// content script로부터 메시지 수신
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type === "STATUS_CHANGE") {
    // 작업 상태에 따라 window 알림 처리
    if (!message.isRunning) {
      chrome.windows.get(sender.tab.windowId, { populate: true }, (window) => {
        if (!window.focused) {
          console.log("window.focused", window.focused);
          chrome.windows.update(sender.tab.windowId, { drawAttention: true });
        }
      });
    } else {
      chrome.windows.update(sender.tab.windowId, { drawAttention: false });
    }

    // 소리 재생
    if (message.action === "PLAY_SOUND") {
      try {
        if (message.isRunning) {
          playSound(startAudioUrl);
        } else {
          playSound(endAudioUrl);
        }
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    }
  }
});
