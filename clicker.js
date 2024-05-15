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
        alert('Box clicked!1');
      });
    }
  });

  AFRAME.registerComponent('click_setting2', {
    init: function () {
      this.el.addEventListener('click', e => {
        alert('Box clicked!2');
      });
    }
  });

  AFRAME.registerComponent('click_setting3', {
    init: function () {
      this.el.addEventListener('click', e => {
        alert('Box clicked!3');
      });
    }
  });