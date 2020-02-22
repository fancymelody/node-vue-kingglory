<template>
    <div id="item">
        <h1>新建装备</h1>
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
        data() {
            return {
                model: {
                    name: '',
                    icon: ''
                }
            }
        },
        methods: {
            async save() {
                const res = await this.$http.post('/items', this.model)
                this.$router.push('/items/list')
                this.$message.success('新建成功')
            },
            afterUpload(res) {
                this.model.icon = res.url
                console.log(res)
            }
        }
    }
</script>

<style scoped>
    #item .el-upload .el-upload--text {
        border: 1px dashed #fff !important;
    }

    .avatar-uploader .el-upload {
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>