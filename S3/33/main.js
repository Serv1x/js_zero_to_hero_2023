function write(){
    console.log("My name is Kian")
}

write();
write();
write();

function ColourPicker(yellow, orange){

    const mix = `Colour with ${yellow} yellow drops and ${orange} orange drops.`;
    return mix;
}

const mix1 = ColourPicker(5,10);
console.log(mix1);

const mix2 = ColourPicker(4,6);
console.log(mix2);
