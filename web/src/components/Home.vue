<template>
    <div>
        <swiper :options="swiperOption">
            <swiper-slide>
                <img class="w-100" src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg">
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/images/ddc8c8922cbb694dfb73c86bb03fce22.jpeg">
            </swiper-slide>
            <swiper-slide>
                <img class="w-100" src="../assets/images/210794580bb9303653804bb7b482f2a4.jpeg">
            </swiper-slide>
            <div class="swiper-pagination text-right px-3 pb-1" slot="pagination"></div>
        </swiper>
        <!-- end of swiper -->
        <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
            <div class="d-flex flex-wrap">
                <div class="nav-item mb-3" v-for="n in 10" :key="n">
                    <i class="sprite sprite-news"></i>
                    <div class="py-2">爆料站</div>
                </div>
            </div>
            <div class="bg-light py-2 fs-sm">
                <i class="sprite sprite-arrow mr-1"></i>
                <span>收起</span>
            </div>
        </div>
        <!-- end of nav icons -->
        <!-- 新闻资讯 -->
        <!-- 父组件先把数据传给子组件,子组件再把数据通过具名slot传给父组件,父组件使用的就是在子组件循环后的每个category -->
        <m-list-card icon="menu" title="新闻资讯" :categories="newCats">
            <template #items="{category}">
                <div class="py-2 fs-lg d-flex" v-for="(news,i) in category.newsList" :key="i">
                    <span class="text-info">[{{news.categoryName}}]</span>
                    <span class="px-2">|</span>
                    <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
                    <span class="text-grey-1 fs-sm">{{news.createdAt|date}}</span>
                </div>
            </template>
        </m-list-card>
    </div>
</template>

<script>
    import dayjs from 'dayjs'
    export default {
        filters: {
            date(val) {
                return dayjs(val).format('MM/DD')
            }
        },
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                newCats: []
            }
        },
        created() {
            this.fetchNewsCats()
        },
        methods: {
            async fetchNewsCats() {
                const res = await this.$http.get('/news/list')
                this.newCats = res.data
            }
        }
    }
</script>

<style lang="scss">
    @import '../variables.scss';

    .swiper-pagination-bullet {
        opacity: 1;
        border-radius: 0.1538rem;
        background: map-get($colors, 'white');

        &.swiper-pagination-bullet-active {
            background: map-get($colors, 'info');
        }
    }

    .nav-icons {
        border-top: 1px solid $border-color;
        border-bottom: 1px solid $border-color;

        .nav-item {
            width: 25%;
            border-left: 1px solid $border-color;

            &:nth-child(4n+1) {
                border-left: none;
            }
        }
    }
</style>