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
                <div class="py-2" v-for="(news,i) in category.newsList" :key="i">
                    <span>[{{news.categoryName}}]</span>
                    <span>|</span>
                    <span>{{news.title}}</span>
                    <span>{{news.date}}</span>
                </div>
            </template>
        </m-list-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                newCats: [
                    {
                        name: '热门',
                        newsList: new Array(5).fill({}).map(v => ({
                            categoryName: '公告',
                            title: '6月2日全服不停机更新公告',
                            date: '06/01'
                        }))
                    },
                    {
                        name: '新闻',
                        newsList: new Array(5).fill({}).map(v => ({
                            categoryName: '新闻',
                            title: '6月2日全服不停机更新公告',
                            date: '06/01'
                        }))
                    },
                    {
                        name: '热门',
                        newsList: new Array(5).fill({}).map(v => ({
                            categoryName: '公告',
                            title: '6月2日全服不停机更新公告',
                            date: '06/01'
                        }))
                    },
                    {
                        name: '热门',
                        newsList: new Array(5).fill({}).map(v => ({
                            categoryName: '公告',
                            title: '6月2日全服不停机更新公告',
                            date: '06/01'
                        }))
                    },
                    {
                        name: '热门',
                        newsList: new Array(5).fill({}).map(v => ({
                            categoryName: '公告',
                            title: '6月2日全服不停机更新公告',
                            date: '06/01'
                        }))
                    }
                ]
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