<template>
    <div id="item">
        <h1>编辑英雄</h1>
        <el-form label-width="80px" @submit.native.prevent="save">
            <el-tabs value="basic">
                <el-tab-pane label="基本信息" name="basic">
                    <el-form-item label="名称">
                        <el-input v-model="model.name"></el-input>
                    </el-form-item>
                    <el-form-item label="称号">
                        <el-input v-model="model.title"></el-input>
                    </el-form-item>
                    <el-form-item label="头像">
                        <el-upload class="avatar-uploader" action="http://localhost:3000/admin/api/upload"
                            :show-file-list="false" :on-success="afterUpload">
                            <img v-if="model.avatar" :src="model.avatar" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="类型">
                        <el-select v-model="model.categories" multiple>
                            <el-option v-for="item in categories" :label="item.name" :value="item._id" :key="item._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="难度">
                        <el-rate style="margin-top: 0.6rem;" :max="9" v-model="model.scores.difficult"></el-rate>
                    </el-form-item>
                    <el-form-item label="技能">
                        <el-rate style="margin-top: 0.6rem;" :max="9" v-model="model.scores.skills"></el-rate>
                    </el-form-item>
                    <el-form-item label="攻击">
                        <el-rate style="margin-top: 0.6rem;" :max="9" v-model="model.scores.attack"></el-rate>
                    </el-form-item>
                    <el-form-item label="生存">
                        <el-rate style="margin-top: 0.6rem;" :max="9" v-model="model.scores.survive"></el-rate>
                    </el-form-item>
                    <el-form-item label="顺风出装">
                        <el-select v-model="model.items1" multiple>
                            <el-option v-for="item in items" :label="item.name" :value="item._id" :key="item._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="逆风出装">
                        <el-select v-model="model.items2" multiple>
                            <el-option v-for="item in items" :label="item.name" :value="item._id" :key="item._id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="使用技巧">
                        <el-input type="textarea" v-model="model.usageTips"></el-input>
                    </el-form-item>
                    <el-form-item label="对抗技巧">
                        <el-input type="textarea" v-model="model.battleTips"></el-input>
                    </el-form-item>
                    <el-form-item label="团战思路">
                        <el-input type="textarea" v-model="model.teamTips"></el-input>
                    </el-form-item>
                </el-tab-pane>
                <el-tab-pane label="技能" name="skills">
                    <el-button type="text" icon="el-icon-plus" @click="model.skills.push({})">添加技能</el-button>
                    <el-row type="flex" style="flex-wrap: wrap;">
                        <el-col :md="12" v-for="(item,i) in model.skills" :key="i">
                            <el-form-item label="名称">
                                <el-input v-model="item.name"></el-input>
                            </el-form-item>
                            <el-form-item label="图标">
                                <el-upload class="avatar-uploader" action="http://localhost:3000/admin/api/upload"
                                    :show-file-list="false" :on-success="res=>$set(item,'icon',res.url)">
                                    <img v-if="item.icon" :src="item.icon" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                            <el-form-item label="描述">
                                <el-input type="textarea" v-model="item.description"></el-input>
                            </el-form-item>
                            <el-form-item label="小提示">
                                <el-input type="textarea" v-model="item.tips"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button size="small" type="danger" @click="model.skills.splice(i,1)">删除</el-button>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
            <el-form-item style="margin-top: 1rem;">
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        props: {
            id: ''
        },
        data() {
            return {
                model: {
                    name: '',
                    avatar: '',
                    title: '',
                    categories: [],
                    scores: {
                        difficult: 0,
                        skills: 0,
                        attack: 0,
                        survive: 0
                    },
                    items1: [],
                    items2: [],
                    usageTips: '',
                    battleTips: '',
                    teamTips: '',
                    skills: []
                },
                categories: [],
                items: []
            }
        },
        created() {
            this.id && this.getHero()
            this.getCateList()
            this.getItems()
        },
        methods: {
            async getItems() {
                const res = await this.$http.get('/items')
                this.items = res.data
                console.log('装备列表')
                console.log(this.items)
            },
            async getCateList() {
                const res = await this.$http.get('/categories')
                this.categories = res.data
            },
            async save() {
                const res = await this.$http.put('/heros/' + this.id, this.model)
                this.$router.push('/heros/list')
                this.$message.success('修改成功')
            },
            async getHero() {
                const res = await this.$http.get('/heros/' + this.id)
                // 把res.data中的数据往this.model中加
                // 如果有同名的话,会替换this.model中的数据
                // 如果没有同名的话,保留this.model中原来的
                this.model = Object.assign({}, this.model, res.data)
            },
            afterUpload(res) {
                this.model.avatar = res.url
                console.log(res)
            }
        }
    }
</script>

<style scoped>

</style>