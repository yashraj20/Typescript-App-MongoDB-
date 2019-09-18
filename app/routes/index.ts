import { Request ,Response } from 'express';
import { employeeController } from '../controllers/employeeController';

export class Routes {

    employeeController : employeeController = new employeeController();

    public routes(app:any) : void {
        app.route('/')
        .get((req:Request,res:Response) => {
             res.status(200).send('Hello Yash Raj');
        });

        // add employee using save method
        app.route('/api/addEmployee')
        .post(this.employeeController.addEmployee)

        // fetch employee
        app.route('/api/employees')
        .get(this.employeeController.getEmp)

        // fetch individual employee data
        app.route('/api/byName')
        .get(this.employeeController.getName)
         
        // fetching by employee id
        app.route('/api/byId')
        .post(this.employeeController.getId)

        // update employee
        app.route('/api/updateEmployee')
        .post(this.employeeController.updatEemp)

        // add employee using create method
        app.route('/api/addEmp')
        .post(this.employeeController.addEmp)

        // Login 
        app.route('/api/Login')
        .post(this.employeeController.login)

        


        
        
          


    }
}
