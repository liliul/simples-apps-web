import { kelvinCelsius, visibility, byId, timeStamp } from './utils.js';

export function tempNow(res) {
    const cityLocate = document.getElementById('cityLocate');
    const temp       = document.getElementById('temp');
    const tempMaxMix = document.getElementById('tempMaxMin');
    const humidity   = document.getElementById('humidity');
    const clouds     = document.getElementById('clouds');
    
    cityLocate.textContent = res.name +' '+ res.sys.country;
    temp.innerHTML = `
      <h1 id="temp" class="h1-temp">
        ${kelvinCelsius(res.main.feels_like).toFixed(0)}
        <span class="span-temp">°C</span>
      </h1>
    `
    // temp.innerHTML = ` ${kelvinCelsius(res.main.temp).toFixed(0)}`;
    // temp.textContent = kelvinCelsius(res.main.temp).toFixed(0);
    tempMaxMix.textContent = kelvinCelsius(res.main.temp_max).toFixed(0) +'°'+' '+ kelvinCelsius(res.main.temp_min).toFixed(0) +'°';
  
    const windSpeed = document.getElementById('windSpeed');
  
    windSpeed.textContent = res.wind.speed.toFixed(0) + 'km/h';
    humidity.textContent  = res.main.humidity + '%';
    clouds.textContent    = res.clouds.all + '%'
}

// function tempNow(name, sys, [main], wind) {
//   const cityLocate = document.getElementById('cityLocate');
//   const temp       = document.getElementById('temp');
//   const tempMaxMix = document.getElementById('tempMaxMin');
  
//   cityLocate.textContent = name +' '+ sys;
//   temp.textContent       = main;
//   tempMaxMix.textContent = main +'°'+' '+ main +'°';

//   const windSpeed = document.getElementById('windSpeed');

//   windSpeed.textContent = wind + 'km/h';
// }

export function airQuality(res) {
    const airAqi = document.getElementById('air-aqi');
    airAqi.textContent = res.list[0].main.aqi;

    const airComponents = byId('air-components');
    airComponents.innerHTML = `
        <div class="info-num">
            <p class="p-info-num">${res.list[0].components.pm2_5}</p>

            <span class="span-info-num">PM2.5</span>
        </div>

        <div class="info-num">
            <p class="p-info-num">${res.list[0].components.co}</p>

            <span class="span-info-num">CO</span>
        </div>

        <div class="info-num">
            <p class="p-info-num">${res.list[0].components.so2}</p>

            <span class="span-info-num">SO2</span>
        </div>

        <div class="info-num">
            <p class="p-info-num">${res.list[0].components.pm10}</p>

            <span class="span-info-num">PM10</span>
        </div>

        <div class="info-num">
            <p class="p-info-num">${res.list[0].components.o3}</p>

            <span class="span-info-num">O₃</span>
        </div>    
    `
}

