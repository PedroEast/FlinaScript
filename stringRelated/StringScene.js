const {readFile, writeFile, appendFile} = require("../fileRelated/FileScene");

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
// let result = multiToOneLine(data)
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
// sStatusEnum: { "待提交": "A", "已提交": "B", "核实通过": "C", "核实不通过": "D", "评价待完成": "E", "评价完成": "F", "确认通过": "G", "确认不通过": "H", "申请退回": "I", "测试结束公布": "J" }
// // let count = 0;
// // for (const iterator in sStatusEnum) {
// //   sStatusEnum[iterator] = numberToUpperLetter(sStatusEnum[iterator])
// // }

// console.log(keyToValue(sStatusEnum));

exports.multiToArray = (str, sep = " ") => {
  let array = []
  str.split("\n").map(line => {
    line = line.trim().split(sep);
    array.push(line);
  })
  console.log(array);
  return array;
}

/**
 * 多行转单行
 * @param {string} data 多行文本 
 */
exports.multiToOneLine = (data) => {
  data = '"' + data.split("\n").map(e=> e.trim()).join(" ").replace(/'/g, '"') + '"';
  console.log(data);
  return data;
}

// 获取ts依赖，并以可以导入的ngModel的形式输出
data = `
import { NgModule } from "@angular/core";
import { XButtonModule } from '@ng-nest/ui/button';
import { XColorModule } from '@ng-nest/ui/color';
import { XContainerModule } from '@ng-nest/ui/container';
import { XIconModule } from '@ng-nest/ui/icon';
import { XLayoutModule } from '@ng-nest/ui/layout';
import { XLinkModule } from '@ng-nest/ui/link';
import { XThemeModule } from '@ng-nest/ui/theme';
import { XTypographyModule } from '@ng-nest/ui/typography';
import { XAvatarModule } from '@ng-nest/ui/avatar';
import { XBadgeModule } from '@ng-nest/ui/badge';
import { XCalendarModule } from '@ng-nest/ui/calendar';
import { XCardModule } from '@ng-nest/ui/card';
import { XCarouselModule } from '@ng-nest/ui/carousel';
import { XCollapseModule } from '@ng-nest/ui/collapse';
import { XCommentModule } from '@ng-nest/ui/comment';
import { XEmptyModule } from '@ng-nest/ui/empty';
import { XOutletModule } from '@ng-nest/ui/outlet';
import { XPaginationModule } from '@ng-nest/ui/pagination';
import { XProgressModule } from '@ng-nest/ui/progress';
import { XStatisticModule } from '@ng-nest/ui/statistic';
import { XTableModule } from '@ng-nest/ui/table';
import { XTagModule } from '@ng-nest/ui/tag';
import { XTextRetractModule } from '@ng-nest/ui/text-retract';
import { XTimeAgoModule } from '@ng-nest/ui/time-ago';
import { XTimeRangeModule } from '@ng-nest/ui/time-range';
import { XTimelineModule } from '@ng-nest/ui/timeline';
import { XTreeModule } from '@ng-nest/ui/tree';
import { XTreeFileModule } from '@ng-nest/ui/tree-file';
import { XAlertModule } from '@ng-nest/ui/alert';
import { XDialogModule } from '@ng-nest/ui/dialog';
import { XDrawerModule } from '@ng-nest/ui/drawer';
import { XLoadingModule } from '@ng-nest/ui/loading';
import { XMessageModule } from '@ng-nest/ui/message';
import { XMessageBoxModule } from '@ng-nest/ui/message-box';
import { XNotificationModule } from '@ng-nest/ui/notification';
import { XPopconfirmModule } from '@ng-nest/ui/popconfirm';
import { XPopoverModule } from '@ng-nest/ui/popover';
import { XResultModule } from '@ng-nest/ui/result';
import { XSkeletonModule } from '@ng-nest/ui/skeleton';
import { XTooltipModule } from '@ng-nest/ui/tooltip';
import { XCascadeModule } from '@ng-nest/ui/cascade';
import { XCheckboxModule } from '@ng-nest/ui/checkbox';
import { XColorPickerModule } from '@ng-nest/ui/color-picker';
import { XDatePickerModule } from '@ng-nest/ui/date-picker';
import { XFindModule } from '@ng-nest/ui/find';
import { XFormModule } from '@ng-nest/ui/form';
import { XInputModule } from '@ng-nest/ui/input';
import { XInputNumberModule } from '@ng-nest/ui/input-number';
import { XListModule } from '@ng-nest/ui/list';
import { XRadioModule } from '@ng-nest/ui/radio';
import { XRateModule } from '@ng-nest/ui/rate';
import { XSelectModule } from '@ng-nest/ui/select';
import { XSliderSelectModule } from '@ng-nest/ui/slider-select';
import { XSwitchModule } from '@ng-nest/ui/switch';
import { XTextareaModule } from '@ng-nest/ui/textarea';
import { XTimePickerModule } from '@ng-nest/ui/time-picker';
import { XTransferModule } from '@ng-nest/ui/transfer';
import { XUploadModule } from '@ng-nest/ui/upload';
import { XAffixModule } from '@ng-nest/ui/affix';
import { XAnchorModule } from '@ng-nest/ui/anchor';
import { XBackTopModule } from '@ng-nest/ui/back-top';
import { XCrumbModule } from '@ng-nest/ui/crumb';
import { XDropdownModule } from '@ng-nest/ui/dropdown';
import { XMenuModule } from '@ng-nest/ui/menu';
import { XPageHeaderModule } from '@ng-nest/ui/page-header';
import { XSliderModule } from '@ng-nest/ui/slider';
import { XStepsModule } from '@ng-nest/ui/steps';
import { XTabsModule } from '@ng-nest/ui/tabs';
import { XHighlightModule } from '@ng-nest/ui/highlight';`

const exportsTsDependency = (str) => {
    const paraArray = str.split("\n");
    const dependencyStrTemplate = /\{[\s\S]*?\}/g;
    paraArray.map(
        para => {
            para = para.trim();
            const result = para.match(dependencyStrTemplate);
            if(result && result.length > 0){
                let round = result[0].trim();
                round = round.replace(`{`, "");
                round = round.replace(`}`, "");
                round = round.trim();
                round += ","

                console.log(
                    round
                )
            }
            
        }
    )
}

(() => {
    exportsTsDependency(data);
})();