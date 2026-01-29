// content.ts

export interface ContentSection {
    text: string;
    type?: 'title' | 'verse';
    mood?: string;
}

export const content: ContentSection[] = [
    {
        text: "AN APPEAL TO HEAVEN",
        type: "title"
    },
    {
        text: "water runs deep\nbut will heaven ever weep",
        mood: "calm"
    },
    {
        text: "it may fade with time\nbut its always there\neasy to find\n\nthe height of heaven\nand depth of earth\ncannot conceal",
        mood: "calm"
    },
    {
        text: "theres a devotion older than prayer that grows\ntheres a wound older than war that bleeds\ntheres a bond older than blood that pulls",
        mood: "building"
    },
    {
        text: "theres a vow older than time that waits\ntheres a calling older than names that echoes\ntheres a path older than footsteps that remembers",
        mood: "building"
    },
    {
        text: "theres a longing older than hope that hums\ntheres a word older than tongues that binds",
        mood: "tense"
    },
    {
        text: "theres a beast\nolder than language\nthat dwells",
        mood: "distorted"
    },
    {
        text: "out of bottomless pits\ni have crawled\nto uncharted peaks\n\nstill long off the summit\nmy heart full of love\nmy eyes light\n\na thread tied to my soul\nthat pulls me closer to god",
        mood: "uplifting"
    },
    {
        text: "dear diary\ni caught myself wishing\nin the midst of uncertainty\nfor it to rain certainty",
        mood: "melancholy"
    },
    {
        text: "glory is fleeting\nbut obscurity is forever\n\ntime is a thief\nbut you are my treasure",
        mood: "romantic"
    },
    {
        text: "As rivers find ocean\nAs moths find flame\nAs roots find earth\nAs stars find night\nAs shadows find light\nAs paths find feet\nAs hearts find truth",
        mood: "rhythmic"
    },
    {
        text: "a long overdue love text\na delusion echoed by the hopeless\na fucking I love you\n\na reminder to the ache\na heart destined for dust\na soul in peace\n\na prayer too short\na miracle too divine\na once upon a time\na happily ever after\n\nIn living memory kept\nas foretold before\na plea to dance forever more",
        mood: "intense"
    },
    {
        text: "another day but not exactly\nyour name echoes gladly\na smile that haunts me quietly\n\nlaugh and feel wholeheartedly\nalways love dearly to madly\nvanish but never completely\n\nblow the candles softly\nmake a wish thoughtfully",
        mood: "soft"
    },
    {
        text: "silence taught thunder how to speak\ndusk taught the day how to rest\ndepth taught the anchor how to hold\npause taught the heart how to beat\n\nmirage taught travelers how to hope\ndistance taught the horizon how to rise\nmystery taught truth how to vanish\nstillness taught the storm how to soften",
        mood: "philosophical"
    },
    {
        text: "Is there a rhythm lost in lullabies\nIs there a silence hidden in prayers\nIs there a truth heard in dreams\nIs there a time kept in hearts",
        mood: "questioning"
    },
    {
        text: "will one turn into two\nwill space turn into time\nwill lead turn into gold\nwill you turn into me",
        mood: "merging"
    },
    {
        text: "are we questions or are we answers\nare we dots or are we lines\nare we close or are we closer\n\nare we here or are we there\nare we history or are we happening\nare we music or are we noise",
        mood: "binary"
    },
    {
        text: "Dots beg for a path\nlines pray for a curve\ncircles ache for a end\n\ntriangles seek a direction\nsquares weep for a wrinkle",
        mood: "geometric"
    },
    {
        text: "suppose a library with empty shelves\nor a song without a melody\nwithout any true depth\n\nbefore it was a quiet sound\an empty shelf untouched and waiting\nhow came it to be filled\n\nhow came this vast store of books\nthis gallery of melody\nthat now decorates every corner\nwith an almost abundant form\nof variety of color\n\nfrom where did all these resources of happiness\nthis profound sound of what it means\nto be truly alive\n\nto this i answer\nin one letter",
        mood: "complex"
    },
    {
        text: "all the while\ndeep subtle longing\ntakes root of your senses\nfor those with minds to see\nand hearts to hear",
        mood: "deep"
    },
    {
        text: "its a craft to shape\nwhen the mold breaks\n\nits a craft to thread\nwhen the fabric tears\n\nits a craft to map\nwhen the stars hide\n\nits a craft to endure\na world undone",
        mood: "resilient"
    },
    {
        text: "theres a hidden veil\nin between what you are\nand what you could be\n\nbetween how you are\nand how you could be\n\nbetween where you are\nand where you could be\n\nits thinner than you believe",
        mood: "ethereal"
    },
    {
        text: "dear santa you are late\ni even left ya cookies n milk\nit looks like i will deliver the coal myself\n\nchop chop santa\nreconcile the debt santa\nyours sincerely\nthe elf collective",
        mood: "playful"
    },
    {
        text: "you know how when you drop something\nyou almost in slow motion\nget to see it hit the ground and break\n\nit has not broken\nbut in that tiny interval you know it will\nyou brace for the impact\nbecause you cannot stop it\n\nin a similar sense i feel like i already died\nbecause i already carry the knowledge",
        mood: "heavy"
    },
    {
        text: "they are obvious\nit is obvious\nwell obviously obviously\nwhere obviously there\nan obvious obviously",
        mood: "glitch"
    },
    {
        text: "for those that hold truths\nto be self-evident\nlike the smell of rain\nbefore it pours as is",
        mood: "clarity"
    },
    {
        text: "is it a hymn for the godless\nis it a lullaby for the sleepless\nis it a coversation with the silence\nis it a la da da da da de\nto fill the void where an answer should be",
        mood: "musical"
    },
    {
        text: "all in on la da da da da da\nlets go la da da da da de\nlet it ride la da da da da da\nletitride la da da da da de",
        mood: "fade_out"
    },
    {
        text: "alas it is done.\nwhat is? I don't know.\ndo we need to speak?\n\nthat is for you to decide\nand for me to keep dreaming,\nbut not through a veil.\n\nimperfect\nso as not to offend god",
        mood: "final"
    }
];

