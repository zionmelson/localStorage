export function setupCounter(element) {
  let counter = localStorage.getItem("myCount") || 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
    localStorage.setItem("myCount", counter);
  };
  element.addEventListener("click", () => setCounter(++counter));
  setCounter(counter);
}
