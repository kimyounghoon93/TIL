# source code

```vue
``SignUp``
<template>
    <v-form ref="form">
        <v-text-field v-model="username" label="이름"/>
        <v-text-field v-model="email" label="ID"/>
        <v-text-field v-model="password" label="PASSWORD"/>
        <v-select v-model="gender" :items="genders" label="GENDER"></v-select>
        
         <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
        >
            <template v-slot:activator="{ on }">
            <v-text-field
                v-model="date"
                label="Birthday date"
                prepend-icon="mdi-cake-variant"
                readonly
                v-on="on"
            ></v-text-field>
            </template>
            <v-date-picker
            color="orange"
            ref="picker"
            v-model="date"
            :max="new Date().toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="save"
            ></v-date-picker>
        </v-menu>
        <v-text-field v-model="location" label="LOCATION"/>
        <v-text-field v-model="marriage" label="MARRIAGE"/>
        <v-text-field v-model="job" label="JOB"/>
        <v-select v-model="DISABILITY" :items="DISABILITYS" label="DISABILITY"></v-select>
        <v-text-field v-model="disability" label="DISABILITY"/>
        <v-text-field v-model="familysize" label="FAMILYSIZE"/>
        <v-text-field v-model="insurance" label="INSURANCE"/>
        <v-text-field v-model="incomequintile" label="INCOMEQUINTILE"/>
        
        <v-layout justify-center pa-10>
            <v-btn large color="indigo white--text" @click="onSubmit">Join</v-btn>
        </v-layout>
    </v-form>
</template>

<script>
import router from "../router"
export default {
    props: {
        submit: {
            type: Function,
            default: () => {}
        }
    },
    data: () => ({
        username: "",
        password: "",
        email: "",
        gender: "",
        genders: [
            'Male',
            'Female',
        ],

        date: null,
        menu: false,

        location: "",
        marriage: "",
        job: "",
        disability: "",
        familysize: "",
        insurance: "",
        incomequintile: "",
        DISABILITY: '----',
        DISABILITYS: [
            'Yes',
            'No',
        ],
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        },
    },
    methods: {
        save (date) {
        this.$refs.menu.save(date)
        },
        onSubmit: function() {
            const params = {
                username: this.username,
                email: this.email,
                password: this.password,
                gender: this.gender,
                location: this.location,
                marriage: this.marriage,
                job: this.job,
                disability: this.disability,
                familysize: this.familysize,
                insurance: this.insurance,
                incomequintile: this.incomequintile,
            };
            this.submit(params);

            router.push("/user/list")
        }
    }
}
</script>
```

