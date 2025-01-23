const ButtonCancelNotify = () => {
    const button = document.createElement('button');
    button.setAttribute("id", "cancel-button");

    button.innerHTML = `
        <p>Cancel Notify</p>
    `;

    document.getElementById('root').appendChild(button);
}

export default ButtonCancelNotify;
