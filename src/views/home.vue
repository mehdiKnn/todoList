<template>
    <div class="main w-full mt-0 xl:mt-20 md:mt-20">
        <div>
            <div class="header">
                <input class="inputAdd border border-r-0 border-t-0 w-full xl:w-1/4 xl:border md:w-2/4 md:border"
                       type="text" placeholder="Your Task" v-model="task">
                <button @click="addTask" class="btn-blue">Add</button>
            </div>
        </div>
        <div class="firstContainer">
            <div class=" xl:w-3/5  md:w-4/5 w-full ">
                <div class="sideOption">
                    <button @click="deleteAll" class="red-btn ">Delete All</button>
                    <button v-if="this.allCheck === false" @click="checkAll" class="green-btn">Check All</button>
                    <button v-else-if="this.allCheck === true" @click="uncheckAll" v-if="" class="green-btn">Uncheck All</button>
                    <input @keyup="initSearch" v-model="searchTask" class="inputSearch" type="text" placeholder="Search">
                </div>
                <div class="card" v-for="(t , index) in list">
                    <div class="cardContent" v-if="t.status === 'read'">
                        <font-awesome-icon v-if="t.check===false"
                                           @click="checkTask(t.id, true)"
                                           :icon="['far','square']"
                                           size="lg"></font-awesome-icon>
                        <font-awesome-icon v-else-if="t.check===true" :icon="['far','check-square']"
                                           size="lg"
                                           @click="checkTask(t.id , false)"></font-awesome-icon>
                        <span @dblclick="statusChange(t)">{{t.content}}</span>
                        <button @click="deleteTask(t.id)" class="delButton">Delete</button>
                    </div>
                    <div class="cardContent" v-else-if="t.status === 'write'">
                        <input v-model="taskUp"
                               class="bg-gray-200 focus:bg-white appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-grey"
                               type="text">
                        <div class="sideOption">
                            <button @click="updateTask(t)" class="delButton">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {
                searchTask :null,
                task: null,
                taskUp: null,
                allCheck: false,
                list: [],
                savedList:[],
            }
        },
        methods: {
            addTask() {
                if (this.task !== null){
                    let createId = Math.random().toString(36).substr(2, 9)
                    this.$fireCol.doc(this.$fauth.currentUser.uid).collection('taks').doc(createId).set({
                        id: createId,
                        content: this.task,
                        check: false,
                        status: 'read'
                    })
                    this.task= null
                    this.allCheck = false
                }

            },
            deleteTask(id) {
                this.$fireCol.doc(this.$fauth.currentUser.uid).collection('taks').doc(id).delete().then(function () {
                    console.log("Document successfully deleted!");
                }).catch(function (error) {
                    console.error("Error removing document: ", error);
                });
            },
            updateTask(obj) {
                console.log(obj)
                this.$fireCol.doc(this.$fauth.currentUser.uid).collection('taks').doc(obj.id).set({
                    content: this.taskUp,
                    status: 'read'
                }, {merge: true})
            },
            statusChange(obj) {
                this.list.forEach(function (e) {
                    e.status = 'read'
                })
                obj.status = 'write'
                this.taskUp = obj.content
            },
            checkTask(id, status) {
                this.$fireCol.doc(this.$fauth.currentUser.uid).collection('taks').doc(id).set({
                    check: status,
                }, {merge: true})

            },
            checkAll() {
                this.list.forEach((e) => {
                    if (e.check === false) {
                        this.checkTask(e.id, true)
                    }
                })
                this.allCheck= true
            },
            uncheckAll(){
                this.list.forEach((e) => {
                    if (e.check !== false) {
                        this.checkTask(e.id, false)
                    }
                })
                this.allCheck= false
            },
            deleteAll() {
                this.list.forEach((e)=>{

                    this.deleteTask(e.id)
                })
                this.allCheck= false
            },
            initSearch(){

                this.list = this.savedList.filter(task => task.content.toLowerCase().includes(this.searchTask.toLowerCase()))
            }
        },

        created() {
            this.$fireCol.doc(this.$fauth.currentUser.uid).collection('taks').onSnapshot(ref => {
                ref.docChanges().forEach(change => {
                    const {newIndex, oldIndex, doc, type} = change
                    if (type === 'added') {
                        console.log(change)
                        this.list.splice(newIndex, 0, doc.data())
                    } else if (type === 'modified') {
                        this.list.splice(oldIndex, 1)
                        this.list.splice(newIndex, 0, doc.data())
                    } else if (type === 'removed') {
                        this.list.splice(oldIndex, 1)
                    }
                })
            })
            this.list =this.savedList
        },
    }
</script>
<style lang="scss">

</style>
