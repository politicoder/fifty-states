const orderBy = require('lodash.orderby');
const data = require('./data.js').states;

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



StatesCollection.prototype.toObject = function() {
    let output = {};
    for (let i = 0; i < this.states.length; i++) {
        output[this.states[i].abbreviation] = this.states[i].name;
    }
    return output;
}

/**
 * Get an array of state objects including whatever extra data you need. Includes name and abbreviation by default.
 * @memberof StatesCollection.prototype
 * @instance
 * @param {...string} bits The data keys needed in addition to name and abbreviation.
 * @example
 * fifty.states().toArray('population', 'size');
 * // Returns [{ name: 'Alabama', abbreviation: 'AL', population: 4833722, size: 52420 }, { name: 'Alaska', abbreviation: 'AK', population: 735132, size: 665384 }, ... ]
 */

StatesCollection.prototype.toArray = function(bits) {
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

StatesCollection.prototype.getState = function(stateName) {
    stateName = alwaysAbbreviation(stateName);
    for (let i = 0; i < this.states.length; i++) {
        if (this.states[i].abbreviation == stateName) {
            return this.states[i];
        }
    }
    return null;
}

function alwaysAbbreviation(stateName) {
    if (stateName.length > 2) {
        return abbreviate(stateName);
    }
    return stateName.toUpperCase();
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
