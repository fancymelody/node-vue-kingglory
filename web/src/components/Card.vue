<template>
    <div class="card p-3 mt-3 bg-white">
        <div class="card-header d-flex ai-center pb-3 text-dark">
            <span class="iconfont" :class="`icon-${icon}`"></span>
            <div class="fs-xl flex-1 px-2">{{title}}</div>
            <span class="iconfont icon-menu1"></span>
        </div>
        <div class="card-body pt-3">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: { type: String, required: true },
            icon: { type: String, required: true }
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
    @import '../variables.scss';

    .card {
        border-bottom: 1px solid $border-color;
    }

    .card .card-header {
        border-bottom: 1px solid $border-color;
    }
</style>