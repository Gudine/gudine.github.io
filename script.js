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

function updateGroupLang(group, elems) {
  for (let i = 0; i < elems.length; i += 1) {
    if (langData[lang][group][i] === null) {
      elems[i].innerHTML = langData['pt'][group][i];
    } else {
      elems[i].innerHTML = langData[lang][group][i];
    }
  }
}

function updateLang() {
  const headers = [...document.querySelectorAll('h1, h2, h3')];
  const toc = [...document.querySelectorAll('.dropdown a')];
  const content = [...document.querySelectorAll('.textblock p')];

  updateGroupLang('headers', headers);
  updateGroupLang('toc', toc);
  updateGroupLang('content', content);

  updateProjectsAlt();
}

function changeLang(ev) {
  let newLang = ev.target.innerText.toLowerCase();
  if (newLang != lang) {
    lang = newLang;
    updateLang();
  }
}

function updateProjectsAlt() {
  let projects = [...document.querySelectorAll('.projectsgrid section')];
  for (proj of projects) {
    let name = proj.children[0].children[0].children[1].innerText;
    proj.children[2].children[0].children[0].alt = name;
  }
}
