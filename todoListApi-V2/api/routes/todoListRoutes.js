'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/todoListController');

    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);


    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);
        
    app.route('/bears/:bear_id')
        // .get(todoList.read_a_task)
        .get(function (req, res) {
            // res.json("bear");
            Bear.findById(req.params.bear_id, function (err, bear) {
                if (err)
                    res.send(err);
                res.json(bear);
            });
        })

};


// router.route('/bears/:bear_id')




