module.exports = {
    PI : 3.14,
    min:function(){
        var min = Number.MAX_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            if(e < min){
                min = e;
            }
        });
        return min;
    },
    max:function(){
        var max = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(function(e){
            if(e > max){
                max = e;
            }
        });

        return max;
    }
}

// module.exports와 exports는 같은 방법 즉같이 쓰면e xports는 씹힘.
exports.a = 10;
