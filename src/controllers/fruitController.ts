import { Request, Response } from "express";
import Fruit from "../models/fruit";

interface ResponseJson {
    message: string,
    data?: object[],
}

const getAllFruit = async (req: Request, res: Response): Promise<void> => {
    const fruits = await Fruit.findAll()

    const responseJson: ResponseJson = {
        message: "success",
        data: fruits,
    }
    res.status(200).json(responseJson)
}

const createFruit = async (req: Request, res: Response): Promise<void> => {
    const fruit = await Fruit.create({
        name: req.body.name,
    })

    const responseJson: ResponseJson = {
        message: 'success'
    }
    res.status(201).json(responseJson)
}

const updateFruit = async (req: Request, res: Response): Promise<void> => {
    const fruit = await Fruit.update({
        name: req.body.name,
    }, {
        where: {
            id: req.params.id,
        }
    })

    const responseJson: ResponseJson = {
        message: 'success',
    }

    res.status(200).json(responseJson)
}

const deleteFruit = async (req: Request, res: Response): Promise<void> => {
    const fruit = await Fruit.destroy({
        where: {
            id: req.params.id,
        }
    })

    const responseJson: ResponseJson = {
        message: 'success',
    }

    res.status(200).json(responseJson)
}

export { getAllFruit, createFruit, updateFruit, deleteFruit }