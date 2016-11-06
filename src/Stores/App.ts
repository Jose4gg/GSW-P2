import {action, observable} from 'mobx';

class App {
    @observable drawer = false;

    toggleDrawer(){
        this.drawer = !this.drawer;
    }    

    setDrawer(open){
        this.drawer = open
    }
}


const _APP = new App()

export default _APP ;