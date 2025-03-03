<template>
    <div style="min-width: 300px;">
        <SelectButton
            v-model="value"
            class="w-full mb-2"
            :options="options"
            option-label="label"
            :allow-empty="false"
            option-value="value" />
        <Divider />
        <div class="flex align-items-center gap-3 flex-column w-full">
            <EditableAvatar
                :is-editting="true"
                :type="value" />
            <div class="flex flex-column gap-2 w-full">
                <label for="name">Display Name</label>
                <InputText
                    id="name"
                    v-model="bunboaStore.data![value].name" />
            </div>
        </div>
        <Divider />
        <div class="w-full text-center">
            <Button
                :disabled="!bunboaStore.hasUnsavedChanges"
                label="Save"
                @click="bunboaStore.saveChanges();" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import SelectButton from 'primevue/selectbutton';
import InputText from 'primevue/inputtext';
import { type Ref, ref } from 'vue';
import { useBunBoa } from '@/stores/bunboa';
import EditableAvatar from '../HisHer/EditableAvatar.vue';

const value: Ref<'his' | 'her'> = ref('his');
const options = [
    { label: 'His', value: 'his' },
    { label: 'Her', value: 'her' },
];
const bunboaStore = useBunBoa();
</script>