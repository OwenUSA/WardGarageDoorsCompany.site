// content/copy.ts — every user-visible string that is not structural, in one typed
// module. lib/business.ts DERIVES its facts from `nap` below rather than retyping
// them, so a phone number or an hours line exists in exactly one place.
//
// These are REAL business details. Nothing here is a placeholder, a 555-01XX
// number or an invented credential. Two things that look like typos are correct
// and deliberate: the email is rob@ (not contact@), and the domain carries
// "company" while the business name does not.

export const nap = {
  business: 'Ward Garage Door Repair Service',
  tagline:
    'Garage door repair and installation for Gulf Breeze and Santa Rosa County, built for salt air.',
  phone: '(850) 990-9379',
  phoneHref: 'tel:+18509909379',
  email: 'rob@wardgaragedoorscompany.site',
  emailHref: 'mailto:rob@wardgaragedoorscompany.site',
  address: '872 Gulf Breeze Pkwy, Gulf Breeze, FL 32561',
  hours: 'Monday to Sunday, 7:00 AM to 8:30 PM',
  hoursShort: 'Seven days, 7:00 AM to 8:30 PM',
  serviceArea:
    'Gulf Breeze, Navarre, Pensacola Beach, Midway and Tiger Point — Santa Rosa County, Florida',
  serviceAreaList: [
    'Gulf Breeze',
    'Navarre',
    'Pensacola Beach',
    'Midway',
    'Tiger Point',
  ],
} as const;

export type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export const meta: Record<
  'home' | 'about' | 'services' | 'contact' | 'privacy',
  PageMeta
> = {
  home: {
    title: 'Ward Garage Door Repair Service | Gulf Breeze, FL',
    description:
      'Garage door repair, spring replacement and opener service in Gulf Breeze, Navarre and Pensacola Beach. Open 7:00 AM to 8:30 PM, seven days. Call (850) 990-9379.',
    path: '/',
  },
  about: {
    title: 'About Ward Garage Door Repair Service | Gulf Breeze, FL',
    description:
      'Who we are and how we work: a Gulf Breeze garage door shop that plans every repair around salt air, humidity and hurricane season on the Santa Rosa peninsula.',
    path: '/about',
  },
  services: {
    title: 'Garage Door Services in Gulf Breeze, FL | Ward Garage Door Repair Service',
    description:
      'Springs, openers, cables and drums, off-track doors, panel replacement and corrosion-focused tune-ups across Gulf Breeze, Navarre and Pensacola Beach.',
    path: '/services',
  },
  contact: {
    title: 'Contact Ward Garage Door Repair Service | Gulf Breeze, FL',
    description:
      'Reach Ward Garage Door Repair Service at (850) 990-9379 or rob@wardgaragedoorscompany.site. 872 Gulf Breeze Pkwy, Gulf Breeze, FL 32561. Open daily 7:00 AM to 8:30 PM.',
    path: '/contact',
  },
  privacy: {
    title: 'Privacy Policy | Ward Garage Door Repair Service',
    description:
      'How Ward Garage Door Repair Service handles the information you share when you call, email or use the contact form on wardgaragedoorscompany.site.',
    path: '/privacy',
  },
};

