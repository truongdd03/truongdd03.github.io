<template>
    <div class="p-3 border-3 surface-border border-round">
        <div class="lg:flex mb-3 lg:align-items-center">
            <Button :label="detail?.company" link size="large" icon="pi pi-external-link" style="margin-left: -15px;" @click="openUrl(detail!.url)" />
            <div class="lg:text-right text-color-secondary lg:ml-auto">
                <p class="text-lg">
                    {{ detail?.title }}
                </p>
                <p class="text-md">
                    {{ detail?.duration }}
                </p>
            </div>
        </div>
        <CompanyOverview :overview="detail?.overview" :overview-source="detail?.overviewSource" />

        <span v-html="detail?.description" />
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import Button from 'primevue/button';
import type { Experience } from './Experience';

import CompanyOverview from './CompanyOverview.vue';
import { openUrl } from '@/utils/navigate';

defineProps({
    detail: Object as PropType<Experience>,
});
</script>