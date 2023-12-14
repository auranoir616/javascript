export default class InputHandler{
    constructor(){
        this.lastkey = ''
        window.addEventListener('keydown', (e)=>{
            switch(e.key){
                case 'ArrowLeft':
                    this.lastkey = "PRESS left"
                    break
                case 'ArrowRight':
                    this.lastkey = "PRESS right";
                    break
                case 'ArrowDown':
                    this.lastkey = "PRESS down";
                    break
                case 'ArrowUp':
                    this.lastkey = "PRESS up";
                    break
       
                }
        })
        window.addEventListener('keyup', (e)=>{
            console.log(e.key)
            switch(e.key){
                case 'ArrowLeft':
                    this.lastkey = "RELEASE left"
                    break
                case 'ArrowRight':
                    this.lastkey = "RELEASE right";
                    break
                case 'ArrowDown':
                    this.lastkey = "RELEASE down";
                    break
                case 'ArrowUp':
                    this.lastkey = "RELEASE UP";
                    break    
    
    
            }
        })


    }
}