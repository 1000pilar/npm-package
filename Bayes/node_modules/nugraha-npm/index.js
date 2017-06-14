
exports.bcmTestBayes = function(sample, cancerPositive, mammographCancerPositive, mammographPositiveHealt){
  let Sample = sample;
  console.log("");
  console.log(`You input "${Sample}" case`);
  let cancerNegative = Sample-cancerPositive;
  console.log(`you has "${cancerNegative}" negatif cancer from ${sample}`);
  let mammographNegativeFromCancer = cancerPositive - mammographCancerPositive;
  console.log(`you has "${mammographNegativeFromCancer}" negatif test result mammograph from ${cancerPositive} case positif cancer`);
  let mammographNegativeFromHealt = cancerNegative - mammographPositiveHealt;
  console.log(`you has "${mammographNegativeFromHealt}" negatif test result mammograph from ${cancerNegative} case negatif cancer\n`);


  if (mammographCancerPositive > 0){
    var persentagePositiveMammograph = parseFloat(((mammographCancerPositive/cancerPositive)*100).toFixed(3));
    console.log(`Persentege mammograph test positive cancer from ${cancerPositive} positive cancer is ${persentagePositiveMammograph} % `);
  } else {
    console.log(`You have to input total Cancer Positive mammograph test from group scanning positive cancer`);
  }
  if (mammographNegativeFromCancer > 0){
    var persentageNegativeMammograph = parseFloat(((mammographNegativeFromCancer/cancerPositive)*100).toFixed(3));
    console.log(`Persentege mammograph test negative cancer from ${cancerPositive} positive cancer is ${persentageNegativeMammograph} %`);
  }
  if (mammographPositiveHealt > 0){
    var persentageMammographPositiveHealt = parseFloat(((mammographPositiveHealt/cancerNegative)*100).toFixed(3));
    console.log(`Persentege mammograph test positive cancer from ${cancerNegative} negative cancer is ${persentageMammographPositiveHealt} %`);
  } else {
    console.log(`You have to input total Cancer Positive mammograph test from group scanning negative cancer`);
  }
  if (mammographNegativeFromHealt > 0){
    var persentageMammographNegativeHealt = parseFloat(((mammographNegativeFromHealt/cancerNegative)*100).toFixed(3));
    console.log(`Persentege mammograph test negative cancer from ${cancerNegative} negative cancer is ${persentageMammographNegativeHealt} %`);
  }
  var persentagePositiveResultCancer = parseFloat(((mammographCancerPositive/(mammographCancerPositive+mammographPositiveHealt))*100).toFixed(3));
  console.log(`Result Persentege patient positive cancer from mammograph positive test is * ${persentagePositiveResultCancer} % *`);
  if(persentagePositiveResultCancer > 0){
    console.log(`So the chance if patient with mammography positive as the question how mach probability she get cancer is 1 : ${Math.round((mammographCancerPositive+mammographPositiveHealt)/(persentagePositiveResultCancer * ((mammographCancerPositive+mammographPositiveHealt)/100)))} people`);
  }
}
