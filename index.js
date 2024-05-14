window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if (!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
            // Add a box to the north of the initial GPS position
            const entity = document.createElement("a-box");
            entity.setAttribute("scale", {
                x: 20,
                y: 20,
                z: 20
            });
            entity.setAttribute('material', { color: 'red' });
            entity.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude,
                longitude: e.detail.position.longitude
            });
            entity.setAttribute('psition', "0 10 0");
            document.querySelector("a-scene").appendChild(entity);
            // setting1
            const setting1 = document.createElement("a-box");
            setting1.setAttribute("scale", { x: 20, y: 20, z: 20 });
            setting1.setAttribute('material', { color: 'red' });
            setting1.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            });
            setting1.setAttribute('position', "0 50 0");
            document.querySelector("a-scene").appendChild(setting1);

            // setting2
            const setting2 = document.createElement("a-box");
            setting2.setAttribute("scale", { x: 20, y: 20, z: 20 });
            setting2.setAttribute('material', { color: 'red' });
            setting2.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude,
                longitude: e.detail.position.longitude
            });
            setting2.setAttribute('position', "0 50 0");
            document.querySelector("a-scene").appendChild(setting2);

            // setting3
            const setting3 = document.createElement("a-box");
            setting3.setAttribute("scale", { x: 20, y: 20, z: 20 });
            setting3.setAttribute('material', { color: 'red' });
            setting3.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude - 0.001,
                longitude: e.detail.position.longitude
            });
            setting3.setAttribute('position', "0 50 0");
            document.querySelector("a-scene").appendChild(setting3);


        }
        testEntityAdded = true;
    });
};