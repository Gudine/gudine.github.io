let lang = 'pt';

const menubars = document.querySelector('.menubars');
const dropdown = document.querySelector('.dropdown');
const langBtns = [...document.querySelectorAll('.lang div')];

document.body.addEventListener('click', function() {
  menubars.classList.remove('active');
});
dropdown.addEventListener('click', function(ev) {
  ev.stopPropagation();
});
menubars.addEventListener('click', function(ev) {
  menubars.classList.toggle('active');
  ev.stopPropagation();
});

langBtns.forEach((btn) => btn.addEventListener('click', changeLang))

function changeLang(ev) {
  let newLang = ev.target.innerText.toLowerCase();
  if (newLang != lang) {
    lang = newLang;
    updateLang();
  }
}

function updateLang() {
  const headers = [...document.querySelectorAll('h1, h2, h3')];
  const toc = [...document.querySelectorAll('.dropdown a')];
  const content = [...document.querySelectorAll('.textblock p')];

  updateGroupLang('headers', headers);
  updateGroupLang('toc', toc);
  updateGroupLang('content', content);
}

function updateGroupLang(group, elems) {
  for (let i = 0; i < elems.length; i += 1) {
    if (langData[lang][group][i] === null) {
      elems[i].innerHTML = langData['pt'][group][i];
    } else {
      elems[i].innerHTML = langData[lang][group][i];
    }
  }
}
