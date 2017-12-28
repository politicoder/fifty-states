const filter = require('lodash.filter');
const orderBy = require('lodash.orderby');

const states = [
    {
        name: 'Alabama',
        abbreviation: 'AL',
        ap: 'Ala.',
        population: 4833722,
        size: 52420,
        contiguous: true
    },
    {
        name: 'Alaska',
        abbreviation: 'AK',
        ap: 'Alaska',
        population: 735132,
        size: 665384,
        contiguous: false
    },
    {
        name: 'Arizona',
        abbreviation: 'AZ',
        ap: 'Az.',
        population: 6626624,
        size: 113990,
        contiguous: true
    },
    {
        name: 'Arkansas',
        abbreviation: 'AR',
        ap: 'Ark.',
        population: 2959373,
        size: 53178,
        contiguous: true
    },
    {
        name: 'California',
        abbreviation: 'CA',
        ap: 'Calif.',
        population: 38332521,
        size: 163694,
        contiguous: true
    },
    {
        name: 'Colorado',
        abbreviation: 'CO',
        ap: 'Colo.',
        population: 5268367,
        size: 104093,
        contiguous: true
    },
    {
        name:'Connecticut',
        abbreviation: 'CT',
        ap: 'Conn.',
        population: 3596080,
        size: 5543,
        contiguous: true
    },
    {
        name: 'Delaware',
        abbreviation: 'DE',
        ap: 'Del.',
        population: 925749,
        size: 2489,
        contiguous: true
    },
    {
        name: 'Florida',
        abbreviation: 'FL',
        ap: 'Fla',
        population: 19552860,
        size: 65758,
        contiguous: true
    },
    {
        name: 'Georgia',
        abbreviation: 'GA',
        ap: 'Ga.',
        population: 9992167,
        size: 59425,
        contiguous: true
    },
    {
        name: 'Hawaii',
        abbreviation: 'HI',
        ap: 'Hawaii',
        population: 1404054,
        size: 10932,
        contiguous: false
    },
    {
        name: 'Idaho',
        abbreviation: 'ID',
        ap: 'Idaho',
        population: 1612136,
        size: 83569,
        contiguous: true
    },
    {
        name: 'Illinois',
        abbreviation: 'IL',
        ap: 'Ill.',
        population: 12882135,
        size: 57914,
        contiguous: true
    },
    {
        name: 'Indiana',
        abbreviation: 'IN',
        ap: 'Ind.',
        population: 6570902,
        size: 36420,
        contiguous: true
    },
    {
        name: 'Iowa',
        abbreviation: 'IA',
        ap: 'Iowa',
        population: 3090416,
        size: 56273,
        contiguous: true
    },
    {
        name: 'Kansas',
        abbreviation: 'KS',
        ap: 'Kan.',
        population: 2893957,
        size: 82278,
        contiguous: true
    },
    {
        name: 'Kentucky',
        abbreviation: 'KY',
        ap: 'Ky.',
        population: 4395295,
        size: 40408,
        contiguous: true
    },
    {
        name: 'Louisiana',
        abbreviation: 'LA',
        ap: 'La.',
        population: 4625470,
        size: 52378,
        contiguous: true
    },
    {
        name: 'Maine',
        abbreviation: 'ME',
        ap: 'Maine',
        population: 1328302,
        size: 35380,
        contiguous: true
    },
    {
        name: 'Maryland',
        abbreviation: 'MD',
        ap: 'Md.',
        population: 5928814,
        size: 12406,
        contiguous: true
    },
    {
        name: 'Massachusetts',
        abbreviation: 'MA',
        ap: 'Mass.',
        population: 6692824,
        size: 10554,
        contiguous: true
    },
    {
        name: 'Michigan',
        abbreviation: 'MI',
        ap: 'Mich.',
        population: 9895622,
        size: 96714,
        contiguous: true
    },
    {
        name: 'Minnesota',
        abbreviation: 'MN',
        ap: 'Mich.',
        population: 5420380,
        size: 86936,
        contiguous: true
    },
    {
        name: 'Mississippi',
        abbreviation: 'MS',
        ap: 'Miss.',
        population: 2991207,
        size: 48432,
        contiguous: true
    },
    {
        name: 'Missouri',
        abbreviation: 'MO',
        ap: 'Mo.',
        population: 6044171,
        size: 69707,
        contiguous: true
    },
    {
        name: 'Montana',
        abbreviation: 'MT',
        ap: 'Mont.',
        population: 1015165,
        size: 147040,
        contiguous: true
    },
    {
        name: 'Nebraska',
        abbreviation: 'NE',
        ap: 'Neb.',
        population: 1868516,
        size: 77348,
        contiguous: true
    },
    {
        name: 'Nevada',
        abbreviation: 'NV',
        ap: 'Nev.',
        population: 2790136,
        size: 110572,
        contiguous: true
    },
    {
        name: 'New Hampshire',
        abbreviation: 'NH',
        ap: 'N.H.',
        population: 1323459,
        size: 9349,
        contiguous: true
    },
    {
        name: 'New Jersey',
        abbreviation: 'NJ',
        ap: 'N.J.',
        population: 8899339,
        size: 8723,
        contiguous: true
    },
    {
        name: 'New Mexico',
        abbreviation: 'NM',
        ap: 'N.M.',
        population: 2085287,
        size: 121590,
        contiguous: true
    },
    {
        name: 'New York',
        abbreviation: 'NY',
        ap: 'N.Y.',
        population: 19651127,
        size: 54555,
        contiguous: true
    },
    {
        name: 'North Carolina',
        abbreviation: 'NC',
        ap: 'N.C.',
        population: 9848060,
        size: 53819,
        contiguous: true
    },
    {
        name: 'North Dakota',
        abbreviation: 'ND',
        ap: 'N.D.',
        population: 723393,
        size: 70698,
        contiguous: true
    },
    {
        name: 'Ohio',
        abbreviation: 'OH',
        ap: 'Ohio',
        population: 11570808,
        size: 44826,
        contiguous: true
    },
    {
        name: 'Oklahoma',
        abbreviation: 'OK',
        ap: 'Okla.',
        population: 3850568,
        size: 69899,
        contiguous: true
    },
    {
        name: 'Oregon',
        abbreviation: 'OR',
        ap: 'Ore.',
        population: 3930065,
        size: 98379,
        contiguous: true
    },
    {
        name: 'Pennsylvania',
        abbreviation: 'PA',
        ap: 'Pa.',
        population: 12773801,
        size: 46054,
        contiguous: true
    },
    {
        name: 'Rhode Island',
        abbreviation: 'RI',
        ap: 'R.I.',
        population: 1051511,
        size: 1545,
        contiguous: true
    },
    {
        name: 'South Carolina',
        abbreviation: 'SC',
        ap: 'S.C.',
        population: 4774839,
        size: 32020,
        contiguous: true
    },
    {
        name: 'South Dakota',
        abbreviation: 'SD',
        ap: 'S.D.',
        population: 844877,
        size: 77116,
        contiguous: true
    },
    {
        name: 'Tennessee',
        abbreviation: 'TN',
        ap: 'Tenn.',
        population: 6495978,
        size: 42144,
        contiguous: true
    },
    {
        name: 'Texas',
        abbreviation: 'TX',
        ap: 'Texas',
        population: 26448193,
        size: 268596,
        contiguous: true
    },
    {
        name: 'Utah',
        abbreviation: 'UT',
        ap: 'Utah',
        population: 2900872,
        size: 84897,
        contiguous: true
    },
    {
        name: 'Vermont',
        abbreviation: 'VT',
        ap: 'Vt.',
        population: 626630,
        size: 9616,
        contiguous: true
    },
    {
        name: 'Virginia',
        abbreviation: 'VA',
        ap: 'Va.',
        population: 8260405,
        size: 42775,
        contiguous: true
    },
    {
        name: 'Washington',
        abbreviation: 'WA',
        ap: 'Wash.',
        population: 6971406,
        size: 71298,
        contiguous: true
    },
    {
        name: 'Washington, DC',
        abbreviation: 'DC',
        ap: 'D.C.',
        population: 646449,
        size: 68,
        contiguous: true
    },
    {
        name: 'West Virginia',
        abbreviation: 'WV',
        ap: 'W.Va.',
        population: 1854304,
        size: 24230,
        contiguous: true
    },
    {
        name: 'Wisconsin',
        abbreviation: 'WI',
        ap: 'Wis.',
        population: 5742713,
        size: 65496,
        contiguous: true
    },
    {
        name: 'Wyoming',
        abbreviation: 'WY',
        ap: 'Wyo.',
        population: 582658,
        size: 97813,
        contiguous: true
    }
];

