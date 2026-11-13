// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Modulo contatti: compone una email precompilata verso lo studio
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const v = (id) => document.getElementById(id).value.trim();
    const subject = `[Sito web] ${v('oggetto')}`;
    const body =
      `Nome: ${v('nome')}\n` +
      `Cognome: ${v('cognome')}\n` +
      `Email: ${v('email')}\n\n` +
      `${v('messaggio')}`;
    window.location.href =
      'mailto:info@laurailari.com?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
    const note = document.getElementById('form-note');
    if (note) note.textContent = 'Si sta aprendo il tuo programma di posta con il messaggio già compilato. Grazie per averci contattato.';
  });
}
