<template>
    <!--  -->
    <div class="demo">
        名字：{{firstname}}
    </div>
</template>

<script>
    // 第一种写法
// const school = Vue.Vue.extend({
//     template: template,
//     data() {
//         return {
//             firstname: "Hello"
//         }
//     },
// });
// export default school;

// 简写形式
export default {
    template: template,
    name: 'School',
    data() {
        return {
            firstname: "Hello"
        }
    },
}
</script>


<style>
.demo {
    background-color: blueviolet;
}
</style>