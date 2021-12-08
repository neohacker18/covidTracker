function updateMap(){
    fetch("data.json")    
    .then(response=>response.json())
    .then(rsp=>{
        console.log(rsp.data);
        rsp.data.forEach(element => {
            latitude=element.latitude;
            longitude=element.longitude;

            cases=element.infected;
            if(cases>255)
            {
                color="rgb(255, 0, 0)";
            }

            else {
                color=`rgb(${cases},0,0)`;
            }

            //Mark on the map
            const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>Infected:${element.infected}</h3>
            <h3>Recovered:${element.recovered}</h3><h3>Deaths:${element.dead}</h3>`);
                 
                // create DOM element for the marker
                const el = document.createElement('div');
                el.id = 'marker';

               var x= document.getElementsByClassName('h3').color=`rgb(${element.infected},0,0)`;
new mapboxgl.Marker({
    offset: [longitude, latitude],
    draggable:false,
    color:color
})
.setPopup(popup)//add popups
            .setLngLat([longitude,latitude])
            .addTo(map)
        });
    })
}
updateMap();
