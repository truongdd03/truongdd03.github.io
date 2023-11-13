<template>
    <div class="p-3 border-3 surface-border border-round">
        <div class="lg:flex mb-3 lg:align-items-center">
            <Button :label="detail?.company" link @click="openUrl(detail!.url)" size="large" icon="pi pi-external-link" style="margin-left: -15px;"/>
            <div class="lg:text-right text-color-secondary lg:ml-auto">
                <p class="text-lg">{{ detail?.title }}</p>
                <p class="text-md">{{ detail?.duration }}</p>
            </div>
        </div>
        <CompanyOverview :overview="detail?.overview" :overview-source="detail?.overviewSource"></CompanyOverview>
        
        <div>
            <p class="text-lg">Achivements</p>
            <Markdown :html="true" class="s description" :source="detail?.description" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Experience } from './Experience';

import Button from 'primevue/button';
import Markdown from 'vue3-markdown-it';
import CompanyOverview from './CompanyOverview.vue';
import { openUrl } from '@/utils/navigate';

defineProps({
    detail: Object as PropType<Experience>,
});
</script>