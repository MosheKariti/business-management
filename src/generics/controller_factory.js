module.exports = {
    create(service) {
        return {
            get: req => service.get(req.query, req.auth),
            getAll: req => service.getAll(req.query, req.auth),
            create: req => service.create(req.query, req.auth),
            update: req => service.update(req.query, req.auth),
            delete: req => service.delete(req.query, req.auth)
        }
    }
}