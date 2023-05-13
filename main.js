headers = ['moataz', 'bellah', 'projects', 'brief']
const h1 = document.querySelector('h1')
const a = document.querySelector('.mail')
let x = 0;
let i = 0;
let txt = header()
const mail = `moatazbellah70@gmail.com`//24
let mailIndex = 0;


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

function mailType() {
    if (mailIndex < mail.length) {
        a.textContent += mail.charAt(mailIndex)
        mailIndex++
       setTimeout(mailType,75)
    }
}
mailType();

a.addEventListener('click',()=>{
    document.querySelector('audio').play()
})