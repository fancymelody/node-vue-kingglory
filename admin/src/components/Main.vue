<template>
    <el-container style="height:100vh;">
        <el-aside width="200px" style="background-color: #373d41;">
            <el-menu router background-color="#333744" text-color="#fff" active-text-color="#409EFF" unique-opend
                :default-active="$route.path">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>分类管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="/categories/create">新建分类</el-menu-item>
                        <el-menu-item index="/categories/list">分类列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-ship"></i>装备管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="/items/create">新建装备</el-menu-item>
                        <el-menu-item index="/items/list">装备列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-trophy"></i>英雄管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="/heros/create">新建英雄</el-menu-item>
                        <el-menu-item index="/heros/list">英雄列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-edit"></i>文章管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="/articles/create">新建文章</el-menu-item>
                        <el-menu-item index="/articles/list">文章列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title"><i class="el-icon-s-shop"></i>广告管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="/ads/create">新建广告位</el-menu-item>
                        <el-menu-item index="/ads/list">广告位列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title"><i class="el-icon-user"></i>管理员管理</template>
                    <el-menu-item-group>
                        <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
                        <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
            </el-header>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    };
</script>

<style scoped>
    .el-aside .el-menu {
        border-right: none;
    }

    .el-header {
        background-color: #333744;
        color: #fff;
        line-height: 60px;
    }
</style>