<template>
    <div>
        <h1>分类列表</h1>
        <el-table ref="singleTable" :data="items" style="width: 100%">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column property="_id" label="ID" width="250"></el-table-column>
            <el-table-column property="parent.name" label="上级分类" width="250"></el-table-column>
            <el-table-column property="name" label="分类名称"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="gotoEdit(scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="remove(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: []
            }
        },
        created() {
            this.getCateList()
        },
        methods: {
            async getCateList() {
                const res = await this.$http.get('/categories')
                this.items = res.data
            },
            gotoEdit(row) {
                this.$router.push('/categories/edit/' + row._id)
            },
            async remove(row) {
                const confirmResult = await this.$confirm('此操作将永久删除该分类' + row.name + ', 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).catch(err => err)
                if (confirmResult === "confirm") {
                    this.$http
                        .delete('/categories/' + row._id)
                        .then(response => {
                            console.log(response)
                            this.$message.success("删除成功")
                            this.getCateList()
                        })
                        .catch(err => {
                            this.$message.error("删除失败")
                        })
                } else {
                    this.$message.info('已取消删除')
                }
            }
        }
    }
</script>

<style scoped>

</style>