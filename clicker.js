AFRAME.registerComponent('clicker', {
  init: function () {
    this.el.addEventListener('click', e => {
      alert('Box clicked!');
    });
  }
});

AFRAME.registerComponent('click_setting1', {
  init: function () {
    this.el.addEventListener('click', e => {
      //箱の色を変える
      const setting1 = document.querySelector('#setting1');
      setting1.setAttribute('material', 'color: red');
      const setting2 = document.querySelector('#setting2');
      setting2.setAttribute('material', 'color: black');
      const setting3 = document.querySelector('#setting3');
      setting3.setAttribute('material', 'color: black');
      //テキストとその色を変える
      const planes = document.querySelectorAll('.planes');
      planes.forEach(entity => {
        const isVisible = entity.getAttribute('visible');
        entity.setAttribute('visible', !isVisible);
      });
      const boxes = document.querySelectorAll('.boxes');
      boxes.forEach(entity => {
        const isVisible = entity.getAttribute('visible');
        entity.setAttribute('visible', !isVisible);
      });
    });
  }
});

AFRAME.registerComponent('click_setting2', {
  init: function () {
    this.el.addEventListener('click', e => {
      const setting1 = document.querySelector('#setting1');
      setting1.setAttribute('material', 'color: black');
      const setting2 = document.querySelector('#setting2');
      setting2.setAttribute('material', 'color: red');
      const setting3 = document.querySelector('#setting3');
      setting3.setAttribute('material', 'color: black');
      planes.forEach(entity => {
        const isVisible = entity.getAttribute('visible');
        entity.setAttribute('visible', !isVisible);
      });
      const boxes = document.querySelectorAll('.boxes');
      boxes.forEach(entity => {
        const isVisible = entity.getAttribute('visible');
        entity.setAttribute('visible', !isVisible);
      });
    });

  }
});

AFRAME.registerComponent('click_setting3', {
  init: function () {
    this.el.addEventListener('click', e => {
      const setting1 = document.querySelector('#setting1');
      setting1.setAttribute('material', 'color: black');
      const setting2 = document.querySelector('#setting2');
      setting2.setAttribute('material', 'color: black');
      const setting3 = document.querySelector('#setting3');
      setting3.setAttribute('material', 'color: red');
      
    });
  }
});