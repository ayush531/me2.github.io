let clock = 360,
  mill = clock / 360,
  sec = clock / 60,
  min = clock / 60,
  hrs = clock / 12,
  r = 90;

setInterval(() => {
  let date = new Date();
  date.getTime();
  gsap.to(".hour-hand", {
    background: "red",
    rotation: date.getHours() * hrs + r,
    scale: 1
  });
  gsap.set(".min-hand", { rotation: date.getMinutes() * min + r, scale: 1 });
  gsap.set(".second-hand", { rotation: date.getSeconds() * sec + r, scale: 1 });
  gsap.set(".mill-hand", {
    rotation: date.getMilliseconds() * mill + r,
    scale: 1
  });

  return;
}, mill);
