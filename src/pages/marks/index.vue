<template>
    <v-card class="mt-10 mr-10 ml-10">
        <v-select label="Группа" :items="['20-СПО-ПКС-02', '20-СПО-ПКС-03']"></v-select>
        <v-list>
            <v-card class="mr-5 ml-5 mb-3" variant="outlined">
                <v-card-title>Иванов Иван Иванович</v-card-title>
                <v-card-text>
                    <v-list>
                        <v-list-item>
                            <span class="mr-4">Литература - 8:30</span>
                            <v-btn variant="outlined">Отменить</v-btn>
                        </v-list-item>
                        <v-list-item>
                            <span class="mr-4">Математика - 9:51</span>
                            <v-btn variant="outlined">Отменить</v-btn>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
            <v-card class="mr-5 ml-5 mb-3" variant="outlined">
                <v-card-title>Сергей Сергеевич Юрьченко</v-card-title>
                <v-card-text>
                    <v-list>
                        <v-list-item>
                            <span class="mr-4">Сопромат - 11:42</span>
                            <v-btn variant="outlined">Отменить</v-btn>
                        </v-list-item>
                        <v-list-item>
                            <span class="mr-4">География - 13:15</span>
                            <v-btn variant="outlined">Отменить</v-btn>
                        </v-list-item>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-list>
    </v-card>
</template>
<script setup>

</script>