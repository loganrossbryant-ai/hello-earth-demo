# Far Horizon — Session 1 animation revision

Play: https://loganrossbryant-ai.github.io/hello-earth-demo/

Four continuously articulated crew members now walk with planted feet, level boots, staggered strides, arm counter-swing and planted turns. Followers maintain speed and camera look-ahead eases with movement. Each setting has independent animation: clouds and exterior activity, foreground leaves, suspended motes, launch telemetry, drifting stars and navigation displays. All Session 1 dialogue choices, writing and classroom story gates are preserved.

**NPC voice recordings are pending.** ElevenLabs is not connected to the build environment yet. The authored script and local playback controls are prepared; no other provider has been substituted and no recordings are claimed complete.

The full Session 1 route passed browser testing. The motion check verified 166 steady ground contacts with no measured contact sliding, four staggered rigs, steady followers, turns/both directions, and visible independent motion in every scene state. The exact standard release passed Chromium at 1280×720: startup, audio helpers, movement, writing, local save restoration and new-class reset, without browser errors or unexpected network requests.

The exact game files in scanned-manifest.json passed active Microsoft Defender on Windows Server 2022, run 41227037912, source 81d1368b976c3ba4b345cbc23680f791d1522eea. Script/archive scanning was enabled, signatures current, no exclusions, native exit code 0 and no detections. File hashes matched before and after scanning. See defender-scan.json. This is scan evidence, not an absolute malware-free guarantee. The earlier packed single HTML/ZIP remains withdrawn; its detection was never declared a false positive.

This is the ordinary non-threaded Godot 4.6.3 Web export with separate HTML, JavaScript, WebAssembly, game data and audio helpers. The engine/art/audio game files are the exact scanned bytes. README, report, manifest and the empty .nojekyll marker are release metadata. The manifest's candidate label describes the input before validation; the report records the completed scan.

Controls: A/D or arrows to walk; click the floor to move; E to interact; 1–4 to switch departments; L for the crew log; G for GM cues; Space to hold movement; Escape to close a panel. The GM controls the shared classroom screen. Progress stays in this browser; export the class record before resetting.
