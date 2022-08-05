import React from 'react'
import { KeyboardArrowDown, KeyboardArrowUp,    } from "@material-ui/icons";


export const SidebarData = [
    {
        title: "Features",
        path: '#',
        iconClosed: <KeyboardArrowDown/>,
        iconOpened: <KeyboardArrowUp/>,
        subNav:[
            {
                title: "Todo List",
                icon: "./images/icon-todo.svg"
            },

            {
                title: "Calender",
                icon: "./images/icon-calendar.svg"
            },
            
            {
                title: "Reminder",
                icon: "./images/icon-reminders.svg"
            },
            
            {
                title: "Planning",
                icon: "./images/icon-planning.svg"
            },
        ]
    },
    {
        title: "Company",
        iconClosed: <KeyboardArrowDown/>,
        iconOpened: <KeyboardArrowUp/>,
        subNav: [
            {
                title: "History",
               
                
            },
            {
                title: "Our Team",
                
                
            },
            {
                title: "Blog",
         
                
            },
            
           
        ]
    },

    {
        title: 'Careers',
       

    },
    {
        title: 'About',
 
    },
    
]