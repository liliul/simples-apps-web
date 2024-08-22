document.getElementById('root').innerHTML = `
    ${main()}
`;

function main() {
    return (`
        <section class='isolate'>
            <header>
                <h1>Header</h1>
            </header>

            <main>
                <h1>Content</h1>
            </main>

            <footer>
                <h1>Footer</h1>
            </footer>
        </section>
    `)
}
