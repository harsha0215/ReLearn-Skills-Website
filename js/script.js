const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
toggle?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const form = document.querySelector('#leadForm');
const statusText = document.querySelector('#formStatus');
const submitBtn = document.querySelector('#submitBtn');

form?.addEventListener('submit', async function (e) {
  e.preventDefault();
  
  const accessKeyInput = form.querySelector('input[name="access_key"]');
  if (!accessKeyInput || accessKeyInput.value === 'YOUR_ACCESS_KEY_HERE') {
    statusText.style.color = '#e11d48';
    statusText.textContent = 'Please replace YOUR_ACCESS_KEY_HERE in index.html with your free Web3Forms access key.';
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  statusText.style.color = 'inherit';
  statusText.textContent = 'Submitting your enquiry...';

  const formData = new FormData(form);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      statusText.style.color = '#16a34a';
      statusText.textContent = 'Thank you! Your enquiry has been sent directly to ReLearn Skills.';
      form.reset();
    } else {
      statusText.style.color = '#e11d48';
      statusText.textContent = data.message || 'Submission failed. Please try again.';
    }
  } catch (error) {
    statusText.style.color = '#e11d48';
    statusText.textContent = 'Network error. Please check your connection or contact us by phone.';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Enquiry';
  }
});
