'use strict';
const summaryEle = document.querySelectorAll('summary');

summaryEle.forEach((summaryElement) => {
    summaryElement.addEventListener('click', () => {
        summaryElement.classList.toggle('summary');
    });
});