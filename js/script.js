// グローバルナビゲーション
// const globalNav = document.querySelector('.l-header__nav');
const globalNavBtn = document.querySelector('.l-header__navBtn');
const globalNavCloseBtn = document.querySelector('.l-header__navClose');

globalNavBtn.addEventListener('click', () => {
    document.body.classList.add('is-open');
});

globalNavCloseBtn.addEventListener('click', () => {
    document.body.classList.remove('is-open');
});

// FAQアコーディオン
const faqItems = document.querySelectorAll('.p-faq__listItem');
faqItems.forEach((item) => {
    const btn = item.querySelector('.p-faq__listBtn');
    const answer = item.querySelector('.p-faq__listA');

    btn.addEventListener('click', () => {
        answer.classList.toggle('is-open');
    })
});