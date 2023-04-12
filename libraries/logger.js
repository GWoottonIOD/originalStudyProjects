class Logger{
    constructor() {
        this.id = Math.random(1,9999)
    }
    log=(value)=>{
        console.log(`[Logger:${this.id}]:${value}`) // # private method using #, access from object to see what error im getting
    }
}

module.exports=Logger