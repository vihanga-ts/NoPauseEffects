# Vidsrc Grayscale Blocker 🎥✨

 I'm the kinda guy who *loves* hitting pause to catch every detail in a frame, but those pesky grayscale and zoom effects on VidSrc (cloudnestra.com) were driving me up the wall! So, I whipped up this nifty script to zap those annoying effects away. If you’re like me and hate seeing your videos go grayscale or scale up when paused, this script’s for you! Feel free to use it and enjoy a smoother viewing vibe. 😎

## Features 🌟
- **Grayscale Blocking**: Kicks grayscale filters to the curb when you pause videos. 
- **Transform Scaling Blocking**: Stops videos from zooming or shrinking awkwardly. 
- **Toggleable Settings**: Flip grayscale or transform blocking on/off via Tampermonkey’s menu. 
- **Real-Time Magic**: Uses MutationObserver to catch and fix style changes instantly. 
- **Light and Snappy**: Runs at document-start for quick action with zero fuss.

## Installation 🛠️
1. Grab the [Tampermonkey](https://www.tampermonkey.net/) extension for your browser (Chrome, Firefox, etc.). 
2. Click the Tampermonkey icon and select "Create a new script."
3. Copy-paste the `grayscale_blocker.js` code into the editor.
4. Hit save (Ctrl+S or File > Save in Tampermonkey).
5. Head to [cloudnestra.com](https://cloudnestra.com) or any stream site that uses Vidsrc(cloudnestra) and enjoy effect-free videos! 

## Usage 🎮
- **Toggle Grayscale Blocking**: Use the Tampermonkey menu to turn grayscale removal on/off (default: ON). 
- **Toggle Transform Blocking**: Enable/disable scaling prevention via the menu (default: ON). 
- Changes kick in after a quick and automatic iFrame or page reload. 

## Compatibility 🤝
- Works like a charm on `VidSrc` / `cloudnestra.com`.
- Tested with Tampermonkey on modern browsers (Chrome, Firefox, Edge).
- Requires `@grant` permissions for `GM_getValue`, `GM_setValue`, and `GM_registerMenuCommand`.

## Notes 📝
- The script uses CSS overrides and MutationObserver to keep videos looking crisp.
- Settings stick around across sessions thanks to Tampermonkey’s storage API.
- Got ideas or issues? Drop them in the [Issues](issues) tab! 

## License 📜
MIT License. Check out [LICENSE](LICENSE) for the details.

## Contributing 🤗
Love to have you onboard! Submit a pull request or open an issue for bugs or cool ideas. Let’s make this script even better! 💪

Tags 🏷️
#VidSrc #cloudnestra #fmovies #f-movies # f-movies #f-moviesz #rivestream #VidSrc.com #VidSrcMe
