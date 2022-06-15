window.$ = window.jQuery = function (selectorOrArray) {
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }
    // api可以操作elements
    // const api = {
    //     //闭包：函数访问外部的变量
    //     addClass(className) {
    //         for (let i = 0; i < elements.length; i++) {
    //             elements[i].classList.add(className)
    //         }
    // return api
    //         return this //addClass里面的this是api
    //     }
    // }
    // return api
    return {
        oldApi: selectorOrArray.oldApi,
        //闭包：函数访问外部的变量
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            return this
        },
        find(selector) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                array = array.concat(Array.from(elements[i].querySelectorAll(selector)))
                //array = array+elements2
            }
            // return array 错误
            // return this 错误

            // const newApi = jQuery(array)
            // return newApi
            array.oldApi = this //this就是api，数组是对象，对象可以加属性，this是旧api
            return jQuery(array)
        },
        end(){
            return this.oldApi //this就是当前的 api//api2  this就是新api
        },
        each(fn) {
            for(let i=0;i<elements.length;i++) {
                fn.call(null,elements[i],i)
            }
            return this
        },
        parent() {
            const array = []
            this.each((node)=>{
                if(array.indexOf(node.parentNode) === -1) {
                    array.push(node.parentNode)
                }            
            })
            return jQuery(array)
        },
        children() {
            const array = []
            this.each((node)=>{
                array.push(...node.children)
                //等价于array.push(node.children[0],node.children[1],node.children[2]...)
            })
            return jQuery(array)
        },
        print(){
            console.log(elements)
        }
    }
}