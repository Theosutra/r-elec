// Envoi des formulaires de devis en arrière-plan (Formspree).
// Sans JS, le formulaire reste un POST classique : Formspree affiche alors sa propre confirmation.

const OK_CLASS = 'rounded-xl px-3.5 py-3 text-sm font-medium bg-[#e8f5ec] text-[#14532d]';
const ERR_CLASS = 'rounded-xl px-3.5 py-3 text-sm font-medium bg-[#fdeee7] text-[#7c2d12]';
const MAX_FILE_MB = 8;

function init(form: HTMLFormElement) {
  if (form.dataset.ready) return;
  form.dataset.ready = '1';
  const status = form.querySelector<HTMLElement>('[data-status]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const phone = form.dataset.phone ?? '';
  if (!status || !button) return;

  const show = (ok: boolean, text: string) => {
    status.textContent = text;
    status.className = ok ? OK_CLASS : ERR_CLASS;
    status.focus();
  };
  const busy = (on: boolean) => {
    button.disabled = on;
    button.querySelector('.send-icon')?.classList.toggle('hidden', on);
    button.querySelector('.spin-icon')?.classList.toggle('hidden', !on);
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.action.includes('TODO_CLIENT')) {
      show(false, `Le formulaire n’est pas encore relié. Appelez-nous au ${phone}.`);
      return;
    }
    const file = form.querySelector<HTMLInputElement>('input[type="file"]')?.files?.[0];
    if (file && file.size > MAX_FILE_MB * 1024 * 1024) {
      show(false, `La photo dépasse ${MAX_FILE_MB} Mo. Choisissez une image plus légère, ou envoyez-la après notre appel.`);
      return;
    }
    busy(true);
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      show(true, 'Merci, votre demande est bien partie. Nous vous rappelons très vite.');
    } catch {
      show(false, `L’envoi n’a pas abouti. Réessayez, ou appelez-nous au ${phone}.`);
    } finally {
      busy(false);
    }
  });
}

document.querySelectorAll<HTMLFormElement>('form[data-quote-form]').forEach(init);
