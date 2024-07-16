window.onload = () => {
    const firstElements = window.firstElements;
    firstElements.forEach(first => {

        const htmlField = `
        <div class="card">
            <h3>${first.formatted_name}</h3>
            <img src="${first.image_urls[0]}" alt="${first.formatted_name}">
            <p>${first.description}</p>
        </div>`;
        
        
        var content = document.getElementById('content');
        content.insertAdjacentHTML('beforeend', htmlField);
    })
    
}