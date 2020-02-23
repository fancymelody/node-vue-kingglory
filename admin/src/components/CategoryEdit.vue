<template>
    <div>
        <h1>编辑分类</h1>
        <el-form label-width="80px" @submit.native.prevent="save">
            <el-form-item label="上级分类">
                <el-select v-model="model.parent">
                    <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item>
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
                    parent: ''
                },
                parents: []
            }
        },
        created() {
            this.id && this.getCategory()
            this.getCateList()
        },
        methods: {
            async getCateList() {
                const res = await this.$http.get('/rest/categories')
                this.parents = res.data
            },
            async save() {
                const res = await this.$http.put('/rest/categories/' + this.id, this.model)
                this.$router.push('/categories/list')
                this.$message.success('修改成功')
            },
            async getCategory() {
                const res = await this.$http.get('/rest/categories/' + this.id)
                this.model = res.data
            }
        }
    }
</script>

<style scoped>

</style>