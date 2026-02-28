browser.storage.local.get(['v_user', 'v_pass', 'v_auto', 'v_school']).then(res => {
  document.getElementById('username').value = res.v_user || '';
  document.getElementById('password').value = res.v_pass || '';
  document.getElementById('autoSelect').checked = res.v_auto || false;
  document.getElementById('schoolName').value = res.v_school || '';
});

document.getElementById('save').addEventListener('click', () => {
  browser.storage.local.set({
    v_user: document.getElementById('username').value,
    v_pass: document.getElementById('password').value,
    v_auto: document.getElementById('autoSelect').checked,
    v_school: document.getElementById('schoolName').value
  });
});