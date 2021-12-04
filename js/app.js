console.log("hello watch");
const watchImage = document.getElementById("watch-img");

const blackWatch = () => {
 watchImage.src = "./images/black-watch.png";
};
const redWatch = () => {
 watchImage.src = "./images/red-watch.png";
};
const peachWatch = () => {
 watchImage.src = "./images/peach-watch.png";
};
const purpleWatch = () => {
 watchImage.src = "./images/purple-watch.png";
};

setInterval(() => {
 const createTime = new Date();
 const hours = createTime.getHours();
 const minutes = createTime.getMinutes();
 const seconds = createTime.getSeconds();
 const time = `${hours}:${minutes}:${seconds}`;
 document.getElementById("time").innerText = time;
}, 1000);
