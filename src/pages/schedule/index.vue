<template>
    <v-card class="mt-10 mr-10 ml-10">
        <v-list>
            <v-select label="Группа" :items="['20-СПО-ПКС-02', '20-СПО-ПКС-03']"></v-select>
            <v-card class="mr-5 ml-5 mb-3" variant="outlined">
                <v-card-title>Математическая логика</v-card-title>
                <v-card-text>8:00 - 9:40</v-card-text>
            </v-card>
            <v-card class="mr-5 ml-5" variant="outlined">
                <v-card-title>Литература</v-card-title>
                <v-card-text>9:50 - 11:30</v-card-text>
            </v-card>
        </v-list>
    </v-card>
</template>
<script setup>
</script>