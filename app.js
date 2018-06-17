// https://codequs.com/p/BkUAYoHt/how-to-convert-excel-to-json-with-node-js/
// https://www.npmjs.com/package/xls-to-json

/*
node_xj = require("xls-to-json");

  node_xj({
    input: "sample.xlsx",  // input xls
    output: "output.json", // output json
    sheet: "Period"  // specific sheetname
  }, function(err, result) {
    if(err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });
*/

var prompt = require('prompt');

var schema = {
  properties: {
    input: {
      type: 'string',
      default: 'input.xlsx',
      required: true
    },
    sheet: {
      type: 'string',
      default: 'Period',
      required: true
    },
    output: {
      type: 'string',
      default: 'output.json',
      required: true
    }
  }
};

prompt.start();

prompt.get(schema, function (err, result) {
  if (err != null) return;
  var xlsxj = require("xlsx-to-json");
  xlsxj({
    input: result.input, 
    output: result.output,
    sheet: result.sheet
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });
});

