const renderDetails = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    let skinData = await window.utilsApi.requestByIdWithComents(id);
    if(!skinData.length) {
      skinData = await window.utilsApi.requestById(id)
      console.log(skinData)
    }

    let htmlField = `
        <div class="card-details">
            <h1>${skinData[0].formatted_name}</h1>
            <img src="${skinData[0].image_urls}" alt="${skinData[0].formatted_name}" class="content-img">
            <p>${skinData[0].description}</p>
            <p>Quality: ${skinData[0].quality}</p>
            <p>Type: ${skinData[0].weapon_type}</p>
            <p>is stattrak: ${skinData[0].stattrak_available}</p>
        </div>`;
    
    skinData.forEach(Comment => {
        if(Comment.user_name) {
          htmlField = htmlField + `<div class="card">
              
              <h3>${Comment.user_name}</h3>
              <p>${Comment.description_comment}</p>
          </div>`;
        }
    })
        
    const content = document.getElementById('content');
    content.insertAdjacentHTML('beforeend', htmlField);
}

window.onload = () => { 
    renderDetails()
}
    