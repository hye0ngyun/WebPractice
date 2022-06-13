const images = ["0.jpg", "1.jpg", "2.jpg"];
const todaysImageIndex = Math.floor(Math.random() * images.length);

const elemImage = document.createElement("img");
elemImage.src = `./img/${images[todaysImageIndex]}`;
document.body.append(elemImage);
