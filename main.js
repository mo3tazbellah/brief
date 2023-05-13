headers = ['moataz', 'bellah', 'projects', 'brief']
const h1 = document.querySelector('h1')
let x = 0;
let i = 0;
let txt = header()

function typing() {
    if (i < txt.length) {
        h1.textContent += txt.charAt(i)
        i++
    } else {
        i = 0;
        txt = header()
        h1.textContent = `${txt.charAt(i)}`
        i++
    }
    
    setTimeout(typing, 250)
}
typing()

function header() {
    let currHeader
    if (x < headers.length) {
        currHeader = headers[x]
        x++;
    } else {
        x = 0;
        currHeader = headers[x]
        x++;
    }
    return currHeader;
}

console.log('123'.charAt(4))