<template>
    <div class="page-article" v-if="model">
        <div class="d-flex py-3 px-2 header-box">
            <div class="iconfont icon-back text-blue" @click="$router.push('/')"></div>
            <Strong class="flex-1 text-ellipsis px-2 text-blue">{{model.title}}</Strong>
            <div class="text-grey fs-xs">
                2019-6-19
            </div>
        </div>
        <div v-html="model.body" class="px-3 text-center fs-lg article-body header-box"></div>
        <div class="px-3 border-top my-3">
            <div class="d-flex ai-center">
                <i class="iconfont icon-menu mr-1"></i>
                <strong class="text-blue fs-lg ml-1">相关资讯</strong>
            </div>
            <div class="mt-3">
                <router-link class="py-2 text-ellipsis" :to="`/articles/${item._id}`" tag="div"
                    v-for="item in model.related" :key="item._id">{{item.title}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            id: { required: true }
        },
        data() {
            return {
                model: null
            }
        },
        watch: {
            id() {
                this.fetch()
            }
        },
        methods: {
            async fetch() {
                const res = await this.$http.get(`/articles/${this.id}`)
                this.model = res.data
                console.log(this.model)
            }
        },
        created() {
            this.fetch()
        }
    }
</script>

<style lang="scss">
    .header-box {
        border-bottom: 1px solid rgb(177, 171, 171);
    }

    .article-body {
        img {
            max-width: 100%;
            height: auto;
        }

        iframe {
            width: 100%;
            height: auto;
        }
    }
</style>