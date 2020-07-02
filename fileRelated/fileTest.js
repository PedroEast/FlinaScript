const assert = require('assert');
const file = require('./file.js');

describe(`File function Tests | 文件功能测试`, function() {
    describe(`File may write data, truns in fileName and data, like let data = 'data'; let fileName = './file.txt' |
        文件可写，接收两个参数，为文件名称和文件数据，像是let data = 'data'; let fileName = './file.txt'，`, function() {
        it(`returns void`, function(done) {
            let prepareParamData = "fileData";
            let prepareParamFileName = "./file.txt";
            let functionReturnResult = file.writeFile( prepareParamFileName, prepareParamData,);
            done();
        });

        it(`验证可读`, function(done) {
            let prepareParamFileName = "./file.txt";
            let functionReturnResult = file.readFile(prepareParamFileName);
            const expectType = `string`
            const expectLength = 8;
            const expectResult = `fileData`;
            assert.equal(typeof functionReturnResult, expectType);
            assert.equal(Object.values(functionReturnResult).length, expectLength)
            assert.equal(functionReturnResult, expectResult);
            done();
        });
    });
    describe(`File may write data, truns in fileName and data, like let data = 'data'; let fileName = './file.txt' |
        文件可增，接收两个参数，为文件名称和文件数据，像是let data = 'data'; let fileName = './file.txt'，`, function() {
        it(`returns void`, function(done) {
            let prepareParamData = "fileData";
            let prepareParamFileName = "./file.txt";
            let functionReturnResult = file.appendFile( prepareParamFileName, prepareParamData,);
            done();
        });

        it(`验证可读`, function(done) {
            let prepareParamFileName = "./file.txt";
            let functionReturnResult = file.readFile(prepareParamFileName);
            const expectType = `string`
            const expectLength = 16;
            const expectResult = `fileDatafileData`;
            assert.equal(typeof functionReturnResult, expectType);
            assert.equal(Object.values(functionReturnResult).length, expectLength)
            assert.equal(functionReturnResult, expectResult);
            done();
        });
    });
    describe(`File may read data, truns in fileName and fileCode like const fileName = "./file.txt"|
        文件可读，接收两个参数，为文件名称和文件编码，像是const fileName = './file.txt', 因为文件编码采用了UTF8，可以不必传入文件编码`, function() {
        it(`验证可读`, function(done) {
            let prepareParamFileName = "./file.txt";
            let functionReturnResult = file.readFile(prepareParamFileName);
            const expectType = `string`
            const expectLength = 16;
            const expectResult = `fileDatafileData`;
            assert.equal(typeof functionReturnResult, expectType);
            assert.equal(Object.values(functionReturnResult).length, expectLength)
            assert.equal(functionReturnResult, expectResult);
            done();
        });
    });
    describe(`File may exist, truns in fileName like const fileName = "./file.txt"|
    文件是否存在，接一个参数，为文件名称，像是const fileName = './file.txt'`, function() {
        it(`验证存在`, function(done) {
            let prepareParamFileName = "./file.txt";
            let functionReturnResult = file.existFile(prepareParamFileName);
            const expectType = `boolean`
        
            const expectResult = true;
            assert.equal(typeof functionReturnResult, expectType);
            assert.equal(functionReturnResult, expectResult);
            done();
        });
        it(`验证不存在`, function(done) {
            let prepareParamFileName = "./file1.txt";
            let functionReturnResult = file.existFile(prepareParamFileName);
            const expectType = `boolean`
       
            const expectResult = false;
            assert.equal(typeof functionReturnResult, expectType);
            assert.equal(functionReturnResult, expectResult);
            done();
        });
    });
    
});