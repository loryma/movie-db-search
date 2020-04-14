function formatRuntime(time) {
  const mins = time % 60;
  const minsMin = mins ? ` ${mins}min` : "";
  const hours = Math.floor(time / 60);
  const hoursHr = hours ? `${hours}hr` : "";

  return `${hoursHr}${minsMin}`;
}

export default formatRuntime;