/** Photographs. Dimensions come straight from public/images/manifest.json. */
export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Every entry below was chosen after looking at the photograph. Two files in the
// set (wide-03 and wide-04) show snow and a northern winter street, and one
// (wide-05) is a sideways-rotated opener shot; none of the three appears on this
// site. Dimensions are taken from public/images/manifest.json.
export const photos = {
  /** Hero. Wide, bright, architectural — three flush doors and open sky. */
  heroDoors: {
    src: '/images/wide-02.webp',
    alt: 'Three matte-black flush-panel garage doors with vertical rows of frosted glass lites, set into a cream clapboard house under a clear blue sky, with a paver-and-turf driveway running up to them.',
    width: 1024,
    height: 768,
  },
  /** Home photo band. High-key interior that suits the seafoam palette. */
  brightInterior: {
    src: '/images/wide-01.webp',
    alt: 'A bright garage interior with a closed sectional door carrying four frosted daylight lites, the opener head lit above it and an arched window on the side wall.',
    width: 1024,
    height: 768,
  },
  /** About photo band. Everything that fails is over your head. */
  raisedDoorUnderside: {
    src: '/images/wide-09.webp',
    alt: 'The underside of a garage door raised into its horizontal tracks, hinges and roller brackets running across the panels, with a neighbouring house and parked cars visible through the open bay.',
    width: 1024,
    height: 768,
  },
  /** Services photo band. The hinge line between two sections. */
  sectionJoint: {
    src: '/images/wide-06.webp',
    alt: 'Looking up from inside at a partly raised garage door, sunlight coming through the glazed section and catching the hinges and roller stems along the joint between panels.',
    width: 1024,
    height: 768,
  },
  /** Contact photo band, short. Header, tracks and the red release cord. */
  headerRelease: {
    src: '/images/wide-08.webp',
    alt: 'The header and horizontal tracks above an open garage door, with the red emergency release handle hanging from the trolley on its cord.',
    width: 1024,
    height: 768,
  },
  /** Why Ward, portrait. Drum, shaft and the curve where cables ride. */
  drumCorner: {
    src: '/images/tall-05.webp',
    alt: 'A lift cable running down from a grooved drum and end bearing at the top corner of a garage door, alongside the curved section of track where the rollers turn.',
    width: 576,
    height: 1024,
  },
  /** About, portrait. A warm-toned door with a black diamond overlay. */
  diamondDoor: {
    src: '/images/tall-02.webp',
    alt: 'A cream flush-panel garage door with a black diamond overlay and a centre handle, set into a stucco wall with a wheelie bin standing at the left edge of the opening.',
    width: 750,
    height: 1000,
  },
  /** Services intro card. Traditional panelled door in strong sun. */
  carriageDoor: {
    src: '/images/square-03.webp',
    alt: 'A white carriage-style garage door with square recessed panels, decorative strap hinges and a spear handle, photographed close up with sunlight flaring across the top corner.',
    width: 900,
    height: 900,
  },
  // Home gallery
  windowDoorClean: {
    src: '/images/tall-03.webp',
    alt: 'A white raised-panel garage door with an eight-lite window row across its middle section, set under an arched white trim head on a clapboard garage.',
    width: 750,
    height: 1000,
  },
  blackDoorSunny: {
    src: '/images/tall-12.webp',
    alt: 'A dark bronze raised-panel garage door under its own shingled roof overhang on a cream-sided house, with a paver-and-turf apron in front of it.',
    width: 900,
    height: 1200,
  },
  craftsmanInterior: {
    src: '/images/tall-09.webp',
    alt: 'A garage interior with a red and white opener bolted to the ceiling, its rail running down to a closed panelled door with a single small window.',
    width: 768,
    height: 1024,
  },
  fourLiteDoor: {
    src: '/images/tall-15.webp',
    alt: 'A white raised-panel garage door photographed square on, with four rectangular window lites across the upper section and a carriage lamp above the head.',
    width: 768,
    height: 1024,
  },
  // About gallery
  springOnBrick: {
    src: '/images/tall-01.webp',
    alt: 'An extension spring and its cable strung along an angle-iron track above a garage opening, bolted through a brick wall beside the timber jamb.',
    width: 750,
    height: 1000,
  },
  torsionTight: {
    src: '/images/tall-04.webp',
    alt: 'A torsion spring running along its shaft in the tight gap between the top of a garage door and the timber framing above it, the surfaces dusty and unpainted.',
    width: 750,
    height: 1000,
  },
  doubleDoorFirewood: {
    src: '/images/tall-08.webp',
    alt: 'A wide white raised-panel garage door on a clapboard house with a floodlight above it, seen across a cracked asphalt driveway with split firewood stacked to one side.',
    width: 768,
    height: 1024,
  },
  chamberlainWindow: {
    src: '/images/tall-07.webp',
    alt: 'A chain-drive opener mounted low under a garage ceiling, its light on, with a side window looking out to a green yard behind it.',
    width: 768,
    height: 1024,
  },
} satisfies Record<string, Photo>;

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  symptoms: string[];
  work: string;
  photo: Photo;
};

