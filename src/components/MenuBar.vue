<template>
    <div>
        <div class="nav-menu">
            <font-awesome-icon class="icon" icon="fa-solid fa-bars" inverse @click="showMenu()"></font-awesome-icon>
            <div class="nav-content" :class="showMobileMenu ? 'open-menu' : 'closed-menu'">
                <font-awesome-icon class="logo l" icon="fa-solid fa-paw" inverse
                    @click="onNavButtonClick('introduction')" />

                <ul class="nav-items">
                    <li :class="displayingSection === 'introduction' ? 'nav-button-selected' : 'nav-button'"
                        @click="onNavButtonClick('introduction')">Home</li>
                    <li :class="displayingSection === 'experience' ? 'nav-button-selected' : 'nav-button'"
                        class="nav-button" @click="onNavButtonClick('experience')">Experience</li>
                    <li :class="displayingSection === 'education' ? 'nav-button-selected' : 'nav-button'"
                        class="nav-button" @click="onNavButtonClick('education')">Education</li>
                    <li :class="displayingSection === 'project' ? 'nav-button-selected' : 'nav-button'"
                        class="nav-button" @click="onNavButtonClick('project')">Projects</li>
                    <li :class="curRoute.startsWith('/blogs') ? 'nav-button-selected' : 'nav-button'"
                        class="nav-button" @click="redirectToBlogs()">Blogs</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { scrollIntoView } from '@/utils';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

let showMobileMenu = ref(false);

const route = useRoute();
const curRoute = computed(() => {
    return route.path;
});

const props = defineProps({
    displayingSection: String,
});

const showMenu = () => {
    showMobileMenu.value = !showMobileMenu.value;
};

const onNavButtonClick = async (id: string) => {
    await scrollIntoView(id, curRoute.value);
}

const redirectToBlogs = () => {
    router.push('/blogs');
}

</script>

<style lang="scss" scoped>
.nav-menu {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgb(23, 27, 33);
    z-index: 1;
}

.logo {
    cursor: pointer;
    color: white;
}

.nav-content {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    align-items: center;
}

.nav-items {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    vertical-align: middle;
    margin: 0;
    padding: 0;

    .nav-button,
    .nav-button-selected {
        padding: 10px 20px 10px;
        cursor: pointer;
        color: white;
        font-size: calc(0.6vw + 8px);
        border-bottom: 2px solid transparent;
    }

    .nav-button-selected {
        border-bottom: 2px solid hsla(160, 100%, 37%, 1);
    }
}

.icon {
    display: none;
}

@media screen and (max-width: 768px) {
    .nav-menu {
        padding-top: 10px;
        width: 100%;
        cursor: pointer;
        align-items: center;
        text-align: center;
    }

    .open-menu {
        opacity: 1;
        height: 200px;
    }

    .closed-menu {
        opacity: 0;
        padding: 0;
        height: 15px;
    }

    .nav-content {
        flex-direction: column;
        z-index: 100;
        position: relative;
        transition: all 0.2s ease-out;
    }

    .nav-items {
        flex-direction: column;
    }

    .icon {
        display: block;
        text-align: right;
        margin-left: 10px;
    }

    .logo {
        display: none;
    }
}
</style>