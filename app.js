// login page  //
const signupLink = document.querySelector('.to-signup');
if (signupLink) {
  signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    const box = document.querySelector('.box');
    box.classList.add('turn-page');
    setTimeout(() => {
      window.location.href = 'signup.html';
    }, 800);
  });
}
//  signup page  //
const loginLink = document.querySelector('.to-login');
if (loginLink) {
  loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    const box = document.querySelector('.box');
    box.classList.add('turn-back');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 800);
  });
}
