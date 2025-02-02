# Claude Chat Notifier

A Chrome extension that plays notification sounds when Claude.ai starts or finishes its responses, and provides visual alerts when you're looking at other windows.

## When is it useful?

- No need to constantly check the tab to see if Claude has completed its response
- Never miss when Claude finishes responding, even while working on other tasks
- Feel free to work on other things while waiting for long responses

## Key Features

- Plays notification sounds when Claude starts/finishes responding
- Chrome window blinks when Claude finishes (if you're in another window)
- Works automatically in the background

## Installation

1. Download this extension
2. Go to `chrome://extensions` in your Chrome browser
3. Turn on "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the downloaded folder

## How to Use

1. Once installed, it starts working automatically
2. On Claude.ai:
   - You'll hear a start sound when Claude begins responding
   - You'll hear an end sound when Claude completes its response
   - If you're in another window, Chrome will blink to notify you when Claude finishes

## Changing Notification Sounds

Want to use different notification sounds?

1. Replace the `start.mp3` and `end.mp3` files in the `assets/sounds` folder with your preferred mp3 files
2. Make sure to keep the filenames as `start.mp3` and `end.mp3`

## Important Notes

- Only works on claude.ai website
- Only available for Chrome browser

## Troubleshooting

If you encounter any issues:

1. Go to `chrome://extensions` in Chrome
2. Find this extension and click "Details"
3. Click "Refresh" to restart the extension

If problems persist:

1. Remove the extension
2. Restart Chrome browser
3. Follow the installation steps again

## Notes for Mac Users

The window blinking feature works in the dock when you're using other applications.

## Notes for Windows Users

The window blinking feature works in the taskbar when you're using other applications.
