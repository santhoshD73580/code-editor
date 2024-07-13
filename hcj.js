
// for download process=======

// for box_1====================
const textarea = document.querySelector('.box_1 textarea'),
    filename = document.querySelector('.box_1 .file-name input'),
    select = document.querySelector('.box_1 select'),
    download = document.querySelector('.box_1 .download');

download.addEventListener('click',()=>{
    const blob = new Blob([textarea.value],{type: select.value});

    const fileurl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = filename.value;
    link.href = fileurl;
    link.click();
});

// ==============for box_2=================

const textarea_2 = document.querySelector('.box_2 textarea'),
    filename_2 = document.querySelector('.box_2 .file-name input'),
    select_2 = document.querySelector('.box_2 select'),
    download_2= document.querySelector('.box_2 .download');

    download_2.addEventListener('click',()=>{
        const blob_2 = new Blob([textarea_2.value],{type: select_2.value});
    
        const fileurl_2 = URL.createObjectURL(blob_2);
        const link_2 = document.createElement('a');
        link_2.download = filename_2.value;
        link_2.href = fileurl_2;
        link_2.click();
    });

    // for===================box_3==========
    
    const textarea_3 = document.querySelector('.box_3 textarea'),
    filename_3 = document.querySelector('.box_3 .file-name input'),
    select_3 = document.querySelector('.box_3 select'),
    download_3= document.querySelector('.box_3 .download');

    download_3.addEventListener('click',()=>{
        const blob_3 = new Blob([textarea_3.value],{type: select_3.value});
    
        const fileurl_3 = URL.createObjectURL(blob_3);
        const link_3 = document.createElement('a');
        link_3.download = filename_3.value;
        link_3.href = fileurl_3;
        link_3.click();
    });

    // forrun the program=================

    function run(){

        let htmlcode = document.querySelector('#html_code').value;
        let csscode = document.querySelector('#css-code').value;
        let jscode = document.querySelector('#javascript-code').value;
    
        let output = document.querySelector('.right #output');

        output.contentDocument.body.innerHTML = htmlcode + "<style>" + csscode + "</style>";
        output.contentWindow.eval(jscode);
    
    }

    // auto refresh save function====

    var savedtext1 = localStorage.getItem('savedtext1') || '';
    var savedtext2 = localStorage.getItem('savedtext2') || '';
    var savedtext3 = localStorage.getItem('savedtext3') || '';


    textarea.value = savedtext1;
    textarea_2.value = savedtext2;
    textarea_3.value = savedtext3;

    textarea.addEventListener('input',()=>{
        localStorage.getItem('savedtext1',textarea.value);
    });
    textarea_2.addEventListener('input',()=>{
        localStorage.getItem('savedtext2',textarea_2.value);
    });
    textarea_3.addEventListener('input',()=>{
        localStorage.getItem('savedtext3',textarea_3.value);
    });
    function cleartxt(){
        textarea.value = '';
        textarea_2.value = '';
        textarea_3.value = '';

        localStorage.getItem('savedtext1','');
        localStorage.getItem('savedtext2','');
        localStorage.getItem('savedtext3','');
        
    }






    // clear the text =====
    