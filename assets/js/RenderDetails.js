window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const allElements = window.arraySkins;
    allElements.filter(a => a.formatted_name === name).forEach(element => {
        const htmlField = `
        <div class="card">
            <img src="${element.image_urls[0]}" alt="${element.formatted_name}" class="content-img">
            <h3>${element.formatted_name}</h3>
            <p>${element.description}</p>
        </div>`;
        
        var content = document.getElementById('content');
        content.insertAdjacentHTML('beforeend', htmlField);

        // coments
    });
    
}