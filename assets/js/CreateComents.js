const btn = document.getElementById('send-coment');

btn.addEventListener('click', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const user_name = document.getElementById('name').value;
    const description = document.getElementById('coment').value;
    const data = {
        user_name,
        description,
        id_skin: parseInt(id)
    }
    try {
        await window.utilsApi.createComent(data);
        window.location.reload(urlParams.set('id', id));
    } catch (error) {
        alert('Erro ao enviar comentário');
    }
})