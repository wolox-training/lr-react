
export function isArray(aPossibleArray) {
  return aPossibleArray.constructor === Array;
}

export function mapPairArray(pair) {
  return isArray(pair) && pair.length === 2 ? pair[0] ** pair[1] : undefined;
}
