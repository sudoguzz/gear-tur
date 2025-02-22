<template>
    <div
        class="navbar bg-primary-content text-neutral-content sticky top-0 shadow-lg z-50"
    >
        <nav
            class="flex flex-1 items-center justify-between max-w-[1280px] py-2 mx-auto"
        >
            <button
                class="navbar-start w-fit btn btn-ghost text-2xl md:text-4xl"
            >
                Gear Tur
            </button>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 text-base md:text-lg">
                    <li>
                        <a href="#" @click.prevent="scrollToSection('inicio')"
                            >Inicio</a
                        >
                    </li>
                    <li>
                        <a href="#" @click.prevent="scrollToSection('sobre')"
                            >Sobre</a
                        >
                    </li>
                    <li>
                        <a href="#" @click.prevent="scrollToSection('servicos')"
                            >Serviços</a
                        >
                    </li>
                    <li>
                        <a href="#" @click.prevent="scrollToSection('passeios')"
                            >Passeios</a
                        >
                    </li>
                    <li>
                        <a href="#" @click.prevent="scrollToSection('galeria')"
                            >Galeria</a
                        >
                    </li>
                    <li>
                        <a href="#" @click.prevent="scrollToSection('contato')"
                            >Contato</a
                        >
                    </li>
                    <li>
                        <a href="#" @click.prevent="scrollToSection('mapa')"
                            >Mapa</a
                        >
                    </li>
                </ul>
            </div>
            <div class="navbar-end flex lg:hidden">
                <label class="btn btn-outline swap swap-rotate">
                    <input type="checkbox" @click="isMenuOpen = !isMenuOpen" />
                    <Icon
                        name="material-symbols:menu"
                        size="30"
                        class="swap-off fill-current"
                    />
                    <Icon
                        name="material-symbols:close"
                        size="30"
                        class="swap-on fill-current"
                    />
                </label>
            </div>
            <div
                v-if="isMenuOpen"
                class="absolute top-16 right-0 min-w-50 bg-primary-content text-neutral-content rounded-lg shadow-lg z-50"
            >
                <ul class="menu menu-vertical p-3 text-base">
                    <li>
                        <a href="#" @click.prevent="scrollToSection('inicio')"
                            >Inicio</a
                        >
                    </li>
                    <li>
                        <a href="#" @click.prevent="scrollToSection('sobre')"
                            >Sobre</a
                        >
                    </li>
                    <li>
                        <a href="#" @click.prevent="scrollToSection('servicos')"
                            >Serviços</a
                        >
                    </li>
                    <li>
                        <a href="#" @click.prevent="scrollToSection('passeios')"
                            >Passeios</a
                        >
                    </li>
                    <li>
                        <a href="#" @click.prevent="scrollToSection('galeria')"
                            >Galeria</a
                        >
                    </li>
                    <li>
                        <a href="#" @click.prevent="scrollToSection('contato')"
                            >Contato</a
                        >
                    </li>
                    <li>
                        <a href="#" @click.prevent="scrollToSection('mapa')"
                            >Mapa</a
                        >
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script setup>
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

onMounted(() => {
    gsap.registerPlugin(ScrollToPlugin);
})

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
</script>
