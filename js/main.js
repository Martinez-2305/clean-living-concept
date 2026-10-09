(function () {
  'use strict';

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // "Ask about a ... clean" links pre-select that clean in the enquiry form
  var cleanSelect = document.getElementById('f-clean');

  document.querySelectorAll('[data-clean]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (cleanSelect) cleanSelect.value = link.getAttribute('data-clean');
    });
  });

  // Enquiry form: concept demo, validates but never sends anything
  var form = document.getElementById('enquiry-form');
  var status = document.getElementById('form-status');

  var messages = {
    'f-name': 'Enter your name.',
    'f-email': 'Enter an email address, like name@example.com.',
    'f-postcode': 'Enter your postcode.',
    'f-clean': 'Choose a clean.',
    'f-often': 'Choose how often.',
    'f-bedrooms': 'Choose the number of bedrooms.'
  };

  function clearError(field) {
    var error = document.getElementById(field.id + '-error');
    if (error) error.remove();
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
  }

  function showError(field) {
    clearError(field);
    var error = document.createElement('p');
    error.className = 'field__error';
    error.id = field.id + '-error';
    error.textContent = messages[field.id] || 'Check this field.';
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', error.id);
    field.parentNode.appendChild(error);
  }

  if (form && status) {
    form.addEventListener('input', function (event) {
      if (event.target.getAttribute('aria-invalid') === 'true' && event.target.checkValidity()) {
        clearError(event.target);
      }
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      status.textContent = '';

      var firstInvalid = null;
      Array.prototype.forEach.call(form.elements, function (field) {
        if (!field.id || !field.willValidate) return;
        if (field.checkValidity()) {
          clearError(field);
        } else {
          showError(field);
          firstInvalid = firstInvalid || field;
        }
      });

      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      status.textContent = 'Demo only: nothing has been sent. On the live site this enquiry would go straight to the business.';
      form.reset();
    });
  }
})();
