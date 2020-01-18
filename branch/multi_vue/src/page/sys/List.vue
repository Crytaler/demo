<template>
    <div>
      <div>
        <span>
          <el-button class="addBtn" type="primary" @click="dialogVisible = true">新增</el-button>
        </span>
      </div>
      <div>
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        style="width: 100%">
        <el-table-column
          label="ID"
          prop="id">
        </el-table-column>
        <el-table-column
          label="Name"
          prop="name">
        </el-table-column>
        <el-table-column
          label="昵称"
          prop="nickname">
        </el-table-column>
        <el-table-column
          label="日期"
          prop="date">
        </el-table-column>
        <el-table-column
          label="生日"
          prop="birthday">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="dialogVisible = true">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 40]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length">
      </el-pagination>
    </div>
      <el-dialog
        title="新增"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="40px" class="demo-ruleForm">
        <el-form-item
          label="姓名"
          prop="age">
          <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
        </el-form-item>
          <el-form-item
            label="昵称"
            prop="">
            <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item
            label="生日"
            prop="">
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
         <el-button @click="dialogVisible = false">取 消</el-button>
         <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      tableData: [{
        id: '1',
        date: '2016-05-02',
        name: 'yongzhen',
        nickname: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        birthday: '测试'
      }, {
        id: '2',
        date: '2016-05-04',
        name: 'zhangsan',
        nickname: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: '2',
        date: '2016-05-04',
        name: 'zhangsan',
        nickname: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id: '3',
        date: '2016-05-01',
        name: '里斯',
        nickname: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: '3',
        date: '2016-05-01',
        name: '里斯',
        nickname: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: '4',
        date: '2016-05-03',
        name: '王小虎',
        nickname: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      search: '',
      currentPage: 1,
      pagesize: 5,
      dialogVisible: false,
      numberValidateForm: {
        age: ''
      },
      value1: ''
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function (size) {
      // 每页下拉显示数据
      this.pagesize = size
    },
    handleCurrentChange: function (currentPage) {
      // 点击第几页
      this.currentPage = currentPage
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style scoped>
  .addBtn {
    margin: 20px 0 20px 15px;
  }
</style>
