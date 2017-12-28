const orderBy = require('lodash.orderby');

function objectToArray(obj) {
    let output = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            output.push(obj[key]);
        }
    }
    return output;
}

const states = [
    {
        name: 'Alabama',
        abbreviation: 'AL',
        ap: 'Ala.',
        population: 4833722,
        size: 52420
    },
    {
        name: 'Alaska',
        abbreviation: 'AK',
        ap: 'Alaska',
        population: 735132,
        size: 665384
    },
    {
        name: 'Arizona',
        abbreviation: 'AZ',
        ap: 'Az.',
        population: 6626624,
        size: 113990
    },
    {
        name: 'Arkansas',
        abbreviation: 'AR',
        ap: 'Ark.',
        population: 2959373,
        size: 53178
    },
    {
        name: 'California',
        abbreviation: 'CA',
        ap: 'Calif.',
        population: 38332521,
        size: 163694
    },
    {
        name: 'Colorado',
        abbreviation: 'CO',
        ap: 'Colo.',
        population: 5268367,
        size: 104093
    },
    {
        name:'Connecticut',
        abbreviation: 'CT',
        ap: 'Conn.',
        population: 3596080,
        size: 5543
    },
    {
        name: 'Washington, D.C.',
        abbreviation: 'DC',
        ap: 'D.C.',
        population: 646449,
        size: 68
    },
    {
        name: 'Delaware',
        abbreviation: 'DE',
        ap: 'Del.',
        population: 925749,
        size: 2489
    },
    {
        name: 'Florida',
        abbreviation: 'FL',
        ap: 'Fla',
        population: 19552860,
        size: 65758
    },
    {
        name: 'Georgia',
        abbreviation: 'GA',
        ap: 'Ga.',
        population: 9992167,
        size: 59425
    },
    {
        name: 'Hawaii',
        abbreviation: 'HI',
        ap: 'Hawaii',
        population: 1404054,
        size: 10932
    },
    {
        name: 'Idaho',
        abbreviation: 'ID',
        ap: 'Idaho',
        population: 1612136,
        size: 83569
    },
    {
        name: 'Illinois',
        abbreviation: 'IL',
        ap: 'Ill.',
        population: 12882135,
        size: 57914
    },
    {
        name: 'Indiana',
        abbreviation: 'IN',
        ap: 'Ind.',
        population: 6570902,
        size: 36420
    },
    {
        name: 'Iowa',
        abbreviation: 'IA',
        ap: 'Iowa',
        population: 3090416,
        size: 56273
    },
    {
        name: 'Kansas',
        abbreviation: 'KS',
        ap: 'Kan.',
        population: 2893957,
        size: 82278
    },
    {
        name: 'Kentucky',
        abbreviation: 'KY',
        ap: 'Ky.',
        population: 4395295,
        size: 40408
    },
    {
        name: 'Louisiana',
        abbreviation: 'LA',
        ap: 'La.',
        population: 4625470,
        size: 52378
    },
    {
        name: 'Maine',
        abbreviation: 'ME',
        ap: 'Maine',
        population: 1328302,
        size: 35380
    },
    {
        name: 'Maryland',
        abbreviation: 'MD',
        ap: 'Md.',
        population: 5928814,
        size: 12406
    },
    {
        name: 'Massachusetts',
        abbreviation: 'MA',
        ap: 'Mass.',
        population: 6692824,
        size: 10554
    },
    {
        name: 'Michigan',
        abbreviation: 'MI',
        ap: 'Mich.',
        population: 9895622,
        size: 96714
    },
    {
        name: 'Minnesota',
        abbreviation: 'MN',
        ap: 'Mich.',
        population: 5420380,
        size: 86936
    },
    {
        name: 'Mississippi',
        abbreviation: 'MS',
        ap: 'Miss.',
        population: 2991207,
        size: 48432
    },
    {
        name: 'Missouri',
        abbreviation: 'MO',
        ap: 'Mo.',
        population: 6044171,
        size: 69707
    },
    {
        name: 'Montana',
        abbreviation: 'MT',
        ap: 'Mont.',
        population: 1015165,
        size: 147040
    },
    {
        name: 'Nebraska',
        abbreviation: 'NE',
        ap: 'Neb.',
        population: 1868516,
        size: 77348
    },
    {
        name: 'Nevada',
        abbreviation: 'NV',
        ap: 'Nev.',
        population: 2790136,
        size: 110572
    },
    {
        name: 'New Hampshire',
        abbreviation: 'NH',
        ap: 'N.H.',
        population: 1323459,
        size: 9349
    },
    {
        name: 'New Jersey',
        abbreviation: 'NJ',
        ap: 'N.J.',
        population: 8899339,
        size: 8723
    },
    {
        name: 'New Mexico',
        abbreviation: 'NM',
        ap: 'N.M.',
        population: 2085287,
        size: 121590
    },
    {
        name: 'New York',
        abbreviation: 'NY',
        ap: 'N.Y.',
        population: 19651127,
        size: 54555
    },
    {
        name: 'North Carolina',
        abbreviation: 'NC',
        ap: 'N.C.',
        population: 9848060,
        size: 53819
    },
    {
        name: 'North Dakota',
        abbreviation: 'ND',
        ap: 'N.D.',
        population: 723393,
        size: 70698
    },
    {
        name: 'Ohio',
        abbreviation: 'OH',
        ap: 'Ohio',
        population: 11570808,
        size: 44826
    },
    {
        name: 'Oklahoma',
        abbreviation: 'OK',
        ap: 'Okla.',
        population: 3850568,
        size: 69899
    },
    {
        name: 'Oregon',
        abbreviation: 'OR',
        ap: 'Ore.',
        population: 3930065,
        size: 98379
    },
    {
        name: 'Pennsylvania',
        abbreviation: 'PA',
        ap: 'Pa.',
        population: 12773801,
        size: 46054
    },
    {
        name: 'Rhode Island',
        abbreviation: 'RI',
        ap: 'R.I.',
        population: 1051511,
        size: 1545
    },
    {
        name: 'South Carolina',
        abbreviation: 'SC',
        ap: 'S.C.',
        population: 4774839,
        size: 32020
    },
    {
        name: 'South Dakota',
        abbreviation: 'SD',
        ap: 'S.D.',
        population: 844877,
        size: 77116
    },
    {
        name: 'Tennessee',
        abbreviation: 'TN',
        ap: 'Tenn.',
        population: 6495978,
        size: 42144
    },
    {
        name: 'Texas',
        abbreviation: 'TX',
        ap: 'Texas',
        population: 26448193,
        size: 268596
    },
    {
        name: 'Utah',
        abbreviation: 'UT',
        ap: 'Utah',
        population: 2900872,
        size: 84897
    },
    {
        name: 'Vermont',
        abbreviation: 'VT',
        ap: 'Vt.',
        population: 626630,
        size: 9616
    },
    {
        name: 'Virginia',
        abbreviation: 'VA',
        ap: 'Va.',
        population: 8260405,
        size: 42775
    },
    {
        name: 'Washington',
        abbreviation: 'WA',
        ap: 'Wash.',
        population: 6971406,
        size: 71298
    },
    {
        name: 'West Virginia',
        abbreviation: 'WV',
        ap: 'W.Va.',
        population: 1854304,
        size: 24230
    },
    {
        name: 'Wisconsin',
        abbreviation: 'WI',
        ap: 'Wis.',
        population: 5742713,
        size: 65496
    },
    {
        name: 'Wyoming',
        abbreviation: 'WY',
        ap: 'Wyo.',
        population: 582658,
        size: 97813
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
    let args = objectToArray(arguments);
    return this.states.map(function(state) {
        let entry = {
            name: state.name,
            abbreviation: state.abbreviation
        };
        for (let a = 0; a < args.length; a++) {
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
    this.states = this.states.filter(callback);
    return this;
}

StatesCollection.prototype.exclude = function() {

    let args;
    if (Array.isArray(arguments[0])) {
        args = arguments[0];
    } else {
        args = objectToArray(arguments);
    }

    args = args.map(function(input) {
        if (input.length > 2) {
            return abbreviate(input);
        }
        return input.toUpperCase();
    });
    this.states = this.states.filter(function(state) {
        return (args.indexOf(state.abbreviation) == -1);
    });
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
    return this.exclude('AK', 'HI');
}

function abbreviate(name) {
    for (let i = 0; i < states.length; i++) {
        if (states[i].name.toLowerCase() == name.toLowerCase()) {
            return states[i].abbreviation;
        }
    }
    return name;
}

function unabbreviate(abbr) {
    for (let i = 0; i < states.length; i++) {
        if (states[i].abbreviation.toLowerCase() == abbr.toLowerCase()) {
            return states[i].name;
        }
    }
    return abbr;
}

module.exports.abbreviate = abbreviate;
module.exports.unabbreviate = unabbreviate;
module.exports.states = function() {
    return new StatesCollection();
}
