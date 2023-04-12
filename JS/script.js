
const API_URL = 'https://dog.ceo/api/breeds/image/random/3';

const Random = document.getElementById("imageArea")
const run = document.querySelector('button')

async function getRandomDogs() {
  run.innerText="Next"
  // removing previous images
  Random.innerHTML = ""
  
  // creating a element for loading text
  const loading = document.createElement("span")
  loading.innerHTML = '<div class="spinner-border"></div>'
  Random.appendChild(loading)
  
  // fetchimg api
  const response = await fetch(API_URL);
  
  // removing loading element
  Random.removeChild(loading)
  
  const Resjson = await response.json();
  
  // creating img element for each dog
   Resjson.message.forEach(element =>  {
    const dogImg = document.createElement("img")
    dogImg.className = "randomImageDog"
    dogImg.src = element
    Random.appendChild(dogImg)

  });
}
run.addEventListener('click', getRandomDogs)


