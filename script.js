//je déclare mes variables
let listImages = Array.from(document.querySelectorAll("header > div"));
console.log('variable listimages');
//array est un tableau
let interval = setInterval(imageSuivante, 1000);
console.log('variable interval');
//1000 est en millisecondes ce qui fait 1 secondes

//je donne l'action
function imageSuivante(){
    let element = listImages.shift()
    element.style.opacity = "0"
    listImages.push(element)
    listImages[0].style.opacity = "1"
 };//les images apparaissent une après l'autre toute les 1 seconde