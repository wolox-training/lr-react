import { isArray, mapPairArray } from './utils';

function pow(...args) {
  if (!isArray(args) || args.length < 2) {
    return undefined;
  }
  if (args.length === 2 && !isArray(args[0]) && !isArray(args[1])) {
    return args[0] ** args[1];
  }
  return args.map(mapPairArray);
}

export default pow;
