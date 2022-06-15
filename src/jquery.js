window.jQuery = function (selectorOrArray) {
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
            return jQuery(array)
        }
    }
}