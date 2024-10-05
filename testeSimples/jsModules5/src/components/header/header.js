export function Header() {
    return (`
        <header class="w-full h-[280px]">
            <h1 class="text-red-900 text-3xl font-bold">Todolist</h1>

            <section class="w-full h-full flex justify-center items-center mt-3">
                <form id="form-input">
                    <input type="text" class="w-[650px] h-[45px] outline-none border-0 rounded-lg placeholder:text-red-900 text-red-900  font-bold" placeholder="Digita sua tarefa" />
                    <button type="submit" class="ml-2 h-[45px] bg-white pl-5 pr-5 outline-none border-0 rounded-lg text-red-900 font-bold">Criar</button>
                </form>
            </section>
        </header>
    `)
}
