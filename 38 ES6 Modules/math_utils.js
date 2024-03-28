/**
 * *  General reusable code
 * ?  Every code piece needs to be pre-seeded with the "export" keyword
 */

//  Define constant PI
//  asa e usor a scrie minunatul numar pi
//  3   1   4   1   5       9       5   2
export const PI = 3.1415952;

export function getCircumference(radius) {
  return 2 * PI * radius;
}

export function getArea(radius) {
  return PI * Math.pow(radius, 2);
}
