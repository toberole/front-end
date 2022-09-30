<template>
    <div>
        msg:{{msg}}
        <hr>
        name:{{name}}
        <hr>
        age:{{age}}
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            msg: "hello"
        }
    },
    // 外部传入参数
    // props: {
    //     name: String,
    //     age: Number
    // }

    props: {
        name: {
            type: String,
            default: "Hello 123"
        },
        age: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>

</style>