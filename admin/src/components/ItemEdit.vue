<template>
    <div>
        <h1>修改装备</h1>
        <el-form label-width="80px" @submit.native.prevent="save">
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="图标">
                <el-upload class="avatar-uploader" action="http://localhost:3000/admin/api/upload"
                    :show-file-list="false" :on-success="afterUpload">
                    <img v-if="model.icon" :src="model.icon" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
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
                    icon: ''
                }
            }
        },
        created() {
            this.id && this.getItem()
        },
        methods: {
            async save() {
                const res = await this.$http.put('/items/' + this.id, this.model)
                this.$router.push('/items/list')
                this.$message.success('修改成功')
            },
            async getItem() {
                const res = await this.$http.get('/items/' + this.id)
                this.model = res.data
            },
            afterUpload(res) {
                this.model.icon = res.url
                console.log(res)
            }
        }
    }
</script>

<style scoped>

</style>