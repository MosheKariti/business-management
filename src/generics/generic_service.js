const _ = require('lodash');

class GenericService {
    constructor(model) {
        this.model = model;
    }

    get(query, auth) {
        return this.model.findOne(query);
    }

    getAll() {
        return this.model.find();
    }

    async create(body, auth) {
        return this.model.create(body);
    }

    async update(id, body, auth) {
        const entity = await this.model.findOne({ _id: id });
        _.assign(entity, body);
        await entity.save();
        return entity;
    }

    delete(id, auth) {
        return this.model.delete({ _id: id });
    }
}


module.exports = GenericService;