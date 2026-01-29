export interface ContentSection {
    text: string;
    type?: 'title';
    mood?: string;
}

export const CONTENT: ContentSection[] = [
    { text: "AN APPEAL TO HEAVEN", type: "title" },
    { text: "water runs deep but will heaven ever weep", mood: "calm" },
    { text: "it may fade with time but its always there easy to find\n\nthe height of heaven and depth of earth cannot conceal", mood: "calm" },
    { text: "theres a devotion older than prayer that grows\ntheres a wound older than war that bleeds\ntheres a bond older than blood that pulls", mood: "building" },
    { text: "theres a vow older than time that waits\ntheres a calling older than names that echoes\ntheres a path older than footsteps that remembers", mood: "building" },
    { text: "theres a longing older than hope that hums\ntheres a word older than tongues that binds", mood: "tense" },
    { text: "theres a beast older than language that dwells", mood: "distorted" },
    { text: "I take a cold shower turn on the a/c and turn it down I turn it lower I pour the ice I pour the drink and the cup drips", mood: "cold" },
    { text: "It always drips to freeze the room to freeze myself but the ice melts and the room warms.", mood: "calm" },
    { text: "out of bottomless pits i have crawled to uncharted peaks still long off the summit my heart full of love my eyes light a thread tied to my soul that pulls me closer to god", mood: "uplifting" },
    { text: "dear diary i caught myself wishing in the midst of uncertainty for it to rain certainty", mood: "melancholy" },
    { text: "glory is fleeting but obscurity is forever\ntime is a thief but you are my treasure", mood: "romantic" },
    { text: "As rivers find ocean\nAs moths find flame\nAs roots find earth\nAs stars find night\nAs shadows find light\nAs paths find feet\nAs hearts find truth", mood: "rhythmic" },
    { text: "a long overdue love text. a delusion echoed by the hopeless. a fucking I love you. a reminder to the ache. a heart destined for dust. a soul in peace. a prayer too short. a miracle too divine. a once upon a time. a happily ever after. In living memory kept. as foretold before. a plea to dance forever more", mood: "intense" },
    { text: "another day but not exactly\nyour name echoes gladly\na smile that haunts me quietly\nlaugh and feel wholeheartedly\nalways love dearly to madly\nvanish but never completely\nblow the candles softly\nmake a wish thoughtfully", mood: "soft" },
    { text: "silence taught thunder how to speak dusk taught the day how to rest depth taught the anchor how to hold pause taught the heart how to beat mirage taught travelers how to hope distance taught the horizon how to rise mystery taught truth how to vanish stillness taught the storm how to soften", mood: "philosophical" },
    { text: "Is there a rhythm lost in lullabies\nIs there a silence hidden in prayers\nIs there a truth heard in dreams\nIs there a time kept in hearts", mood: "questioning" },
    { text: "will one turn into two will space turn into time will lead turn into gold will you turn into me", mood: "merging" },
    { text: "are we questions or are we answers are we dots or are we lines are we close or are we closer are we here or are we there are we history or are we happening are we music or are we noise", mood: "binary" },
    { text: "Dots beg for a path lines pray for a curve circles ache for a end triangles seek a direction squares weep for a wrinkle", mood: "geometric" },
    { text: "suppose a library with empty shelves or a song without a melody without any true depth before it was a quiet sound an empty shelf untouched and waiting how came it to be filled how came this vast store of books this gallery of melody that now decorates every corner with an almost abundant form of variety of color from where did all these resources of happiness this profound sound of what it means to be truly alive to this i answer in one letter", mood: "complex" },
    { text: "all the while deep subtle longing takes root of your senses for those with minds to see and hearts to hear", mood: "deep" },
    { text: "its a craft to shape when the mold breaks its a craft to thread when the fabric tears its a craft to map when the stars hide its a craft to endure a world undone", mood: "resilient" },
    { text: "theres a hidden veil in between what you are and what you could be between how you are and how you could be between where you are and where you could be its thinner than you believe", mood: "ethereal" },
    { text: "dear santa you are late i even left ya cookies n milk it looks like i will deliver the coal myself chop chop santa reconcile the debt santa yours sincerely the elf collective", mood: "playful" },
    { text: "you know how when you drop something you almost in slow motion get to see it hit the ground and break it has not broken but in that tiny interval you know it will you brace for the impact because you cannot stop it in a similar sense i feel like i already died because i already carry the knowledge", mood: "heavy" },
    { text: "they are obvious it is obvious well obviously obviously where obviously there an obvious obviously", mood: "glitch" },
    { text: "for those that hold truths to be self-evident like the smell of rain before it pours as is", mood: "clarity" },
    { text: "is it a hymn for the godless is it a lullaby for the sleepless is it a coversation with the silence is it a la da da da da de to fill the void where an answer should be", mood: "musical" },
    { text: "all in on la da da da da da\nlets go la da da da da de\nlet it ride la da da da da da\nletitride la da da da da de", mood: "fade_out" },
    { text: "alas it is done. what is? I don't know. do we need to speak? that is for you to decide and for me to keep dreaming, but not through a veil. imperfect so as not to offend god", mood: "final" }
];

