

Blockly.Blocks['pidsetup'] = {
  init: function() {
    this.appendDummyInput()
        // .appendField(new Blockly.FieldVariable("pid"), "instance")
        .appendField("SetupPID");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['tune'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Tune");
    this.appendValueInput("KP")
        .setCheck(["float", "Number"])
        .appendField("kp");
    this.appendValueInput("KI")
        .setCheck(["float", "Number"])
        .appendField("kp");
    this.appendValueInput("KD")
        .setCheck(["float", "Number"])
        .appendField("kp");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setpoint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Setpoint");
    this.appendValueInput("point")
        .setCheck(["float", "Number"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['minimize'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Minimize");
    this.appendValueInput("newMinimize")
        .setCheck(["float", "Number"]);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['compute'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Compute");
    this.appendValueInput("input_raw")
        .setCheck(["float", "Number"])
        .appendField("input_raw");
    this.appendDummyInput()
        .appendField("graph")
        .appendField(new Blockly.FieldDropdown([["GRAPH","GRAPH"], ["NOGRAPH","NOGRAPH"]]), "graph");
    this.appendDummyInput()
        .appendField("verbose")
        .appendField(new Blockly.FieldDropdown([["VERBOSE","VERBOSE"], ["NOVERBOSE","NOVERBOSE"]]), "verbose");
    this.setInputsInline(true);
    this.setOutput(true, "float");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};