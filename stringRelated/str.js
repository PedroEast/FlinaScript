const {readFile, writeFile, appendFile} = require("./file");

/**
 * 反转文本
 * @param {string} str 待转换文本
 */
function reverseString(str) {
    let arr = []
    for(let i=0; i<str.length; i++){
      arr.push(str[i]);
    }
    arr = arr.reverse();
    let reverseArr = '';
    arr.map(elem => reverseArr+= elem);
    return reverseArr
  }
/**
 * 查询文本中的最长单词
 * @param {string} str 待查文本
 */
function findLongestWordLength(str) {
  let arr = str.split(' ');
  let length = 0;
  arr.forEach(elem => {
      length = length>elem.length?length: elem.length;
  });
  return length;
}

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

/**
 * 确认目标尾部不包含文本
 * @param {string} str 文本
 * @param {string} target 目标检测文本
 */
function confirmEnding(str, target) {
    let result = true;
    let count = 1;
    for(let i=target.length-1;i>=0;i--){
      if(target[i]!==str[str.length-count]){result=false}
      count++;
    } 
    return result;
  }
  
// confirmEnding("Bastian", "an");
// console.log(confirmEnding("Bastian", "tan"))

/**
 * 重复生成文本
 * @param {string} str 文本
 * @param {number} num 数量
 */
function repeatStringNumTimes(str, num) {
  let newStr = ''
  if(num<=0){return newStr}
  else{
    for(let i=0;i<num;i++){
      newStr += str;
    }
  }
  return newStr;
}

// repeatStringNumTimes("abc", 3);
// console.log(repeatStringNumTimes("sdc", 1))
/**
 * 从第几个字母开始省略
 * @param {string} str 文本 
 * @param {number} num 单词数
 */
function truncateString(str, num) {
  if(num>=str.length){return str}
  return str.substring(0,num)+'...';
}

// truncateString("A-tisket a-tasket A green and yellow basket", 8);
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))

/**
 * 首字母大写
 * @param {string} str 标题文本
 */
function titleCase(str) {
  let newStr = ''
  let higherFlag = true;
  for(let i = 0; i< str.length;i++){
    if(higherFlag){
      newStr += str[i].toUpperCase();
      higherFlag = false;
    }else if(str[i]===' '){
      higherFlag = true;
      newStr += ' '
    }else{
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

// titleCase("I'm a little tea pot");
// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))

const lowercase = (data) => {
  return data.toLowerCase();
}

/**
 * 多行转单行
 * @param {string} data 多行文本 
 */
const multiToOneLine = (data) => {
  data = '"' + data.split("\n").map(e=> e.trim()).join(" ").replace(/'/g, '"') + '"';
  console.log(data);
  return data;
}
// let data = `create table users 
// (
//   id integer not null, 
//       address varchar(255), 
//       birth_day datetime, 
//       sex varchar(255), 
//       user_name varchar(255), 
//       primary key (id)
// ) engine=MyISAM;`
// multiToOneLine(data)

// const fileName = "./sql.txt"
// let data = readFile(fileName);
// data = lowercase(data);
// writeFile(fileName, data);


/**
 * 字母转字典顺序
 * @param {string} upperLetter 大写字母
 */
const upperLetterToNumber = (upperLetter) => {
  let upperLetterASCIICode = upperLetter.charCodeAt()
  return upperLetterASCIICode-65; 
}
const lowerLetterToNumber = (lowerLetter) => {
  let lowerLetterASCIICode = lowerLetter.charCodeAt()
  return lowerLetterASCIICode-97; 
}

const numberToUpperLetter = (num) => {
  return String.fromCharCode(num+65)
}

const numberToLowerLetter = (num) => {
  return String.fromCharCode(num+97)
}

// let result = upperLetterToNumber("A")
// result = lowerLetterToNumber("a")
// console.log(result);

const multiToArray = (str) => {
  let strList = str.split("\n");
  strList.map(e=> e.trim());
  return strList;
}
let data = 
`{
  '待提交': 'A',
  '已提交': 'B',
  '核实通过': 'C',
  '核实不通过': 'D',
  '评价待完成': 'E',
  '评价完成': 'F',
  '确认通过': 'G',
  '确认不通过': 'H',
  '申请退回': 'I',
  '测试结束公布': 'J'
}`
let result = multiToOneLine(data)
// // result = lowerLetterToNumber("a")
// console.log(result);
const keyToValue = (obj) => {
  for (let k in obj) {
    let value = obj[k]; //将原来的value赋值给一个变量
    obj[value] = k; // 为cluster_info赋新key，不能直接使用cluster_info = {cluster_info[k] : k},会报语法错误
    delete obj[k]; // 删除原来的属性
  } 
  console.log(obj);
  return obj;
}


//  const  sStatusEnum = { A: "待提交", B: "已提交", C: "核实通过", D: "核实不通过", E: "评价待完成", F: "评价完成", G: "确认通过", H: "确认不通过", I: "申请退回", J: "测试结束公布" };
sStatusEnum: { "待提交": "A", "已提交": "B", "核实通过": "C", "核实不通过": "D", "评价待完成": "E", "评价完成": "F", "确认通过": "G", "确认不通过": "H", "申请退回": "I", "测试结束公布": "J" }
// // let count = 0;
// // for (const iterator in sStatusEnum) {
// //   sStatusEnum[iterator] = numberToUpperLetter(sStatusEnum[iterator])
// // }

// console.log(keyToValue(sStatusEnum));
	