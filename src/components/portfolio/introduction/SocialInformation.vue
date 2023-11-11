<template>
    <div class="mt-3 flex justify-content-center">
        <a href="https://github.com/truongdd03" target="_blank">
            <font-awesome-icon class="mr-5 text-2xl" icon="fa-brands fa-github" inverse />
        </a>
        <a href="https://www.linkedin.com/in/dong-truong/" target="_blank">
            <font-awesome-icon class="mr-5 text-2xl" icon="fa-brands fa-linkedin" inverse />
        </a>
        <font-awesome-icon class="mr-5 text-2xl" icon="fa-solid fa-envelope" inverse @click="copyMailAddress()" />
        <font-awesome-icon class="text-2xl" icon="fa-solid fa-file-pdf" inverse @click="downloadResume()" />
    </div>
</template>

<script setup lang="ts">
import { notify } from '@kyvg/vue3-notification';
import Resume from '/assets/Don_Truong_Resume_censored.pdf';

const copyMailAddress = async () => {
    const mailAddress = 'dong23102003@gmail.com';
    await navigator.clipboard.writeText(mailAddress);
    notify({ title: 'Copied email address!' });
};

const downloadResume = () => {
    window.open(Resume);
};
</script>
