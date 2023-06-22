const projectsLinks = document.querySelectorAll('.container a')
const projectsNum = document.querySelectorAll('.no')
!(function () {
    for(let i = 0; i<projectsLinks.length;i++){
        projectsLinks[i].addEventListener('mouseenter',()=>{
            projectsNum[i].innerHTML = ''
            for(let hashIndex = 0 ; hashIndex < projectsLinks[i].textContent.length-2;hashIndex++){
            projectsNum[i].textContent += '#'
        }
            setTimeout(()=>{projectsNum[i].innerHTML = projectsLinks[i].textContent},50)
        })
        projectsLinks[i].addEventListener('mouseleave',()=>{
            projectsNum[i].innerHTML = ''
            projectsNum[i].textContent = '###'
            setTimeout(()=>{projectsNum[i].innerHTML = `0${i+1}/`},50)
        })
    }
})();