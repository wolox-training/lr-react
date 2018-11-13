import { isArray } from './utils';

export function min(expect, ...c) {
  if (expect === undefined) {
    return expect;
  } else {
      if (isArray(expect) === false) {
        return Math.min(expect, ...c);  
      } else {  
        const [a, b] = expect;
        return Math.min(a, b);
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
  const c = b.concat( a );
  return c;
}

export function filterAttribs(expect) {
  const { a, b, ...c} = expect;
  return c;
}
