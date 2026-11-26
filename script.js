// Contact form.
// The form is not connected to anything yet, so nothing is sent.
// Until you connect it (see "Connect the contact form" in README.md),
// pressing "Send enquiry" shows the message below instead.

(function () {
  var form = document.getElementById('enquiry-form');
  var status = document.getElementById('form-status');
  if (!form || !status) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    status.textContent = 'This form is not connected yet, so your message was not sent. Please use the contact details on this page.';
    status.hidden = false;
  });
})();
