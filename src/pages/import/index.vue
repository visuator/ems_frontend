<template>
    <v-card class="mt-10 mr-10 ml-10">
        <v-form @submit.prevent="submit">
            <v-container>
                <v-row>
                    <v-col>
                        <v-select label="Выбор типа импорта" :items="keys"
                            :error-messages="selectedType.errorMessage.value"
                            v-model="selectedType.value.value"></v-select>
                        <v-file-input label="Выбор файла" :error-messages="selectedFile.errorMessage.value"
                            v-model="selectedFile.value.value"></v-file-input>
                        <v-btn block type="submit" :loading="submitLoading">Отправить</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-card>
</template>
<script setup>
import { useField, useForm } from 'vee-validate'
import { api } from '@/modules/axios'

const importTypes = {
    'Организация': 0,
    'Студенты': 1,
    'Расписание': 2,
};
const keys = Object.keys(importTypes);
const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        type: (value) => keys.includes(value) ? true : 'Выберите тип импорта',
        file: (value) => value && value.name ? true : 'Выберите файл'
    }
});
const selectedType = useField('type');
const selectedFile = useField('file');
const submitLoading = ref();
const submit = handleSubmit(async values => {
    const formData = new FormData();
    formData.append('file', selectedFile.value.value);
    formData.append('importType', importTypes[selectedType.value.value]);
    await api.post('admin/import', formData);
    console.log(values);
})
</script>