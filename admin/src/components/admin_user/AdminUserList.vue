<template>
    <div>
        <h1>管理员列表</h1>
        <el-table ref="singleTable" :data="items" style="width: 100%">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column property="_id" label="ID" width="250"></el-table-column>
            <el-table-column property="username" label="用户名"></el-table-column>
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
            this.getUserList()
        },
        methods: {
            async getUserList() {
                const res = await this.$http.get('/rest/admin_users')
                this.items = res.data
            },
            gotoEdit(row) {
                this.$router.push('/admin_users/edit/' + row._id)
            },
            async remove(row) {
                const confirmResult = await this.$confirm('此操作将永久删除该用户' + row.username + ', 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).catch(err => err)
                if (confirmResult === "confirm") {
                    this.$http
                        .delete('/rest/admin_users/' + row._id)
                        .then(response => {
                            console.log(response)
                            this.$message.success("删除成功")
                            this.getUserList()
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