/**
 * 生成JS枚举语句
 * @param {Array} columnAvailableEnumList 当前列可选取的枚举列表
 * @param {String} enumName 自定义的枚举名
 */
exports.generateEnumByListOnJs = (columnAvailableEnumList, enumName) => {

        let ENUM = 'const '+ enumName + " = {";
        for (let index = 0; index < columnAvailableEnumList.length; index++) {
            const enumAvailValue = columnAvailableEnumList[index];
            ENUM += (index === columnAvailableEnumList.length - 1) ? enumAvailValue+ ": " + index : enumAvailValue + ": " + index  + ", "
        }
        ENUM += "}\n"
        return ENUM;
  
}
/**
 * 生成JAVA枚举语句
 * @param {Array} columnAvailableEnumList 当前列可选取的枚举列表
 * @param {String} enumName 自定义的枚举名
 */
exports.generateEnumByListOnJava = (columnAvailableEnumList, enumName) => {
    
        let ENUM = 'enum ' + enumName + ' {';
        for (let index = 0; index < columnAvailableEnumList.length; index++) {
            const enumAvailValue = columnAvailableEnumList[index];
            ENUM += (index === columnAvailableEnumList.length - 1) ? enumAvailValue : enumAvailValue + ", "
        }
        ENUM += "}\n"
        return ENUM;
}
