'use strict';


function hideAllContent(){
    document.querySelectorAll('.service-content').forEach((elem)=>{
        elem.hidden = true;
    });
};

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.service-nave-item').forEach((elem, idx)=>{
        elem.dataset.link = idx;
        let contentTab = document.querySelector(`.service-content-wrapper :nth-of-type(${idx + 1})`);
        if (contentTab) contentTab.dataset.linkTab = idx;
    });
    hideAllContent();

    document.querySelectorAll(`[data-link="0"]`).forEach((elem)=>{
        elem.classList.add('service-nave-item-enable');
    });
    document.querySelectorAll(`[data-link-tab="0"]`).forEach((elem)=>{
        elem.hidden = false;
    });
});

document.querySelector('.service-nav').addEventListener('click',(event)=>{
    console.dir(event);
    event.target.classList.add('service-nave-item-enable');
    document.querySelectorAll(`.service-nave-item.service-nave-item-enable:not([data-link="${event.target.dataset.link}"])`).forEach((elem)=>{
        elem.classList.remove('service-nave-item-enable');
    });

    hideAllContent();

    document.querySelectorAll(`[data-link-tab="${event.target.dataset.link}"]`).forEach((elem)=>{
        elem.hidden = false;
    });
    event.preventDefault();
});