export const services: Service[] = [
  {
    slug: 'spring-replacement',
    title: 'Torsion and extension spring replacement',
    blurb:
      'The spring carries the weight of the door, not the opener. On the peninsula the coils are what salt reaches first, so springs here rarely reach the cycle count printed on the box.',
    symptoms: [
      'A bang like a gunshot in the garage, then a door that will not lift',
      'A visible gap in the coil, or two clean ends where one spring used to be',
      'The opener strains, lifts a foot and reverses',
      'The door feels enormously heavy on the emergency release',
    ],
    work:
      'We measure wire size, inside diameter and wound length off the failed spring rather than guessing from door size, wind the replacement to the balance the door actually needs, then re-check that the door holds still at knee height and at shoulder height with the opener disconnected. On doors within a mile or two of the sound we fit galvanised or coated springs, because a bare oil-tempered coil in that air is a repeat visit.',
    photo: {
      src: '/images/tall-16.webp',
      alt: 'An extension spring hooked to a pulley at the ceiling above a garage door, its lift cable running down over the sheave to a second pulley further along the track.',
      width: 768,
      height: 1024,
    },
  },
  {
    slug: 'opener-repair-install',
    title: 'Opener repair and installation',
    blurb:
      'Openers on the coast fail less from wear than from moisture: corroded terminals, swollen logic boards and photo eyes that lose alignment every time the humidity swings.',
    symptoms: [
      'The remote works from inside but not from the driveway',
      'The door starts down, then reverses with no obstruction',
      'The wall button works and nothing else does',
      'A steady click with no motor sound, or a motor that runs while the door stays put',
    ],
    work:
      'We test the logic board, the capacitor, the travel and force settings and the safety reversal before we ever quote a replacement, because a corroded photo-eye splice is a ten-minute repair mistaken for a dead opener several times a season. When a unit genuinely is finished we fit a belt-drive or wall-mount opener, re-terminate the sensor wiring in sealed connectors, and set the down-force so the door reverses on a rolled towel.',
    photo: {
      src: '/images/wide-10.webp',
      alt: 'A chain-drive opener bolted up into the exposed rafters of a garage, its rail angling down to the door and mains and sensor wiring looped along the timbers beside it.',
      width: 1024,
      height: 768,
    },
  },
  {
    slug: 'cables-and-drums',
    title: 'Cable and drum repair',
    blurb:
      'Lift cables are seven strands of thin galvanised wire under constant tension, mounted at the two corners of the door where wind-driven rain lands and stays.',
    symptoms: [
      'One side of the door lifts higher than the other',
      'A cable hanging loose, or coiled off its drum in a nest',
      'Fraying or a rust-brown fuzz where the cable meets the bottom bracket',
      'A grinding or slapping sound at the top of travel',
    ],
    work:
      'We replace both cables as a pair, never one, and inspect the drums for the grooves a frayed cable cuts as it rides. Drums and bearings that have started to seize get replaced at the same visit, the shaft is re-levelled, and the drums are set so both cables reach full tension at the same point of travel.',
    photo: {
      src: '/images/tall-13.webp',
      alt: 'A grubby cable drum and end bearing plate at the top corner of a garage door, the lift cable rising off the drum with the curved track and roller carriage beside it.',
      width: 768,
      height: 1024,
    },
  },
  {
    slug: 'off-track-realignment',
    title: 'Off-track door realignment',
    blurb:
      'A door that jumps its track is usually telling you about something else: a bent track, a seized roller, a loose jamb bracket or a bumper from last week.',
    symptoms: [
      'The door is wedged at an angle and will not move in either direction',
      'A roller sitting outside the track, or a track flared open at the curve',
      'The door binds and squeals in the same spot every cycle',
      'Daylight down one side of a closed door',
    ],
    work:
      'We take the tension off before anything else, re-seat the rollers, straighten or replace the affected track section, re-set the jamb brackets to a plumb line and check the door for square through its whole travel. If the cause was a seized nylon roller or a hinge worn oval, that part gets replaced rather than persuaded back into place.',
    photo: {
      src: '/images/tall-10.webp',
      alt: 'A garage door part way up its curved track, the lower sections still vertical and the upper ones turning into the horizontal run, seen from inside a garage looking out to the driveway.',
      width: 768,
      height: 1024,
    },
  },
  {
    slug: 'panel-replacement',
    title: 'Panel and section replacement',
    blurb:
      'Gulf humidity gets into a steel section through the cut edges and the fastener holes, and a wood-composite section swells from the bottom up until it no longer seals.',
    symptoms: [
      'A bottom section that has bowed, split or gone soft at the ends',
      'Rust blooming along the bottom edge or around the strut fasteners',
      'A creased panel after a reversing door caught a bumper or a bin',
      'A door that no longer seals flat to the floor across its full width',
    ],
    work:
      'We match the section by manufacturer, panel profile, gauge and rail height, then replace hinges and end brackets on the sections either side while the door is apart. Where only one section has failed on an otherwise sound door, replacing it is a fraction of a full door; where three have, we will tell you plainly that a new door is the cheaper answer.',
    photo: {
      src: '/images/tall-11.webp',
      alt: 'A white raised-panel garage door in a wooden opening whose jamb and trim have blistered and split at the base, the paint peeling away above a stained concrete apron.',
      width: 768,
      height: 1024,
    },
  },
  {
    slug: 'corrosion-tune-up',
    title: 'Corrosion-focused maintenance tune-up',
    blurb:
      'The single most useful thing you can do for a garage door within sight of the Sound. Salt aerosol settles on every moving part and stays there until something removes it.',
    symptoms: [
      'A door that has grown noticeably louder over a season',
      'Orange dust on the floor under the track',
      'Hinges that squeal and rollers that chatter at the curve',
      'Nothing at all — this is the visit that prevents the others',
    ],
    work:
      'We wash the salt film off the tracks and hardware rather than lubricating over it, then treat springs, bearings, hinges and rollers with a lithium-based lubricant that does not wash out in a downpour. We re-torque the bottom brackets, balance the door, test the safety reversal and the photo eyes, check the bottom seal against the slab, and tell you which parts have a season left in them and which have three.',
    photo: {
      src: '/images/tall-06.webp',
      alt: 'A photo-eye safety sensor showing a green indicator light on its bracket at the foot of a garage door track, with dead leaves and grit collected around the rail.',
      width: 750,
      height: 1000,
    },
  },
];

