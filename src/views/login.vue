<template>
    <div class="flex w-2/5 rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4 w-1/2">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Mail address
                </label>
                <input v-model="mailIn" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                       type="text" placeholder="Username">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Password
                </label>
                <input v-model="pwdIn" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                       type="password" placeholder="Username">
            </div>
            <div class="flex items-center justify-between">
                <button @click="signIn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                    Sign In
                </button>
                <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </div>
        </div>
        <div class="bg-blue-500  w-1/2 px-6 py-4 text-white">
            <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="username">
                    Mail address
                </label>
                <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                       type="text" placeholder="Username">
            </div>
            <div class="mb-4">
                <label class="block text-sm font-bold mb-2" for="username">
                    Password
                </label>
                <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight "
                       type="password" placeholder="Username">
            </div>
            <div class="flex items-center justify-between">
                <button @click="signUp" class="bg-white  text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                    Sign Up
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import router from '../router'
    export default {
        name: "login",
        data(){
            return {
                pwdIn: null,
                mailIn:null,
                email : null,
                password : null,
            }
        },
        methods: {
            signUp: function () {
                this.$fauth.createUserWithEmailAndPassword(this.email, this.password).then( () => {
                    let user  = this.$fauth.currentUser
                    let docData = {
                        mail : this.email,
                        password : this.password,
                    }
                   this.$fireCol.doc(user.uid).set(docData).then(function () {
                        console.log("Document successfully written!")
                        router.push({path:'/task'})
                    })

                })
            },
            signIn : function () {
                this.$fauth.signInWithEmailAndPassword(this.mailIn, this.pwdIn).then(function () {
                    console.log("connexion réussi")
                    router.push({path:'/task'})
                })
            }
        }
    }
</script>

<style scoped>

</style>