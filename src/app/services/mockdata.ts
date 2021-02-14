import { Injectable } from "@angular/core";
import { Project } from "../models/project";

export const projects : Project[] = 
[
    {
        id: "ebf6d74c-8f3b-4c1b-9919-06d1de684704",
        title: "Personal Portfolio",
        description: "A personal digital cv design and built with angular...",
        tags:["Angular"],
        imgUrl: 'assets/porfolio.png',
        gitUrl: "https://github.com/donteghen/Portfolio"
    }, 
    {
        id: "b89b480a-3125-44c5-8ecc-1d2e1e1f3d3c",
        title: "Full Ecommerce App",
        description: "A complete ecommerce angular app with Firebase Authentication...",
        tags:["Angular", "Firebase"],
        imgUrl: 'assets/ecommerceApp.png',
        gitUrl: "https://github.com/donteghen/Angular_Ecommerce_App/tree/master"
    },
    {
        id: "e32dffc3-8e21-483d-9a47-0b2cf30690aa",
        title: "Tic-Tac-Toe Game",
        description: "Test drive tic-tc-toe game developed with angular...",
        tags:["Angular"],
        imgUrl: 'assets/tictacteo.png',
        gitUrl: "https://github.com/donteghen/tic-tac-toe-with-Angular-10"
    },
    {
        id: "bcc020a3-8562-4513-913e-d56993cd9cb7",
        title: "Testing Lazy-loading",
        description: "I quick dive into lazy-loading in angular using the routing system...",
        tags:["Angular"],
        imgUrl: 'assets/lazyloading.png',
        gitUrl: "https://github.com/donteghen/angular-lazyloading-and-routing-system"
    },
    {
        id: "0042a6aa-6824-4c11-9d2b-2d1e96161c6f",
        title: "NGRX-Shopping List",
        description: "Implemeting ngrx/store for shopping list app state management with Effects...",
        tags:["Ngrx"," Angular"],
        imgUrl: 'assets/ngrxshoppinglist.png',
        gitUrl: "https://github.com/donteghen/ngrx-shopping-list"
    },
    {
        id: "a66e6320-8f57-431a-88b0-4e9f3154b9cd",
        title: "NGRX",
        description: "Implemeting ngrx/store for shopping Store app state management with state selectors...",
        tags:["Ngrx", "Angular"],
        imgUrl: 'assets/crud.png',
        gitUrl: "https://github.com/donteghen/ngrx-online-store"
    },
    {
        id: "d76d66e7-02cc-4f62-8355-9ea2aedfa109",
        title: "CRUD Server Side App",
        description: "Server side rendering app built with Node, bug template engine, express and mongodb...",
        tags:["NodeJS", "Express","Mongodb"],
        imgUrl: 'assets/crud.png',
        gitUrl: "https://github.com/donteghen/CRUD_with_nodejs_express_and_mongodb"
    },
    {
        id: "9c83b956-d797-400c-8858-e7fdd41d31b9",
        title: "TodoList",
        description: "Task management app developed with LoopBack, mongodb, nodejs and Angular...",
        tags:["NodeJS", "Angular","Loopback", "Mongodb"],
        imgUrl: 'assets/todolist.png',
        gitUrl: "https://github.com/donteghen/TodoList-with-angular10-and-loopback4"
    },
    {
        id: "c460142c-ca75-4254-9dc3-e0f271198477",
        title: "Contact Management App",
        description: "Contact List MEAN Stack App...",
        tags:["NodeJS", "Express","Mongodb", "Angular"],
        imgUrl: 'assets/contactlist.png',
        gitUrl: "https://github.com/donteghen/ContactList-MEAN-App"
    },
    {
        id: "afb8826f-4bd1-49bd-9942-ee33a16c1ad4",
        title: "Restaurant Review App",
        description: "Full MEAN stack app  with admin panel...",
        tags:["NodeJS"],
        imgUrl: 'assets/tast.png',
        gitUrl: "https://github.com/donteghen/Restaurant-POS"
    },
    {
        id: "0cd6c9ab-ff25-439e-b456-fdbac8a41b65",
        title: "Photo Gallery",
        description: "Personal photo gallery test app developed with ionic4, capacitor and Angular...",
        tags:["Ionic", "Angular", "Capacitor"],
        imgUrl: 'assets/photogallery.png',
        gitUrl: "https://github.com/donteghen/photo-gallery-with-ionic4-"
    },
    {
        id: "6b0dd3ae-11a4-4f3c-8bd6-d15ea2306365",
        title: "Le Journal",
        description: "HAcker news hybrid app developed with ionic4, cordova and Angular...",
        tags:["Ionic", "Angular", "Cordova"],
        imgUrl: 'assets/lejournal.png',
        gitUrl: "https://github.com/donteghen/le-journal"
    },
    {
        id: "0b4a95e2-e85f-4cb6-b7ab-d4113cd73faf",
        title: "Coin Mining",
        description: "A candycrush-like app developed with felgo and QT5...",
        tags:["Felgo", "Others", "QT5"],
        imgUrl: 'assets/coinming.png',
        gitUrl: "https://github.com/donteghen/coinmining/tree/master"
    },
    {
        id: "1180622e-6d57-4397-8cf5-51afbe9d6eb2",
        title: "Restaurant POS System",
        description: "Restaurant on-spot order management system developed with WebForms, Entity Framework6 and C#",
        tags:["Others", "C#", "Entity Framework6", "WebForms"],
        imgUrl: 'assets/restaurant.png',
        gitUrl: "https://github.com/donteghen/Restaurant-POS"
    },
]
