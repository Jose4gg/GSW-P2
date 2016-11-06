import {action, observable} from 'mobx';

class App {
    @observable job = false;
    @observable valid = false;
    setJob(job){
        this.job = job;
    }    

    setValid(){
        this.valid = true;
    }
    setInvalid(){
        this.valid = false;
    }
    
}


const _APP = new App()

export default _APP ;