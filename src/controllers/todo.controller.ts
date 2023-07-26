import { Request, Response } from 'express';
import { Todo } from '../models/Todo';

export const all = async (req: Request, res: Response) => {
    let list = await Todo.findAll();
    res.json({list})
}

export const add = async (req: Request, res: Response) => {
    let title: string = req.body.title;
    let done: boolean = req.body.done;
    let newTodo = await Todo.create({
        title,
        done
    })
    res.status(201);
    res.json({id: newTodo.id, title, done});
}

export const update = async (req: Request, res: Response) => {
    
}

export const remove = async (req: Request, res: Response) => {
    
}