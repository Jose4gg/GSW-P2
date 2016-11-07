import {Job} from '../data/models'

const getAllPost= async () => {
    return Job.findAll({});
}

export {getAllPost}