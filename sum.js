function add(x,y){
  if(((typeof x)==='Number')&&((typeof y)==='Number')){
    return x+y;
  }else{
    return NaN;
  }

  //return Number(x)+Number(y);
}

module.exports=add;
