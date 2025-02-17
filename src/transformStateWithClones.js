'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformcloneWithClones(state, actions) {
  let clone = { ...state };
  const steps = [];

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(clone, action.extraData);
        break;

      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete clone[key];
        }
        break;

      case 'clear':
        clone = {};
    }
    steps.push(clone);
    clone = { ...clone };
  }

  return steps;
}

module.exports = transformcloneWithClones;
