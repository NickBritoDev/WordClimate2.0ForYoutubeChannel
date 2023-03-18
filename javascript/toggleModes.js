const toggleModeOn = document.querySelector('.toggleModeOn')
const toggleModeOff = document.querySelector('.toggleModeOff')
const htmlDark = document.querySelector('html')

toggleModeOff.addEventListener('click', () => {
    toggleModeOn.style.display = 'block'
    toggleModeOff.style.display = 'none'
    htmlDark.classList.add('dark')
})

toggleModeOn.addEventListener('click', () => {
    toggleModeOff.style.display = 'block'
    toggleModeOn.style.display = 'none'
    htmlDark.classList.remove('dark')
})