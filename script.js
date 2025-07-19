document.addEventListener('DOMContentLoaded', () => { const form = document.getElementById('contactForm'); const currentTime = document.getElementById('currentTime');

function updateTime() { const now = new Date(); currentTime.textContent = now.toLocaleString(); } updateTime();

form.addEventListener('submit', function (e) { e.preventDefault();

const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const phone = document.getElementById('phone').value.trim();
const location = document.getElementById('location').value;
const message = document.getElementById('message').value.trim();

if (!name || !email || !phone || !message) {
  alert('Please fill in all required fields.');
  return;
}

document.getElementById('outName').textContent = name;
document.getElementById('outTarget').textContent = location;
document.getElementById('outPhone').textContent = phone;
document.getElementById('outMessage').textContent = message;

updateTime();
form.reset();

}); });
function showOffice(city) {
  const officeData = {
    jakarta: {
      address: 'Jl.coding, Jakarta',
      phone: '+62 21 5555 1111',
      email: 'jakarta@companymdn.id',
      hours: 'Mon-Fri, 09.00–17.00'
    },
    bandung: {
      address: 'Jl. javascript. 88, Bandung',
      phone: '+62 22 7777 2222',
      email: 'bandung@companymdn.id',
      hours: 'Mon-Fri, 09.00–17.00'
    },
    surabaya: {
      address: 'Jl. style.css. 99, Surabaya',
      phone: '+62 31 9999 3333',
      email: 'surabaya@companymdn.id',
      hours: 'Mon-Fri, 09.00–17.00'
    }
  };

  const info = officeData[city];
  document.getElementById('officeInfo').innerHTML = `
    <h4>${city.charAt(0).toUpperCase() + city.slice(1)} Office</h4>
    <p><strong>Address:</strong> ${info.address}</p>
    <p><strong>Phone:</strong> ${info.phone}</p>
    <p><strong>Email:</strong> ${info.email}</p>
    <p><strong>Working Hours:</strong> ${info.hours}</p>
  `;
}
window.showOffice = showOffice;