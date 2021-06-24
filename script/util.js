function showTextAni(domID, type) {
  const el = document.getElementById(domID);
  const textList = el.innerHTML.split("");
  el.innerHTML = "";
  el.style.opacity = 1;
  if (type == 1) {
    el.style.overflow = "hidden";
  }
  textList.forEach((element) => {
    const text = document.createElement("div");
    text.style.opacity = 0;
    text.innerText = element;
    el.appendChild(text);
  });
  anime({
    targets: `#${domID} div`,
    easing: "easeOutSine",
    opacity: 1,
    ...textAniType(type)
  });
}

function textAniType (type) {
  return [
    {
      duration: 1500,
      delay: (el, index) => index * 80,
    },
    {
      duration: 600,
      delay: (el, index) => index * 10,
      translateY: [50, 0],
    },
    {
      duration: 150,
      delay: (el, index) => index * 150,
      translateY: [-100, 0]
    }
  ][type];
}