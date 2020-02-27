<template>
    <m-card :icon="icon" :title="title">
        <div class="nav jc-between">
            <div class="nav-item" :class="{active:active===i}" v-for="(item,i) in categories" :key="i"
                @click="$refs.list.swiper.slideTo(i)">
                <div class="nav-link">{{item.name}}</div>
            </div>
        </div>
        <div class="pt-3">
            <swiper ref="list" @slide-change="()=>active=$refs.list.swiper.realIndex">
                <swiper-slide v-for="(category,i) in categories" :key="i">
                    <!-- 使用slot向使用此组件的页面传值 -->
                    <slot name="items" :category="category"></slot>
                </swiper-slide>
            </swiper>
        </div>
    </m-card>
</template>

<script>
    export default {
        props: {
            title: { type: String, required: true },
            icon: { type: String, required: true },
            categories: { type: Array, required: true }
        },
        data() {
            return {
                active: 0
            }
        }
    }
</script>