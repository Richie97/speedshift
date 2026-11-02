// Copy adapted from the App Store listing in github.com/Richie97/shepherdr (appstore/metadata).

export const appName = 'Shepherdr';

export const subtitle = 'Herd your AI coding agents';

export const intro =
  'Your coding agents keep working while you’re away. Shepherdr tells you the moment one needs you, so you can approve it, steer it or start a new one from your phone.';

export const repoUrl = 'https://github.com/Richie97/shepherdr';
export const setupUrl = 'https://github.com/Richie97/shepherdr/blob/main/docs/SETUP.md';
export const privacyUrl = 'https://github.com/Richie97/shepherdr/blob/main/docs/PRIVACY.md';
export const supportUrl = 'https://github.com/Richie97/shepherdr/issues';
export const herdrUrl = 'https://herdr.dev';

export const availability = 'iPhone · iOS 18+ · Coming soon to the App Store';

export const screenshots = [
  { src: '/apps/shepherdr/01-agents.jpg', alt: 'Agents list grouped by Needs you, Done, Working and Idle across machines' },
  { src: '/apps/shepherdr/02-notifications.jpg', alt: 'Lock screen notification with Approve and Deny actions' },
  { src: '/apps/shepherdr/03-blocked.jpg', alt: 'A blocked agent’s screen with quick keys for answering' },
  { src: '/apps/shepherdr/04-live-terminal.jpg', alt: 'A live, full-color terminal attached to an agent' },
  { src: '/apps/shepherdr/05-new-agent.jpg', alt: 'Starting a new agent: pick a machine, folder, agent and task' },
] as const;

export const features = [
  {
    title: 'Never miss a blocked agent',
    points: [
      'Get a notification the moment an agent asks for permission, finishes, or hits an error',
      'Approve or deny right from the notification, without opening the app',
      'Blocked agents jump to the top, so nothing sits waiting',
    ],
  },
  {
    title: 'Every agent, every machine',
    points: [
      'Agents from your laptop, desktop and servers in one list, grouped by what needs you',
      'See each agent’s status, workspace and folder at a glance',
      'Machines that go offline are flagged, with one tap to reconnect',
    ],
  },
  {
    title: 'Steer from anywhere',
    points: [
      'Read an agent’s screen and send it a prompt',
      'Quick keys for answering prompts: Esc, Enter, arrows, 1/2/3, y/n, Ctrl-C',
      'Stop an agent that’s heading the wrong way',
    ],
  },
  {
    title: 'A real terminal in your pocket',
    points: [
      'Attach to any agent’s live terminal, in full color, with a keyboard',
      'Works with full-screen agent interfaces',
      'Watch-only mode when you just want to look',
    ],
  },
  {
    title: 'Start agents on the go',
    points: [
      'Pick a machine, a workspace, a folder and an agent, then give it a first task',
      'New agents appear in Herdr on your desktop too',
    ],
  },
  {
    title: 'Private by design',
    points: [
      'Talks only to a small open-source bridge you run on one of your machines',
      'Reached over your Tailscale network; nothing is exposed to the internet',
      'No accounts, no analytics, no data collected',
    ],
  },
] as const;

export const requirements = [
  'Herdr running on your machines',
  'Tailscale on your computers and iPhone',
  'herdr-bridge running on one machine (free and open source; setup takes about 15 minutes)',
] as const;
