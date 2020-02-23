<template>
    <div>
        <h1>新建管理员</h1>
        <el-form label-width="80px" @submit.native.prevent="save">
            <el-form-item label="用户名">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="model.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                model: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            async save() {
                const res = await this.$http.post('/rest/admin_users', this.model)
                this.$router.push('/admin_users/list')
                this.$message.success('新建成功')
            }
        }
    }
</script>

<style scoped>
</style>