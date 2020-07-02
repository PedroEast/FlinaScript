
/**
 * 从指定路径中读取文件，默认编码为utf8
 * @param {string} fileName 文件名称
 * @param {string} fileCode 文件编码，默认为utf8
 * @returns {string} data 读取到的文件数据 
 */
const readFile = (fileName, fileCode = "utf8") => {
    const fs = require("fs")
    try {
        let data = fs.readFileSync(fileName, fileCode)
        console.log(`${fileName}文件数据读取成功`);
        return data;
    }catch (error) {
        console.error(`${fileName}文件读取失败, 错误是${error}`);
    }
}

/**
 * 从指定路径中写入数据到文件，默认编码为utf8
 * @param {string} fileName 文件名称
 * @param {string} data 写入到的文件数据 
 */
const writeFile = (fileName, data) => {
    const fs = require("fs");
    try {
        fs.writeFileSync(fileName, data);
        console.log(`${fileName}文件创建成功`);
    }catch(error) {
        console.error(`${fileName}文件创建失败, 错误是${error}`);
    }
}

/**
 * 从指定路径中添加数据到文件，默认编码为utf8
 * @param {string} fileName 文件名称
 * @param {string} data 写入到的文件数据 
 */
const appendFile = (fileName, data) => {
    const fs = require("fs");
    try {
        fs.appendFileSync(fileName, data);
        console.log(`${fileName}文件写入成功`);
    }catch (error) {
        console.error(`${fileName}文件写入失败, 错误是${error}`);
    }
}
const existFile = (filePath) => {
    const fs = require("fs");
    if (fs.existsSync(filePath)) {
        console.log(filePath+'路径已存在');
        return true;
    }else {
        console.log(filePath+'路径不存在，或许你需要新建当前路径');
        return false;
    }
}
module.exports = {readFile, writeFile, appendFile, existFile};