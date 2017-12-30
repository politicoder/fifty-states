const orderBy = require('lodash.orderby');

/**
 * @module Fifty
 * @example
 * const fifty = require('fifty-states');
 */

/**
 * @namespace
 * @description
 * Object containing the current states.
 */

let StatesCollection = function() {
    this.states = data;
}

/**
 * Gets a new StatesCollection instance with the default dataset.
 * @memberof Fifty
 * @returns {StatesCollection} StatesCollection instance with the default dataset.
 */

module.exports.states = function() {
    return new StatesCollection();
}

function objectToArray(obj) {
    let output = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            output.push(obj[key]);
        }
    }
    return output;
}

const data = [
    {
        name: 'Alabama',
        abbreviation: 'AL',
        ap: 'Ala.',
        capital: 'Montgomery',
        population: 4833722,
        size: 52420
    },
    {
        name: 'Alaska',
        abbreviation: 'AK',
        ap: 'Alaska',
        capital: 'Juneau',
        population: 735132,
        size: 665384
    },
    {
        name: 'Arizona',
        abbreviation: 'AZ',
        ap: 'Az.',
        capital: 'Phoenix',
        population: 6626624,
        size: 113990
    },
    {
        name: 'Arkansas',
        abbreviation: 'AR',
        ap: 'Ark.',
        capital: 'Little Rock',
        population: 2959373,
        size: 53178
    },
    {
        name: 'California',
        abbreviation: 'CA',
        ap: 'Calif.',
        capital: 'Sacramento',
        population: 38332521,
        size: 163694
    },
    {
        name: 'Colorado',
        abbreviation: 'CO',
        ap: 'Colo.',
        capital: 'Denver',
        population: 5268367,
        size: 104093
    },
    {
        name:'Connecticut',
        abbreviation: 'CT',
        ap: 'Conn.',
        capital: 'Hartford',
        population: 3596080,
        size: 5543
    },
    {
        name: 'Washington, D.C.',
        abbreviation: 'DC',
        ap: 'D.C.',
        capital: 'Washington, D.C.',
        population: 646449,
        size: 68
    },
    {
        name: 'Delaware',
        abbreviation: 'DE',
        ap: 'Del.',
        capital: 'Dover',
        population: 925749,
        size: 2489
    },
    {
        name: 'Florida',
        abbreviation: 'FL',
        ap: 'Fla',
        capital: 'Tallahassee',
        population: 19552860,
        size: 65758
    },
    {
        name: 'Georgia',
        abbreviation: 'GA',
        ap: 'Ga.',
        capital: 'Atlanta',
        population: 9992167,
        size: 59425
    },
    {
        name: 'Hawaii',
        abbreviation: 'HI',
        ap: 'Hawaii',
        capital: 'Honolulu',
        population: 1404054,
        size: 10932
    },
    {
        name: 'Idaho',
        abbreviation: 'ID',
        ap: 'Idaho',
        capital: 'Boise',
        population: 1612136,
        size: 83569
    },
    {
        name: 'Illinois',
        abbreviation: 'IL',
        ap: 'Ill.',
        capital: 'Springfield',
        population: 12882135,
        size: 57914
    },
    {
        name: 'Indiana',
        abbreviation: 'IN',
        ap: 'Ind.',
        capital: 'Indianapolis',
        population: 6570902,
        size: 36420
    },
    {
        name: 'Iowa',
        abbreviation: 'IA',
        ap: 'Iowa',
        capital: 'Des Moines',
        population: 3090416,
        size: 56273
    },
    {
        name: 'Kansas',
        abbreviation: 'KS',
        ap: 'Kan.',
        capital: 'Topeka',
        population: 2893957,
        size: 82278
    },
    {
        name: 'Kentucky',
        abbreviation: 'KY',
        ap: 'Ky.',
        capital: 'Frankfort',
        population: 4395295,
        size: 40408
    },
    {
        name: 'Louisiana',
        abbreviation: 'LA',
        ap: 'La.',
        capital: 'Baton Rouge',
        population: 4625470,
        size: 52378
    },
    {
        name: 'Maine',
        abbreviation: 'ME',
        ap: 'Maine',
        capital: 'Augusta',
        population: 1328302,
        size: 35380
    },
    {
        name: 'Maryland',
        abbreviation: 'MD',
        ap: 'Md.',
        capital: 'Annapolis',
        population: 5928814,
        size: 12406
    },
    {
        name: 'Massachusetts',
        abbreviation: 'MA',
        ap: 'Mass.',
        capital: 'Boston',
        population: 6692824,
        size: 10554
    },
    {
        name: 'Michigan',
        abbreviation: 'MI',
        ap: 'Mich.',
        capital: 'Lansing',
        population: 9895622,
        size: 96714
    },
    {
        name: 'Minnesota',
        abbreviation: 'MN',
        ap: 'Mich.',
        capital: 'St. Paul',
        population: 5420380,
        size: 86936
    },
    {
        name: 'Mississippi',
        abbreviation: 'MS',
        ap: 'Miss.',
        capital: 'Jackson',
        population: 2991207,
        size: 48432
    },
    {
        name: 'Missouri',
        abbreviation: 'MO',
        ap: 'Mo.',
        capital: 'Jefferson City',
        population: 6044171,
        size: 69707
    },
    {
        name: 'Montana',
        abbreviation: 'MT',
        ap: 'Mont.',
        capital: 'Helena',
        population: 1015165,
        size: 147040
    },
    {
        name: 'Nebraska',
        abbreviation: 'NE',
        ap: 'Neb.',
        capital: 'Lincoln',
        population: 1868516,
        size: 77348
    },
    {
        name: 'Nevada',
        abbreviation: 'NV',
        ap: 'Nev.',
        capital: 'Carson City',
        population: 2790136,
        size: 110572
    },
    {
        name: 'New Hampshire',
        abbreviation: 'NH',
        ap: 'N.H.',
        capital: 'Concord',
        population: 1323459,
        size: 9349
    },
    {
        name: 'New Jersey',
        abbreviation: 'NJ',
        ap: 'N.J.',
        capital: 'Trenton',
        population: 8899339,
        size: 8723
    },
    {
        name: 'New Mexico',
        abbreviation: 'NM',
        ap: 'N.M.',
        capital: 'Santa Fe',
        population: 2085287,
        size: 121590
    },
    {
        name: 'New York',
        abbreviation: 'NY',
        ap: 'N.Y.',
        capital: 'Albany',
        population: 19651127,
        size: 54555
    },
    {
        name: 'North Carolina',
        abbreviation: 'NC',
        ap: 'N.C.',
        capital: 'Raleigh',
        population: 9848060,
        size: 53819
    },
    {
        name: 'North Dakota',
        abbreviation: 'ND',
        ap: 'N.D.',
        capital: 'Bismarck',
        population: 723393,
        size: 70698
    },
    {
        name: 'Ohio',
        abbreviation: 'OH',
        ap: 'Ohio',
        capital: 'Columbus',
        population: 11570808,
        size: 44826
    },
    {
        name: 'Oklahoma',
        abbreviation: 'OK',
        ap: 'Okla.',
        capital: 'Oklahoma City',
        population: 3850568,
        size: 69899
    },
    {
        name: 'Oregon',
        abbreviation: 'OR',
        ap: 'Ore.',
        capital: 'Salem',
        population: 3930065,
        size: 98379
    },
    {
        name: 'Pennsylvania',
        abbreviation: 'PA',
        ap: 'Pa.',
        capital: 'Harrisburg',
        population: 12773801,
        size: 46054
    },
    {
        name: 'Rhode Island',
        abbreviation: 'RI',
        ap: 'R.I.',
        capital: 'Providence',
        population: 1051511,
        size: 1545
    },
    {
        name: 'South Carolina',
        abbreviation: 'SC',
        ap: 'S.C.',
        capital: 'Columbia',
        population: 4774839,
        size: 32020
    },
    {
        name: 'South Dakota',
        abbreviation: 'SD',
        ap: 'S.D.',
        capital: 'Pierre',
        population: 844877,
        size: 77116
    },
    {
        name: 'Tennessee',
        abbreviation: 'TN',
        ap: 'Tenn.',
        capital: 'Nashville',
        population: 6495978,
        size: 42144
    },
    {
        name: 'Texas',
        abbreviation: 'TX',
        ap: 'Texas',
        capital: 'Austin',
        population: 26448193,
        size: 268596
    },
    {
        name: 'Utah',
        abbreviation: 'UT',
        ap: 'Utah',
        capital: 'Salt Lake City',
        population: 2900872,
        size: 84897
    },
    {
        name: 'Vermont',
        abbreviation: 'VT',
        ap: 'Vt.',
        capital: 'Montpelier',
        population: 626630,
        size: 9616
    },
    {
        name: 'Virginia',
        abbreviation: 'VA',
        ap: 'Va.',
        capital: 'Richmond',
        population: 8260405,
        size: 42775
    },
    {
        name: 'Washington',
        abbreviation: 'WA',
        ap: 'Wash.',
        capital: 'Olympia',
        population: 6971406,
        size: 71298
    },
    {
        name: 'West Virginia',
        abbreviation: 'WV',
        ap: 'W.Va.',
        capital: 'Charleston',
        population: 1854304,
        size: 24230
    },
    {
        name: 'Wisconsin',
        abbreviation: 'WI',
        ap: 'Wis.',
        capital: 'Madison',
        population: 5742713,
        size: 65496
    },
    {
        name: 'Wyoming',
        abbreviation: 'WY',
        ap: 'Wyo.',
        capital: 'Cheyenne',
        population: 582658,
        size: 97813
    }
];

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

