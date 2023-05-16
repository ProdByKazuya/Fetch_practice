const list = document.querySelector('ul')

fetch('https://api.thedogapi.com/v1/breeds')
    .then(response => response.json())
    .then(dogs => {
        dogs.forEach(breeds => {
            const li = document.createElement('li')
            li.innerHTML = `<li>${breeds.name}</li>`
            list.append(li)
        })
    })
    .catch(error => {
        console.log(error)
    })