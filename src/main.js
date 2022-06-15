// const api = jQuery('.test') //不返回元素们，返回api对象
// api.addClass('red').addClass('blue').addClass('green') //链式操作,this就是api

//obj.fn(p1) //函数里的this就是obj
//等价于 obj.fn.call(obj,p1)

// const x1 = jQuery('.test1').find('.child')
// console.log(x1)

// const api1 = jQuery('.test')
// api1.addClass('blue')

// const api2 = api1.find('.child').addClass('red')
// api1.addClass('green')

// jQuery('.test').find('.child').addClass('red').addClass('blue').addClass('green')

// const api1 = jQuery('.test')
// const api2 = api1.find('.child').addClass('red').addClass('blue').addClass('green')
// const oldApi = api2.end().addClass('yellow')
//jQuery('.test).find('.child').addClass('red').addClass('blue').addClass('green').end().addClass('yellow')

// const x = jQuery('.test').find('.child')
// x.each((div)=>console.log(div))

const x = jQuery('.test')
// x.parent().print()

x.children().print()