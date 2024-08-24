function HeaderComponent() {

        return (`
            <section class="w-[1000px] h-full m-auto">
                <section class="flex items-center justify-between mt-6">
                    <div class="w-12 h-12 bg-gray-500 rounded-lg"></div>

                    <nav class="flex gap-5">
                        <div class="w-28 h-5 bg-gray-500 rounded-lg"></div>
                        <div class="w-40 h-5 bg-gray-500 rounded-lg"></div>
                        <div class="w-52 h-5 bg-gray-500 rounded-lg"></div>
                        <div class="w-20 h-5 bg-gray-500 rounded-lg"></div>
                    </nav>

                    <div class="w-12 h-12 bg-gray-500 rounded-full"></div>
                </section>

                <section class="w-full h-full flex justify-center items-center">
                    <div class="w-3/5 h-16 bg-gray-500 rounded-lg"></div>
                </section>
            </section>
        `)
}

export const header = {
    HeaderComponent
}
