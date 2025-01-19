const Home = () => {
    const section = document.createElement('section');

    section.innerHTML = `
     <header>
        <h1>Web Push Notification The Browser</h1>
     </header>
    `;

    document.getElementById('root').appendChild(section);
}

export default Home;
