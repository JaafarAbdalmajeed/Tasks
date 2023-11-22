document.addEventListener('DOMContentLoaded', () => {
    let tasks = document.querySelectorAll('.task')
    tasks.forEach(task => {
        task.addEventListener('click', () => {
            let link =  task.getAttribute('data-link')
            let linkWebSite = link
            if(link){
                //window.location.href = linkWebSite
                window.open(link);
            } else {
                console.log('not found 404')
            }
        })
    });
})