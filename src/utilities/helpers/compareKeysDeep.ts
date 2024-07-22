// import _isEqual from "lodash/isEqual";
// import _keys from "lodash/keys";
// import _isObject from "lodash/isObject";

// export function compareKeysDeep(obj1: any, obj2: any): boolean {
//   // If both parameters are not objects, return true if they are equal
//   if (!_isObject(obj1) || !_isObject(obj2)) {
//     return obj1 === obj2;
//   }

//   const keys1 = _keys(obj1).sort();
//   const keys2 = _keys(obj2).sort();

//   // If the number of keys is different, return false
//   if (!_isEqual(keys1.length, keys2.length)) {
//     return false;
//   }

//   // Check if the keys are equal
//   if (!_isEqual(keys1, keys2)) {
//     return false;
//   }

//   // Recursively check the nested objects
//   for (const key of keys1) {
//     if (!compareKeysDeep((obj1 as any)[key], (obj2 as any)[key])) {
//       return false;
//     }
//   }

//   return true;
// }
