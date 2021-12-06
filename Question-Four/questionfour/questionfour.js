// 4. Refactor the code below.
// (do not create functions or constants, code refactor is required only)
 
// if (province == 'ONTARIO') {
//    rate = ONTARIO_RATE;
//    amt = base * ONTARIO_RATE;
//    calc = 2 * basis(amt) + extra(amt) * 1.05;
// } else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {
//    rate = (province == 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;
//    amt = base * rate;
//    calc = 2 * basis(amt) + extra(amt) * 1.05;
//    if (province == 'QUEBEC') {
//        points = 2;
//    }
// } else {
//    rate = 1;
//    amt = base;
//    calc = 2 * basis(amt) + extra(amt) * 1.05;
// }

if (province == 'ONTARIO') {
    TAX_RATE = ONTARIO_RATE;
    TAX_AMOUNT = base * ONTARIO_RATE;    
 } else if (province == 'ALBERTA') {
    TAX_RATE = ALBERTA_RATE;
    TAX_AMOUNT = base * TAX_RATE;}
    else if (province == 'QUEBEC') {
        points = 2;
 } else {
    TAX_RATE = 1;
    TAX_AMOUNT = base;
}

return 2 * basis(TAX_AMOUNT) + extra(TAX_AMOUNT) * 1.05;
