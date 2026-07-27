export const appUrl = 'https://trackevolution.app';
export const docsUrl = 'https://docs.trackevolution.app';
export const repoUrl = 'https://github.com/richie97/track-history';

export const name = 'Track Evolution';

export const headline = 'Your track days, remembered lap by lap.';

export const lede =
  'An HPDE and track-day logbook: events, sessions, lap times and notes per track, with progress charts that show you getting faster season over season. Free to use, open source, and your data stays yours.';

export const heroStats = [
  { value: 'Free', label: 'No plans, no paywall' },
  { value: 'In-browser', label: 'Telemetry never uploaded' },
  { value: 'Offline-first', label: 'Works in the paddock' },
  { value: 'iOS · Android · Web', label: 'Same logbook everywhere' },
] as const;

/**
 * Best lap per event for the hero chart. Times descend because a faster lap is
 * a lower number — the whole point of the chart is that improvement trends down.
 */
export const heroChart = {
  yLabels: ['2:24', '2:18', '2:12', '2:06', '2:00'],
  points: [
    [60, 52],
    [130, 74],
    [200, 64],
    [270, 105],
    [340, 96],
    [410, 138],
    [480, 131],
    [550, 168],
    [640, 186],
  ],
  bestLabel: '2:03.118',
} as const;

export const features = [
  {
    title: 'Progress charts',
    body: 'Best laps over time for every track and layout, plus lap-by-lap overlays to compare sessions. Lower is faster, so a season of work reads as a line trending down.',
    icon: 'chart',
  },
  {
    title: 'Telemetry import',
    body: 'Drop in Corvette PDR video, GoPro footage or Racelogic VBO files and get sessions with laps, racing lines and per-lap channel graphs. Parsing happens entirely in your browser — a multi-gigabyte video is read by byte range and never leaves your computer.',
    icon: 'import',
  },
  {
    title: 'Record laps with your phone',
    body: 'The iPhone and Android apps time laps straight from the phone’s GPS. Start recording, stow the phone, and pick the start/finish line on the track map when you’re back in the paddock — no camera or lap timer needed.',
    icon: 'stopwatch',
  },
  {
    title: 'Lap stats that mean something',
    body: 'Best time per event, consistency as coefficient of variation, best-N averages, pace trends and warmup analysis — all computed from your actual laps, not a summary you typed in.',
    icon: 'clock',
  },
  {
    title: 'Garage & setup notebook',
    body: 'Pads, tires and fluid tracked per car, with wear projected from your logged track time — so you hear “front pads: about two days left” before the weekend, not after. Setup sheets per event day, diffed against your lap times.',
    icon: 'wrench',
  },
  {
    title: 'Share links',
    body: 'Publish a read-only page of your stats and times under a slug you choose. Notes, email, per-lap details and your garage are stripped out — share the pace, keep the diary private.',
    icon: 'link',
  },
] as const;

export const sources = [
  {
    title: 'Corvette PDR (Cosworth)',
    body: 'Lap times recovered from beacon and odometer telemetry — reverse-engineered from the Marlin stream and validated against Cosworth Toolbox, including the crossings the recorder drops. The GPS trace, top speed, max RPM and max lateral G are decoded too, and beacon-less recordings still get lap times.',
  },
  {
    title: 'GoPro MP4',
    body: 'The GPS trace from the GPMF metadata track on Hero 5 and newer, timed against the start/finish line you pick on the track map.',
  },
  {
    title: 'Racelogic VBO',
    body: 'VBOX files plus RaceChrono, TrackAddict and Harry’s LapTimer exports — laps from the file’s own start line when it has one, otherwise from the GPS trace.',
  },
] as const;

export const lineNote =
  'GPS-only recordings carry no lap markers, so the import preview draws the track map you actually drove and asks you to click where the start/finish line is. Laps are timed on every pass across it, and one picked line applies to the whole batch of files.';

export const steps = [
  {
    title: 'Sign in',
    body: 'Google or Apple. You get your own empty logbook — nothing to configure.',
  },
  {
    title: 'Log an event',
    body: 'Pick the track and layout, add sessions and lap times — or just the day’s best time if that’s all you kept.',
  },
  {
    title: 'Import telemetry',
    body: 'Drop in PDR, GoPro or VBO files and full sessions appear, parsed in your browser.',
  },
  {
    title: 'Watch the trend',
    body: 'Best laps per track chart downward as you get quicker, and a share link publishes the pace without the diary.',
  },
] as const;

export const buildNote =
  'Built on Cloudflare Workers and D1, with a dependency-free vanilla-JS frontend and Capacitor shells for iOS and Android. Open source under Apache 2.0 — deploy your own instance, or point the mobile app at it.';
