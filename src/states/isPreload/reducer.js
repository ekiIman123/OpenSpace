/**
 * @TODO: Define reducer for the isPreLoad state
 */

import { ActionType } from "./action";

function isPreloadReducer(isPreLoad = true, action = {}) {
  switch (ActionType) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload.isPreLoad;
    default:
      return isPreLoad;
  }
}

export default isPreloadReducer;
