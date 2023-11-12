<template>
    <div class="p-3 border-1 border-round surface-border" v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }">
        <div class="lg:flex mb-3 lg:align-items-center">
            <Button :label="detail?.company" link @click="openUrl(detail!.url)" size="large" icon="pi pi-external-link" style="margin-left: -15px;"/>
            <p class="text-lg lg:text-right text-color-secondary lg:ml-auto">{{ detail?.title }}</p>
        </div>
        <CompanyOverview :overview="detail?.overview" :overview-source="detail?.overviewSource"></CompanyOverview>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Experience } from './Experience';

import Button from 'primevue/button';
import CompanyOverview from './CompanyOverview.vue';
import { openUrl } from '@/utils/navigate';

defineProps({
    detail: Object as PropType<Experience>,
});
</script>