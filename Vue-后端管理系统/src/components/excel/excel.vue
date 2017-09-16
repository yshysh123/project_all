<template>
	<div id="excel">
        <div>  
            <el-button type="primary" @click="exceldownload" class='excelbtn'>导出Excel</el-button> 
        </div>
        <el-table
            id="tableExcel"
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="date"
            label="日期"
            sortable
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址"
            :formatter="formatter">
            </el-table-column>
            <el-table-column
            prop="tag"
            label="标签"
            width="100"
            :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
            :filter-method="filterTag"
            filter-placement="bottom-end">
            <template scope="scope">
                <el-tag
                :type="scope.row.tag === '家' ? 'primary' : 'success'"
                close-transition>{{scope.row.tag}}</el-tag>
            </template>
            </el-table-column>
        </el-table>
	</div>
</template>

<script>
    import {method5} from './excel.js'
    export default{
        data () {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '于偲鸿',
                    address: '上海市普陀区金沙江路 1518 弄',
                    tag: '家'
                }, {
                    date: '2016-05-04',
                    name: '秦焕禹',
                    address: '上海市普陀区金沙江路 1517 弄',
                    tag: '公司'
                }, {
                    date: '2016-05-01',
                    name: '马辉',
                    address: '上海市普陀区金沙江路 1519 弄',
                    tag: '家'
                }, {
                    date: '2016-05-03',
                    name: '刘亚松',
                    address: '上海市普陀区金沙江路 1516 弄',
                    tag: '公司'
                },{
                    date: '2016-05-03',
                    name: '王彤宇',
                    address: '上海市普陀区金沙江路 1516 弄',
                    tag: '家'
                },{
                    date: '2016-05-03',
                    name: '沈松',
                    address: '上海市普陀区金沙江路 1516 弄',
                    tag: '公司'
                },{
                    date: '2016-05-03',
                    name: '王泽慧',
                    address: '上海市普陀区金沙江路 1516 弄',
                    tag: '家'
                },{
                    date: '2016-05-03',
                    name: '王慧仙',
                    address: '上海市普陀区金沙江路 1516 弄',
                    tag: '公司'
                },{
                    date: '2016-05-03',
                    name: '大鹏神',
                    address: '上海市普陀区金沙江路 1516 弄',
                    tag: '公司'
                },{
                    date: '2016-05-03',
                    name: '然爷',
                    address: '上海市普陀区金沙江路 1516 弄',
                    tag: '家'
                },{
                    date: '2016-05-03',
                    name: '队长哥',
                    address: '上海市普陀区金沙江路 1516 弄',
                    tag: '公司'
                },{
                    date: '2016-05-03',
                    name: '龙局',
                    address: '上海市普陀区金沙江路 1516 弄',
                    tag: '家'
                },{
                    date: '2016-05-03',
                    name: '或局',
                    address: '上海市普陀区金沙江路 1516 弄',
                    tag: '公司'
                }
                ]
            }
        },
        methods: {
            exceldownload:function() {
                method5('tableExcel')
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            }
        }
    }
</script>

<style>
#excel{
    margin-left: 180px;
}
#excel .excelbtn{
    height: 40px;
    width:100px;
    margin-left: 45%;
}
</style>
