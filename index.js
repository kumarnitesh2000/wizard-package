
function wizard(options){
    let images = document.querySelectorAll('.wizard');
    if(options.type === 'hard'){
            options.type = '0px';
    }
    else
    options.type = '15px';

    images.forEach(image => {
        image.getElementsByClassName.boxShadow = `10px 10px ${options.type} 1px rgba(0,0,0,0.12)`;
        if(options.padding){
            image.style.padding = '1em';
        }
    })


}
module.exports.wizard = wizard ;
