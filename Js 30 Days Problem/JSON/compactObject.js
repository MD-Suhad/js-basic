const compact = obj => {
   Object.fromEntries(
      Object.entries(obj).filter(([key,value]) =>Boolean(value))
   );
   compact({ a: 0, b: 1, c: false, d: '', e: 2, f: 'a', g: 'e' * 23, h: NaN });
}

console.log(compact);