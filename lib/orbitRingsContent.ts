export const repoUrl = 'https://github.com/Richie97/OrbitRings';

export const name = 'Orbit Rings';

export const headline = 'Keep the people who matter close.';

export const lede =
  'A personal relationship manager for iOS and Android. Orbit Rings organises the people in your life into concentric circles of friendship, then nudges you when you’ve gone too long without reaching out to someone in a given circle.';

export const status = {
  label: 'In development',
  body: 'Native iOS and Android apps are being built against a shared spec, with a Flutter prototype as the reference implementation. No store listing yet — watch the repository for the beta.',
} as const;

/**
 * Ring model v2 — names, capacities and cadences from the design system.
 * `key` maps to the ring accent hues; `radius` and `dot` are fractions of the
 * hero diagram's radius, matching the app's CircleDiagram geometry.
 */
export const rings = [
  {
    key: 'best',
    name: 'Best friends',
    capacity: 2,
    cadence: 'Every few days',
    blurb: 'The two people you talk to about everything.',
    radius: 0.34,
    dot: 16,
    seats: 2,
    initials: ['SM', 'JT'],
  },
  {
    key: 'close',
    name: 'Close friends',
    capacity: 8,
    cadence: 'Every couple of weeks',
    blurb: 'Your trusted circle — the group chat that never dies.',
    radius: 0.55,
    dot: 13,
    seats: 6,
    initials: ['AR', 'KP', 'DL', 'MO', 'BW', 'CN'],
  },
  {
    key: 'friends',
    name: 'Friends',
    capacity: 40,
    cadence: 'Every month or two',
    blurb: 'People you’re genuinely happy to run into.',
    radius: 0.75,
    dot: 10.5,
    seats: 9,
    initials: ['EH', 'RG', 'TY', 'LV', 'PA', 'NJ', 'FC', 'QS', 'ZB'],
  },
  {
    key: 'acq',
    name: 'Acquaintances',
    capacity: 100,
    cadence: 'A few times a year',
    blurb: 'The wider network you want to stay on the map with.',
    radius: 0.92,
    dot: 8.5,
    seats: 12,
    initials: ['WD', 'IK', 'OM', 'UF', 'XR', 'GT', 'HB', 'VN', 'YE', 'JP', 'AL', 'CS'],
  },
] as const;

/** Indices, per ring, of the people drawn as "needs a nudge" in the hero. */
export const coldSeats: Record<string, readonly number[]> = {
  close: [3],
  friends: [1, 6],
  acq: [4, 9],
};

export const dunbar =
  'Anthropologist Robin Dunbar found that human social networks settle into layers of roughly 5, 15, 50 and 150 people, each held together by a different frequency of contact. Orbit Rings makes that structure explicit — and enforces it. When a circle is full, someone has to move outward before someone else can move in. That constraint is the point: it forces honest prioritisation instead of a contact list that quietly grows until none of it means anything.';

export const warmth = [
  { key: 'warm', label: 'Warm', body: 'In touch. Well inside the circle’s cadence.' },
  { key: 'cool', label: 'Cool', body: 'Drifting a little — past halfway to overdue.' },
  { key: 'cold', label: 'Cold', body: 'Needs a nudge. Past the cadence for their circle.' },
] as const;

export const features = [
  {
    title: 'The circle map',
    body: 'The home screen is the rings themselves — a radial view where every person is an avatar on their circle, tinted by how warm the relationship is. Tap a ring to browse its people, most-overdue first.',
    icon: 'orbit',
  },
  {
    title: 'Nudges, not guilt',
    body: 'When someone passes their circle’s cadence they surface in the Nudges feed and as a notification: “It’s been three weeks since you talked to Sam. Say hi?” Humanised periods, never a day count with a scolding attached. Say hi, or push it out three days.',
    icon: 'bell',
  },
  {
    title: 'Your real address book',
    body: 'People come from the device contacts — the iOS Contacts framework and Android’s ContactsContract — not retyped by hand. Orbit Rings keeps a link to the source contact so names, photos and numbers stay in sync.',
    icon: 'contacts',
  },
  {
    title: 'Relationship health',
    body: 'A read-only tab that answers “how am I actually doing?” — people reached this month, how each circle is trending, and which relationships have been cold the longest.',
    icon: 'activity',
  },
  {
    title: 'One tap to log',
    body: 'Call, text, in person or other — logging an interaction is a single tap from the person card, or straight from the notification. iOS and Android both forbid reading your call and message history, so logging is deliberate by design, which also keeps the app compliant on both stores.',
    icon: 'check',
  },
  {
    title: 'Yours, everywhere',
    body: 'Firebase Auth and Firestore with offline persistence back both apps, so your circles follow you across devices and keep working with no signal. Sign in with Google, Apple, or email.',
    icon: 'cloud',
  },
] as const;

export const craft = [
  {
    title: 'Native on both platforms',
    body: 'SwiftUI on iOS 17+, Kotlin and Jetpack Compose on Android. The hardest parts — contacts integration and reliable background reminders — are platform-specific anyway, so a cross-platform layer would have cost more than it saved.',
  },
  {
    title: 'A design system, not a theme',
    body: 'One hue per circle at matched lightness and chroma, an airy daylight palette and a deep violet night mode, and a token set both apps render from. The rings glow rather than shout.',
  },
  {
    title: 'Domain logic under test',
    body: 'Capacity enforcement runs inside a Firestore transaction so two devices can’t both fill the last seat. Cadence maths, warmth thresholds and the notification planner are pure functions with unit tests on both platforms.',
  },
] as const;
