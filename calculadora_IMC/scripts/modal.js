export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    textIMC: document.querySelector('.title'),
    textAviso: document.querySelector('.aviso'),
    btnClose:document.querySelector('.close'), 


    open(){
        Modal.wrapper.classList.add('open')
    },
    
    close(){
        Modal.wrapper.classList.remove('open')    
    }
}

Modal.btnClose.onclick = () => {
    Modal.close()
 }

 window.addEventListener('keydown', e => {
    if(e.key == 'Escape'){
        Modal.close()
    }
 })