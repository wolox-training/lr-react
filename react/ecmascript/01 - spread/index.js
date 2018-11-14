import { isArray } from './utils';

export function min(expect, ...c) {
  if (expect === undefined) {
    return expect;
  } else {
      if (!isArray(expect)) {
        return Math.min(expect, ...c);  
      } else {  
        return Math.min(...expect);
      }
  }
}

export function copy(example) {
  if (isArray(example) === false){
    example = { a: 1, b: 2 };
    return example;
  } else {
    example = [ ];
    return example;
  } 
}

export function reverseMerge(a, b) {
  return b.concat( a );
}

export function filterAttribs(expect) {
  const { a, b, ...c} = expect;
  return c;
}
