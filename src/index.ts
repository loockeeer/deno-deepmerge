function isObject(x: any): boolean {
  return (x && typeof x === "object" && !Array.isArray(x));
}

export default function deepmerge(target: any, ...sources: any[]): any {
  if (!isObject(target)) throw Error("Target must be an object");
  if (!sources.every((el) => isObject(el))) {
    throw Error("Sources must be an Array of Objects");
  }

  if (!sources.length) return target;

  const currentSource = sources.shift();

  for (const key of Object.keys(currentSource)) {
    if (isObject(currentSource[key])) {
      if (!target[key]) target[key] = currentSource[key];
      deepmerge(target[key], currentSource[key]);
    } else {
      Object.assign(target, { [key]: currentSource[key] });
    }
  }

  return deepmerge(target, ...sources);
}