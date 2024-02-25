import { RequestHandler, response } from "express";

import { Penguin } from "../models/penguinDB";

export const createPenguin: RequestHandler = async(request, response, next) => {
    var penguin = await Penguin.create({ ...request.body });
    return response
        .status(200)
        .json({ message: "Penguin created successfully", data: penguin });
};

export const deletePenguin: RequestHandler = async(request, response, next) => {
    const {id} = request.params;
    const deletedPenguin: Penguin|null = await Penguin.findByPk(id);

    await Penguin.destroy({ where: {id} });

    return response.status(200)
        .json({ message: "Penguin deleted successfully", data: deletedPenguin });
};

export const updatePenguin: RequestHandler = async(request, response, next) => {
    const {id} = request.params;
    await Penguin.update({ ...request.body }, {where: {id}});
    const updatedPenguin: Penguin|null = await Penguin.findByPk(id);

    return response
        .json({ message: "Penguin deleted successfully", data: updatedPenguin });
}

export const getAllUsers: RequestHandler = async(request, response, next) => {
    const allUsers: Penguin[] = await Penguin.findAll();

    return response.status(200)
        .json({ message: "Penguin fetched successfully", data: allUsers });
};

export const getUserByName: RequestHandler = async(request, response, next) => {
    const {name} = request.params;
    const user: Penguin|null = await Penguin.findByPk(name);

    return response
        .json({ message: "Penguin deleted successfully", data: user });
}