export const faqs: { q: string; a: string }[] = [
  {
    q: 'Why do garage door springs fail faster in Gulf Breeze than inland?',
    a: 'Two reasons, and they compound. Salt aerosol carries several miles inland from the Sound and from Pensacola Beach, and it settles on the coils and stays there — a spring is a coil of bare steel under continuous stress, which is close to the worst possible surface for chloride corrosion. Then humidity keeps that salt film damp almost year round, so the corrosion never pauses the way it would in a dry climate. Pitting reduces the effective wire diameter, and a spring rated for ten thousand cycles reaches its real failure point well short of that. It is why we quote galvanised or coated springs on peninsula addresses as a default rather than an upgrade.',
  },
  {
    q: 'My door has started opening unevenly. Is that urgent?',
    a: 'Treat it as urgent. A door that lifts higher on one side is almost always a cable problem — one cable stretched, frayed, or slipping on its drum — and the load it was carrying has transferred to the other side and to the door structure. Doors in that state jump the track, and a door that jumps the track under tension can fall. Stop using the opener, leave the door in whatever position it is in rather than forcing it, and call us.',
  },
  {
    q: 'What should I do with my garage door before a named storm?',
    a: 'Close it and leave it closed, and do not brace it with anything that stops it moving in its tracks — a door braced badly transfers wind load into the jambs and the header instead of the door. Before the season starts, the useful checks are that the bottom seal is intact along its whole width, that the track brackets are tight in the jamb rather than in soft or rotten wood, and that the hinges and end brackets are not rusted thin. If your door is rated for wind load, the struts and the bracket pattern that rating depends on need to be present and undamaged; we will check that on a tune-up and tell you what we find.',
  },
  {
    q: 'The opener light works but the door will not close. What is wrong?',
    a: 'Nine times out of ten it is the photo eyes at floor level. Look for a steady light on both sensors — one flashing or dark means they are misaligned or one has lost its connection. Around here the usual cause is a corroded splice in the sensor wire, often up at the staple where water tracked down, or a bracket that has rusted loose so the eye sags out of line. Wiping the lenses and nudging the brackets back into alignment fixes it often enough to be worth trying before you call.',
  },
  {
    q: 'Can you replace just one damaged section instead of the whole door?',
    a: 'Usually, yes, if the door is a common profile and the manufacturer still produces the section. We match by manufacturer, panel profile, steel gauge and rail height so the replacement lines up with what is already there. Two limits are worth knowing about up front: on a door old enough that the section is discontinued, a close visual match still will not match the faded finish of the rest; and once three or more sections have gone, the cost of parts and labour passes the cost of a new door, at which point we will say so.',
  },
  {
    q: 'How often should a coastal garage door be serviced?',
    a: 'Once a year for a door in Midway or Tiger Point, and twice a year for anything on Pensacola Beach or on the water in Gulf Breeze. The difference is entirely about salt load. The point of the visit is removing the salt film and re-lubricating properly, not just spraying over the top of it, plus re-torquing the hardware that vibration works loose and confirming the safety reversal still stops the door on an obstruction.',
  },
];
