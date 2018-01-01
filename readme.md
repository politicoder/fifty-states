# Fifty States

Lightweight module for filtering, sorting, reordering, and abbreviating the 50 United States and D.C.

Initialize:

```javascript
const fifty = require('fifty-states');
const states = fifty.states();
```

Get an abbreviation/name keyed object of the current set:

```javascript
states.toObject();
// Returns {AL: 'Alabama', AK: 'Alaska', ... }
```

Get an array of state objects including whatever extra data you need. Includes name and abbreviation by default:

```javascript
states.toArray('population', 'size');

/* Returns [
    { name: 'Alabama',
        abbreviation: 'AL',
        population: 4833722,
        size: 52420 },
    { name: 'Alaska',
        abbreviation: 'AK',
        population: 735132,
        size: 665384 },
        ...
] */
```

Include only contiguous states:

```javascript
states.contiguous().toArray();

// Returns [ { name: 'Alabama', abbreviation: 'AL' }, { name: 'Arizona', abbreviation: 'AZ' }, ... ]
```

Pass a filter function (takes a state as an argument, returns true/false) to narrow results:

```javascript
/* Get all states that end with "O" */
states.filter(function(state) {
    let letters = state.name.split('');
    let lastCharacter = letters[letters.length - 1];
    return (lastCharacter === 'o');
}).toObject();

// Returns { CO: 'Colorado', ID: 'Idaho', NM: 'New Mexico', OH: 'Ohio' }
```

Order results by any available data set:

```javascript
states.orderBy('population', 'desc').toObject();
// Returns { CA: 'California', TX: 'Texas', NY: 'New York', ... }
```

Exclude states by name or abbreviation:

```javascript
states.exclude('Arizona', 'AR').toObject();
states.exclude(['Arizona', 'AR']).toObject(); // Also accepts arrays

// Returns { AL: 'Alabama', AK: 'Alaska', CA: 'California', ... }
```

Chain the above methods:

```javascript
/* Get all contiguous states (except Wyoming) with less than 1,000,000 citizens and retrieve an array with population included, ordered by population */

states.contiguous().exclude('WY').filter(function(state) {
    return (state.population < 1000000);
}).orderBy('population', 'asc').toArray('population');

// Returns [ { name: 'Wyoming', abbreviation: 'WY', population: 582658 }, { name: 'Vermont', abbreviation: 'VT', population: 626630 }, { name: 'Washington, DC', abbreviation: 'DC', population: 646449 }, ... ]
```

Reset all filters and orders and return to the default 50 states + DC set:

```
states.reset();
```

(Un)abbreviate state names directly from the module:

```
fifty.abbreviate('Washington'); // Returns "WA"
fifty.unabbreviate('TX'); // Returns "Texas"
```

View the [complete documentation here](documentation.md).

Currently, available data sets are:

* `name`: (string) Full state name
* `abbreviation`: (string) Two-character postal abbreviation
* `ap`: (string) Associated Press abbreviation, e.g. "Calif."
* `capital`: (string) The state's capital city
* `population`: (integer) As of 2010 census
* `size`: (integer) In square miles

If you don't care about any of the above and are just looking for a name/abbreviation JSON object, [states.json](states.json) is also included:

```json
{
    "AL": "Alabama",
    "AK": "Alaska",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "FL": "Florida",
    "GA": "Georgia",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PA": "Pennsylvania",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VA": "Virginia",
    "WA": "Washington",
    "DC": "Washington, DC",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}
```