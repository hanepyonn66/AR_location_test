window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if (!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);

            // setting1
            const setting1 = document.createElement("a-box");
            setting1.setAttribute("scale", { x: 5, y: 5, z: 5 });
            setting1.setAttribute('material', { color: 'green' });
            setting1.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.0001,
                longitude: e.detail.position.longitude
            });
            setting1.setAttribute('position', "0 50 0");
            document.querySelector("a-scene").appendChild(setting1);

            // setting2
            const setting2 = document.createElement("a-box");
            setting2.setAttribute("scale", { x: 5, y: 5, z: 5 });
            setting2.setAttribute('material', { color: 'red' });
            setting2.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude,
                longitude: e.detail.position.longitude
            });
            setting2.setAttribute("clicker");
            setting2.setAttribute('position', "0 50 0");
            document.querySelector("a-scene").appendChild(setting2);

            // setting3
            const setting3 = document.createElement("a-box");
            setting3.setAttribute("scale", { x: 5, y: 5, z: 5 });
            setting3.setAttribute('material', { color: 'blue' });
            setting3.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude - 0.0001,
                longitude: e.detail.position.longitude
            });
            setting3.setAttribute('position', "0 50 0");
            document.querySelector("a-scene").appendChild(setting3);
            // t_setting1
            const t_setting1 = document.createElement("a-text");
            t_setting1.setAttribute("value", "setting1");
            t_setting1.setAttribute("scale", { x: 10, y: 10, z: 10 });
            t_setting1.setAttribute("look-at", "[gps-new-camera]");
            t_setting1.setAttribute("position", "0 40 0");
            t_setting1.setAttribute("align", "center");
            t_setting1.setAttribute('color', 'black');
            t_setting1.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.0001,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(t_setting1);

            // t_setting2
            const t_setting2 = document.createElement("a-text");
            t_setting2.setAttribute("value", "setting2");
            t_setting2.setAttribute("scale", { x: 10, y: 10, z: 10 });
            t_setting2.setAttribute("look-at", "[gps-new-camera]");
            t_setting2.setAttribute("position", "0 40 0");
            t_setting2.setAttribute("align", "center");
            t_setting2.setAttribute('color', 'black');
            t_setting2.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude,
                longitude: e.detail.position.longitude
            });
            //t_setting2.setAttribute('clicker');
            document.querySelector("a-scene").appendChild(t_setting2);

            // setting3
            const t_setting3 = document.createElement("a-text");
            t_setting3.setAttribute("value", "setting3");
            t_setting3.setAttribute("scale", { x: 10, y: 10, z: 10 });
            t_setting3.setAttribute("look-at", "[gps-new-camera]");
            t_setting3.setAttribute("position", "0 40 0");
            t_setting3.setAttribute("algin", "center");
            t_setting3.setAttribute('color', { color: 'black' });
            t_setting3.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude - 0.0001,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(t_setting3);



        }
        testEntityAdded = true;
    });
};