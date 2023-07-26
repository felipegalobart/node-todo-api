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
    const id: string = req.params.id;

    let todo = await Todo.findByPk(id);
    if (todo) {

        if(req.body.title) {
            todo.title = req.body.title;
        }

        if(req.body.done) {
            switch (req.body.done.toLowerCase()) {
                case 'true':
                case '1':
                    todo.done = true;    
                    break;
            
                case 'false':
                case '0':
                    todo.done = false;    
                    break;
            }
        }

        await todo.save();
        res.json({ item: todo });

    } else {
        res.json({error: 'Item não encontrado!!!'})
    }
}

export const remove = async (req: Request, res: Response) => {
    
}