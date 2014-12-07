var r = Raphael("likes2", 800, 600);
var rect = r.rect(0, 0, 800, 600);
rect.attr("fill", "#fff");

var left = 150, y_top = 50;
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

var x = left + (4 * x_seperation), y = y_top + (2 * y_seperation);
var U_Node_1 = r.ellipse(x, y, 20, 20).attr({fill: "#1aa", stroke: "#1aa", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var U_Node_1_text = r.text(x, y, "U").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["U_Node_1"] = U_Node_1;
U_Node_1.pair = U_Node_1_text;
U_Node_1_text.pair = U_Node_1;

connections.push(r.connection(illocutions['L_Node_1'], illocutions['YA_Node_1'], "#333"));
connections.push(r.connection(illocutions['U_Node_1'], illocutions['L_Node_1'], "#333"));

var x = left + (4 * x_seperation), y = y_top + (5 * y_seperation);
var U_Node_2 = r.ellipse(x, y, 20, 20).attr({fill: "#1aa", stroke: "#1aa", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var U_Node_2_text = r.text(x, y, "U").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["U_Node_2"] = U_Node_2;
U_Node_2.pair = U_Node_2_text;
U_Node_2_text.pair = U_Node_2;

var x = left + (3 * x_seperation), y = y_top + (5 * y_seperation);
var L_Node_2 = r.ellipse(x, y, 20, 20).attr({fill: "#11e", stroke: "#11e", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var L_Node_2_text = r.text(x, y, "L").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["L_Node_2"] = L_Node_2;
L_Node_2.pair = L_Node_2_text;
L_Node_2_text.pair = L_Node_2;

var x = left + (2 * x_seperation), y = y_top + (5 * y_seperation);
var YA_Node_2 = r.ellipse(x, y, 20, 20).attr({fill: "#1e1", stroke: "#1e1", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var YA_Node_2_text = r.text(x, y, "YA").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["YA_Node_2"] = YA_Node_2;
YA_Node_2.pair = YA_Node_2_text;
YA_Node_2_text.pair = YA_Node_2;

var x = left + x_seperation, y = y_top + (5 * y_seperation);
var I_Node_2 = r.ellipse(x, y, 20, 20).attr({fill: "#e11", stroke: "#e11", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var I_Node_2_text = r.text(x, y, "I").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["I_Node_2"] = I_Node_2;
I_Node_2.pair = I_Node_2_text;
I_Node_2_text.pair = I_Node_2;

var x = left, y = y_top + (4 * y_seperation);
var RA_Node_2 = r.ellipse(x, y, 20, 20).attr({fill: "#e11", stroke: "#e11", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var RA_Node_2_text = r.text(x, y, "RA").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["RA_Node_2"] = RA_Node_2;
RA_Node_2.pair = RA_Node_2_text;
RA_Node_2_text.pair = RA_Node_2;

connections.push(r.connection(illocutions['U_Node_2'], illocutions['L_Node_2'], "#333"));
connections.push(r.connection(illocutions['L_Node_2'], illocutions['YA_Node_2'], "#333"));
connections.push(r.connection(illocutions['YA_Node_2'], illocutions['I_Node_2'], "#333"));
connections.push(r.connection(illocutions['I_Node_2'], illocutions['RA_Node_2'], "#333"));
connections.push(r.connection(illocutions['RA_Node_2'], illocutions['I_Node_1_C1'], "#333"));

var x = left + (4 * x_seperation), y = y_top + (7 * y_seperation);
var U_Node_3 = r.ellipse(x, y, 20, 20).attr({fill: "#1aa", stroke: "#1aa", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var U_Node_3_text = r.text(x, y, "U").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["U_Node_3"] = U_Node_3;
U_Node_3.pair = U_Node_3_text;
U_Node_3_text.pair = U_Node_3;

var x = left + (3 * x_seperation), y = y_top + (7 * y_seperation);
var L_Node_3 = r.ellipse(x, y, 20, 20).attr({fill: "#11e", stroke: "#11e", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var L_Node_3_text = r.text(x, y, "L").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["L_Node_3"] = L_Node_3;
L_Node_3.pair = L_Node_3_text;
L_Node_3_text.pair = L_Node_3;

var x = left + (2 * x_seperation), y = y_top + (7 * y_seperation);
var YA_Node_3 = r.ellipse(x, y, 20, 20).attr({fill: "#1e1", stroke: "#1e1", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var YA_Node_3_text = r.text(x, y, "YA").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["YA_Node_3"] = YA_Node_3;
YA_Node_3.pair = YA_Node_3_text;
YA_Node_3_text.pair = YA_Node_3;

var x = left + x_seperation, y = y_top + (7 * y_seperation);
var I_Node_3 = r.ellipse(x, y, 20, 20).attr({fill: "#e11", stroke: "#e11", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var I_Node_3_text = r.text(x, y, "I").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["I_Node_3"] = I_Node_3;
I_Node_3.pair = I_Node_3_text;
I_Node_3_text.pair = I_Node_3;

var x = left, y = y_top + (6 * y_seperation);
var RA_Node_3 = r.ellipse(x, y, 20, 20).attr({fill: "#e11", stroke: "#e11", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var RA_Node_3_text = r.text(x, y, "RA").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["RA_Node_3"] = RA_Node_3;
RA_Node_3.pair = RA_Node_3_text;
RA_Node_3_text.pair = RA_Node_3;

connections.push(r.connection(illocutions['U_Node_3'], illocutions['L_Node_3'], "#333"));
connections.push(r.connection(illocutions['L_Node_3'], illocutions['YA_Node_3'], "#333"));
connections.push(r.connection(illocutions['YA_Node_3'], illocutions['I_Node_3'], "#333"));
connections.push(r.connection(illocutions['I_Node_3'], illocutions['RA_Node_3'], "#333"));
connections.push(r.connection(illocutions['RA_Node_3'], illocutions['I_Node_1_C1'], "#333"));

var x = left + (4 * x_seperation), y = y_top + (9 * y_seperation);
var U_Node_4 = r.ellipse(x, y, 20, 20).attr({fill: "#1aa", stroke: "#1aa", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var U_Node_4_text = r.text(x, y, "U").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["U_Node_4"] = U_Node_4;
U_Node_4.pair = U_Node_4_text;
U_Node_4_text.pair = U_Node_4;

var x = left + (3 * x_seperation), y = y_top + (9 * y_seperation);
var L_Node_4 = r.ellipse(x, y, 20, 20).attr({fill: "#11e", stroke: "#11e", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var L_Node_4_text = r.text(x, y, "L").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["L_Node_4"] = L_Node_4;
L_Node_4.pair = L_Node_4_text;
L_Node_4_text.pair = L_Node_4;

var x = left + (2 * x_seperation), y = y_top + (9 * y_seperation);
var YA_Node_4 = r.ellipse(x, y, 20, 20).attr({fill: "#1e1", stroke: "#1e1", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var YA_Node_4_text = r.text(x, y, "YA").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["YA_Node_4"] = YA_Node_4;
YA_Node_4.pair = YA_Node_4_text;
YA_Node_4_text.pair = YA_Node_4;

var x = left + x_seperation, y = y_top + (9 * y_seperation);
var I_Node_4 = r.ellipse(x, y, 20, 20).attr({fill: "#e11", stroke: "#e11", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var I_Node_4_text = r.text(x, y, "I").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["I_Node_4"] = I_Node_4;
I_Node_4.pair = I_Node_4_text;
I_Node_4_text.pair = I_Node_4;

var x = left, y = y_top + (8 * y_seperation);
var RA_Node_4 = r.ellipse(x, y, 20, 20).attr({fill: "#e11", stroke: "#e11", "fill-opacity": 0.2, "stroke-width": 2, cursor: "pointer"}).drag(move, dragger, up);
var RA_Node_4_text = r.text(x, y, "RA").attr({cursor: "pointer"}).drag(move, dragger, up);
illocutions["RA_Node_4"] = RA_Node_4;
RA_Node_4.pair = RA_Node_4_text;
RA_Node_4_text.pair = RA_Node_4;

connections.push(r.connection(illocutions['U_Node_4'], illocutions['L_Node_4'], "#333"));
connections.push(r.connection(illocutions['L_Node_4'], illocutions['YA_Node_4'], "#333"));
connections.push(r.connection(illocutions['YA_Node_4'], illocutions['I_Node_4'], "#333"));
connections.push(r.connection(illocutions['I_Node_4'], illocutions['RA_Node_4'], "#333"));
connections.push(r.connection(illocutions['RA_Node_4'], illocutions['I_Node_1_C1'], "#333"));
