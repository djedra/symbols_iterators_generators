export default function canIterate(obj) {
  try {
    if (typeof obj[Symbol.iterator] === 'function') {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}
