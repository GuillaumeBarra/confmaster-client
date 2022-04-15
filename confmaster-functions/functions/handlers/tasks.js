const db = require('../utility/admin');

exports.getTasks = (request, response) => {

   
    db.admin.firestore().collection('tasks').get().then((data) => {
        let tasks = [] //create tasks array
        data.forEach((doc) => {
            tasks.push({
                taskId: doc.id,
                title: doc.data().title,
                body: doc.data().body,
                userAssigned: doc.data().usersAssigned
                //deadline: doc.data().deadline
            }); //put tasks in the array
        });
        return response.json(tasks);
    })
    .catch(error => console.error());
}




exports.postTask = (request, response) => {
    const newTask = {
        body: request.body.body,
        title: request.body.title,
        userAssigned: request.body.userAssigned
        //deadline: request.body.deadline.toDate()
    }; //fields to be posted

    db.admin.firestore().collection('tasks').add(newTask).then(doc => {
        response.json({message: `document ${doc.id} created successfully`});
    }) //confirm creating of task
    .catch(error => {
        response.status(500).json({error: 'something went wrong'});
        console.error(error);
    }) //catch server errors
 }