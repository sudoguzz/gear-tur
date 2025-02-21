<template>
    <main class="bg-base-200 overflow-hidden">
        <!-- Hero Section -->
        <section
            id="inicio"
            class="hero min-h-[80vh] bg-cover bg-center"
            style="background-image: url('pics/hero-img.jpg')"
        >
            <div class="hero-overlay"></div>
            <div class="hero-content text-neutral-content text-center">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl md:text-6xl font-bold">
                        Bem vindo!
                    </h1>
                    <p class="mb-5 md:text-lg">
                        Esta plataforma tem o objetivo de elaborar roteiros para
                        exploração das diversas riquezas de Canindé. <br />
                        Descubra os melhores lugares para conhecer e aproveite o
                        melhor de Canindé!
                    </p>
                    <button
                        class="btn btn-primary md:btn-lg"
                        @click.prevent="scrollToSection('sobre')"
                    >
                        Saiba mais
                    </button>
                </div>
            </div>
        </section>

        <!-- Sobre Section -->
        <section
            id="sobre"
            class="container flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:place-items-center gap-12 lg:gap-6 mx-auto pt-10 pb-20 px-2"
        >
            <!-- Video -->
            <div
                class="order-1 lg:place-self-start mx-auto w-full max-w-md lg:max-w-[580px]"
            >
                <video
                    class="object-cover rounded-2xl"
                    preload="metadata"
                    autoplay
                    muted
                    loop
                >
                    <source
                        src="../public/pics/video-hero.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            <!-- Sobre -->
            <div
                class="order-2 card bg-primary text-primary-content max-w-md lg:max-w-xl"
            >
                <div class="card-body">
                    <h2 class="card-title text-2xl md:text-3xl">Sobre</h2>
                    <p class="leading-6 md:leading-normal md:text-lg mt-2">
                        Canindé encanta com sua diversidade e paisagens,
                        oferecendo desde montanhas para turismo de aventura, ao
                        Rio São Francisco com suas águas cristalinas para o
                        lazer, além de projetos irrigados que enriquecem o
                        turismo rural.
                    </p>
                    <p class="leading-6 md:leading-normal md:text-lg mt-3">
                        A cidade preserva espaços históricos e culturais, como
                        museus que contam a trajetória do povo local, misturando
                        tradições com modernidade em experiências únicas.
                    </p>
                </div>
            </div>

            <!-- Brasao -->
            <div
                class="order-3 lg:order-4 flex flex-col items-center justify-center mx-auto w-full max-w-[400px] md:max-w-[500px] lg:max-w-[5500px]"
            >
                <img
                    src="../public/pics/brasao.svg"
                    alt="brasao de caninde"
                    class="object-cover"
                />
                <small class="mt-1 md:text-md"> Brasão de Canindé </small>
            </div>

            <!-- Especial -->
            <div
                class="order-4 lg:order-3 card bg-accent text-accent-content max-w-md lg:max-w-xl"
            >
                <div class="card-body">
                    <h2 class="card-title text-2xl md:text-3xl">
                        O especial de Canindé
                    </h2>
                    <p class="leading-6 md:leading-normal md:text-lg mt-2">
                        Conheça pontos turísticos como o Vale dos Mestres com
                        suas pinturas rupestres, o famoso Cânion de Xingó, um
                        dos maiores e mais belos cânions navegáveis do mundo, e
                        a histórica Grota de Angico, onde Lampião e parte do seu
                        bando foram mortos.
                    </p>
                    <p class="leading-6 md:leading-normal md:text-lg mt-3">
                        Descubra trilhas e atividades ao ar livre que
                        proporcionam momentos de aventura e conexão com a
                        natureza, destacando a relevância de Canindé para o
                        turismo sergipano.
                    </p>
                </div>
            </div>
        </section>

        <!-- Serviços Section -->
        <section
            id="servicos"
            class="flex flex-col items-center justify-center py-15 px-2 bg-neutral text-neutral-content"
        >
            <h2 class="text-4xl md:text-5xl text-center mb-5 font-bold">
                Serviços
            </h2>
            <p class="text-center md:text-lg mb-15">
                Conheça nossos serviços e atrações turisticas
            </p>
            <!-- Serviços Grid -->
            <div
                class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8 text-wrap"
            >
                <div
                    class="card w-5/6 sm:max-w-md md:w-full lg:min-h-[250px] bg-neutral text-neutral-content border border-neutral-content hover:border-primary hover-effect"
                >
                    <div
                        class="card-body flex flex-col items-center justify-center line-clamp-1"
                    >
                        <Icon
                            name="ri:road-map-line"
                            class="text-6xl md:text-7xl mb-5"
                        />
                        <h2 class="card-title text-center text-xl md:text-2xl">
                            Pontos Turisticos
                        </h2>
                    </div>
                </div>
                <div
                    class="card w-5/6 sm:max-w-md md:w-full lg:min-h-[250px] bg-neutral text-neutral-content border border-neutral-content hover:border-primary hover-effect"
                >
                    <div
                        class="card-body flex flex-col items-center justify-center line-clamp-1"
                    >
                        <Icon
                            name="ri:map-2-fill"
                            class="text-6xl md:text-7xl mb-5"
                        />
                        <h2 class="card-title text-center text-xl md:text-2xl">
                            Passeios
                        </h2>
                    </div>
                </div>
                <div
                    class="card w-5/6 sm:max-w-md md:w-full lg:min-h-[250px] bg-neutral text-neutral-content border border-neutral-content hover:border-primary hover-effect"
                >
                    <div
                        class="card-body flex flex-col items-center justify-center line-clamp-1"
                    >
                        <Icon
                            name="ri:map-pin-2-line"
                            class="text-6xl md:text-7xl mb-5"
                        />
                        <h2 class="card-title text-center text-xl md:text-2xl">
                            Agências Turisticas
                        </h2>
                    </div>
                </div>
                <div
                    class="card w-5/6 sm:max-w-md md:w-full lg:min-h-[250px] bg-neutral text-neutral-content border border-neutral-content hover:border-primary hover-effect"
                >
                    <div
                        class="card-body flex flex-col items-center justify-center line-clamp-1"
                    >
                        <Icon
                            name="ri:group-3-fill"
                            class="text-6xl md:text-7xl mb-5"
                        />
                        <h2 class="card-title text-center text-xl md:text-2xl">
                            Guias Turisticos
                        </h2>
                    </div>
                </div>
                <div
                    class="card w-5/6 sm:max-w-md md:w-full lg:min-h-[250px] bg-neutral text-neutral-content border border-neutral-content hover:border-primary hover-effect"
                >
                    <div
                        class="card-body flex flex-col items-center justify-center line-clamp-1"
                    >
                        <Icon
                            name="ri:hotel-bed-fill"
                            class="text-6xl md:text-7xl mb-5"
                        />
                        <h2 class="card-title text-center text-xl md:text-2xl">
                            Hospedagens
                        </h2>
                    </div>
                </div>
                <div
                    class="card w-5/6 sm:max-w-md md:w-full lg:min-h-[250px] bg-neutral text-neutral-content border border-neutral-content hover:border-primary hover-effect"
                >
                    <div
                        class="card-body flex flex-col items-center justify-center line-clamp-1"
                    >
                        <Icon
                            name="ri:restaurant-fill"
                            class="text-6xl md:text-7xl mb-5"
                        />
                        <h2 class="card-title text-center text-xl md:text-2xl">
                            Culinária
                        </h2>
                    </div>
                </div>
                <div
                    class="card w-5/6 sm:max-w-md md:w-full lg:min-h-[250px] bg-neutral text-neutral-content border border-neutral-content hover:border-primary hover-effect"
                >
                    <div
                        class="card-body flex flex-col items-center justify-center line-clamp-1"
                    >
                        <Icon
                            name="ri:calendar-check-line"
                            class="text-6xl md:text-7xl mb-5"
                        />
                        <h2 class="card-title text-center text-xl md:text-2xl">
                            Eventos
                        </h2>
                    </div>
                </div>
                <div
                    class="card w-5/6 sm:max-w-md md:w-full lg:min-h-[250px] bg-neutral text-neutral-content border border-neutral-content hover-effect"
                >
                    <div
                        class="card-body flex flex-col items-center justify-center line-clamp-1"
                    >
                        <Icon
                            name="ri:chat-check-fill"
                            class="text-6xl md:text-7xl mb-5"
                        />
                        <h2 class="card-title text-center text-xl md:text-2xl">
                            Contatos Úteis
                        </h2>
                    </div>
                </div>
            </div>
        </section>

        <!-- Passeios Section -->
        <section
            id="passeios"
            class="flex flex-col place-items-center py-15 px-2"
        >
            <h2 class="text-4xl md:text-5xl text-center mb-15 font-bold">
                Selecione as trilhas e passeios desejados:
            </h2>
            <div
                class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8"
            >
                <TrilhaCard
                    title="Agrofloresta Umbuzeiro"
                    price="45,00"
                    folder="Agro"
                    discount="10%"
                />
                <TrilhaCard
                    title="Casa da Roça Dona Bela"
                    price="45,00"
                    folder="Bela"
                    discount="5%"
                />
                <TrilhaCard
                    title="Trilha Morro do Cruzeiro"
                    price="60,00"
                    folder="Cruz"
                />
                <TrilhaCard
                    title="Trilha Cachoeira do Lajedão"
                    price="60,00"
                    folder="Laj"
                />
                <TrilhaCard
                    title="Trilha Morro da Loucura"
                    price="60,00"
                    folder="Louc"
                />
                <TrilhaCard
                    title="Sítio Frutos do Sertão"
                    price="45,00"
                    folder="Sert"
                    discount="5%"
                />
            </div>
            <button class="btn btn-primary btn-lg mt-15">
                <Icon name="ri:whatsapp-line" size="20" />
                Enviar para o Whatsapp
            </button>
        </section>

        <!-- Galeria Section -->
        <section
            id="galeria"
            class="flex flex-col place-items-center py-15 px-2 bg-accent text-accent-content"
        >
            <div class="flex flex-col place-items-center md:w-md xs:w-xs">
                <h2 class="text-4xl md:text-5xl text-center mb-5 font-bold">
                    Galeria
                </h2>
                <p class="text-lg text-center mb-15">
                    Contemple algumas fotos da beleza natural da região do são
                    francisco
                </p>
            </div>
            <div
                class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8"
            >
                <img
                    v-for="i in totalImages"
                    :key="i"
                    :src="`/pics/galeria/galeria-${i}.jpg`"
                    :alt="`Galeria ${i}`"
                    loading="lazy"
                    class="w-md h-60 object-cover rounded-md shadow-lg cursor-pointer hover-effect-img"
                    @click="openModal(i)"
                />
            </div>

            <!-- DaisyUI Modal -->
            <div
                :class="{ modal: true, 'modal-open': modalOpen }"
                @click.self="closeModal"
            >
                <div
                    class="modal-box relative w-full h-screen max-w-none p-0 flex items-center justify-center bg-black"
                >
                    <button
                        class="btn btn-sm btn-circle absolute right-2 top-2 hover:rotate-15 transition duration-200 ease-in-out"
                        @click="closeModal"
                    >
                        <Icon name="ri:close-large-fill" size="24" />
                    </button>
                    <button
                        v-if="currentIndex > 1"
                        @click="prevImage"
                        class="btn btn-ghost absolute left-4 top-1/2 text-white text-4xl"
                    >
                        <Icon name="ri:arrow-left-s-fill" />
                    </button>
                    <button
                        v-if="currentIndex < totalImages"
                        @click="nextImage"
                        class="btn btn-ghost absolute right-4 top-1/2 text-white text-4xl"
                    >
                        <Icon name="ri:arrow-right-s-fill" />
                    </button>

                    <img
                        :src="`/pics/galeria/galeria-${currentIndex}.jpg`"
                        alt="Full Image"
                        class="max-w-full max-h-full object-contain"
                    />
                </div>
            </div>
        </section>

        <!-- Contato Section -->
        <section
            id="contato"
            class="flex flex-col place-items-center py-15 px-2"
        >
            <h2 class="text-4xl md:text-5xl text-center mb-5 font-bold">
                Contato
            </h2>
            <p class="text-lg text-center">
                Entre em contato com a gente e tire suas dúvidas
            </p>
            <div
                class="container mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center gap-13 lg:gap-2 mt-10"
            >
                <!-- Infos -->
                <div class="flex flex-col items-start justify-center gap-6">
                    <div class="flex place-items-center">
                        <div
                            class="flex items-center justify-center bg-primary text-primary-content rounded-full w-12 h-12"
                        >
                            <Icon name="ri:map-pin-line" size="25" />
                        </div>
                        <div class="ml-2">
                            <p class="font-bold">Endereço</p>
                            <p>Rua Palmira Lisboa, 35 - Canindé, SE</p>
                        </div>
                    </div>
                    <div class="flex place-items-center">
                        <div
                            class="flex items-center justify-center bg-primary text-primary-content rounded-full w-12 h-12"
                        >
                            <Icon name="ri:whatsapp-line" size="25" />
                        </div>
                        <div class="ml-2">
                            <p class="font-bold">Whatsapp</p>
                            <p>+55 79 9 9983-0418</p>
                        </div>
                    </div>
                    <div class="flex place-items-center">
                        <div
                            class="flex items-center justify-center bg-primary text-primary-content rounded-full w-12 h-12"
                        >
                            <Icon name="ri:instagram-line" size="25" />
                        </div>
                        <div class="ml-2">
                            <p class="font-bold">Instagram</p>
                            <p>@gearstartup</p>
                        </div>
                    </div>
                    <div class="flex place-items-center">
                        <div
                            class="flex items-center justify-center bg-primary text-primary-content rounded-full w-12 h-12"
                        >
                            <Icon name="ri:mail-line" size="25" />
                        </div>
                        <div class="ml-2">
                            <p class="font-bold">Email</p>
                            <p>gearturstartup@gmail.com</p>
                        </div>
                    </div>
                </div>
                <!-- Contato Form -->
                <fieldset
                    class="fieldset sm:w-xs md:w-md lg:w-full bg-base-300 border border-neutral-content p-4 rounded-box"
                >
                    <legend class="fieldset-legend text-lg font-semibold">
                        Entre em contato
                    </legend>

                    <div class="flex items-center justify-between gap-4">
                        <label
                            class="fieldset-label flex-col place-items-start w-full"
                        >
                            Nome
                            <input
                                type="text"
                                class="input"
                                placeholder="Nome"
                            />
                        </label>

                        <label
                            class="fieldset-label flex-col place-items-start w-full"
                        >
                            Email
                            <input
                                type="email"
                                class="input"
                                placeholder="Email"
                            />
                        </label>
                    </div>

                    <label class="fieldset-label">Assunto</label>
                    <input
                        type="text"
                        class="input w-full"
                        placeholder="Assunto"
                    />

                    <label class="fieldset-label">Mensagem</label>
                    <textarea
                        class="textarea w-full"
                        placeholder="Mensagem"
                    ></textarea>

                    <button class="btn btn-neutral mt-4">Enviar</button>
                </fieldset>
            </div>
        </section>

        <!-- Mapa Section -->
        <section id="mapa" class="flex flex-col place-items-center py-15 px-2">
            <h2 class="text-4xl md:text-5xl text-center mb-10 font-bold">
                Mapa
            </h2>
            <div class="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d64075.75024137631!2d-37.783953!3d-9.677762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70f32149c4863e5%3A0xb036223249f5fc11!2sCanind%C3%A9%20de%20S%C3%A3o%20Francisco%2C%20State%20of%20Sergipe%2C%2049820-000%2C%20Brazil!5e1!3m2!1sen!2sus!4v1740160991495!5m2!1sen!2sus"
                    class="w-full h-screen rounded-md"
                    width="auto"
                    height="auto"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    </main>
</template>

<script setup>
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const isMenuOpen = ref(false);

function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: target,
                offsetY: 50,
            },
            ease: "power2.out",
        });
    }
}

const totalImages = 16;
const modalOpen = ref(false);
const currentIndex = ref(0);

const openModal = (index) => {
    currentIndex.value = index;
    modalOpen.value = true;
};

const closeModal = () => {
    modalOpen.value = false;
};

const prevImage = () => {
    if (currentIndex.value > 1) {
        currentIndex.value--;
    }
};

const nextImage = () => {
    if (currentIndex.value < totalImages) {
        currentIndex.value++;
    }
};
</script>
