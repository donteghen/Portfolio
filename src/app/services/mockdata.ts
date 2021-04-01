import { Injectable } from "@angular/core";
import { Project } from "../models/project";

export const projects : Project[] = 
[
    {
        id: "ebf6d74c-8f3b-4c1b-9919-06d1de684704",
        title: "Personal Portfolio",
        description: "A personal portfolio web app that contains most of the small and medium size projects that describes my development journey yet. This simple app is developed mainly with angular. It all the data served is mocked locally, but the demo videos are dynamically loaded and served by the Angular-youtube API",
        tags:["Angular"],
        imgUrl: 'assets/porfolio.png',
        gitUrl: "https://github.com/donteghen/Portfolio",
        videoID : "QMP-o8WXSPM"
    }, 
    {
        id: "b89b480a-3125-44c5-8ecc-1d2e1e1f3d3c",
        title: "Full Ecommerce App",
        description: "A feature rich ecommerce WebApp with admin panel for user and inventory management, built entirely with angular 10. Firebase integrated for authentication and runs a local json server to that intercepts http requests and serves data in resonse.",
        tags:["Angular", "Firebase"],
        imgUrl: 'assets/ecommerceApp.png',
        gitUrl: "https://github.com/donteghen/Angular_Ecommerce_App/tree/master",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "e32dffc3-8e21-483d-9a47-0b2cf30690aa",
        title: "Tic-Tac-Toe Game",
        description: "Test drive tic-tc-toe game developed with angular. This app is a horrible result of angular 10 + boredom... Enjoy:)",
        tags:["Angular"],
        imgUrl: 'assets/tictacteo.png',
        gitUrl: "https://github.com/donteghen/tic-tac-toe-with-Angular-10",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "bcc020a3-8562-4513-913e-d56993cd9cb7",
        title: "Testing Lazy-loading",
        description: "This lazy-loaded modules app takes a peek into the basic and advanced implementations of lazyloading in angular. ",
        tags:["Angular"],
        imgUrl: 'assets/lazyloading.png',
        gitUrl: "https://github.com/donteghen/angular-lazyloading-and-routing-system",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "0042a6aa-6824-4c11-9d2b-2d1e96161c6f",
        title: "NGRX-Shopping List",
        description: "This app illustrates the basic implemmetation of redux architechture in angular using the ngrx library support by rxjs. This implementation includes the use of effects",
        tags:["Ngrx"," Angular"],
        imgUrl: 'assets/ngrxshoppinglist.png',
        gitUrl: "https://github.com/donteghen/ngrx-shopping-list",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "a66e6320-8f57-431a-88b0-4e9f3154b9cd",
        title: "NGRX",
        description: "Implemeting ngrx/store for shopping Store app state management with state with actions, reducers and selectors. There is no implementation of effects.",
        tags:["Ngrx", "Angular"],
        imgUrl: 'assets/crud.png',
        gitUrl: "https://github.com/donteghen/ngrx-online-store",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "d76d66e7-02cc-4f62-8355-9ea2aedfa109",
        title: "CRUD Server Side App",
        description: "This app serves an api and renders dynamically created pages in response to requests. The app is built with Nodejs(ExpressJS), mongodb and dynamic html generation is managed by the bug template engine.",
        tags:["NodeJS", "Express","Mongodb"],
        imgUrl: 'assets/crud.png',
        gitUrl: "https://github.com/donteghen/CRUD_with_nodejs_express_and_mongodb",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "9c83b956-d797-400c-8858-e7fdd41d31b9",
        title: "TodoList",
        description: "TodoList app runs on the modern fast and feature rich ExpressJS framework, LoopBack. Loopback is an express framework that offers an unmatch api setup experience. In addition it plays beautifully with angular and the result is fast development experience.",
        tags:["NodeJS", "Angular","Loopback", "Mongodb"],
        imgUrl: 'assets/todolist.png',
        gitUrl: "https://github.com/donteghen/TodoList-with-angular10-and-loopback4",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "c460142c-ca75-4254-9dc3-e0f271198477",
        title: "Contact Management App",
        description: "Contact List MEAN Stack App...",
        tags:["NodeJS", "Express","Mongodb", "Angular"],
        imgUrl: 'assets/contactlist.png',
        gitUrl: "https://github.com/donteghen/ContactList-MEAN-App",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "afb8826f-4bd1-49bd-9942-ee33a16c1ad4",
        title: "Restaurant Review App",
        description: "Full MEAN stack app  with admin panel...",
        tags:["NodeJS"],
        imgUrl: 'assets/tast.png',
        gitUrl: "https://github.com/donteghen/Restaurant-POS",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "0cd6c9ab-ff25-439e-b456-fdbac8a41b65",
        title: "Photo Gallery",
        description: "Personal photo gallery test app developed with ionic4, capacitor and Angular...",
        tags:["Ionic", "Angular", "Capacitor"],
        imgUrl: 'assets/photogallery.png',
        gitUrl: "https://github.com/donteghen/photo-gallery-with-ionic4-",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "6b0dd3ae-11a4-4f3c-8bd6-d15ea2306365",
        title: "Le Journal",
        description: "HAcker news hybrid app developed with ionic4, cordova and Angular...",
        tags:["Ionic", "Angular", "Cordova"],
        imgUrl: 'assets/lejournal.png',
        gitUrl: "https://github.com/donteghen/le-journal",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "0b4a95e2-e85f-4cb6-b7ab-d4113cd73faf",
        title: "Coin Mining",
        description: "A candycrush-like app developed with felgo and QT5...",
        tags:["Felgo", "Others", "QT5"],
        imgUrl: 'assets/coinming.png',
        gitUrl: "https://github.com/donteghen/coinmining/tree/master",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "1180622e-6d57-4397-8cf5-51afbe9d6eb2",
        title: "Restaurant POS System",
        description: "Restaurant on-spot order management system developed with WebForms, Entity Framework6 and C#",
        tags:["Others", "C#", "Entity Framework6", "WebForms"],
        imgUrl: 'assets/restaurant.png',
        gitUrl: "https://github.com/donteghen/Restaurant-POS",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "c868a68e-1004-4764-84f6-d31e24047981",
        title: "Hacker News Apps",
        description: "Hacker News App is a hot news link sharing app that allows users to register, share and upvote new links. Its developed with React, Graphql(Apollo-Client, Apollo-Sevrer)and nodeJS. It also includes Prism as ORM",
        tags:["React", "NodeJS", "GraphQL"],
        imgUrl: 'assets/work.jpg',
        gitUrl: "https://github.com/donteghen/hackernews-react-graphql",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "c2f57f45-3bea-4812-ac83-325a8e5ec386",
        title: "Task Manager API",
        description: "Task Manager API is ExpressJs based api that provides secured endpoinds to client app user fo creating and managing their everyday tasks in an organized way. The api offers authentication with password hashing for extra protection. This project is developed with NodeJS, ExpressJS, MongoDB(Mongoose ODM)",
        tags:["ExpressJS", "NodeJS", "MongoDB"],
        imgUrl: 'assets/work.jpg',
        gitUrl: "https://github.com/donteghen/Task-Manager-app",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "168958c2-6c3a-47ac-9ca8-cd495b71e6e0",
        title: " Angular SportsStore",
        description: "Angular SportsStores is a high perfomance, insecure and underfeatured ecommerced type web app. It use all the core concepts and technics offered by the angular framework. The project also containers a local backend server that intercepts http requests and response with mock json data. It also container an admin end with restricted access",
        tags:["ExpressJS", "Angular"],
        imgUrl: 'assets/work.jpg',
        gitUrl: "https://github.com/donteghen/Angular-sportsStore",
        videoID : "QMP-o8WXSPM"
    },
    
    {
        id: "10e043bf-a36f-4f22-9f6d-4fe9f82bdac0",
        title: " Angular SportsStore",
        description: "React-Redux SportsStores is a high perfomance, insecure and underfeatured ecommerced type web app. It use all the core concepts and technics of the react framework and the redux store management library. The project also containers a local backend server that intercepts http requests and response with mock json data. ",
        tags:["ExpressJS", "Redux", 'React'],
        imgUrl: 'assets/work.jpg',
        gitUrl: "https://github.com/donteghen/react-redux-SportsStore",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "35cefbf8-fefe-42ce-809a-e40d7e544602",
        title: " Forkify",
        description: "Forkify is a dynamc javascript app for viewing and bookmarking recipes fetch asynchrously with AJAX. The projects is structured and design the follow the MVC pattern and it also uses the publisher / observer pattern for reacting to certain user actions like changing ingrdients before bookmarking.",
        tags:["Ajax", 'Javascript'],
        imgUrl: 'assets/work.jpg',
        gitUrl: "https://github.com/donteghen/forkify",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "db130974-70c6-48b2-a47e-b99edfb18aa2",
        title: " Mapty",
        description: "Forkify is a dynamc javascript app for recording and viewing sports(jogging, cycling) activities information like exact location(lattitude / longitude), dates and other information on a map. The app uses the Geolocation API to get location and fetches a map instance from leaflet with these coordinates and renders the map accordingly",
        tags:["Ajax", 'Javascript'],
        imgUrl: 'assets/work.jpg',
        gitUrl: "https://github.com/donteghen/mapty",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "dd756f7c-d527-4f24-9f3b-c43f3ba54a49",
        title: " One-page-Site",
        description:"A dynamic, feature-rich and animated pure javascript one page site. This projects is design to use pure javascript to manipulate the DOM, providing a smooth user exerience, with lazyloaded images and smooth scrolling and more.",
        tags:['Javascript'],
        imgUrl: 'assets/work.jpg',
        gitUrl: "https://github.com/donteghen/one-page-site",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "c87442a9-a4d3-4606-ac1e-7f4a8ab180d0",
        title: "DashBoard",
        description:"Responsive Admin Dashboard template containing different styles of dashboards, data presentations, and numerous insightful components. Built with the newest Bootstrap 4, Angular 10 and Material Design for Bootstrap. On the backend, app runs an express server that serves data from postgresDB modelled with serialize ORM",
        tags:['Angular', 'ExpressJS', 'NodeJS', 'Postgre', "Seriallize"],
        imgUrl: 'assets/work.jpg',
        gitUrl: "https://github.com/donteghen/Dashboard",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "5fca1c50-8935-4940-b088-c7202b3d8b2a",
        title: "Pig Game",
        description:'Pig Game is a javascript dice rolling game. The game offers freedom for players to choose when to pass roll turn to each other. The aim is reach 100 points. The catch, when a player throws a "1", they lose all their current points',
        tags:['Angular', 'ExpressJS', 'NodeJS', 'Postgre', "Seriallize"],
        imgUrl: 'assets/work.jpg',
        gitUrl: "https://github.com/donteghen/pig-game",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "7319dda7-eb50-41b1-a857-61e8e1bd3340",
        title: "Pig Game",
        description:'Todo list app with angular 10, material design ui plus firebase for data persistence. The app is hosted on the firebase cloud',
        tags:['Angular', 'Firebase'],
        imgUrl: 'assets/work.jpg',
        gitUrl: "https://github.com/donteghen/my-todo",
        videoID : "QMP-o8WXSPM"
    },
    {
        id: "957c26b9-eb8d-4307-8018-da33032bc223",
        title: "Pig Game",
        description:'Todo list app with angular 10, material design ui plus firebase for data persistence. The app is hosted on the firebase cloud',
        tags:['Angular', 'Firebase'],
        imgUrl: 'assets/work.jpg',
        gitUrl: "https://github.com/donteghen/my-todo",
        videoID : "QMP-o8WXSPM"
    },
]
