import { isArray } from './utils';

export function min(expect, ...c) {
  if (expect === undefined) {
    return expect;
  } 
  return isArray(expect) ? Math.min(...expect) : Math.min(expect, ...c);
}

export function copy(...example) {
 if (example.length === 1 && !isArray(example[0])) {
   return Object.assign({}, example[0]);
 }
 return Object.assign([], example[0]);
}

export function reverseMerge(a, b) {
  return b.concat( a );
}

export function filterAttribs(expect) {
  const { a, b, ...c} = expect;
  return c;
}
