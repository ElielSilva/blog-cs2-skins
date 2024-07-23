window.onload = () => {
    const firstElements = window.firstElements;
    firstElements.forEach(first => {

        const htmlField = `
        <div class="card">
            <img src="${first.image_urls[0]}" alt="${first.formatted_name}" class="content-img">
            <h3>${first.formatted_name}</h3>
            <p>${first.description}</p>
            <button name="button" id="${first.formatted_name}" >Mais Detalhes</button>
        </div>`;
                
        var content = document.getElementById('content');
        content.insertAdjacentHTML('beforeend', htmlField);
        
        const button = document.getElementById(first.formatted_name);
        button.style.cursor = 'pointer';
        button.onclick = () => {
            console.log('click');
            window.location.href = `pages/details.html?name=${first.formatted_name}`;
        }        
    })
    
}