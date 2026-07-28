/**
 * Source text for the Privacy Policy and Terms of Service.
 *
 * Both documents cover the same three properties — the Speedshift site, Track
 * Evolution and Orbit Rings — so they live together and share one effective
 * date. Keep the product-specific sections in sync with what the apps actually
 * do; the data-practice claims here are load-bearing, not marketing copy.
 */

export type LegalBlock =
  | { kind: 'p'; text: string }
  | { kind: 'list'; items: readonly string[] }
  | { kind: 'defs'; items: readonly { term: string; body: string }[] };

export type LegalSection = {
  /** Anchor target, also used as the React key. */
  id: string;
  heading: string;
  blocks: readonly LegalBlock[];
};

export const entity = 'Speedshift LLC';
export const contactEmail = 'eric@speedshift.io';
export const governingState = 'North Carolina';
export const effectiveDate = 'July 28, 2026';

export const products = [
  {
    name: 'Speedshift',
    detail: 'speedshift.com and its subpages, including the portfolio and product pages.',
  },
  {
    name: 'Track Evolution',
    detail:
      'The track-day logbook at trackevolution.app, plus the iOS and Android apps that connect to it.',
  },
  {
    name: 'Orbit Rings',
    detail: 'The personal relationship manager for iOS and Android, currently in development.',
  },
] as const;

/* ------------------------------------------------------------------ privacy */

