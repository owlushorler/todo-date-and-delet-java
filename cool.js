var s = "tope hola"
        var first = s.substring(0, s.indexOf(" "));
        var last = s.substring(s.indexOf(" ") + 1)
        console.log(first);
        console.log(last);
        var words = s.split(' ');
        console.log(words);
        console.log(words.join(" "))

        var loo = s[2];
        console.log(loo);
        console.log()
let x = 3
let y = x++
let Z = x + y
console.log(Z)

let i = 3
let o = ++i
let p = i + o
console.log(p)


let looop= []
for (i =0; i < 10; i+=2){
    looop.push(i)
    
}console.log(looop)

let room = []
for (i = 5; i> 0; i--){
    room.push(i)
}console.log(room)

let neww = [1,2,3]
resulttt = []
for (i=0;i<neww.length;i++){
    kolll= neww[i]
    num = 10
    resulttt.push(kolll + num)
}console.log(resulttt)

function array(aaa,bbb){
    resuli = []
    loow = []
    low =[]

    for (i=0;i<aaa.length;i++){
        lo = aaa[i]
        for (j=0;j<bbb.length;j++){
            ko = bbb[j]
          low.push(ko)  
        }
        loow.push[lo]
        resuli.push(lo +++ ko )
       
}return resuli
}
console.log(array([2,1,9],[3,10,8]))

