<template>
    <div>
        <h1>编辑分类</h1>
        <el-form label-width="80px" @submit.native.prevent="save">
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
                    name: ''
                }
            }
        },
        created() {
            this.id && this.getCategory()
        },
        methods: {
            async save() {
                const res = await this.$http.put('/categories/' + this.id, this.model)
                this.$router.push('/categories/list')
                this.$message.success('修改成功')
            },
            async getCategory() {
                const res = await this.$http.get('/categories/' + this.id)
                this.model = res.data
            }
        }
    }
</script>

<style scoped>

</style>