export async function openWeatherMap(res) {
    // const maps = byId('openWeather-maps');

    // maps.innerHTML = `
    //     <img width='100%' height='211px'style='overflow:hidden;border-radius:10px;' src="https://tile.openweathermap.org/map/temp_new/4/${res.message}/5.png?appid=9033de8545dfa66184beaa29576f414b&lang=pt_br" />
    // `


    // maps.innerHTML = `
    // <img src="http://maps.googleapis.com/maps/api/staticmap?center=${res.coord.lat},${res.coord.lon}&zoom=11&size=211x211">
    // `

    var map = L.map('openWeather-maps').setView([res.coord.lat,res.coord.lon], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([res.coord.lat,res.coord.lon]).addTo(map)
        // .bindPopup('')
        // .openPopup();
 
} 

export function visible(res) {
    const visible = document.getElementById('visible')

    visible.innerHTML = `
        <div>
            <h1>${visibility(res.visibility).toFixed(0)}</h1>
            <b>km/h</b>
        </div>
    `
}
    

export function sunTime(res) {
    const coords = document.getElementById('coordenadas');

    coords.innerHTML = `
        <svg width="230" height="120" viewBox="0 0 250 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 122C16 108.08 18.7418 94.296 24.0688 81.4355C29.3958 68.575 37.2037 56.8896 47.0467 47.0466C56.8897 37.2036 68.5751 29.3957 81.4356 24.0687C94.2961 18.7418 108.08 16 122 16C135.92 16 149.704 18.7418 162.565 24.0688C175.425 29.3958 187.11 37.2037 196.953 47.0467C206.796 56.8897 214.604 68.5751 219.931 81.4356C225.258 94.2961 228 108.08 228 122" stroke="#F6C833" stroke-width="2" stroke-dasharray="2 13"/>
            <path d="M24.0688 81.4355C18.7418 94.296 16 108.08 16 122L175 122V30.2013C171.002 27.8928 166.848 25.8432 162.565 24.0688C149.704 18.7418 135.92 16 122 16C108.08 16 94.2961 18.7418 81.4356 24.0687C68.5751 29.3957 56.8897 37.2036 47.0467 47.0466C37.2037 56.8896 29.3958 68.575 24.0688 81.4355Z" fill="url(#paint0_linear_328_81)"/>
            <line opacity="0.4" x1="14" y1="121.5" x2="230" y2="121.5" stroke="#F6C833"/>
            <path d="M180.143 28.796C181 31.9967 179.101 35.2865 175.902 36.1438C172.7 37.0016 169.411 35.1022 168.553 31.9015C167.695 28.7003 169.595 25.4104 172.796 24.5527C175.995 23.6954 179.285 25.5948 180.143 28.796Z" fill="#F6C833"/>
            <line x1="228" y1="126" x2="228" y2="118" stroke="#E5BB46" stroke-width="2"/>
            <line x1="16" y1="126" x2="16" y2="118" stroke="#E5BB46" stroke-width="2"/>
            <!-- <path class="icon-main-sun" d="M7.67813 141.704C7.67813 142.456 7.59613 143.108 7.43213 143.66C7.27213 144.208 7.05213 144.662 6.77213 145.022C6.49213 145.382 6.16013 145.65 5.77613 145.826C5.39613 146.002 4.98813 146.09 4.55213 146.09C4.11213 146.09 3.70213 146.002 3.32213 145.826C2.94613 145.65 2.61813 145.382 2.33813 145.022C2.05813 144.662 1.83813 144.208 1.67813 143.66C1.51813 143.108 1.43813 142.456 1.43813 141.704C1.43813 140.952 1.51813 140.3 1.67813 139.748C1.83813 139.196 2.05813 138.74 2.33813 138.38C2.61813 138.016 2.94613 137.746 3.32213 137.57C3.70213 137.394 4.11213 137.306 4.55213 137.306C4.98813 137.306 5.39613 137.394 5.77613 137.57C6.16013 137.746 6.49213 138.016 6.77213 138.38C7.05213 138.74 7.27213 139.196 7.43213 139.748C7.59613 140.3 7.67813 140.952 7.67813 141.704ZM6.56813 141.704C6.56813 141.048 6.51213 140.498 6.40013 140.054C6.29213 139.606 6.14413 139.246 5.95613 138.974C5.77213 138.702 5.55813 138.508 5.31413 138.392C5.07013 138.272 4.81613 138.212 4.55213 138.212C4.28813 138.212 4.03413 138.272 3.79013 138.392C3.54613 138.508 3.33213 138.702 3.14813 138.974C2.96413 139.246 2.81613 139.606 2.70413 140.054C2.59613 140.498 2.54213 141.048 2.54213 141.704C2.54213 142.36 2.59613 142.91 2.70413 143.354C2.81613 143.798 2.96413 144.156 3.14813 144.428C3.33213 144.7 3.54613 144.896 3.79013 145.016C4.03413 145.132 4.28813 145.19 4.55213 145.19C4.81613 145.19 5.07013 145.132 5.31413 145.016C5.55813 144.896 5.77213 144.7 5.95613 144.428C6.14413 144.156 6.29213 143.798 6.40013 143.354C6.51213 142.91 6.56813 142.36 6.56813 141.704ZM11.5071 145.208C11.7951 145.208 12.0551 145.162 12.2871 145.07C12.5231 144.978 12.7231 144.85 12.8871 144.686C13.0551 144.522 13.1831 144.328 13.2711 144.104C13.3631 143.88 13.4091 143.636 13.4091 143.372C13.4091 143.092 13.3651 142.84 13.2771 142.616C13.1891 142.388 13.0631 142.196 12.8991 142.04C12.7391 141.88 12.5471 141.758 12.3231 141.674C12.0991 141.59 11.8531 141.548 11.5851 141.548C11.2971 141.548 11.0371 141.598 10.8051 141.698C10.5731 141.794 10.3751 141.926 10.2111 142.094C10.0511 142.258 9.92706 142.45 9.83906 142.67C9.75506 142.886 9.71306 143.112 9.71306 143.348C9.71306 143.624 9.75306 143.876 9.83306 144.104C9.91306 144.332 10.0291 144.528 10.1811 144.692C10.3371 144.856 10.5251 144.984 10.7451 145.076C10.9691 145.164 11.2231 145.208 11.5071 145.208ZM10.8831 140.624C10.8071 140.72 10.7331 140.814 10.6611 140.906C10.5931 140.994 10.5271 141.082 10.4631 141.17C10.6671 141.03 10.8911 140.922 11.1351 140.846C11.3791 140.77 11.6451 140.732 11.9331 140.732C12.2811 140.732 12.6091 140.79 12.9171 140.906C13.2251 141.018 13.4931 141.184 13.7211 141.404C13.9531 141.62 14.1371 141.888 14.2731 142.208C14.4091 142.524 14.4771 142.886 14.4771 143.294C14.4771 143.69 14.4051 144.058 14.2611 144.398C14.1171 144.738 13.9151 145.034 13.6551 145.286C13.3991 145.538 13.0891 145.736 12.7251 145.88C12.3651 146.024 11.9671 146.096 11.5311 146.096C11.0991 146.096 10.7071 146.028 10.3551 145.892C10.0031 145.752 9.70306 145.556 9.45506 145.304C9.21106 145.048 9.02106 144.74 8.88506 144.38C8.75306 144.016 8.68706 143.61 8.68706 143.162C8.68706 142.786 8.76906 142.386 8.93306 141.962C9.10106 141.534 9.36706 141.078 9.73106 140.594L11.9151 137.66C11.9711 137.588 12.0471 137.528 12.1431 137.48C12.2431 137.428 12.3571 137.402 12.4851 137.402H13.4331L10.8831 140.624ZM15.75 145.34C15.75 145.236 15.768 145.138 15.804 145.046C15.844 144.954 15.896 144.874 15.96 144.806C16.028 144.738 16.108 144.684 16.2 144.644C16.292 144.604 16.39 144.584 16.494 144.584C16.598 144.584 16.696 144.604 16.788 144.644C16.88 144.684 16.96 144.738 17.028 144.806C17.096 144.874 17.15 144.954 17.19 145.046C17.23 145.138 17.25 145.236 17.25 145.34C17.25 145.448 17.23 145.548 17.19 145.64C17.15 145.728 17.096 145.806 17.028 145.874C16.96 145.942 16.88 145.994 16.788 146.03C16.696 146.07 16.598 146.09 16.494 146.09C16.39 146.09 16.292 146.07 16.2 146.03C16.108 145.994 16.028 145.942 15.96 145.874C15.896 145.806 15.844 145.728 15.804 145.64C15.768 145.548 15.75 145.448 15.75 145.34ZM15.75 140.84C15.75 140.736 15.768 140.638 15.804 140.546C15.844 140.454 15.896 140.374 15.96 140.306C16.028 140.238 16.108 140.184 16.2 140.144C16.292 140.104 16.39 140.084 16.494 140.084C16.598 140.084 16.696 140.104 16.788 140.144C16.88 140.184 16.96 140.238 17.028 140.306C17.096 140.374 17.15 140.454 17.19 140.546C17.23 140.638 17.25 140.736 17.25 140.84C17.25 140.948 17.23 141.048 17.19 141.14C17.15 141.228 17.096 141.306 17.028 141.374C16.96 141.442 16.88 141.496 16.788 141.536C16.696 141.572 16.598 141.59 16.494 141.59C16.39 141.59 16.292 141.572 16.2 141.536C16.108 141.496 16.028 141.442 15.96 141.374C15.896 141.306 15.844 141.228 15.804 141.14C15.768 141.048 15.75 140.948 15.75 140.84ZM24.108 145.184V146H19.5V145.184H21.342V139.322C21.342 139.146 21.348 138.968 21.36 138.788L19.83 140.102C19.778 140.146 19.726 140.174 19.674 140.186C19.622 140.194 19.574 140.194 19.53 140.186C19.486 140.178 19.444 140.162 19.404 140.138C19.368 140.114 19.34 140.088 19.32 140.06L18.984 139.598L21.546 137.384H22.416V145.184H24.108ZM30.8829 144.986C30.9989 144.986 31.0909 145.02 31.1589 145.088C31.2269 145.156 31.2609 145.244 31.2609 145.352V146H25.5249V145.634C25.5249 145.558 25.5409 145.48 25.5729 145.4C25.6049 145.32 25.6549 145.246 25.7229 145.178L28.4769 142.412C28.7049 142.18 28.9129 141.958 29.1009 141.746C29.2889 141.53 29.4489 141.314 29.5809 141.098C29.7129 140.882 29.8149 140.664 29.8869 140.444C29.9589 140.22 29.9949 139.982 29.9949 139.73C29.9949 139.478 29.9549 139.258 29.8749 139.07C29.7949 138.878 29.6849 138.72 29.5449 138.596C29.4089 138.472 29.2469 138.38 29.0589 138.32C28.8709 138.256 28.6689 138.224 28.4529 138.224C28.2329 138.224 28.0309 138.256 27.8469 138.32C27.6629 138.384 27.4989 138.474 27.3549 138.59C27.2149 138.702 27.0969 138.836 27.0009 138.992C26.9049 139.148 26.8369 139.32 26.7969 139.508C26.7489 139.648 26.6829 139.742 26.5989 139.79C26.5189 139.834 26.4049 139.846 26.2569 139.826L25.6989 139.73C25.7549 139.338 25.8629 138.992 26.0229 138.692C26.1869 138.388 26.3909 138.134 26.6349 137.93C26.8829 137.726 27.1649 137.572 27.4809 137.468C27.7969 137.36 28.1389 137.306 28.5069 137.306C28.8709 137.306 29.2109 137.36 29.5269 137.468C29.8429 137.576 30.1169 137.734 30.3489 137.942C30.5809 138.146 30.7629 138.396 30.8949 138.692C31.0269 138.988 31.0929 139.324 31.0929 139.7C31.0929 140.02 31.0449 140.318 30.9489 140.594C30.8529 140.866 30.7229 141.126 30.5589 141.374C30.3949 141.622 30.2049 141.864 29.9889 142.1C29.7769 142.336 29.5509 142.574 29.3109 142.814L27.0429 145.13C27.2029 145.086 27.3649 145.052 27.5289 145.028C27.6929 145 27.8509 144.986 28.0029 144.986H30.8829Z" fill="white"/>
            <path class="icon-main-sun" d="M218.186 145.184V146H213.578V145.184H215.42V139.322C215.42 139.146 215.426 138.968 215.438 138.788L213.908 140.102C213.856 140.146 213.804 140.174 213.752 140.186C213.7 140.194 213.652 140.194 213.608 140.186C213.564 140.178 213.522 140.162 213.482 140.138C213.446 140.114 213.418 140.088 213.398 140.06L213.062 139.598L215.624 137.384H216.494V145.184H218.186ZM222.519 145.244C222.799 145.244 223.049 145.206 223.269 145.13C223.493 145.05 223.681 144.94 223.833 144.8C223.989 144.656 224.107 144.486 224.187 144.29C224.271 144.09 224.313 143.87 224.313 143.63C224.313 143.334 224.263 143.082 224.163 142.874C224.067 142.662 223.935 142.49 223.767 142.358C223.603 142.226 223.413 142.13 223.197 142.07C222.981 142.006 222.755 141.974 222.519 141.974C222.283 141.974 222.057 142.006 221.841 142.07C221.625 142.13 221.433 142.226 221.265 142.358C221.101 142.49 220.969 142.662 220.869 142.874C220.773 143.082 220.725 143.334 220.725 143.63C220.725 143.87 220.765 144.09 220.845 144.29C220.929 144.486 221.047 144.656 221.199 144.8C221.355 144.94 221.543 145.05 221.763 145.13C221.987 145.206 222.239 145.244 222.519 145.244ZM222.519 138.134C222.263 138.134 222.037 138.172 221.841 138.248C221.649 138.324 221.487 138.428 221.355 138.56C221.227 138.692 221.129 138.846 221.061 139.022C220.997 139.198 220.965 139.386 220.965 139.586C220.965 139.782 220.993 139.972 221.049 140.156C221.105 140.34 221.195 140.504 221.319 140.648C221.443 140.788 221.603 140.902 221.799 140.99C221.999 141.074 222.239 141.116 222.519 141.116C222.799 141.116 223.037 141.074 223.233 140.99C223.433 140.902 223.595 140.788 223.719 140.648C223.843 140.504 223.933 140.34 223.989 140.156C224.045 139.972 224.073 139.782 224.073 139.586C224.073 139.386 224.039 139.198 223.971 139.022C223.907 138.846 223.809 138.692 223.677 138.56C223.549 138.428 223.387 138.324 223.191 138.248C222.999 138.172 222.775 138.134 222.519 138.134ZM223.749 141.518C224.285 141.67 224.697 141.924 224.985 142.28C225.273 142.636 225.417 143.092 225.417 143.648C225.417 144.024 225.345 144.364 225.201 144.668C225.061 144.968 224.863 145.224 224.607 145.436C224.355 145.648 224.051 145.812 223.695 145.928C223.339 146.04 222.947 146.096 222.519 146.096C222.091 146.096 221.699 146.04 221.343 145.928C220.987 145.812 220.681 145.648 220.425 145.436C220.169 145.224 219.971 144.968 219.831 144.668C219.691 144.364 219.621 144.024 219.621 143.648C219.621 143.092 219.765 142.636 220.053 142.28C220.341 141.924 220.753 141.67 221.289 141.518C220.837 141.35 220.495 141.1 220.263 140.768C220.035 140.432 219.921 140.032 219.921 139.568C219.921 139.252 219.983 138.956 220.107 138.68C220.231 138.404 220.407 138.164 220.635 137.96C220.863 137.756 221.135 137.596 221.451 137.48C221.771 137.364 222.127 137.306 222.519 137.306C222.907 137.306 223.261 137.364 223.581 137.48C223.901 137.596 224.175 137.756 224.403 137.96C224.631 138.164 224.807 138.404 224.931 138.68C225.055 138.956 225.117 139.252 225.117 139.568C225.117 140.032 225.001 140.432 224.769 140.768C224.541 141.1 224.201 141.35 223.749 141.518ZM226.75 145.34C226.75 145.236 226.768 145.138 226.804 145.046C226.844 144.954 226.896 144.874 226.96 144.806C227.028 144.738 227.108 144.684 227.2 144.644C227.292 144.604 227.39 144.584 227.494 144.584C227.598 144.584 227.696 144.604 227.788 144.644C227.88 144.684 227.96 144.738 228.028 144.806C228.096 144.874 228.15 144.954 228.19 145.046C228.23 145.138 228.25 145.236 228.25 145.34C228.25 145.448 228.23 145.548 228.19 145.64C228.15 145.728 228.096 145.806 228.028 145.874C227.96 145.942 227.88 145.994 227.788 146.03C227.696 146.07 227.598 146.09 227.494 146.09C227.39 146.09 227.292 146.07 227.2 146.03C227.108 145.994 227.028 145.942 226.96 145.874C226.896 145.806 226.844 145.728 226.804 145.64C226.768 145.548 226.75 145.448 226.75 145.34ZM226.75 140.84C226.75 140.736 226.768 140.638 226.804 140.546C226.844 140.454 226.896 140.374 226.96 140.306C227.028 140.238 227.108 140.184 227.2 140.144C227.292 140.104 227.39 140.084 227.494 140.084C227.598 140.084 227.696 140.104 227.788 140.144C227.88 140.184 227.96 140.238 228.028 140.306C228.096 140.374 228.15 140.454 228.19 140.546C228.23 140.638 228.25 140.736 228.25 140.84C228.25 140.948 228.23 141.048 228.19 141.14C228.15 141.228 228.096 141.306 228.028 141.374C227.96 141.442 227.88 141.496 227.788 141.536C227.696 141.572 227.598 141.59 227.494 141.59C227.39 141.59 227.292 141.572 227.2 141.536C227.108 141.496 227.028 141.442 226.96 141.374C226.896 141.306 226.844 141.228 226.804 141.14C226.768 141.048 226.75 140.948 226.75 140.84ZM231.172 140.648C231.62 140.552 232.032 140.504 232.408 140.504C232.856 140.504 233.252 140.57 233.596 140.702C233.94 140.834 234.226 141.016 234.454 141.248C234.686 141.48 234.86 141.754 234.976 142.07C235.096 142.386 235.156 142.73 235.156 143.102C235.156 143.558 235.076 143.97 234.916 144.338C234.76 144.706 234.542 145.022 234.262 145.286C233.986 145.546 233.66 145.746 233.284 145.886C232.908 146.026 232.502 146.096 232.066 146.096C231.814 146.096 231.572 146.07 231.34 146.018C231.108 145.97 230.89 145.904 230.686 145.82C230.486 145.736 230.3 145.64 230.128 145.532C229.956 145.424 229.804 145.31 229.672 145.19L230.002 144.734C230.074 144.63 230.168 144.578 230.284 144.578C230.364 144.578 230.454 144.61 230.554 144.674C230.654 144.734 230.776 144.802 230.92 144.878C231.064 144.954 231.232 145.024 231.424 145.088C231.62 145.148 231.852 145.178 232.12 145.178C232.42 145.178 232.69 145.13 232.93 145.034C233.17 144.938 233.376 144.802 233.548 144.626C233.72 144.446 233.852 144.232 233.944 143.984C234.036 143.736 234.082 143.458 234.082 143.15C234.082 142.882 234.042 142.64 233.962 142.424C233.886 142.208 233.768 142.024 233.608 141.872C233.452 141.72 233.256 141.602 233.02 141.518C232.784 141.434 232.508 141.392 232.192 141.392C231.976 141.392 231.75 141.41 231.514 141.446C231.282 141.482 231.044 141.54 230.8 141.62L230.128 141.422L230.818 137.402H234.892V137.87C234.892 138.022 234.844 138.148 234.748 138.248C234.656 138.344 234.496 138.392 234.268 138.392H231.568L231.172 140.648ZM241.883 144.986C241.999 144.986 242.091 145.02 242.159 145.088C242.227 145.156 242.261 145.244 242.261 145.352V146H236.525V145.634C236.525 145.558 236.541 145.48 236.573 145.4C236.605 145.32 236.655 145.246 236.723 145.178L239.477 142.412C239.705 142.18 239.913 141.958 240.101 141.746C240.289 141.53 240.449 141.314 240.581 141.098C240.713 140.882 240.815 140.664 240.887 140.444C240.959 140.22 240.995 139.982 240.995 139.73C240.995 139.478 240.955 139.258 240.875 139.07C240.795 138.878 240.685 138.72 240.545 138.596C240.409 138.472 240.247 138.38 240.059 138.32C239.871 138.256 239.669 138.224 239.453 138.224C239.233 138.224 239.031 138.256 238.847 138.32C238.663 138.384 238.499 138.474 238.355 138.59C238.215 138.702 238.097 138.836 238.001 138.992C237.905 139.148 237.837 139.32 237.797 139.508C237.749 139.648 237.683 139.742 237.599 139.79C237.519 139.834 237.405 139.846 237.257 139.826L236.699 139.73C236.755 139.338 236.863 138.992 237.023 138.692C237.187 138.388 237.391 138.134 237.635 137.93C237.883 137.726 238.165 137.572 238.481 137.468C238.797 137.36 239.139 137.306 239.507 137.306C239.871 137.306 240.211 137.36 240.527 137.468C240.843 137.576 241.117 137.734 241.349 137.942C241.581 138.146 241.763 138.396 241.895 138.692C242.027 138.988 242.093 139.324 242.093 139.7C242.093 140.02 242.045 140.318 241.949 140.594C241.853 140.866 241.723 141.126 241.559 141.374C241.395 141.622 241.205 141.864 240.989 142.1C240.777 142.336 240.551 142.574 240.311 142.814L238.043 145.13C238.203 145.086 238.365 145.052 238.529 145.028C238.693 145 238.851 144.986 239.003 144.986H241.883Z" fill="white"/> -->
            <!-- <path d="M112.698 82.705V84H107.098V82.705H109.149V76.804C109.149 76.5707 109.156 76.3303 109.17 76.083L107.714 77.301C107.63 77.3663 107.546 77.4083 107.462 77.427C107.383 77.441 107.306 77.441 107.231 77.427C107.161 77.413 107.098 77.3897 107.042 77.357C106.986 77.3197 106.944 77.28 106.916 77.238L106.37 76.489L109.457 73.864H110.878V82.705H112.698ZM117.228 77.553L116.878 77.987C117.074 77.889 117.284 77.8143 117.508 77.763C117.737 77.707 117.982 77.679 118.243 77.679C118.626 77.679 118.997 77.742 119.356 77.868C119.72 77.994 120.04 78.1853 120.315 78.442C120.591 78.694 120.812 79.009 120.98 79.387C121.148 79.765 121.232 80.206 121.232 80.71C121.232 81.1813 121.146 81.6247 120.973 82.04C120.801 82.4507 120.558 82.81 120.245 83.118C119.933 83.426 119.555 83.6687 119.111 83.846C118.673 84.0233 118.187 84.112 117.655 84.112C117.114 84.112 116.629 84.0257 116.199 83.853C115.77 83.6803 115.404 83.44 115.1 83.132C114.797 82.8193 114.564 82.446 114.4 82.012C114.242 81.5733 114.162 81.088 114.162 80.556C114.162 80.08 114.258 79.5923 114.449 79.093C114.645 78.589 114.946 78.0663 115.352 77.525L117.767 74.284C117.851 74.172 117.973 74.0763 118.131 73.997C118.295 73.9177 118.481 73.878 118.691 73.878H120.231L117.228 77.553ZM117.62 82.698C117.896 82.698 118.148 82.6513 118.376 82.558C118.61 82.4647 118.808 82.334 118.971 82.166C119.139 81.998 119.27 81.802 119.363 81.578C119.457 81.3493 119.503 81.102 119.503 80.836C119.503 80.5467 119.459 80.2877 119.37 80.059C119.282 79.8257 119.156 79.6297 118.992 79.471C118.829 79.3077 118.633 79.184 118.404 79.1C118.176 79.016 117.924 78.974 117.648 78.974C117.373 78.974 117.123 79.0207 116.899 79.114C116.675 79.2073 116.484 79.338 116.325 79.506C116.167 79.6693 116.043 79.8653 115.954 80.094C115.866 80.318 115.821 80.5607 115.821 80.822C115.821 81.102 115.859 81.3587 115.933 81.592C116.013 81.8207 116.127 82.0167 116.276 82.18C116.43 82.3433 116.619 82.4717 116.843 82.565C117.067 82.6537 117.326 82.698 117.62 82.698ZM122.437 83.048C122.437 82.9033 122.463 82.7657 122.514 82.635C122.57 82.5043 122.645 82.3923 122.738 82.299C122.832 82.2057 122.944 82.131 123.074 82.075C123.205 82.019 123.345 81.991 123.494 81.991C123.644 81.991 123.781 82.019 123.907 82.075C124.038 82.131 124.15 82.2057 124.243 82.299C124.341 82.3923 124.418 82.5043 124.474 82.635C124.53 82.7657 124.558 82.9033 124.558 83.048C124.558 83.1973 124.53 83.3373 124.474 83.468C124.418 83.594 124.341 83.7037 124.243 83.797C124.15 83.8903 124.038 83.9627 123.907 84.014C123.781 84.07 123.644 84.098 123.494 84.098C123.345 84.098 123.205 84.07 123.074 84.014C122.944 83.9627 122.832 83.8903 122.738 83.797C122.645 83.7037 122.57 83.594 122.514 83.468C122.463 83.3373 122.437 83.1973 122.437 83.048ZM122.437 78.057C122.437 77.9123 122.463 77.7747 122.514 77.644C122.57 77.5133 122.645 77.4013 122.738 77.308C122.832 77.2147 122.944 77.14 123.074 77.084C123.205 77.028 123.345 77 123.494 77C123.644 77 123.781 77.028 123.907 77.084C124.038 77.14 124.15 77.2147 124.243 77.308C124.341 77.4013 124.418 77.5133 124.474 77.644C124.53 77.7747 124.558 77.9123 124.558 78.057C124.558 78.2063 124.53 78.3463 124.474 78.477C124.418 78.603 124.341 78.7127 124.243 78.806C124.15 78.8993 124.038 78.974 123.907 79.03C123.781 79.0813 123.644 79.107 123.494 79.107C123.345 79.107 123.205 79.0813 123.074 79.03C122.944 78.974 122.832 78.8993 122.738 78.806C122.645 78.7127 122.57 78.603 122.514 78.477C122.463 78.3463 122.437 78.2063 122.437 78.057ZM133.075 78.939C133.075 79.821 132.979 80.5887 132.788 81.242C132.601 81.8907 132.34 82.4273 132.004 82.852C131.672 83.2767 131.278 83.594 130.821 83.804C130.368 84.0093 129.878 84.112 129.351 84.112C128.823 84.112 128.333 84.0093 127.881 83.804C127.433 83.594 127.043 83.2767 126.712 82.852C126.38 82.4273 126.121 81.8907 125.935 81.242C125.748 80.5887 125.655 79.821 125.655 78.939C125.655 78.0523 125.748 77.2847 125.935 76.636C126.121 75.9873 126.38 75.4507 126.712 75.026C127.043 74.6013 127.433 74.2863 127.881 74.081C128.333 73.871 128.823 73.766 129.351 73.766C129.878 73.766 130.368 73.871 130.821 74.081C131.278 74.2863 131.672 74.6013 132.004 75.026C132.34 75.4507 132.601 75.9873 132.788 76.636C132.979 77.2847 133.075 78.0523 133.075 78.939ZM131.29 78.939C131.29 78.2063 131.236 77.5997 131.129 77.119C131.021 76.6383 130.877 76.2557 130.695 75.971C130.517 75.6863 130.312 75.488 130.079 75.376C129.845 75.2593 129.603 75.201 129.351 75.201C129.103 75.201 128.863 75.2593 128.63 75.376C128.401 75.488 128.198 75.6863 128.021 75.971C127.843 76.2557 127.701 76.6383 127.594 77.119C127.491 77.5997 127.44 78.2063 127.44 78.939C127.44 79.6717 127.491 80.2783 127.594 80.759C127.701 81.2397 127.843 81.6223 128.021 81.907C128.198 82.1917 128.401 82.3923 128.63 82.509C128.863 82.621 129.103 82.677 129.351 82.677C129.603 82.677 129.845 82.621 130.079 82.509C130.312 82.3923 130.517 82.1917 130.695 81.907C130.877 81.6223 131.021 81.2397 131.129 80.759C131.236 80.2783 131.29 79.6717 131.29 78.939ZM140.671 82.705V84H135.071V82.705H137.122V76.804C137.122 76.5707 137.129 76.3303 137.143 76.083L135.687 77.301C135.603 77.3663 135.519 77.4083 135.435 77.427C135.355 77.441 135.278 77.441 135.204 77.427C135.134 77.413 135.071 77.3897 135.015 77.357C134.959 77.3197 134.917 77.28 134.889 77.238L134.343 76.489L137.43 73.864H138.851V82.705H140.671Z" fill="white"/> -->
            <defs>
            <linearGradient id="paint0_linear_328_81" x1="175" y1="16" x2="175" y2="124" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FBDB60" stop-opacity="0.2"/>
            <stop offset="1" stop-color="#FBDB60" stop-opacity="0"/>
            </linearGradient>
            </defs>
        </svg>

        <section style="${sectionTime}">
            <div style="${sttleDivCoords}">
                <strong style="${styleCoords}">${timeStamp(res.sys.sunrise)}</strong> 
                <small style="${stylePCoords}">Am</small>
            </div>

            <div style="${sttleDivCoords}">
                <strong style="${styleCoords}">${timeStamp(res.sys.sunset)}</strong> 
                <p style="${stylePCoords}">Tr</p>
            </div>
        </section>
    `
} 
const sectionTime = `display:flex;justify-content: space-between;`
const sttleDivCoords = `display:flex;align-items:center;gap:2px;`
const styleCoords = `
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    color: white;
`
const stylePCoords = `
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    color:#dad8f7;
`

export function weather(res) {
    const weather = document.getElementById('weather');

    res.list.map((list) => {
        // console.log(list);
        const article = document.createElement('article');
        article.classList.add('days');

        article.innerHTML = `
            <header class="h-days">
            <h3 class="h3-days">${list.weather[0].description}</h3>
            </header>

            <section class="main-days">
                <img src="https://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png" />                      
            </section>

            <footer class="foo-days">
                <p class="foo-p-days">${list.main.temp_max.toFixed()}° <span class="s-foo-days">${list.main.temp_min.toFixed()}°</span></p>
                <small>${list.dt_txt}</small>
            </footer>
        `
        weather.append(article);
    })
}