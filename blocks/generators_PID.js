

Blockly.JavaScript['pidsetup'] = function(block) {
  // var variable_instance = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('instance'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code =
  `
  #EXTINC#include <PIDController.h>#END
  #VARIABLE PIDController pid;#END
  #SETUP
  pid.begin();
  #END
  `;
  return code;
};

Blockly.JavaScript['tune'] = function(block) {
  var value_kp = Blockly.JavaScript.valueToCode(block, 'KP', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ki = Blockly.JavaScript.valueToCode(block, 'KI', Blockly.JavaScript.ORDER_ATOMIC);
  var value_kd = Blockly.JavaScript.valueToCode(block, 'KD', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `pid.tune(${value_kp},${value_ki},${value_kd});\n`;
  return code;
};

Blockly.JavaScript['setpoint'] = function(block) {
  var value_point = Blockly.JavaScript.valueToCode(block, 'point', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `pid.setpoint(${value_point});\n`;
  return code;
};

Blockly.JavaScript['minimize'] = function(block) {
  var value_newminimize = Blockly.JavaScript.valueToCode(block, 'newMinimize', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `pid.minimize(${value_newminimize});\n`;
  return code;
};

Blockly.JavaScript['compute'] = function(block) {
  var value_input_raw = Blockly.JavaScript.valueToCode(block, 'input_raw', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_graph = block.getFieldValue('graph');
  var dropdown_verbose = block.getFieldValue('verbose');
  // TODO: Assemble JavaScript into code variable.
  var code = `pid.compute(${value_input_raw},${dropdown_graph},${dropdown_verbose});\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};