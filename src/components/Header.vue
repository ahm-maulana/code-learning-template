<script setup>
import { ref } from "vue";

const mobileMenu = ref(false);

const showMobileMenu = () => {
  mobileMenu.value = !mobileMenu.value;
  document.body.classList.toggle("overflow-hidden");
};
</script>

<template>
  <header>
    <div class="absolute inset-x-0 top-0 px-4 py-4 md:px-20">
      <div
        class="flex items-center justify-between gap-2 md:justify-start lg:gap-10"
      >
        <a href="#" class="flex gap-2">
          <svg
            class="h-8 w-8"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_24_477)">
              <g clip-path="url(#clip1_24_477)">
                <rect width="32" height="32" rx="16" fill="black" />
                <path
                  d="M21.3333 16.0934L11.4399 11.48V12.8134L19.8133 16.76L11.4399 20.68V22.04L21.3333 17.4267V16.0934Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_24_477">
                <rect width="32" height="32" fill="white" />
              </clipPath>
              <clipPath id="clip1_24_477">
                <rect width="32" height="32" rx="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1 class="text-xl font-extrabold tracking-wider md:sr-only">
            macode.
          </h1>
        </a>
        <div>
          <button class="md:hidden" @click="showMobileMenu">
            <svg
              class="h-5 w-5 fill-primary"
              viewBox="0 0 23 26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.704254 3.49725H21.8324C22.2212 3.49725 22.5367 2.79719 22.5367 1.93478C22.5367 1.07224 22.2211 0.372314 21.8324 0.372314H0.704254C0.31548 0.372314 0 1.07237 0 1.93478C0 2.79719 0.315539 3.49725 0.704254 3.49725Z"
              />
              <path
                d="M21.8324 11.3098H0.704254C0.31548 11.3098 0 12.0099 0 12.8723C0 13.7347 0.315539 14.4347 0.704254 14.4347H21.8324C22.2212 14.4347 22.5367 13.7347 22.5367 12.8723C22.5367 12.0099 22.2212 11.3098 21.8324 11.3098Z"
              />
              <path
                d="M21.8322 22.2473H7.74673C7.35796 22.2473 7.04248 22.9474 7.04248 23.8098C7.04248 24.6723 7.35802 25.3722 7.74673 25.3722H21.8322C22.2209 25.3722 22.5364 24.6722 22.5364 23.8098C22.5365 22.9472 22.2209 22.2473 21.8322 22.2473Z"
              />
            </svg>
          </button>
          <div
            class="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            :class="{ hidden: !mobileMenu }"
            @click="showMobileMenu"
          ></div>
          <ul
            class="shadown-2xl fixed top-4 right-4 z-50 block w-full max-w-xs gap-2 rounded-lg bg-white p-6 md:static md:flex md:max-w-none md:bg-transparent md:p-0 lg:gap-10"
            :class="{ hidden: !mobileMenu }"
          >
            <li><a href="#" class="block p-2 hover:text-line">Tutorials</a></li>
            <li>
              <a href="#" class="block p-2 hover:text-line">Case Studies</a>
            </li>
            <li><a href="#" class="block p-2 hover:text-line">Resources</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
