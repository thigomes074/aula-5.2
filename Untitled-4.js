function trimLeft(){
let r=''
let copy=false;
for(let i=0; i<this.txt.length;i++){
    if(copy || this.txt[i] != ' '){
        copy= true;
        r+=txt.charAt(i);
    }
}
return r
}

console.log(trimLeft('   teste'));




function trimRight(txt){

}
