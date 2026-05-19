
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  const selected = document.getElementById(tabId);
  if (selected) selected.classList.add('active');
  document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
  const steps = document.querySelectorAll('.step');
  if (tabId === 'personal' && steps[0]) steps[0].classList.add('active');
  if (tabId === 'location' && steps[1]) steps[1].classList.add('active');
  if (tabId === 'type' && steps[2]) steps[2].classList.add('active');
}
function validatePersonal() {
  const fullname = document.getElementById('fullname');
  const receivername = document.getElementById('receivername');
  if (fullname && !fullname.checkValidity()) return fullname.reportValidity();
  if (receivername && !receivername.checkValidity()) return receivername.reportValidity();
  showTab('location');
}
function validatelocation() {
  const ids = ['location-input','region','province','city'];
  for (const id of ids) {
    const field = document.getElementById(id);
    if (field && !field.checkValidity()) return field.reportValidity();
  }
  showTab('type');
}
const cardRadio = document.getElementById('card');
const gcashRadio = document.getElementById('gcash');
const cardDetails = document.getElementById('card-details');
const gcashDetails = document.getElementById('gcash-details');
function togglePaymentDetails() {
  if (!cardRadio || !gcashRadio || !cardDetails || !gcashDetails) return;
  cardDetails.classList.toggle('hidden', !cardRadio.checked);
  gcashDetails.classList.toggle('hidden', !gcashRadio.checked);
}
if (cardRadio) cardRadio.addEventListener('change', togglePaymentDetails);
if (gcashRadio) gcashRadio.addEventListener('change', togglePaymentDetails);

const mobileBtn = document.querySelector('.mobile-menu-btn');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.mobile-backdrop');
if (mobileBtn && sidebar && backdrop) {
  mobileBtn.addEventListener('click', () => { sidebar.classList.toggle('show'); backdrop.classList.toggle('show'); });
  backdrop.addEventListener('click', () => { sidebar.classList.remove('show'); backdrop.classList.remove('show'); });
}
