module.exports = function(actions){
    /**
    * @function execute - routes actions
    */
    return function execute(request, sender, callback) {
        var handle = actions[request.context + '-' + request.action];
        if(typeof handle === 'function') {
            handle(request.data);
        }
    }
};