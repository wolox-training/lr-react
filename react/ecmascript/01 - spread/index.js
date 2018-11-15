import { isArray } from './utils';

export function min(expect, ...c) {
  if (expect === undefined) {
    return expect;
  } 
  return isArray(expect) ? Math.min(...expect) : Math.min(expect, ...c);
}

export function copy(example) {
  if (isArray(example)) {
    return [...example];
  }
  return {...example};
}

export function reverseMerge(a, b) {
  return b.concat( a );
}

export function filterAttribs(expect) {
  const { a, b, ...c} = expect;
  return c;
}