export interface MoodParams {
    noiseStrength: number;
    speed: number;
    pointSize: number;
    color: [number, number, number];
}

// TUNING: Increased speeds for faster visual feedback
export const MOOD_PARAMS: Record<string, MoodParams> = {
    title: { noiseStrength: 0.2, speed: 0.25, pointSize: 2.0, color: [1.2, 1.2, 1.2] },
    calm: { noiseStrength: 0.3, speed: 0.35, pointSize: 2.0, color: [0.85, 0.85, 0.9] },
    building: { noiseStrength: 0.5, speed: 0.5, pointSize: 2.2, color: [0.8, 0.8, 0.88] },
    tense: { noiseStrength: 0.8, speed: 0.7, pointSize: 2.4, color: [0.75, 0.75, 0.85] },
    distorted: { noiseStrength: 1.5, speed: 1.2, pointSize: 2.8, color: [0.9, 0.7, 0.75] },
    cold: { noiseStrength: 0.15, speed: 0.15, pointSize: 1.8, color: [0.7, 0.8, 0.95] },
    uplifting: { noiseStrength: 0.7, speed: 0.6, pointSize: 2.5, color: [0.95, 0.9, 0.8] },
    melancholy: { noiseStrength: 0.4, speed: 0.3, pointSize: 2.0, color: [0.7, 0.7, 0.8] },
    romantic: { noiseStrength: 0.45, speed: 0.4, pointSize: 2.2, color: [0.92, 0.82, 0.85] },
    rhythmic: { noiseStrength: 0.6, speed: 0.8, pointSize: 2.3, color: [0.85, 0.85, 0.9] },
    intense: { noiseStrength: 1.2, speed: 1.0, pointSize: 2.6, color: [0.95, 0.85, 0.85] },
    soft: { noiseStrength: 0.25, speed: 0.25, pointSize: 1.9, color: [0.88, 0.85, 0.9] },
    philosophical: { noiseStrength: 0.5, speed: 0.35, pointSize: 2.1, color: [0.8, 0.82, 0.88] },
    questioning: { noiseStrength: 0.55, speed: 0.5, pointSize: 2.2, color: [0.82, 0.82, 0.9] },
    merging: { noiseStrength: 0.7, speed: 0.6, pointSize: 2.4, color: [0.85, 0.8, 0.9] },
    binary: { noiseStrength: 0.9, speed: 0.8, pointSize: 2.5, color: [0.9, 0.9, 0.9] },
    geometric: { noiseStrength: 0.65, speed: 0.6, pointSize: 2.3, color: [0.88, 0.88, 0.92] },
    complex: { noiseStrength: 0.8, speed: 0.65, pointSize: 2.4, color: [0.85, 0.85, 0.88] },
    deep: { noiseStrength: 0.6, speed: 0.4, pointSize: 2.2, color: [0.75, 0.78, 0.88] },
    resilient: { noiseStrength: 0.75, speed: 0.7, pointSize: 2.4, color: [0.88, 0.85, 0.82] },
    ethereal: { noiseStrength: 0.35, speed: 0.3, pointSize: 2.0, color: [0.9, 0.88, 0.95] },
    playful: { noiseStrength: 0.5, speed: 0.8, pointSize: 2.3, color: [0.92, 0.88, 0.85] },
    heavy: { noiseStrength: 1.0, speed: 0.45, pointSize: 2.6, color: [0.7, 0.7, 0.75] },
    glitch: { noiseStrength: 1.8, speed: 2.0, pointSize: 3.0, color: [0.95, 0.9, 0.9] },
    clarity: { noiseStrength: 0.3, speed: 0.3, pointSize: 2.0, color: [0.95, 0.95, 0.98] },
    musical: { noiseStrength: 0.55, speed: 0.6, pointSize: 2.2, color: [0.88, 0.85, 0.92] },
    fade_out: { noiseStrength: 0.2, speed: 0.15, pointSize: 1.8, color: [0.8, 0.8, 0.85] },
    final: { noiseStrength: 0.15, speed: 0.1, pointSize: 1.6, color: [0.85, 0.85, 0.9] },
};

export function getMoodParams(mood: string | undefined): MoodParams {
    if (!mood) return MOOD_PARAMS.calm;
    return MOOD_PARAMS[mood] || MOOD_PARAMS.calm;
}

// SETTINGS: Controls how fast the user scrolls through the content
// Decrease this number to make text appear closer together (FASTER)
// Increase this number to make text further apart (SLOWER)
export const TEXT_SPACING = 15; // Was likely 25 or 30 before