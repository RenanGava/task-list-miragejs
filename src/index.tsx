import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createServer, Model} from 'miragejs'

createServer({
  models:{
    task: Model
  },

  seeds(server){
    server.db.loadData({
      tasks:[
        {
          id: 1,
          title: 'Primeira Task',
          description: 'Sobre a task',
          date: new Date(),
          complete: false
        },
        {
          id: 2,
          title: 'segunda Task',
          description: 'Sobre a task 2',
          date: new Date(),
          complete: false
        }
      ]
    })
  },
  routes(){
    this.namespace = 'api'

    this.get('/tasks', () =>{
      return this.schema.all('task')
    })

    this.post('/tasks', (schema, request) =>{
      const data = JSON.parse(request.requestBody)

      return schema.create('task', data)
    })
    this.put('/tasks/:id', function(schema, request){

      const complete = JSON.parse(request.requestBody).complete
      
      console.log(complete);
      

      const id = request.params.id

      return schema.db.tasks.update(id, {complete: complete})
      
      
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

