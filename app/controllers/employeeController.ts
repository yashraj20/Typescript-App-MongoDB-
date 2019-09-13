//import * as mongoose from 'mongoose';
import { EmployeeSchema } from '../models/employee';
import { Request ,Response } from 'express';
import mongoose from 'mongoose';

let EmployeeModel = mongoose.model('users',EmployeeSchema);

export class employeeController {

    public addEmployee(req : Request , res : Response) {
        let newEmp = new EmployeeModel(req.body);
        newEmp.save((err,data) => {
            if(err){
                res.send(err); 
            }
            res.json(data);
        });

    }

    public getEmp(req : Request , res : Response) {
        EmployeeModel.find({},(err,data) => {
            if(err){
                res.send(err); 
            }
            res.json(data);
        }) 
    }


    public getName(req: Request , res : Response) {
        EmployeeModel.find({name:"Yash"},(err,data) => {
            if(err){
                res.send(err); 
            }
            res.json(data);
        })
    }

    public getId(req: Request , res : Response) {
       // if (mongoose.Types.ObjectId.isValid(107)){ 
            let eid = new EmployeeModel(req.body);
            EmployeeModel.findById({Emp_id:eid},(err,data) => {
                if(err) {
                    res.send(err)
                }
                res.json(data);
            })
    //    } else {
    //        console.log('Please provide correct Id');
    //    }

    }


    public updatEemp(req: Request , res : Response) {
        EmployeeModel.findOneAndUpdate({Emp_id: req.body.Emp_id},{$set:{name: req.body.name}},(err,data) => {
            if(err){
                console.log(err);
                res.send(err);
            } 
            res.json(data);
        })
    }

    public updateById(req : Request , res: Response) {
       EmployeeModel.findByIdAndUpdate({},{$set:{name:req.body.name}},(err,data) => {
        if(err){
            console.log(err);
            res.send(err);
        } 
        res.json(data);

       })        
    }

    public addEmp(req : Request , res : Response) {
        let Newuser = new EmployeeModel(req.body);
        //let Newuser1 = new EmployeeModel(req.body);
        //let Newuser2 = new EmployeeModel(req.body);

        console.log(Newuser);
          
        EmployeeModel.create([Newuser],(err,data) => {
            if(err){
                console.log(err);
                res.send(err);
            } 
            res.json(data);
        })
    }

    



}