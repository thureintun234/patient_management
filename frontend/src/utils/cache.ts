const np = import.meta.env.VITE_CACHE_KEY;

export function storeCache(name : string, value : string) {
  localStorage.setItem(`${np}${name}`, value);
}

export function getCache(name: string) {
  return localStorage.getItem(`${np}${name}`);
}

export function removeCache(name: string) {
  return localStorage.removeItem(`${np}${name}`);
}
