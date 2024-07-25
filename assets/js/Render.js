var content = document.getElementById('content');
content.innerHTML = '<h3>Carregando</h3>';

const Render = async () => {
    const firstElements = window.firstElements || [];
    console.log(firstElements)
    content.innerHTML = '';
    firstElements.forEach(first => {

        const htmlField = `
        <div class="card">
            <img src="${first.image_urls}" alt="${first.formatted_name}" class="content-img">
            <h3>${first.formatted_name}</h3>
            <p>${first.description}</p>
            <button name="button" id="${first.id}" >Mais Detalhes</button>
        </div>`;
                
        var content = document.getElementById('content');
        content.insertAdjacentHTML('beforeend', htmlField);
        
        const button = document.getElementById(first.id);
        button.style.cursor = 'pointer';
        button.onclick = () => {
            console.log('click');
            window.location.href = `pages/details.html?id=${first.id}`;
        }        
    })
}
    


//window.onload = () => { 
    Render()
//}