export const privacySections: readonly LegalSection[] = [
  {
    id: 'summary',
    heading: 'The short version',
    blocks: [
      {
        kind: 'p',
        text: 'We collect the least we can get away with, we do not sell it, and we do not run advertising. The specifics differ by product, so the sections below are split by product rather than blended into one vague list.',
      },
      {
        kind: 'list',
        items: [
          'The Speedshift website has no accounts and no login. It records privacy-preserving, aggregate visit statistics and nothing else.',
          'Track Evolution stores the logbook you build — events, sessions, lap times, notes, cars. Telemetry files you import are parsed inside your browser and the source video or data file is never uploaded to us.',
          'Orbit Rings stores the people you deliberately place into a circle and the interactions you log by hand. It never reads your call or message history, and it does not upload your whole address book.',
          'We never sell personal information, share it for cross-context behavioural advertising, or use your content to train machine-learning models.',
          'You can delete your account, and everything in it, at any time.',
        ],
      },
    ],
  },
  {
    id: 'scope',
    heading: 'Who we are and what this covers',
    blocks: [
      {
        kind: 'p',
        text: `${entity} is a North Carolina limited liability company. In this policy, "we", "us" and "our" mean ${entity}, and "you" means the person using one of our products.`,
      },
      {
        kind: 'p',
        text: 'This policy applies to the Speedshift website, Track Evolution and Orbit Rings — described together as the "Services". It does not apply to anything else we link out to, including GitHub, LinkedIn, the App Store, Google Play, or a self-hosted copy of our open-source code run by someone else.',
      },
      {
        kind: 'p',
        text: `We are the controller of the personal information described here. You can reach us about anything in this policy at ${contactEmail}.`,
      },
    ],
  },
  {
    id: 'website',
    heading: 'The Speedshift website',
    blocks: [
      {
        kind: 'p',
        text: 'speedshift.com is a set of static pages. There is no account, no login, no comment form and no tracking cookie.',
      },
      {
        kind: 'p',
        text: 'We use Vercel Analytics to count page views. It records the page visited, the referring site, and coarse device and country information derived from your request. It does not set cookies, does not use a persistent visitor identifier, and does not follow you across other websites. We see aggregate counts, not individual browsing histories.',
      },
      {
        kind: 'p',
        text: `Our hosting provider also keeps standard server logs — IP address, timestamp, requested URL, user agent — for a short period to operate the site and defend against abuse. If you email an address published on the site, we receive whatever you put in that email and keep the correspondence so we can reply.`,
      },
    ],
  },
  {
    id: 'track-evolution',
    heading: 'Track Evolution',
    blocks: [
      {
        kind: 'p',
        text: 'Track Evolution is a logbook, so nearly everything it holds is something you typed in or imported on purpose.',
      },
      {
        kind: 'defs',
        items: [
          {
            term: 'Account information',
            body: 'You sign in with Google or Apple. We receive your name, email address and a stable account identifier from that provider — never your password. If you use Sign in with Apple and choose to hide your email, we only ever see the private relay address Apple generates for us.',
          },
          {
            term: 'Your logbook',
            body: 'Events, tracks and layouts, sessions, lap and sector times, session and event notes, cars in your garage, consumables and wear, and setup sheets. Notes are free text, so whatever you choose to write there is stored as you wrote it.',
          },
          {
            term: 'Telemetry you import',
            body: 'Corvette PDR video, GoPro footage and Racelogic VBO files are parsed entirely in your browser, read by byte range. The source file stays on your computer and is never transmitted to us. What is saved to your logbook is the result of that parsing — lap times, GPS traces of the laps, and per-lap channel data such as speed, RPM and lateral G.',
          },
          {
            term: 'Location, on mobile',
            body: 'The iOS and Android apps use your phone’s GPS to time laps while you are recording a session. Location is collected only during an active recording, is used to produce lap times and the driven line, and is stored with that session. We do not track your location in the background or when you are not recording.',
          },
          {
            term: 'Operational data',
            body: 'Server logs and error reports generated when the app talks to our backend, used to keep the service running and to diagnose faults.',
          },
        ],
      },
      {
        kind: 'p',
        text: 'The hosted service runs on Cloudflare Workers and Cloudflare D1, in the United States. Your logbook is private to your account unless you publish a share link, described below.',
      },
    ],
  },
  {
    id: 'orbit-rings',
    heading: 'Orbit Rings',
    blocks: [
      {
        kind: 'p',
        text: 'Orbit Rings is about the people in your life, which makes it the most sensitive thing we build. It is designed so that the app only ever knows what you deliberately tell it.',
      },
      {
        kind: 'defs',
        items: [
          {
            term: 'Account information',
            body: 'You sign in with Google, Apple or an email address, through Firebase Authentication. We receive your email address and an account identifier. If you use an email and password, the password is handled by Firebase and is never visible to us.',
          },
          {
            term: 'The people in your circles',
            body: 'When you add someone to a circle, the app reads that person from your device contacts and stores what it needs to show them and keep them in sync — typically their name, photo, the contact identifier on your device, and the phone number or address you reach them at. Contacts you have not added to a circle are not uploaded. Your address book is not copied wholesale, mined, or used to suggest people to anyone else.',
          },
          {
            term: 'Contacts permission',
            body: 'The app asks for the system contacts permission before reading anything, and you can refuse or revoke it in your device settings. Refusing means you add people manually instead.',
          },
          {
            term: 'Interactions you log',
            body: 'The type of contact — call, text, in person, other — and when it happened. Every one of these is a deliberate tap by you. Both iOS and Android forbid apps from reading your call and message history, and Orbit Rings does not attempt to; nothing is inferred from your phone activity.',
          },
          {
            term: 'Notifications',
            body: 'A push token for your device, so nudges can reach you. You can turn notifications off in your device settings at any time.',
          },
        ],
      },
      {
        kind: 'p',
        text: 'Orbit Rings stores this in Firebase Authentication and Cloud Firestore, operated by Google, so your circles sync across your devices and keep working offline. The app also keeps a local copy on your device for offline use.',
      },
      {
        kind: 'p',
        text: 'A note about other people: the people in your circles have not agreed to this policy, and they are in the app because you put them there. Only add and store what you would be comfortable holding on their behalf, and remove them when they ask.',
      },
      {
        kind: 'p',
        text: 'Orbit Rings is in development and has no store listing yet. If its data practices change materially before release, this policy will be updated before the app ships.',
      },
    ],
  },
  {
    id: 'use',
    heading: 'How we use information',
    blocks: [
      {
        kind: 'p',
        text: 'We use the information described above to:',
      },
      {
        kind: 'list',
        items: [
          'Provide the Services — store your logbook or your circles, sync them across your devices, compute lap statistics, warmth and cadence, and render the charts and views you asked for.',
          'Send the notifications and reminders the product exists to send, and any service messages about your account.',
          'Keep the Services running and secure — diagnose faults, investigate abuse, prevent fraud, and maintain backups.',
          'Answer you when you write to us.',
          'Understand, in aggregate, which pages and features are used, so we know what to build next.',
          'Comply with the law, and enforce our Terms of Service.',
        ],
      },
      {
        kind: 'p',
        text: 'We do not use your content to train machine-learning models, and we do not profile you or make automated decisions that produce legal or similarly significant effects.',
      },
      {
        kind: 'p',
        text: 'If you are in the European Economic Area or the United Kingdom, our legal bases are: performance of a contract with you, for everything needed to run the Services; our legitimate interests in operating, securing and improving them; your consent, for device permissions such as contacts, location and notifications, which you may withdraw at any time in your device settings; and compliance with legal obligations where they apply.',
      },
    ],
  },
  {
    id: 'sharing',
    heading: 'Who we share information with',
    blocks: [
      {
        kind: 'p',
        text: 'We do not sell personal information, we do not share it for cross-context behavioural advertising, and we run no advertising in any of our products. We disclose information only in these situations:',
      },
      {
        kind: 'defs',
        items: [
          {
            term: 'Service providers',
            body: 'Companies that run infrastructure on our behalf, under contracts that limit them to that purpose: Cloudflare (hosting, storage and delivery for Track Evolution), Google Firebase (authentication, database and push notifications for Orbit Rings), Vercel (website hosting and aggregate analytics), and Google and Apple (sign-in, app distribution and push delivery).',
          },
          {
            term: 'At your direction',
            body: 'Anything you deliberately publish, such as a Track Evolution share link, or information you ask us to send somewhere.',
          },
          {
            term: 'Legal reasons',
            body: 'When we are required by law, or where disclosure is necessary to protect the rights, safety or property of ourselves, our users, or the public. We will tell you about a legal demand unless we are prohibited from doing so.',
          },
          {
            term: 'Business transfer',
            body: 'If the business or a product is sold or transferred, information may move with it. This policy continues to apply until you are notified of a replacement.',
          },
        ],
      },
    ],
  },
  {
    id: 'share-links',
    heading: 'Sharing you control',
    blocks: [
      {
        kind: 'p',
        text: 'Track Evolution lets you publish a read-only page of your stats and times under a slug you choose. This is off by default and only exists if you turn it on.',
      },
      {
        kind: 'p',
        text: 'A share link deliberately strips your notes, your email address, per-lap detail and your garage — it shows the pace, not the diary. Even so, a share link is a public web page: anyone with the URL can open it, and search engines or others may copy or cache what it shows. Treat it as public. You can revoke a share link at any time, which takes the page down, though we cannot force third parties to forget a copy they already made.',
      },
    ],
  },
  {
    id: 'retention',
    heading: 'Keeping and deleting your data',
    blocks: [
      {
        kind: 'p',
        text: 'We keep your account and its contents for as long as your account exists, because that content is the product — a logbook you cannot look back on is not worth much.',
      },
      {
        kind: 'p',
        text: `You can delete your account from within Track Evolution and Orbit Rings, or by writing to ${contactEmail}. Deleting your account removes your logbook or your circles, takes down any share links, and closes the account. Deletion completes in our live systems within 30 days and works its way out of encrypted backups within 90 days. We may keep a minimal record of the deletion itself, and anything we are legally required to retain.`,
      },
      {
        kind: 'p',
        text: 'You can also delete individual items — an event, a session, a person, an interaction — without deleting your account. Aggregate analytics and server logs, which are not tied to your identity, are kept on their own short schedules.',
      },
    ],
  },
  {
    id: 'security',
    heading: 'Security',
    blocks: [
      {
        kind: 'p',
        text: 'Traffic to our Services is encrypted in transit with TLS, and data is encrypted at rest by our infrastructure providers. Authentication is delegated to Google, Apple and Firebase, so we never hold your password. Access to production systems is limited to those who need it.',
      },
      {
        kind: 'p',
        text: 'No system is perfectly secure, and we cannot guarantee absolute security. Protect your sign-in account with your provider, since anyone with access to it has access to your data here. If we become aware of a breach affecting your personal information, we will notify you and any regulator as required by law.',
      },
    ],
  },
  {
    id: 'children',
    heading: 'Children',
    blocks: [
      {
        kind: 'p',
        text: `Our Services are not directed to children. You must be at least 13 to use them, or 16 if you are in a country where 16 is the minimum age for consent to processing. We do not knowingly collect personal information from children below that age. If you believe a child has provided us information, write to ${contactEmail} and we will delete it.`,
      },
    ],
  },
  {
    id: 'international',
    heading: 'Where your information is processed',
    blocks: [
      {
        kind: 'p',
        text: 'We operate from the United States, and our service providers process and store information in the United States and other countries where they run infrastructure. Privacy laws in those countries may differ from the ones where you live.',
      },
      {
        kind: 'p',
        text: 'Where personal information moves out of the European Economic Area or the United Kingdom, it is transferred under the European Commission’s Standard Contractual Clauses, and the UK Addendum where applicable, as incorporated into our providers’ terms.',
      },
    ],
  },
  {
    id: 'rights',
    heading: 'Your rights',
    blocks: [
      {
        kind: 'p',
        text: 'Whoever and wherever you are, you can ask us to show you what we hold, correct it, export it, or delete it. Most of it you can do yourself inside the app; for the rest, write to us.',
      },
      {
        kind: 'p',
        text: 'If you are in the European Economic Area, the United Kingdom or Switzerland, you have the rights to access, rectification, erasure, restriction of processing, data portability, and objection to processing based on legitimate interests, along with the right to withdraw consent at any time. You also have the right to complain to your local supervisory authority, though we would appreciate the chance to sort it out first.',
      },
      {
        kind: 'p',
        text: 'If you are in California, you have the rights to know, delete, correct and, where applicable, to opt out of sale or sharing and to limit the use of sensitive personal information. We do not sell or share personal information as those terms are defined by the CCPA, and we have not done so in the preceding twelve months. We will not discriminate against you for exercising any of these rights. Residents of other US states with comparable laws — including Colorado, Connecticut, Virginia, Texas and Oregon — have equivalent rights, and we honour them on the same terms.',
      },
      {
        kind: 'p',
        text: `To make a request, email ${contactEmail} from the address on your account, or tell us which account it concerns. We will respond within the time the applicable law allows — 45 days under US state laws and one month under the GDPR, each extendable where the law permits. An authorised agent may make a request on your behalf with written proof of authorisation.`,
      },
    ],
  },
  {
    id: 'self-hosted',
    heading: 'Open source and self-hosted instances',
    blocks: [
      {
        kind: 'p',
        text: 'Track Evolution is open source under the Apache 2.0 licence, and anyone may deploy their own instance or point the mobile app at it. This policy covers only the instances we run. If you use an instance operated by someone else, that operator is the one handling your data, and you should ask them for their policy — we have no access to and no responsibility for it.',
      },
    ],
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    blocks: [
      {
        kind: 'p',
        text: 'We will update this policy when our products change. The effective date at the top always reflects the current version. If a change materially reduces your privacy — new categories of data, a new purpose you would not expect — we will give you notice in the app or by email before it takes effect, and where the law requires consent, we will ask for it.',
      },
    ],
  },
  {
    id: 'contact',
    heading: 'Contact us',
    blocks: [
      {
        kind: 'p',
        text: `Questions, requests and complaints about privacy all go to the same place: ${contactEmail}. Please say which product you are writing about — it makes the answer faster.`,
      },
    ],
  },
];

