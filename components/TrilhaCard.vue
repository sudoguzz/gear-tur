<template>
    <div class="card max-w-md h-[660px] bg-base-100 shadow-xl flex flex-col">
        <div class="w-full h-96 overflow-hidden rounded-t-md">
            <Splide :options="splideOptions" class="w-full">
                <SplideSlide v-for="num in 3" :key="num">
                    <NuxtImg
                        :src="`/pics/trilhas-imgs/${folder}/${folder}-${num}.jpg`"
                        :alt="title"
                        loading="lazy"
                        format="webp"
                        densities="x1 x2"
                        class="w-full h-96 object-cover"
                    />
                </SplideSlide>
            </Splide>
        </div>

        <div class="card-body flex-1 flex flex-col">
            <h2 class="card-title text-xl font-bold overflow-hidden line-clamp-2 text-clip">
                {{ title }}
            </h2>
            <div class="flex items-center justify-center mb-3">
                <p class="text-lg font-semibold">R$ {{ price }} por pessoa</p>
                <span v-if="discount" class="badge badge-soft badge-warning text-warning-content lg:text-sm sm:text-xs text-nowrap">
                    Desconto {{ discount }}
                </span>
            </div>
            <div class="mt-auto">
                <fieldset class="fieldset flex flex-col place-items-start">
                    <label class="fieldset-legend text-md cursor-pointer">
                        <input
                            type="checkbox"
                            class="checkbox checked:bg-primary"
                            :data-nome="title"
                            :data-valor="price.replace(',', '.')"
                            v-model="isSelected"
                        />
                        Selecionar este pacote
                    </label>
                    <label class="fieldset-legend text-md">
                        <input
                            type="number"
                            v-model="peopleCount"
                            :min="minPeople"
                            :max="hasMinMax ? maxPeople : undefined"
                            class="input input-bordered w-20 focus:outline-none quantidade"
                        />
                        Quant. Pessoas
                        <br v-if="hasMinMax" />
                        <span v-if="hasMinMax">
                            (Mínimo {{ minPeople }}, Máximo {{ maxPeople }})
                        </span>
                    </label>
                </fieldset>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const props = defineProps({
    title: {
        type: String,
        default: null,
    },
    price: {
        type: String,
        default: null,
    },
    folder: {
        type: String,
        required: true,
    },
    discount: {
        type: String,
        default: null,
    },
    minPeople: {
        type: String,
        default: null,
    },
    maxPeople: {
        type: String,
        default: null,
    },
});

const peopleCount = ref(props.minPeople || 1); // Default para 1 se não houver minPeople
const isSelected = ref(false);

// Verifica se há limites definidos
const hasMinMax = computed(() => !!props.minPeople || !!props.maxPeople);
const minPeople = computed(() => props.minPeople || "1"); // Default mínimo 1 apenas para exibição
const maxPeople = computed(() => props.maxPeople || "Infinity"); // Sem limite máximo efetivo

const splideOptions = {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    gap: "0rem",
};

// Expor valores para o componente pai
defineExpose({
    isSelected,
    peopleCount,
    title: props.title,
    price: props.price,
});
</script>

<style>
.text-2xs {
    font-size: 8px;
}
</style>