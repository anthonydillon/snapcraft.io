/**
 * Debounce
 * @param {Function} func Function to run.
 * @param {Number} wait Time to wait between tries.
 * @param {Boolean} immediate Immediately call func.
 */
export default function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}