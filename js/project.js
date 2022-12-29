const project = document.querySelectorAll('.project');
const projectBackImg = document.querySelectorAll('.project > .background-no-active-img');
const projectContent = document.querySelectorAll('.project > .project-content');

for (let i = 0; i < project.length; i++) {
    project[i].addEventListener('mouseover', () => {
        project[i].classList.add('active');
        projectContent[i].classList.add('active');
        projectBackImg[i].style.display = 'none';
    })
    project[i].addEventListener('mouseout', () => {
        project[i].classList.remove('active');
        projectContent[i].classList.remove('active');
        projectBackImg[i].style.display = 'block';
    })
}