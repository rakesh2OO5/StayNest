const mapDiv = document.getElementById("map");

if(mapDiv){
  const coordinates = JSON.parse(mapDiv.dataset.coordinates);
  const token = mapDiv.dataset.token;
  const lng = coordinates[0];
  const lat = coordinates[1];
  const map = L.map('map').setView([lat, lng], 12);

  L.tileLayer(`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${token}`, {
    attribution: '&copy; MapTiler & OpenStreetMap contributors'
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup("<b>Exact location provided after booking</b>")
    .openPopup();
}