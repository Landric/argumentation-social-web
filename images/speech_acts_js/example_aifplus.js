var r = Raphael("aifplus1", 800, 600);
var rect = r.rect(0, 0, 800, 600);
rect.attr("fill", "#fff");

var left = 200, y_top = 200;
var x_seperation = 120, y_seperation = 50;

var x = left + x_seperation, y = y_top;
var I_Node_1_P1 = r.ellipse(x, y, 20, 20).attr({fill: "#e11", stroke: "#e11", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var I_Node_1_P1_text = r.text(x, y, "I").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["I_Node_1_P1"] = I_Node_1_P1;
I_Node_1_P1.pair = I_Node_1_P1_text;
I_Node_1_P1_text.pair = I_Node_1_P1;

var x = left + x_seperation, y = y_top + y_seperation;
var I_Node_1_P2 = r.ellipse(x, y, 20, 20).attr({fill: "#e11", stroke: "#e11", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var I_Node_1_P2_text = r.text(x, y, "I").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["I_Node_1_P2"] = I_Node_1_P2;
I_Node_1_P2.pair = I_Node_1_P2_text;
I_Node_1_P2_text.pair = I_Node_1_P2;

var x = left, y = y_top + (2 * y_seperation);
var RA_Node_1 = r.ellipse(x, y, 20, 20).attr({fill: "#e11", stroke: "#e11", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var RA_Node_1_text = r.text(x, y, "RA").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["RA_Node_1"] = RA_Node_1;
RA_Node_1.pair = RA_Node_1_text;
RA_Node_1_text.pair = RA_Node_1;

var x = left + x_seperation, y = y_top + (3 * y_seperation);
var I_Node_1_C1 = r.ellipse(x, y, 20, 20).attr({fill: "#e11", stroke: "#e11", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var I_Node_1_C1_text = r.text(x, y, "I").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["I_Node_1_C1"] = I_Node_1_C1;
I_Node_1_C1.pair = I_Node_1_C1_text;
I_Node_1_C1_text.pair = I_Node_1_C1;

connections.push(r.connection(illocutions['I_Node_1_P1'], illocutions['RA_Node_1'], "#333"));
connections.push(r.connection(illocutions['I_Node_1_P2'], illocutions['RA_Node_1'], "#333"));
connections.push(r.connection(illocutions['RA_Node_1'], illocutions['I_Node_1_C1'], "#333"));

var x = left + (2 * x_seperation), y = y_top + (2 * y_seperation);
var YA_Node_1 = r.ellipse(x, y, 20, 20).attr({fill: "#1e1", stroke: "#1e1", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var YA_Node_1_text = r.text(x, y, "YA").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["YA_Node_1"] = YA_Node_1;
YA_Node_1.pair = YA_Node_1_text;
YA_Node_1_text.pair = YA_Node_1;

connections.push(r.connection(illocutions['YA_Node_1'], illocutions['I_Node_1_P2'], "#333"));
connections.push(r.connection(illocutions['YA_Node_1'], illocutions['I_Node_1_C1'], "#333"));

var x = left + (3 * x_seperation), y = y_top + (2 * y_seperation);
var L_Node_1 = r.ellipse(x, y, 20, 20).attr({fill: "#11e", stroke: "#11e", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var L_Node_1_text = r.text(x, y, "L").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["L_Node_1"] = L_Node_1;
L_Node_1.pair = L_Node_1_text;
L_Node_1_text.pair = L_Node_1;

connections.push(r.connection(illocutions['L_Node_1'], illocutions['YA_Node_1'], "#333"));