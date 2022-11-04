const styleDependency = (sunrise: number, sunset: number, current: number, weather: string) => {
  const root = document.getElementById('root');
  if (sunrise - current >= 3600 || current - sunset >= 3600) { // night
    return root?.setAttribute('style', 'background-image: url("https://i.pinimg.com/originals/39/cf/9c/39cf9c6756207455237e39308291d214.jpg")');
  }
  if (Math.abs(sunrise - current) < 3600) { // sunrise
    return root?.setAttribute('style', 'background-image: url("https://images.hdqwalls.com/download/sunrise-spectrum-clouds-5k-ez-1920x1080.jpg")');
  }
  if (Math.abs(sunset - current) < 3600) { // sunset
    return root?.setAttribute('style', 'background-image: url("https://wallpapersmug.com/download/1920x1080/8a8385/sunset-clouds-sun-silhouette.jpg")');
  }
  if (weather === 'Clouds') {
    return root?.setAttribute('style', 'background-image: url("https://media.istockphoto.com/photos/storm-sky-rain-picture-id512218646?k=20&m=512218646&s=612x612&w=0&h=C-2Gn8nsMG-o7QNiXYPqu4FeJJFABhPpe4rTG0CIMWQ=")');
  }
  if (weather === 'Clear') {
    return root?.setAttribute('style', 'background-image: url("https://s1.1zoom.me/b6440/928/Sky_Sun_Clouds_576676_1920x1080.jpg")');
  }
  if (weather === 'Rain') {
    return root?.setAttribute('style', 'background-image: url("https://media.istockphoto.com/id/454413420/video/heavy-rain.jpg?s=640x640&k=20&c=gjFCLx1DBjxrbTqZgW4P0iVH8s8OO-FqW80BB4wyFzE=")');
  }
  return root?.setAttribute('style', 'background-image: url("https://media.istockphoto.com/id/454413420/video/heavy-rain.jpg?s=640x640&k=20&c=gjFCLx1DBjxrbTqZgW4P0iVH8s8OO-FqW80BB4wyFzE=")');
};

const loader = () => {
  document.getElementById('Loader')?.setAttribute('style', 'display: flex');
};

const closeLoader = () => {
  document.getElementById('Loader')?.setAttribute('style', 'display: none');
};

export { styleDependency, loader, closeLoader };
