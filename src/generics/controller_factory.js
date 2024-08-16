module.exports = {
    create(service) {
        return {
            get: req => service.get(req.params.id, req.auth),
            getAll: req => service.getAll(req.query, req.auth),
            create: req => service.create(req.body, req.auth),
            update: req => service.update(req.params.id, req.body, req.auth),
            delete: req => service.delete(req.params.id, req.auth),
        }
    }
}