export interface MoodParams {
    noiseStrength: number;
    speed: number;
    pointSize: number;
    color: [number, number, number];
}

export const MOOD_PARAMS: Record<string, MoodParams> = {
    title: { noiseStrength: 0.2, speed: 0.15, pointSize: 2.0, color: [0.9, 0.9, 0.95] },
    calm: { noiseStrength: 0.3, speed: 0.2, pointSize: 2.0, color: [0.85, 0.85, 0.9] },
    building: { noiseStrength: 0.5, speed: 0.35, pointSize: 2.2, color: [0.8, 0.8, 0.88] },
    tense: { noiseStrength: 0.8, speed: 0.5, pointSize: 2.4, color: [0.75, 0.75, 0.85] },
    distorted: { noiseStrength: 1.5, speed: 0.9, pointSize: 2.8, color: [0.9, 0.7, 0.75] },
    cold: { noiseStrength: 0.15, speed: 0.08, pointSize: 1.8, color: [0.7, 0.8, 0.95] },
    uplifting: { noiseStrength: 0.7, speed: 0.45, pointSize: 2.5, color: [0.95, 0.9, 0.8] },
    melancholy: { noiseStrength: 0.4, speed: 0.2, pointSize: 2.0, color: [0.7, 0.7, 0.8] },
    romantic: { noiseStrength: 0.45, speed: 0.3, pointSize: 2.2, color: [0.92, 0.82, 0.85] },
    rhythmic: { noiseStrength: 0.6, speed: 0.55, pointSize: 2.3, color: [0.85, 0.85, 0.9] },
    intense: { noiseStrength: 1.2, speed: 0.7, pointSize: 2.6, color: [0.95, 0.85, 0.85] },
    soft: { noiseStrength: 0.25, speed: 0.18, pointSize: 1.9, color: [0.88, 0.85, 0.9] },
    philosophical: { noiseStrength: 0.5, speed: 0.25, pointSize: 2.1, color: [0.8, 0.82, 0.88] },
    questioning: { noiseStrength: 0.55, speed: 0.4, pointSize: 2.2, color: [0.82, 0.82, 0.9] },
    merging: { noiseStrength: 0.7, speed: 0.5, pointSize: 2.4, color: [0.85, 0.8, 0.9] },
    binary: { noiseStrength: 0.9, speed: 0.6, pointSize: 2.5, color: [0.9, 0.9, 0.9] },
    geometric: { noiseStrength: 0.65, speed: 0.45, pointSize: 2.3, color: [0.88, 0.88, 0.92] },
    complex: { noiseStrength: 0.8, speed: 0.5, pointSize: 2.4, color: [0.85, 0.85, 0.88] },
    deep: { noiseStrength: 0.6, speed: 0.3, pointSize: 2.2, color: [0.75, 0.78, 0.88] },
    resilient: { noiseStrength: 0.75, speed: 0.55, pointSize: 2.4, color: [0.88, 0.85, 0.82] },
    ethereal: { noiseStrength: 0.35, speed: 0.22, pointSize: 2.0, color: [0.9, 0.88, 0.95] },
    playful: { noiseStrength: 0.5, speed: 0.65, pointSize: 2.3, color: [0.92, 0.88, 0.85] },
    heavy: { noiseStrength: 1.0, speed: 0.35, pointSize: 2.6, color: [0.7, 0.7, 0.75] },
    glitch: { noiseStrength: 1.8, speed: 1.2, pointSize: 3.0, color: [0.95, 0.9, 0.9] },
    clarity: { noiseStrength: 0.3, speed: 0.25, pointSize: 2.0, color: [0.95, 0.95, 0.98] },
    musical: { noiseStrength: 0.55, speed: 0.5, pointSize: 2.2, color: [0.88, 0.85, 0.92] },
    fade_out: { noiseStrength: 0.2, speed: 0.12, pointSize: 1.8, color: [0.8, 0.8, 0.85] },
    final: { noiseStrength: 0.15, speed: 0.1, pointSize: 1.6, color: [0.85, 0.85, 0.9] },
};

export function getMoodParams(mood: string | undefined): MoodParams {
    if (!mood) return MOOD_PARAMS.calm;
    return MOOD_PARAMS[mood] || MOOD_PARAMS.calm;
}
