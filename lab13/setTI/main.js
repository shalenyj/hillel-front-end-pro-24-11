const images = [
  '1.jpeg',
  '2.webp',
  '3.jpeg',
  '4.jpeg',
  '5.png',
]

let position = -1;
const image = document.getElementsByTagName('img')[0];

function setImageSrc(){
  if(position < images.length -1 ){
    position ++
  } else {
    position = 0;
  }
  image.src = `../images/${images[position]}`;
}

setImageSrc()

//setTimeout(setImageSrc, 2000);

//const imageInterval = setInterval(setImageSrc, 500);

// clearInterval(imageInterval)