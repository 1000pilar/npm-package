# npm-package

# How To Use
You could require as bellow:
var bcmTestBayes = require('bcmTestBayes').bcmTestBayes

# Please input your case with format :
bcmTestBayes(sample, cancerPositive, mammographCancerPositive, mammographPositiveHealt)
+++++++++ rules input ++++++++
1. sample (What ever number you want)
2. cancerPositive (total detected sample has cancer Positive after scanning)
3. mammographCancerPositive(detected positive from sample cancer positive)
4. mammographPositiveHealt(detected positive from sample cancer negative)


The data from real world you have input, would return presentation probability.
How mach probability patient getting cancer with this all group test if patient detected mammograph positive !!!
