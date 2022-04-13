fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(data => unpack(data))

const unpack = (arrayObj) => {
    
// add images to "ramen-menu" div
    for (item of arrayObj){
        const ramenMenu = document.querySelector('#ramen-menu')
        let newImg = document.createElement('img')
        newImg.src = item.image
        ramenMenu.appendChild(newImg)

        newImg.addEventListener('click', (e) => {
        let imgPlace = document.querySelector('#placeholderImage')
        console.log(imgPlace)
        imgPlace.src = e.target.src

        let theName = document.querySelector('#h2')
        theName.textContent = item.name
        console.log(item.name)

        let restaurant = document.querySelector('#h3')
        restaurant.textContent = item.restaurant
        console.log(item.restaurant)

        let rating = document.querySelector('#rating-display')
        rating.textContent = item.rating

        let comment = document.querySelector('#comment-display')
        comment.textContent = item.comment
        })
    }
}

// create a new ramem from form submit
const form = document.querySelector('#new-ramen')
// Build Out submit
form.addEventListener('submit', (e) => {

const newName = document.querySelector('#new-name')
newName.textContent = e.target.value

const newRestaurant = document.querySelector('#new-restaurant')
newRestaurant.textContent = e.target.value

const newImage = document.querySelector('new-image')
newImage.srce = e.target.value

const newRating = document.querySelector('#new-rating')
newRating.textContent = e.target.value

const newComment = document.querySelector('#new-comment')
newComment.textContent = e.target.value

console.log(e)


// Append new form entry to document

})