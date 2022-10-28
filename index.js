const heading = document.createElement('h1')
    heading.textContent = 'Interactive Map'


//create mapDiv to place map
const mapDiv = document.createElement('div')
    mapDiv.id = 'map'

//places to select
let placeArr =['Coffee', 'Restaurant', 'Hotel', 'Market']
//create select and label tags for the 

const infoForm = document.createElement('form')
const labelTag = document.createElement('label')
    labelTag.for = 'selectPlace'
    labelTag.textContent = 'Where would you like to go:'
const selectTag = document.createElement('select')
    selectTag.name = 'place'
    selectTag.id = 'selectPlace'
for (let i = 0; i < placeArr.length; i++) {
    const placeOpt = document.createElement('option')
        placeOpt.value = placeArr[i]
        placeOpt.textContent = placeArr[i]    
    selectTag.append(placeOpt)
}
const submitForm = document.createElement('input')
    submitForm.type = 'submit'
    submitForm.value = 'Go'
    submitForm.id = 'submit'
 



infoForm.append(labelTag, selectTag,submitForm)
document.body.append(heading, infoForm, mapDiv)

