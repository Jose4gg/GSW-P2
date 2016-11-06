import { action, observable } from 'mobx';

class Job {
    @observable job = {};

    @action insertJob(j){
        this.job = j;
    }
}

const _job = new Job();

export default {Job: _job};