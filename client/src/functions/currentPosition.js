export function setCurrentLocation() {

  navigator.geolocation.getCurrentPosition(showPosition);
  function showPosition(position) {

      localStorage.setItem('lon', `${position.coords.longitude}`);
      localStorage.setItem('lat', `${position.coords.latitude}`);
  }
}

setCurrentLocation();
