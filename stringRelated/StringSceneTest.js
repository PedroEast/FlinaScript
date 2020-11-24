const assert = require(`assert`);
const StringScene = require("./StringScene");
const json = require("../dataStructRealted/JsonScene")
describe(`StringScene Tests | 文本场景测试`, function() {
    describe(`StringScene Tests, it turn in multi-lines data whose every line use special seprate, like this let str = "A B C D E F";|
        文本转二维数组测试，传入一个多行文本，每一行都使用了特殊符号隔开，默认为空格，像上述代码，期待返回二维数组，并打印到控制台`, function() {
        it(`returns [["A", "B", "C", "D" , "E", "F"]] onMultiToArray|
            文本转二维数组测试，期待返回上述结果`, function(done) {
            let prepareParamStr = `A B C D E F
                                   1 2 3 4 5 6`;
            let prepareParamSep = " ";
            let functionReturnResult = StringScene.multiToArray(prepareParamStr, prepareParamSep);
            const expectType = `object`
            const expectLength = 2;
            assert.equal(typeof functionReturnResult, expectType);
            assert.equal(Object.values(functionReturnResult).length, expectLength)
            let expectResult = [ [ 'A', 'B', 'C', 'D', 'E', 'F' ], [ '1', '2', '3', '4', '5', '6' ] ];
            functionReturnResult = json.isObjectValueEqual(functionReturnResult, expectResult);
            expectResult = true;
            assert.equal(functionReturnResult, expectResult);
            done();
        });
    });
    describe(`StringScene Tests, it turn in multi-lines data to one line;|
        多行文本转一行测试，传入一个多行文本，期待返回一行，并打印到控制台`, function() {
        it(`returns [["A", "B", "C", "D" , "E", "F"]] onMultiToArray|
            文本转二维数组测试，期待返回上述结果`, function(done) {
            let prepareParamStr = `[
                [ 'A', '1' ],
                [ 'B', '2' ],
                [ 'C', '3' ],
                [ 'D', '4' ],
                [ 'E', '5' ],
                [ 'F', '6' ]
              ];`
            let functionReturnResult = StringScene.multiToOneLine(prepareParamStr);
            const expectType = `string`
            const expectLength = 89;
            const expectResult = `"[ [ "A", "1" ], [ "B", "2" ], [ "C", "3" ], [ "D", "4" ], [ "E", "5" ], [ "F", "6" ] ];"`;
            assert.equal(typeof functionReturnResult, expectType);
            assert.equal(Object.values(functionReturnResult).length, expectLength)
            assert.equal(functionReturnResult, expectResult);
            done();
        });
    });

});