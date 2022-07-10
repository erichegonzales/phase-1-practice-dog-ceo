// console.log('%c HI', 'color: firebrick')

/*
Introduction
In this lab, you will write JavaScript to get images of dogs and a list of dog breeds from API's and 
render them to the DOM. You will also add some click behavior to the list elements and implement a filter.

Challenge 1
Add JavaScript that:
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
- on page load, fetches the images using the url above ⬆️
- parses the response as JSON
- adds image elements to the DOM for each 🤔 image in the array

Challenge 2
After the first challenge is completed, add JavaScript that:
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
- on page load, fetches all the dog breeds using the url above ⬆️
- adds the breeds to the page in the <ul> provided in index.html

Challenge 3
Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on 
any one of the <li>s, the font color of that <li> changes. This can be a color of your choosing.

Challenge 4
Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can 
filter breeds that start with a particular letter using a dropdown (Links to an external site.).

For example, if the user selects 'a' in the dropdown, only show the breeds with names that start 
with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can 
imagine expanding this to include the entire alphabet.
*/

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imageContainer = document.getElementById('dog-image-container')
const breedList = document.getElementById('dog-breeds')
const breedDropdown = document.getElementById('breed-dropdown')

let fetchImages = async () => {
    let response = await fetch(imgUrl)
    let images = await response.json()
    return images
}

fetchImages().catch(error => {
    console.log(error.message)
})

// for (const index of dogs.message) {
//     let img = document.createElement('img')
//     img.src = index
//     dogImageContainer.append(img)
// }

let displayImages = async () => {
    let images = await fetchImages()
    images.message.forEach((index) => {
        let img = document.createElement('img')
        img.src = index
        imageContainer.append(img)
    })
}
displayImages()

let fetchBreeds = async () => {
    let response = await fetch(breedUrl)
    let breeds = await response.json()
    return breeds
}

fetchBreeds().catch(error => {
    console.log(error.message)
})

const createListElement = (index) => {
    let li = document.createElement('li')
        li.append(index)
        breedList.append(li)
        li.style.cursor = 'pointer'
        li.addEventListener('click', () => {
            li.style.color = 'red'
        })
    return li
}

let displayBreeds = async () => {
    let breeds = await fetchBreeds()
    let breeds2 = Object.keys(breeds.message)
    breeds2.forEach((index) => {
        createListElement(index)
    })
    return breeds2
}
displayBreeds()

const clearBreedList = () => {
    breedList.innerHTML = ''
}

let letterChange = () => {
}
const filterBreedsByLetter = async () => {
    let breeds2 = await displayBreeds()
    breedDropdown.addEventListener('change', () => {
    breedLetter = breedDropdown.value
    clearBreedList()

    if (breedLetter === 'a') {
        let breedsA = breeds2.filter(word => word[0] === 'a')
        breedsA.forEach((index) => {
            createListElement(index)
        })
    }

    if (breedLetter === 'b') {
        let breedsB = breeds2.filter(word => word[0] === 'b')
        breedsB.forEach((index) => {
            createListElement(index)
        })
    }

    if (breedLetter === 'c') {
        let breedsC = breeds2.filter(word => word[0] === 'c')
        breedsC.forEach((index) => {
            createListElement(index)
        })
    }

    if (breedLetter === 'd') {
        let breedsD = breeds2.filter(word => word[0] === 'd')
        breedsD.forEach((index) => {
            createListElement(index)
        })
    }

    })
}
filterBreedsByLetter()

