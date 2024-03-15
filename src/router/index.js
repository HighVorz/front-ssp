import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import Flow from "@/components/Flow";


import PersonSearchView from '@/views/PersonSearchView'
import MainView from "@/views/MainView";
import HomeView from "@/views/Home";


import TrafficMonitorView from "@/views/TrafficMonitorView"
import PeopleDetectionView from "@/views/PeopleDetectionView"
import LicenseSearchView from '@/views/LicenseSearchView'
import daiding from '@/views/daiding';
Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/home"
},
{
    path: '/home',
    name: 'Home',
    component: HomeView,

    children: [{
        path: '/home',
        name: 'Home',
        component: HomeView
    }, {
        path: '/monitor',
        name: 'TrafficMonitorView',
        component: TrafficMonitorView
    }, {
        path: '/detection',
        name: 'PeopleDetectionView',
        component: PeopleDetectionView
    },
    {
        path: '/license',
        name: 'licenseSearchView',
        component: LicenseSearchView
    },
    {
        path: '/person',
        name: "PersonSearchView",
        component: PersonSearchView
    },
    {
        path: '/daiding',
        name: "daiding",
        component: daiding
    },
    ]
},

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router