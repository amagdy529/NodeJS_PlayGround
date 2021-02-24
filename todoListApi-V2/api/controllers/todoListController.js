'use strict';


var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

exports.list_all_tasks = function (req, res) {
    Task.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};




exports.create_a_task = function (req, res) {
    var new_task = new Task(req.body);
    new_task.save(function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


// exports.read_a_task = function (req, res) {
//     // res.json("helloooo");
    
//     Task.findById(req.params.taskId, function (err, task) {
//         if (err)
//             res.send(err);
//         res.json(task);
//         // res.json({ 
//         //             message: 'hello inside read task' ,
//         //             task_name:task.name,
//         //             status: task.status,
//         //         });
//         // res.json("helloooo");
//         // http://localhost:8080/api/bears/5797f3276e4e56001f000001
//         // http://localhost:3000/tasks/60352954ba74141731ee7201
//     });
// };


exports.read_a_task = function (req, res) {
    Task.findById(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};




exports.read_a_bear = function (req, res) {
    res.json("helloooo inside read bear inside controller");
    
};





exports.update_a_task = function (req, res) {
    Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.delete_a_task = function (req, res) {


    Task.remove({
        _id: req.params.taskId
    }, function (err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};
