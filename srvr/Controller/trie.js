// import { words,capfile } from "./apii.js";

class Node{
    constructor(){
        // this.e=e;
        // this.next=null;
        this.end=false;
        this.alpha=Array(26).fill(null)
        // this.arr=Array(26).fill(0)
    }
}
class ll{
    constructor(){
        this.head=null
    }
    add(e){
        // var node = new Node(e)
        // var current;
        // if(this.head==null)
        // this.head=node
        // else{
        //     current=this.head;
        //     while(current.next)
        //         current=current.next
        //         current.next=node;
        //     }
    }
    addtrie(e){var tp=new Node()
        if(this.head==null)this.head=tp
        var curr=this.head
        for(var i=0;i<e.length;i++){
            var pos=e.charCodeAt(i)-96;//console.log(pos+" ")
            if(!curr.alpha[pos]){
                var temp=new Node()
                curr.alpha[pos]=temp;
                if(i==e.length-1)curr.end=true
                curr=temp
            }else {
                if(i==e.length-1)curr.end=true
                curr=curr.alpha[pos]
            }
            // break
        }
    }
    chkword(a){
        var curr=this.head
        for(var i=0;i<a.length;i++){
            var pos=a.charCodeAt(i)-96;
            if(!curr.alpha[pos])return false;
            // console.log(a[i]+" ")
            if((i==a.length-1)&&curr.end==false)return false
            curr=curr.alpha[pos]
        }
        return true;
    }
    search_word(a){
        var arr=[]
        var curr=this.head
        for(var i=0;i<a.length;i++){
            var pos=a.charCodeAt(i)-96;
            if(!curr.alpha[pos])return [];
            console.log(a[i]+" ")
            if((i==a.length-1)&&curr.end){arr.push(a);return arr}
            curr=curr.alpha[pos]
        }
        var l=a
        function rek(curr2,l){
            for(let i=0;i<26;i++){
                if(!curr2.alpha[i])continue
                // console.log(String.fromCharCode(96+i))
                // l=l+String.fromCharCode(96+i)
                if(curr2.end)arr.push(l+String.fromCharCode(96+i))
                // console.log(l)
                rek(curr2.alpha[i],l+String.fromCharCode(96+i))
            }
        }
        rek(curr,l)
        return arr
    }

}

const ab=new ll();
ab.addtrie("tinii")
ab.addtrie("tiniiji")
ab.addtrie('milk')
ab.addtrie('makye')
ab.addtrie('mink')
ab.addtrie('master')
// console.log("\n"+ab.head.alpha[20])
// console.log("\n\n")
// const g=ab.chkword('tiniijifsdfs')
const g=ab.search_word('m')
console.log(g)

// for(var i=0;i<10;i++){
//     ab.add(i+1)
// }
// while(ab.head){
//     console.log(ab.head.e+" ")
//     ab.head=ab.head.next
// }
// console.log("hey im making trie")
// console.log(String.fromCharCode(97))
