
const API_URL='https://dog.ceo/api/breeds/image/random/3';
const Random = document.getElementById("image")
const run = document.querySelector('button')

async function getRandomDogs(){
  Random.innerHTML=""
  const response = await fetch(API_URL);
  const json = await response.json(); 
  console.log(json.message);

  json.message.forEach(element => {    
    const create = document.createElement("div")
    create.classList.add("column")

    const Dogimg = document.createElement("img")
    Dogimg.src = element
    create.appendChild(Dogimg)

    Random.appendChild(create)

  });

}

run.addEventListener('click',getRandomDogs)


