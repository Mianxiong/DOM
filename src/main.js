const api = jQuery('.test') //不返回元素们，返回api对象
api.addClass('red').addClass('blue') //链式操作,this就是api

//obj.fn(p1) //函数里的this就是obj
//等价于 obj.fn.call(obj,p1)