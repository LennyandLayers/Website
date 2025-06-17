document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(() => {
        window.location.href = 'thankyou.html';
      })
      .catch(() => {
        alert('Oops! Something went wrong. Please try again.');
      });
  });
});
