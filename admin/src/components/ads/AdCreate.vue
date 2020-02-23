<template>
    <div>
        <h1>新建广告位</h1>
        <el-form label-width="80px" @submit.native.prevent="save">
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="广告">
                <el-button type="text" icon="el-icon-plus" @click="model.items.push({})">添加广告</el-button>
                <el-row type="flex" style="flex-wrap: wrap;">
                    <el-col :md="24" v-for="(item,i) in model.items" :key="i">
                        <el-form-item label="跳转链接">
                            <el-input v-model="item.url"></el-input>
                        </el-form-item>
                        <el-form-item label="图标" style="margin-top: 10px;">
                            <el-upload class="avatar-uploader" action="http://localhost:3000/admin/api/upload"
                                :show-file-list="false" :on-success="res=>$set(item,'image',res.url)">
                                <img v-if="item.image" :src="item.image" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </el-form-item>
                        <el-form-item>
                            <el-button size="small" type="danger" @click="model.items.splice(i,1)">删除</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
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
                    items: []
                }
            }
        },
        methods: {
            async save() {
                const res = await this.$http.post('/rest/ads', this.model)
                this.$router.push('/ads/list')
                this.$message.success('新建成功')
            },
        }
    }
</script>

<style scoped>
    .el-upload .el-upload--text {
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
        min-width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        min-width: 178px;
        height: 178px;
        display: block;
    }
</style>