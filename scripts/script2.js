'use strict';

let carousel;

function CarouselObj(elements){
    this.arr = [];

    elements.forEach( (elem)=> {
        this.arr.push({current:elem});
    } );

    this.arr.forEach( (elem, idx)=>{
       if (idx === 0){
           elem.nextObj = this.arr[Math.min( idx + 1, this.arr.length - 1)];
           elem.prevObj = this.arr[this.arr.length - 1];
       }
       else if (idx === this.arr.length - 1){
           elem.nextObj = this.arr[0];
           elem.prevObj = this.arr[Math.min( idx - 1, this.arr.length - 1)];
       }
       else{
           elem.nextObj = this.arr[idx + 1];
           elem.prevObj = this.arr[idx - 1];
       }
    });

    this.currentObj = this.arr[0];

    this.showImg = function(){
        document.getElementById('photo').setAttribute('src', this.currentObj.current.firstElementChild.getAttribute('src'));
        this.currentObj.current.classList.add('portret-enable');
        document.getElementById('fio').innerText = this.currentObj.current.firstElementChild.getAttribute('fio');
        document.getElementById('prof').innerText = this.currentObj.current.firstElementChild.getAttribute('prof');
    };

    this.stepForward = function(){
        this.currentObj.current.classList.remove('portret-enable');
        this.currentObj = this.currentObj.nextObj;
        this.showImg();
    };

    this.stepReverse = function(){
        this.currentObj.current.classList.remove('portret-enable');
        this.currentObj = this.currentObj.prevObj;
        this.showImg();
    };

    this.disableSelect = function (){
      this.arr.forEach((elem)=>{
          elem.current.classList.remove('portret-enable');
      })
    };
}

document.addEventListener('DOMContentLoaded', function () {
    carousel = new CarouselObj(document.querySelectorAll('.people-list .portret'));
    carousel.showImg();
    document.getElementById('next').addEventListener('click',()=>{
        carousel.stepForward();
    });
    document.getElementById('prev').addEventListener('click',()=>{
        carousel.stepReverse();
    });


    document.querySelectorAll('#carousel .portret').forEach((elem)=>{
        elem.addEventListener('click',(event)=>{
            carousel.arr.forEach((el)=>{
                if (el.current === event.currentTarget) carousel.currentObj = el;
            });
            carousel.disableSelect();
            carousel.showImg();
        })
    });

    }
);

