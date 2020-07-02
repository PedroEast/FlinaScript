const assert = require(`assert`);
const SQLScene = require("./SQLScene");

describe(`SQLScene Tests`, function() {
    describe(`SQLEnumScene Tests, it turn in a list that show all available value, like this let arr = ["index","primary","foreign","unique"];`, function() {
        it(`returns {index: 0, primary: 1, foreign: 2, unique: 3} onGenerateJs`, function(done) {
            let prepareParamList = ["index","primary","foreign","unique"];
            let prepareParamName = "INDEX_ENUM";
            // console.log(typeof prepareParamList);
            let functionReturnResult = SQLScene.generateEnumByListOnJs(prepareParamList, prepareParamName);
            const expectType = `string`
            const expectLength = 65;
            const expectResult = `const INDEX_ENUM = {index: 0, primary: 1, foreign: 2, unique: 3}\n`;
            assert.equal(typeof functionReturnResult, expectType);
            assert.equal(Object.values(functionReturnResult).length, expectLength)
            assert.equal(functionReturnResult, expectResult);
            done();
        });
        it(`returns enum{index, primary, foreign, unique} onGenerateJava`, function(done) {
            let prepareParamList = ["index","primary","foreign","unique"];
            let prepareParamName = "INDEX_ENUM";
            let functionReturnResult = SQLScene.generateEnumByListOnJava(prepareParamList, prepareParamName);
            const expectType = `string`
            const expectLength = 50;
            const expectResult = `enum INDEX_ENUM {index, primary, foreign, unique}\n`;
            assert.equal(typeof functionReturnResult, expectType);
            assert.equal(Object.values(functionReturnResult).length, expectLength)
            assert.equal(functionReturnResult, expectResult);
            done();
        });

        it(`exists file whose name is JavaEnum.java`, function(done) {
            let prepareParam = ["index","primary","foreign","unique"];
            let functionReturnResult = generateEnumByList(prepareParam);
            const expectResult = 
            assert.equal(typeof functionReturnResult, expectType);
            assert.equal(Object.values(functionReturnResult).length, expectLength)
            assert.equal(functionReturnResult, expectResult);
            done();
        });
        it(`exists file whose name is JsEnum.js`, function(done) {
            let prepareParam = ["index","primary","foreign","unique"];
            let functionReturnResult = generateEnumByList(prepareParam);
            const expectResult = 
            assert.equal(typeof functionReturnResult, expectType);
            assert.equal(Object.values(functionReturnResult).length, expectLength)
            assert.equal(functionReturnResult, expectResult);
            done();
        });
    });

});