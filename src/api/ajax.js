// ajax 请求函数模块
   // 返回值：promise对象（异步返回的数据是 response.data）

// 导入axios
import axios from 'axios'

export default function ajax(url, data={}, type="GET") {
    new Promise(function (resolve, reject) {
        let promise;
        if(type === 'GET') {
            // 准备 url query 参数数据
            let dataStr = ''  // 数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key]
            })
            if(dataStr !== '') {
                dataStr = dataStr.substring(0, lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送get请求
            promise = axios.get(url)
        } else {
            // 发送post请求
            promise = axios.post(url, data)
        }
        promise.then(function (resolve) {
            // 成功了调用resolve（）
            resolve(reponse.data)
        })
        .catch(function(error) {
            // 失败了调用reject（）
            reject(error)
        })
        
    })
}
