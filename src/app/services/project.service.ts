import { Injectable } from "@angular/core";
import { Project } from "../models/project";
import { projects } from "./mockdata";

Injectable({
    providedIn:'root'
})
export class ProjectService{
    projects : Project[];
    constructor(){}
    getAllProject(){
        return this.projects = projects
    }
}