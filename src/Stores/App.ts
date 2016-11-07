import {action, observable, computed} from 'mobx';

class App {
    @observable drawer = false;
    @observable text = "";
    toggleDrawer(){
        this.drawer = !this.drawer;
    }    

    @computed get texto (){
        return this.text.toString();
    }
    
    setText(text){
        this.text = text;
    }
    setDrawer(open){
        this.drawer = open
    }
}


const _APP = new App()

export default _APP ;