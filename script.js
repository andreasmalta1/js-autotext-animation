const containerEl = document.querySelector(".container")

const careers = ['YouTuber', 'Web Developer', 'Freelancer', 'Instructor']

let careerIndex = 0
let charIndex = 0


const updatetext = () => {
    let career = careers[careerIndex]
    charIndex ++
    containerEl.innerHTML = `<h1>I am ${career.slice(0, 1) === 'I' ? 'an' : 'a'} ${career.slice(0,charIndex)}<h1>`
    if (charIndex === career.length){
        careerIndex++
        charIndex = 0
    }

    if (careerIndex === careers.length){
        careerIndex = 0
        charIndex = 0
    }
    setTimeout(updatetext, 400)
}

updatetext() 