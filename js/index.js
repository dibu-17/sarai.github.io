'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const jsjsjs = () => {
    alert('😱 Sabía que dirías que sí jsjsjs');
    alert('Escucha esta rolita como muestra de mi cariño uwu');
    location.href = 'https://www.youtube.com/watch?v=pQWeWFtMTdA';
  };

  const nel = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

  const partner = prompt('Escríbeme your nombre creo que comienza con S jsjs');
  heroTitle.innerHTML += partner + ' 🙌';

  heroButtonSi.addEventListener('click', jsjsjs);
  heroButtonNo.addEventListener('mouseover', nel);
};

document.addEventListener('DOMContentLoaded', documentReady);