let StatesCollection = function() {
    this.states = states;
}

StatesCollection.prototype.toObject = function() {
    let output = {};
    for (let i = 0; i < this.states.length; i++) {
        output[this.states[i].abbreviation] = this.states[i].name;
    }
    return output;
}

StatesCollection.prototype.toArray = function() {
    let args = arguments;
    return this.states.map(function(state) {
        let entry = {
            name: state.name,
            abbreviation: state.abbreviation
        };
        if (Object.keys(args).length === 0) {
            return entry;
        }
        for (let a in args) {
            let key = args[a];
            if (state[key] != undefined) {
                entry[key] = state[key];
            } else {
                entry[key] = null;
            }
        }
        return entry;
    });
}

StatesCollection.prototype.filter = function(callback) {
    this.states = filter(this.states, callback);
    return this;
}

StatesCollection.prototype.orderBy = function(key, order) {
    if (order == undefined) {
        order = 'asc';
    }
    this.states = orderBy(this.states, key, order);
    return this;
}

StatesCollection.prototype.reset = function() {
    this.states = states;
    return this;
}

StatesCollection.prototype.contiguous = function() {
    this.states = filter(this.states, (state) => {
        return state.contiguous;
    });
    return this;
}

module.exports.abbreviate = function(name) {
    for (let i = 0; i < states.length; i++) {
        if (states[i].name.toLowerCase() == name.toLowerCase()) {
            return states[i].abbreviation;
        }
    }
    return name;
}

module.exports.unabbreviate = function(abbr) {
    for (let i = 0; i < states.length; i++) {
        if (states[i].abbreviation.toLowerCase() == abbr.toLowerCase()) {
            return states[i].name;
        }
    }
    return abbr;
}

module.exports.states = function() {
    return new StatesCollection();
}

