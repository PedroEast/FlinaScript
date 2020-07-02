const {readFile, writeFile, appendFile} = require("./file");

/**
 * 以字符串类型的数组创建枚举
 * @param {string[]} arr 传入的枚举列表
 * @returns {Object} ENUM 创建的枚举对象
 */
const createEnum = (arr) =>{
    let ENUM = {};
    if (!Array.isArray(arr)){
        throw '!';
    }
    let count = 0;
    arr.map(name => {
        if(!name) {
            return;
        }
        ENUM[name] = count++;
       
    });      
    return ENUM;
}
const createJsEnum = (ENUM, enumName, jsFileName) => {
    // console.log(JSON.stringify(ENUM));
    let jsdata = `const ${enumName} = ` + JSON.stringify(ENUM) +";\n";
    jsdata = jsdata.replace(/"/g, '');
    appendFile(jsFileName, jsdata);
}

const createJavaEnum = (arr, enumName, javaFileName) => {
   
    // console.log(jsdata);
    // console.log("-----------");
    let javadata = `enum ${enumName} \{\n\t`
    for (let index = 0; index < arr.length; index++) {
        // console.log(arr[index])
        let temp = index === arr.length -1 ? arr[index] : arr[index] + ","
        javadata += temp;
    }
    javadata += "\n}\n"
    appendFile(javaFileName, javadata)
    // console.log(javadata)
}

const createEnumAndAppendFile = (arr, enumName, jsFileName="./JsEnum.js", javaFileName="./JavaEnum.java") => {
    arr = [ "待提交", "已提交", "核实通过", "核实不通过", "评价待完成", "评价完成", "确认通过", "确认不通过", "申请退回", "测试结束公布" ];
    let ENUM = createEnum(arr);
    createJsEnum(ENUM, enumName, jsFileName)
    createJavaEnum(arr, enumName, javaFileName);
    
    return ENUM;
}


// console.log(INDEX_ENUM);
/**
 * 表格字段类型细节接口
 */
class ColumnTypeDetail {
    index;
    columnName;
    columnType;
    constructor(index, columnName, columnType) {
        this.index = index;
        this.columnName = columnName;
        this.columnType = columnType;
    }
}
/**
 * 格式化数据库建表语句，主要进行清理首尾空格，转换为小写，替换``反引号
 * @param {string} sqlCreateStatement 
 * @returns {string} sqlStatementWhenTrim
 */
const setSqlCreateStatement = (sqlCreateStatement) =>{
    return sqlCreateStatement.trim().toLowerCase().replace("\`", "");
}

const indexVaild = (element) => {
    isVaild = true;
    const INDEX_ENUM = {index:0,primary:1,foreign:2,unique:3};
    Object.keys(INDEX_ENUM).map(key => {
        // console.log(key, element.indexOf(key));
        if(element.indexOf(key) === 0) {
            isVaild = false;
        }
    })
    // console.log(isVaild)
    return isVaild;
}

/**
 * 从格式化语句中拿到字段名和字段类型, 存放在ColumnTypeDetail类型数组里
 * @param {string} sqlCreateStatement 
 * @returns {ColumnTypeDetail[]} columnTypeDetails
 */
const getColumnTypeDetailsByCreateStatement = (sqlCreateStatement) =>{
    let columnTypeDetails = [];
    sqlCreateStatement = sqlCreateStatement.replace(/\s/g, '|');
    const columnLinePattern  = /\(.*\)/g
    let columnLines = sqlCreateStatement.match(columnLinePattern);
    // console.log(sqlCreateStatement,columnLines);
    columnLines = columnLines[0].split(",");
    // console.log(sqlCreateStatement,columnLines);
    for (let index = 0; index < columnLines.length; index++) {
        const element = columnLines[index].replace(/[\(\)|]/g, " ").trim();
        // switch(element) 
        console.log(columnLines[index],element);
        if(indexVaild(element)){
            const columnAttrbute = element.split(" ")
            const columnName = columnAttrbute[0];
            const columnType = columnAttrbute[1];
            const columnTypeDetail = new ColumnTypeDetail(index, columnName, columnType);
            columnTypeDetails.push(columnTypeDetail)
        }
    }
    return columnTypeDetails;
}

// const sqlCreateStatement = `create table if not exists \`column_avilable_enums\`
// (
//     \`id\` int not null auto_increment,
//     \`table_name\` varchar(40) not null,
//     \`column_name\` varchar(40) not null,
//     \`column_type\` varchar(40) not null,
//     \`column_enum\` text,
//     primary key (\`id\`)
// )
// engine=InnoDB default charset=utf8;`
// let result = setSqlCreateStatement(sqlCreateStatement);
// result = getColumnTypeDetailsByCreateStatement(result);
// console.log(JSON.stringify(result));

const showHelp = () => {
    console.log(`May be you need help. Append -h or -help will help you.`);
    console.log(`
case "-v": 
case "-version":
    console.log("Current version is 1.0.0"); break;
case "-a":
case "-author":
    console.log("The Author is pedro"); break;
case "-h":
case "-help":
    showHelp(); break;
case "-sql": // argument 应为一个create语句;
    getColumns(argument); break;
case "-enum": // argument 应为一个数组；
    createEnumAndAppendFile(argument); break;
    `)
}

const getColumns = (sqlCreateStatement) => {
    let result = setSqlCreateStatement(sqlCreateStatement);
    result = getColumnTypeDetailsByCreateStatement(result);

    const jsEnumJsonName = "./jsEnum.json"
    let jsEnumJson = JSON.stringify(result)+ "\n,\n";
    appendFile(jsEnumJsonName,jsEnumJson)
}

const runDirective = (directive, argumentList,argumentName) => {
    switch(directive) {
        case "-v": 
        case "-version":
            console.log(`Current version is 1.0.0`); break;
        case "-a":
        case "-author":
            console.log(`The Author is pedro`); break;
        case "-h":
        case "-help":
            showHelp(); break;
        case "-sql":
            getColumns(argument); break;
        case "-enum":
            createEnumAndAppendFile( argumentList,argumentName); break;
    }
}

(() => {
    // 验证命令行参数
    // console.log(process.argv)
    let directive;
    switch (process.argv.length) {
        case 2: showHelp(); break;
        case 3: directive = process.argv[2]; runDirective(directive); break;
        case 5: directive = process.argv[2];
                const argumentList = process.argv[3];
                const argumentName = process.argv[4];
                runDirective(directive, argumentList,argumentName);
    }
})();


// let arr = ["index","primary","foreign","unique"];
// let INDEX_ENUM = createEnumAndAppendFile(arr, "INDEX_ENUM")

