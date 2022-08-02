const INITIAL = 0;

export function setupCounter(element, clear) {
  let counter = localStorage.getItem("myCount") || 0;
  const setCounter = (count) => {
    localStorage.setItem("myCount", counter);
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  element.addEventListener("click", () => setCounter(++counter));
  setCounter(counter);

  clear.addEventListener("click", () => {
    localStorage.removeItem("myCount");
    counter = INITIAL;
    setCounter(counter);
  });
}
