const ButtonNotification = () => {
    const button = document.createElement('button');
    button.setAttribute("id", "notify-button");

    button.innerHTML = `
        <p>Push Notification</p>
    `;

    document.getElementById('root').appendChild(button);
}

export default ButtonNotification;
