function updateMap(){
    fetch("./data.json")
    .then(response => response.json())
    .then(rsp=>{
        console.log(rsp);
        rsp.data.forEach(element => {
            latitude=element.reclat;
            longitude=element.reclong;
            var marker = new maplibregl.Marker()
            .setLngLat([longitude,latitude])
            
            .addTo(map);
            
        });
    })
}

updateMap();