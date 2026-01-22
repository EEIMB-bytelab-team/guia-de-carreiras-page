
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== Menu ativo conforme a seção =====
const sections = document.querySelectorAll('section, header');
const menuLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===== Botão voltar ao topo =====
const btnTop = document.createElement('button');
btnTop.innerText = '⬆ Topo';
btnTop.id = 'btnTop';
document.body.appendChild(btnTop);

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  btnTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
