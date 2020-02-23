<template>
    <div>
        <h1>新建文章</h1>
        <el-form label-width="80px" @submit.native.prevent="save">
            <el-form-item label="所属分类">
                <el-select v-model="model.categories" multiple>
                    <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标题">
                <el-input v-model="model.title"></el-input>
            </el-form-item>
            <el-form-item label="详情">
                <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { VueEditor } from "vue2-editor";
    import axios from "axios";
    export default {
        components: {
            VueEditor
        },
        data() {
            return {
                model: {
                    title: '',
                    categories: [],
                    body: ''
                },
                categories: []
            }
        },
        created() {
            this.getCateList()
        },
        methods: {
            async getCateList() {
                const res = await this.$http.get('/rest/categories')
                this.categories = res.data
            },
            async save() {
                const res = await this.$http.post('/rest/articles', this.model)
                this.$router.push('/articles/list')
                this.$message.success('新建成功')
            },
            handleImageAdded(file, Editor, cursorLocation, resetUploader) {
                var formData = new FormData();
                formData.append("file", file);
                axios({
                    url: "http://localhost:3000/admin/api/upload",
                    method: "POST",
                    data: formData
                }).then(res => {
                    let url = res.data.url; // Get url from response
                    Editor.insertEmbed(cursorLocation, "image", url);
                    resetUploader();
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
</script>

<style scoped>

</style>