/* -------------------------------------------------------------------- terms */

export const termsSections: readonly LegalSection[] = [
  {
    id: 'agreement',
    heading: 'The agreement',
    blocks: [
      {
        kind: 'p',
        text: `These Terms of Service are an agreement between you and ${entity}, a North Carolina limited liability company. They govern your use of the Speedshift website, Track Evolution and Orbit Rings, together the "Services".`,
      },
      {
        kind: 'p',
        text: 'By using the Services, or by creating an account, you agree to these terms. If you do not agree, do not use the Services. Our Privacy Policy is part of this agreement and describes how we handle your information.',
      },
    ],
  },
  {
    id: 'eligibility',
    heading: 'Who may use the Services',
    blocks: [
      {
        kind: 'p',
        text: 'You must be at least 13 years old, or 16 where that is the minimum age in your country, and you must have the legal capacity to enter into this agreement. If you are using the Services on behalf of an organisation, you confirm you are authorised to bind it, and "you" means that organisation.',
      },
    ],
  },
  {
    id: 'accounts',
    heading: 'Your account',
    blocks: [
      {
        kind: 'p',
        text: 'Track Evolution and Orbit Rings require an account, created through Google, Apple, or an email address. Give accurate information, keep your sign-in credentials with that provider secure, and tell us promptly if you believe someone else has access to your account.',
      },
      {
        kind: 'p',
        text: 'You are responsible for activity under your account. You may close it at any time from within the app or by writing to us.',
      },
    ],
  },
  {
    id: 'your-content',
    heading: 'Your content stays yours',
    blocks: [
      {
        kind: 'p',
        text: 'Everything you put into the Services — lap times, notes, telemetry, setup sheets, the people in your circles — remains yours. We claim no ownership of it.',
      },
      {
        kind: 'p',
        text: 'You grant us only the licence we need to run the Services for you: to host, store, back up, process and display your content, and to transmit it to your other devices. Where you publish content yourself, such as a Track Evolution share link, that licence extends to displaying it publicly for as long as you keep the link active. The licence ends when you delete the content or your account, apart from copies in routine backups pending deletion.',
      },
      {
        kind: 'p',
        text: 'You are responsible for your content: for having the right to store it, and for it not being unlawful or infringing. This includes information about other people, such as the contacts you add to a circle in Orbit Rings — only store what you have a legitimate reason to hold, and remove it when asked.',
      },
    ],
  },
  {
    id: 'acceptable-use',
    heading: 'Acceptable use',
    blocks: [
      {
        kind: 'p',
        text: 'Use the Services for their intended purpose. Do not:',
      },
      {
        kind: 'list',
        items: [
          'Break the law, infringe anyone’s rights, or store content you have no right to store.',
          'Attempt to access another user’s account or data, or probe, scan or test the security of our systems without our written permission.',
          'Disrupt the Services — denial-of-service attacks, automated traffic at volumes that degrade the service for others, or attempts to circumvent rate limits.',
          'Scrape or bulk-harvest content, including published share pages, other than through interfaces we provide for that purpose.',
          'Upload malware, or use the Services to distribute spam or harass anyone.',
          'Resell or commercially redistribute access to our hosted Services. Running your own instance of the open-source code is a different thing, and is expressly allowed under its licence.',
        ],
      },
      {
        kind: 'p',
        text: 'Security research conducted in good faith is welcome — tell us first, and report what you find to us before anywhere else.',
      },
    ],
  },
  {
    id: 'track-safety',
    heading: 'Track Evolution: safety and accuracy',
    blocks: [
      {
        kind: 'p',
        text: 'Read this section if you use Track Evolution. Driving on a racetrack is inherently dangerous and can result in serious injury or death. You are solely responsible for your own safety, for your vehicle, and for following the rules and instructions of your event organiser, instructors and track officials.',
      },
      {
        kind: 'list',
        items: [
          'Track Evolution is a logbook and analysis tool. It is not a safety device, a driver-training programme, a substitute for instruction, or a timing system of record.',
          'Do not interact with your phone while driving. Start a recording before you go out, stow the device securely, and do everything else in the paddock. Mount any device so it cannot come loose.',
          'Lap times, GPS traces, speeds and derived statistics are estimates produced from consumer hardware and imported files. They may be inaccurate or incomplete, and must not be relied on for competition results, official timing, technical inspection, or any safety-critical decision.',
          'Nothing in the app is an instruction, a recommendation, or encouragement to drive faster, to exceed your abilities, or to break any law. Do not use it on public roads to time or record driving.',
          'Wear projections for pads, tyres and fluids are estimates based on the time you have logged. Inspect your car. A projection is not a substitute for a maintenance check by someone qualified.',
        ],
      },
      {
        kind: 'p',
        text: 'To the fullest extent the law allows, you assume all risk arising from your track activity and release us from any claim relating to it.',
      },
    ],
  },
  {
    id: 'orbit-terms',
    heading: 'Orbit Rings: reminders and other people',
    blocks: [
      {
        kind: 'p',
        text: 'Orbit Rings sends nudges when a relationship passes its circle’s cadence. Notification delivery depends on your device, your operating system’s power management, and your network, none of which we control. Reminders are best-effort — do not rely on them for anything time-critical.',
      },
      {
        kind: 'p',
        text: 'The app holds information about people who are not our users and have not agreed to these terms. You are responsible for what you store about them and for handling their requests about it. If someone asks to be removed, remove them.',
      },
      {
        kind: 'p',
        text: 'Orbit Rings is in active development. Pre-release builds may change, break, lose data or be discontinued without notice, and are provided for evaluation. Keep your own copy of anything you cannot afford to lose.',
      },
    ],
  },
  {
    id: 'open-source',
    heading: 'Open source and self-hosting',
    blocks: [
      {
        kind: 'p',
        text: 'Track Evolution’s source is published under the Apache License 2.0. That licence governs your use of the code, including running your own instance — these terms do not restrict rights the licence grants you, and where the two conflict about the code, the licence wins.',
      },
      {
        kind: 'p',
        text: 'These terms govern the instances we host. If you deploy your own, you are its operator: you are responsible for it and for its users, you may not present it as an official Speedshift service, and you may not use our names, logos or marks in a way that suggests we run or endorse it.',
      },
    ],
  },
  {
    id: 'fees',
    heading: 'Free today',
    blocks: [
      {
        kind: 'p',
        text: 'The Services are currently free, with no plans and no paywall. If we ever introduce paid features, we will say so clearly in advance, and anything you already have will not be taken away and sold back to you without notice and a chance to export your data.',
      },
    ],
  },
  {
    id: 'third-party',
    heading: 'Third-party services',
    blocks: [
      {
        kind: 'p',
        text: 'The Services depend on third parties — Google, Apple, Cloudflare and Vercel among them — and link to third-party sites. Their terms and privacy policies govern their part, we do not control them, and we are not responsible for their content or availability.',
      },
    ],
  },
  {
    id: 'app-stores',
    heading: 'Apps from the App Store and Google Play',
    blocks: [
      {
        kind: 'p',
        text: 'If you install one of our apps from a mobile app store, the store’s own terms also apply, and the following applies to Apple:',
      },
      {
        kind: 'list',
        items: [
          'This agreement is between you and us alone, not with Apple, and we — not Apple — are solely responsible for the app and its content.',
          'Your licence to use the app on Apple-branded products is the one described in Apple’s standard Licensed Application End User Licence Agreement, as varied by these terms.',
          'Apple has no obligation to provide maintenance or support for the app.',
          'If the app fails to conform to any applicable warranty, you may notify Apple and Apple will refund the purchase price, if any. To the maximum extent permitted by law, Apple has no other warranty obligation with respect to the app.',
          'We, not Apple, are responsible for addressing any claim by you or a third party relating to the app, including product liability claims, claims that the app fails to conform to a legal requirement, and claims under consumer protection or similar law.',
          'We, not Apple, are responsible for investigating and defending any third-party claim that the app infringes intellectual property rights.',
          'You confirm you are not located in a country subject to a US Government embargo or designated as a "terrorist supporting" country, and that you are not on any US Government list of prohibited or restricted parties.',
          'Apple and its subsidiaries are third-party beneficiaries of these terms and may enforce them against you.',
        ],
      },
    ],
  },
  {
    id: 'availability',
    heading: 'Availability, changes and termination',
    blocks: [
      {
        kind: 'p',
        text: 'We may change, suspend or discontinue any part of the Services. If we discontinue a product entirely, we will give reasonable advance notice and a way to export your data, unless circumstances outside our control make that impossible.',
      },
      {
        kind: 'p',
        text: 'You may stop using the Services and delete your account at any time. We may suspend or terminate your access if you materially breach these terms, if your use puts the Services or other users at risk, or if we are required to by law — with notice where practical, and immediately where it is not. Sections that by their nature should survive termination do.',
      },
    ],
  },
  {
    id: 'disclaimer',
    heading: 'Disclaimer of warranties',
    blocks: [
      {
        kind: 'p',
        text: 'The Services are provided "as is" and "as available", without warranty of any kind. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, title, non-infringement, and any warranty arising from course of dealing or usage of trade.',
      },
      {
        kind: 'p',
        text: 'We do not warrant that the Services will be uninterrupted, secure or error-free, that defects will be corrected, or that any data, timing, statistic or projection they produce is accurate or complete. Some jurisdictions do not allow the exclusion of implied warranties, so parts of this section may not apply to you.',
      },
    ],
  },
  {
    id: 'liability',
    heading: 'Limitation of liability',
    blocks: [
      {
        kind: 'p',
        text: 'To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, exemplary or punitive damages, or for lost profits, lost data, loss of goodwill, personal injury, or property damage, arising out of or relating to the Services — whether the claim is in contract, tort, or any other theory, and even if we were advised such damages were possible.',
      },
      {
        kind: 'p',
        text: 'Our total liability for all claims relating to the Services is limited to the greater of the amount you paid us in the twelve months before the claim, or fifty US dollars. Nothing here limits liability that cannot be limited by law, including for fraud, or for death or personal injury caused by our negligence. Some jurisdictions do not allow certain limitations, so parts of this section may not apply to you.',
      },
    ],
  },
  {
    id: 'indemnity',
    heading: 'Indemnification',
    blocks: [
      {
        kind: 'p',
        text: 'You agree to indemnify and hold harmless Speedshift LLC and its members, officers and contractors from any claim, loss, liability or expense, including reasonable legal fees, arising from your content, your use of the Services, your breach of these terms, or your violation of any law or third-party right. We will notify you of any such claim and may participate in its defence with counsel of our choosing.',
      },
    ],
  },
  {
    id: 'disputes',
    heading: 'Governing law and disputes',
    blocks: [
      {
        kind: 'p',
        text: `These terms are governed by the laws of the State of ${governingState}, without regard to its conflict-of-laws rules. The United Nations Convention on Contracts for the International Sale of Goods does not apply.`,
      },
      {
        kind: 'p',
        text: `You and we agree to try to resolve any dispute informally first: write to ${contactEmail} describing the problem and what you want, and give us 30 days to respond. If that fails, the state and federal courts located in ${governingState} have exclusive jurisdiction, and both of us consent to venue there — except that either of us may seek injunctive relief in any court of competent jurisdiction to protect intellectual property or confidential information.`,
      },
      {
        kind: 'p',
        text: 'If you are a consumer resident in the European Economic Area or the United Kingdom, nothing here deprives you of the protection of mandatory consumer law in your country of residence, or of the right to bring proceedings in your local courts.',
      },
    ],
  },
  {
    id: 'general',
    heading: 'General',
    blocks: [
      {
        kind: 'p',
        text: 'These terms, together with the Privacy Policy, are the entire agreement between us about the Services. If a provision is held unenforceable, the rest stays in force and that provision is limited to the minimum extent necessary. Our failure to enforce a right is not a waiver of it. You may not assign this agreement without our consent; we may assign it in connection with a merger, acquisition or sale of assets.',
      },
      {
        kind: 'p',
        text: 'We may update these terms. The effective date at the top reflects the current version, and material changes will be announced in the app or by email before they take effect. Continuing to use the Services after that means you accept the updated terms; if you do not, stop using them and delete your account.',
      },
    ],
  },
  {
    id: 'terms-contact',
    heading: 'Contact us',
    blocks: [
      {
        kind: 'p',
        text: `Questions about these terms, and any legal notice, go to ${contactEmail}.`,
      },
    ],
  },
];
