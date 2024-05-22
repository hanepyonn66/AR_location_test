let heading = 0;
    let initialHeading = false;

    function startCompass() {
		DeviceOrientationEvent.requestPermission()
		  .then((response) => {
			if (response === "granted") {
				window.addEventListener("deviceorientation", (event) => {
					if (event.webkitCompassHeading)
					{		
						this.heading = event.webkitCompassHeading;
					  var x = document.getElementById("orientinfo");
						x.innerHTML = event.webkitCompassHeading.toFixed(2) + " : " + event.alpha.toFixed(2) + " : " + event.beta.toFixed(2) + " : " + event.gamma.toFixed(2);
						if (!this.initialHeading)
						{
							setHeading();
							this.initialHeading = true;
						}
					}
				});
			} else {
			  alert("has to be allowed!");
			}
		  })
		  .catch(() => alert("not supported"));
    }
	
	function setHeading() {
		const el = document.querySelector("[gps-new-camera]");
		if (el)
		{
			el.setAttribute("arjs-device-orientation-controls","headingOffset", -this.heading);
		}
		else
		{
			  alert("camera not found");		
		}
		
    }
	
window.onload = () => {
    let testEntitiesAdded = false;
    this.deviceOrientation = {};
    this.screenOrientation = 0;
	
	this.orientationChangeEventName =
      "ondeviceorientationabsolute" in window
        ? "deviceorientationabsolute"
        : "deviceorientation";

      if (
         window.DeviceOrientationEvent !== undefined &&
         typeof window.DeviceOrientationEvent.requestPermission === "function"
       ) {
			 startCompass();
       } else {
				window.addEventListener("deviceorientationabsolute", (event) => {
					if (event.webkitCompassHeading)
					{		
					  var x = document.getElementById("orientinfo");
						x.innerHTML = event.webkitCompassHeading.toFixed(2) + " : " + event.beta.toFixed(2) ;
					}
					else
					{
					  var x = document.getElementById("orientinfo");
						x.innerHTML = event.alpha.toFixed(2) + " : " + event.beta.toFixed(2) + " : " + event.gamma.toFixed(2) ;
					}
				});
		}
    const el = document.querySelector("[gps-new-camera]");
    el.addEventListener("gps-camera-update-position", e => {
//		  alert(`gps-camera-update-position ${e.detail.position.latitude} : ${e.detail.position.longitude} : ${event.gamma}`);
        if(!testEntitiesAdded) {
  //          alert(`Initial position: ${e.detail.position.longitude} ${e.detail.position.latitude}`);
            // Add four boxes to the north (red), south (yellow), west (blue)
            // and east (red) of the initial GPS position
            const properties = [{
                    color: 'red',
                    latDis: 0.001,
                    lonDis: 0
                },{
                    color: 'yellow',
                    latDis: -0.001,
                    lonDis: 0
                },{
                    color: 'blue',
                    latDis: 0,
                    lonDis: -0.001
                },{
                    color: 'green',
                    latDis: 0,
                    lonDis: 0.001
                }
            ];
            for(const prop of properties) {
                const entity = document.createElement("a-box");
                entity.setAttribute("scale", {
                    x: 20, 
                    y: 20,
                    z: 20
                });
                entity.setAttribute('material', { color: prop.color } );
                entity.setAttribute('gps-new-entity-place', {
                    latitude: e.detail.position.latitude + prop.latDis,
                    longitude: e.detail.position.longitude + prop.lonDis
                });
                entity.setAttribute('clicker', { });                
                document.querySelector("a-scene").appendChild(entity);
            }
            testEntitiesAdded = true;
        }
    });
    document.getElementById("go").addEventListener("click", e=> {
        el.setAttribute("arjs-device-orientation-controls","headingOffset", 90);
    });
};

