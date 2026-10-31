# Far Horizon — Session 1 reviewed browser draft

This is the standard Godot Web export. The HTML, JavaScript, WebAssembly, game data, and audio helpers are separate files. The earlier all-in-one HTML/ZIP remains withdrawn following a Defender alert; its detection has not been declared a false positive.

The exact game files in `scanned-manifest.json` passed Microsoft Defender on Windows Server 2022, with current signatures, active protection, script/archive scanning enabled, and no exclusions. File hashes matched before and after scanning. See `defender-scan.json` for the actual result. No scanner guarantees absence of all malware.

The standard release passed browser checks at 1280×720: startup, sound, movement, writing, save restoration, and new-class reset. No browser errors or unexpected network requests. The Session 1 story route was tested before this delivery change.

Controls: A/D or arrows to move; click the floor to walk; E to interact; 1–4 to switch departments; L for crew log; G for GM cues; Escape to close panels. The teacher controls the shared screen.

This branch is ready for GitHub Pages: source branch `gh-pages`, folder `/(root)`. The public repository does not require a paid Pages plan. Browser address after activation: https://loganrossbryant-ai.github.io/hello-earth-demo/

The scanned manifest was recorded before validation, so its candidate status describes the input. The scan report records the completed validation. Report/manifest/readme and the empty `.nojekyll` marker are release metadata; the game files are the exact scanned bytes.
