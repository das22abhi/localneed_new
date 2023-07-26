function handleClick(e, link) {
    e.preventDefault()
    let destination = document.querySelector(link)
    destination.scrollIntoView({
        behavior: 'smooth'
    })
}
export default handleClick;