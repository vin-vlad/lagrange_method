var interpolationLagranj = (x,xValues,yValues)=>{
    var lagrangePool = 0;
    for(var i = 0; i<xValues.length; i++){
        var basicsPolinom = 1;
        for(var j=0; j<xValues.length; j++){
            if(j!=i){
                basicsPolinom *= (x-xValues[j])/(xValues[i]-xValues[j]);
            }
        }
        lagrangePool+=basicsPolinom*yValues[i];
    }
    return lagrangePool;
}


var temperature = [20,40,60,80,100,120]
var voltage = [-0.67,-0.25,-0.17,0.61,1.06,1.52]


var res = interpolationLagranj(115.65,temperature,voltage)

console.log(res);