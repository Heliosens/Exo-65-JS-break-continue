let para = document.getElementsByClassName('paragraphe');

for ( let i = 0 ; i < para.length ; i++){
    para[i].innerHTML += (i+1).toString();
    if ( i % 2 === 0){
        continue;
    }
    else if (i === (para.length - 1)){
        console.log("ici i = " + i);
        break;
    }
}