/**
 * Exclude states by name or abbreviation.
 * @memberof StatesCollection.prototype
 * @param {...string} excluded - State names or abbreviations, repeated or in an array
 * @instance
 * @example
 * fifty.states().exclude('Arizona', 'AR').toObject();
 * fifty.states().exclude(['Arizona', 'AR']).toObject(); // Also accepts arrays
 * // Returns { AL: 'Alabama', AK: 'Alaska', CA: 'California', ... }
 * 
 */

StatesCollection.prototype.exclude = function(excluded) {

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


/**
 * Orders the StatesCollection by the given data key, in the given order.
 * @memberof StatesCollection.prototype
 * @instance
 * @param {string} key data key
 * @param {string} order data order ('asc' or 'desc')
 * @example
 * // Returns { CA: 'California', TX: 'Texas', NY: 'New York', ... }
 * fifty.states().orderBy('population', 'desc').toObject();
 * @returns {StatesCollection} StatesCollection instance in the desired order.
 */

StatesCollection.prototype.orderBy = function(key, order) {
    if (order == undefined) {
        order = 'asc';
    }
    this.states = orderBy(this.states, key, order);
    return this;
}


/**
 * Resets the StatesCollection to the default dataset, undoing all changes.
 * @memberof StatesCollection.prototype
 * @example
 * let myStates = fifty.states().contiguous();
 * // myStates.toObject() == { AL: 'Alabama', AZ: 'Arizona', AR: 'Arkansas', ... }
 * myStates.reset().toObject();
 * // Returns { AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', ... }
 * @returns {StatesCollection} StatesCollection instance with all changes reset
 */

StatesCollection.prototype.reset = function() {
    this.states = data;
    return this;
}


/**
 * Removes Alaska and Hawaii from the current StatesCollection.
 * @memberof StatesCollection.prototype
 * @instance
 * @example
 * // Returns { AL: 'Alabama', AZ: 'Arizona', AR: 'Arkansas', ... }
 * fifty.states().contiguous().toObject();
 * @returns {StatesCollection} StatesCollection instance with non-contiguous states removed
 */

StatesCollection.prototype.contiguous = function() {
    return this.exclude('AK', 'HI');
}

StatesCollection.prototype.addDataset = function(name, dataset) {
    for (let i = 0; i < this.states.length; i++) {
        if (!dataset.hasOwnProperty(this.states[i].abbreviation)) {
            this.states[i][name] = null;
            continue;
        }
        this.states[i][name] = dataset[this.states[i].abbreviation];
    }
    return this;
}


/**
 * Abbreviates the full name of a state to its two-character postal abbreviation.
 * @memberof Fifty
 * @example
 * // returns "WA"
 * fifty.abbreviate('Washington');
 * @param {string} name state name
 * @returns {string} that state, abbreviated
 */

function abbreviate(name) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.toLowerCase() == name.toLowerCase()) {
            return data[i].abbreviation;
        }
    }
    return name;
}


/**
 * Unabbreviates a two-character postal abbreviation to a full state name.
 * @memberof Fifty
 * @example
 * // returns "Texas"
 * fifty.unabbreviate('TX');
 * @param {string} abbr state abbreviation
 * @returns {string} that state, unabbreviated
 */

function unabbreviate(abbr) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].abbreviation.toLowerCase() == abbr.toLowerCase()) {
            return data[i].name;
        }
    }
    return abbr;
}

module.exports.abbreviate = abbreviate;
module.exports.unabbreviate = unabbreviate;
