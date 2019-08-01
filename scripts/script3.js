'use strict';

function hideALL(){
    document.querySelectorAll('.work-gallery-item').forEach((elem, idx)=>{
            elem.style.display = 'none';
        }
    );
};

function showOnFilter(filter){
    document.querySelectorAll('.work-gallery-item[data-load="1"]'+filter).forEach((elem)=>{
        elem.style.display = 'block';
    })
};

document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.work-gallery-item').forEach((elem, idx)=>{
        if (idx >= 12) elem.dataset.load = 0;
        else elem.dataset.load = 1;
    }
    );
    document.querySelector('.work-nave-item').classList.add('work-nave-item-select');
    hideALL();
    showOnFilter(document.querySelectorAll('.work-nave-item')[0].dataset.filter);

    document.querySelector('.work-nav').addEventListener('click',(event)=>{
        document.querySelectorAll('.work-nave-item.work-nave-item-select').forEach((elem)=>{
           elem.classList.remove('work-nave-item-select');
        });
        if (document.querySelectorAll('.work-gallery-item[data-load="0"]'
            +event.target.dataset.filter).length > 0)
            document.getElementById('load_work').hidden = false;
        else
            document.getElementById('load_work').hidden = true;
        event.target.classList.add('work-nave-item-select');
        hideALL();
        showOnFilter(event.target.dataset.filter);
        event.preventDefault();
    });

    document.getElementById('load_work').addEventListener('click',(event)=>{
       let collImg = document.querySelectorAll('.work-gallery-item[data-load="0"]'
           +document.querySelector('.work-nave-item.work-nave-item-select').dataset.filter);
       if (collImg.length > 0)
           collImg.forEach((elem,idx)=>{
               if (idx >= 12) elem.dataset.load = 0;
               else elem.dataset.load = 1;
           });
        showOnFilter(document.querySelector('.work-nave-item.work-nave-item-select').dataset.filter);
        // if (document.querySelectorAll('.work-gallery-item[data-load="0"]').length === 0)
        if (collImg.length <= 12)
            document.getElementById('load_work').hidden = true;
        console.log(collImg.length);
    });
});