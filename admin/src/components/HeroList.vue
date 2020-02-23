<template>
    <div>
        <h1>英雄列表</h1>
        <el-table ref="singleTable" :data="items" style="width: 100%">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column property="_id" label="ID" width="250"></el-table-column>
            <el-table-column property="name" label="名称"></el-table-column>
            <el-table-column property="title" label="称号"></el-table-column>
            <el-table-column property="avatar" label="头像">
                <template slot-scope="scope">
                    <img :src="scope.row.avatar" style="height: 3rem;">
                </template>
            </el-table-column>
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
            this.getHeros()
        },
        methods: {
            async getHeros() {
                const res = await this.$http.get('/rest/heros')
                this.items = res.data
                console.log('英雄列表')
                console.log(this.items)
            },
            gotoEdit(row) {
                this.$router.push('/heros/edit/' + row._id)
            },
            async remove(row) {
                const confirmResult = await this.$confirm('此操作将永久删除该英雄' + row.name + ', 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).catch(err => err)
                if (confirmResult === "confirm") {
                    this.$http
                        .delete('/rest/heros/' + row._id)
                        .then(response => {
                            console.log(response)
                            this.$message.success("删除成功")
                            this.getHeros()
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