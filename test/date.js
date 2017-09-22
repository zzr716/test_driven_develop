// 测试驱动开发
// 先写测试 Date类 判断闰年 日期是否合格
// 功能点 不要的功能不要写
// 功能点对待为测试 TDD 
const should = require('should')
const EasyDate = require('../app/EasyDate')
// 声明测试组
describe('Date', () => {
    describe('#isLeapYear', () => {
        // 断言
        it('是否为闰年', () => {
            // 程序运行，和预期做比较，举例子
            // 当举例越来越多 程序就越正确
            should(EasyDate.isLeapYear(2000)).be.True()
            should(EasyDate.isLeapYear(2004)).be.True()
            should(EasyDate.isLeapYear(2100)).be.False()
            should(EasyDate.isLeapYear(2005)).be.False()
        })
    })
    // TDD 核心开发需求去写测试
    // 测试驱动开发
    // 校验日期格式
    describe('#isDate', () => {
        it ('是否为符合要求的日期', () => {
            let format = 'yyyy-mm-dd'
            // 测试用例 举的方法，要全面
            should(EasyDate.isDate('2016-10-12', format)).be.True()
            should(EasyDate.isDate('2016-1-1', format)).be.False()
            should(EasyDate.isDate('16-1-12', format)).be.False()
            should(EasyDate.isDate('16-10-1', format)).be.False()
            should(EasyDate.isDate('2017-09-31', format)).be.False()
            should(EasyDate.isDate('2017-02-29', format)).be.False()

        })
    })
})