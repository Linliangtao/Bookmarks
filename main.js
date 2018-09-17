var keys ={
    '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    'length':3
 }
 var hash ={
     'q':'qq.com','w':'weibo.com','i':'iqiyi.com','h':'huya.com','z':'zhihu.com'
 }
 
 //取出 localStoreage 中的zzz 对应的hash
        hashInLocalStorage =JSON.parse(localStorage.getItem('zzz')|| 'null')
        if(hashInLocalStorage){
        hash = hashInLocalStorage
}
 //遍历 keys ，生成 kbd 标签
    index = 0
    while(index< keys['length']){//0 1 2
         divA = document.createElement('div')
         divA.className = 'row'
         mainA.appendChild(divA)
         row = keys[index] //第一个数组 第二个数组 第三个数组
         index2 = 0
 
         while(index2< row['length']){
             kbdA = document.createElement('kbd')
             span = document.createElement('span')
             span.textContent = row[index2]
             span.className = 'text'
             kbdA.appendChild(span)
             kbdA.textContent = row[index2]
             kbdA.className = 'key'
             buttonA = document.createElement('button')
             buttonA.textContent ='编辑'
             buttonA.id =row[index2]
             imgA = document.createElement('img')
             if(hash[row[index2]]){
                imgA.src = 'http://'+hash[row[index2]] + '/favicon.ico'
             }else{
                 imgA.src = './img/dian.png'
             }
             buttonA.onclick = function(suibian){
                 // suibian['target'] 就是用户点击的元素
                key = suibian['target']['id'] //q w e r t
                x = prompt('给我一个网址') //qq.com
                hash[key] =x //hash 变更
                localStorage.setItem('zzz',JSON.stringify(hash))
                console.log (hash)
             }
             kbdA.appendChild(imgA)
             kbdA.appendChild(buttonA)
             divA.appendChild(kbdA)
             index2 = index2 +1
         } 
         index = index+1
    }
 
     document.onkeypress = function (suibian){
         key = suibian['key'] // q w e
         website = hash[key]
         //location.href = 'http://'+website
         window.open('http://'+website,'_blank')
     } 