document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
       
        document.querySelectorAll('p.highlight').forEach(p => {
            p.classList.remove('highlight');
        });

      
        const targetSection = document.querySelector(this.getAttribute('href'));
        const p = targetSection.querySelector('p');
        if (p) {
            p.classList.add('highlight');
        }
    });
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
   
   ;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'your_openweathermap_api_key'; // Itt add meg a saját API kulcsodat
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p>${error.message}</p>`;
    }
}
