const renderDetails = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    let skinData = await utils.requestByIdWithComents(id);
    console.log(skinData)
    if(!skinData.length) {
      skinData = await utils.requestById(id)
      console.log(skinData)
    }
    let htmlField = `
        <div class="card">
            <img src="${skinData[0].image_urls}" alt="${skinData[0].formatted_name}" class="content-img">
            <h3>${skinData[0].formatted_name}</h3>
            <p>${skinData[0].description}</p>
        </div>`;
    
    skinData.forEach(Comment => {
      console.log(Comment)
        if(Comment.user_name) {
          htmlField = htmlField + `<div class="card">
              
              <h3>${Comment.user_name}</h3>
              <p>${Comment.description_comment}</p>
          </div>`;
        }
    })
        
    const content = document.getElementById('content');
    content.insertAdjacentHTML('beforeend', htmlField);

        // coments
    
}

window.onload = () => { 
    renderDetails()
}
    