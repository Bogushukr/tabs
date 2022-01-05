const tabs = document.getElementById('tabs');
const contents = document.querySelectorAll('.content');
const tabsContent = document.getElementById('tabs-content');
const contentsTab = document.querySelectorAll('.content-tab');


const changeClass = el => {
    for (const child of tabs.children) {
        child.classList.remove('active');
    }
    el.classList.add('active');
};

const changeTabsContentClass = el => {
    for (const child of tabsContent.children) {
        child.classList.remove('active');
    }
    el.classList.add('active');
};

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
        for (const content of contents) {
            content.classList.remove('active');
            if (content.dataset.content === currTab) {
                content.classList.add('active');
            }
    }
});

tabsContent.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeTabsContentClass(e.target);
        for (const content of contentsTab) {
            content.classList.remove('active');
            if (content.dataset.content === currTab) {
                content.classList.add('active');
            }
    }
});


