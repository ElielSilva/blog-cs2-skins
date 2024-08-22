const buttonProxPage = document.getElementById('button__get__prox__page');
const buttonAntPage = document.getElementById('button__get__ant__page');
const spanShowNumberPage = document.getElementById('show__number__page');

buttonProxPage.addEventListener('click' ,() => {
  spanShowNumberPage.innerText = parseInt(spanShowNumberPage.innerText) + 1
  changePage(parseInt(spanShowNumberPage.innerText))
  window.utilsRender.Render(window.firstElements)
});

buttonAntPage.addEventListener('click' ,() => {
  spanShowNumberPage.innerText = parseInt(spanShowNumberPage.innerText) - 1
  changePage(parseInt(spanShowNumberPage.innerText))
  window.utilsRender.Render(window.firstElements)
});