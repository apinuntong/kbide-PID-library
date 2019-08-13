

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
  var code = `pid.compute(${value_input_raw},${dropdown_graph},${dropdown_verbose})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['limit'] = function(block) {
  var value_min = Blockly.JavaScript.valueToCode(block, 'min', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max = Blockly.JavaScript.valueToCode(block, 'max', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `pid.limit(${value_min},${value_max});\n`;
  return code;
};

Blockly.JavaScript['bitshift_left'] = function(block) {
  var value_input_s = Blockly.JavaScript.valueToCode(block, 'input_s', Blockly.JavaScript.ORDER_ATOMIC);
  var value_number_of_bits = Blockly.JavaScript.valueToCode(block, 'number_of_bits', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_input_s}<<${value_number_of_bits}\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bitshift_right'] = function(block) {
  var value_input_right = Blockly.JavaScript.valueToCode(block, 'input_right', Blockly.JavaScript.ORDER_ATOMIC);
  var value_number_of_bits_right = Blockly.JavaScript.valueToCode(block, 'number_of_bits_right', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_input_right}>>${value_number_of_bits_right}\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['tofloat'] = function(block) {
  var value_data_float = Blockly.JavaScript.valueToCode(block, 'data_float', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_data_float}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};