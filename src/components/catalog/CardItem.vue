<template>
   <div
      class="p-[10px] grid drop-shadow-lg lg:w-[25%] md:w-[33.3%] sm:w-[50%] w-[90%]"
      :class="{ 'border-b-2 border-myblack pb-[10px]': border }">
      <img
         class="w-full"
         :src="require(`../../assets/${item.img}.png`)"
         alt="product" />
      <h2 class="text-c text-myblack mb-[22px] mt-[11px]">{{ item.title }}</h2>
      <div
         class="py-[7px] px-[5px] w-full bg-bgCardBtns rounded-[10px] mb-[17px]">
         <div class="flex justify-around">
            <button
               v-for="material in item.material"
               class="transition-all duration-200 text-a text-myblack w-[40%] bg-white py-[10px] rounded-[5px]"
               :class="{
                  'bg-[transparent]': !material.rest,
                  'hover:bg-[#f2488a] hover:text-bgCardBtns': material.rest && !innerWidth,
                  'bg-[#f2488a] text-bgCardBtns': material.selected,
               }"
               :disabled="!material.rest"
               :key="material"
               @click="
                  selectedMaterial({
                     id: item.id,
                     material: material.title,
                  })
               ">
               {{ material.title }}
            </button>
         </div>
         <div class="flex justify-around mt-2">
            <button
               class="duration-200 text-a text-myblack w-[30%] bg-white py-[10px] rounded-[5px]"
               :class="{
                  'bg-[transparent]': !size.rest,
                  'hover:bg-[#f2488a] hover:text-bgCardBtns': size.rest && !innerWidth,
                  'bg-[#f2488a] text-bgCardBtns': size.selected,
               }"
               v-for="size in item.size"
               :disabled="!size.rest"
               :key="size"
               @click="
                  selectedSize({
                     id: item.id,
                     size: size.title,
                  })
               ">
               {{ size.title }}
            </button>
         </div>
      </div>
      <div class="flex justify-between items-center">
         <span class="font-bold text-[18px] text-myblack"
            >from {{ item.price }}$</span
         >
         <button-card :id="item.id" @click="addToCart(item)" />
      </div>
   </div>
</template>

<script>
   import { mapActions, mapGetters } from "vuex";
   import ButtonCard from "@/components/UI/ButtonCard.vue";
   export default {
	   components: {ButtonCard},
      props: {
         item: Object,
         border: Boolean,
      },
      data() {
         return {};
      },
      computed: {
         ...mapGetters("catalog", ["catalog", "innerWidth"]),
         ...mapGetters("cart", ["cart"]),
      },
      methods: {
         ...mapActions("catalog", [
            "selectedMaterial",
            "selectedSize",
         ]),
         ...mapActions("cart", ["addToCart"]),
      },
   };
</script>

<style></style>
