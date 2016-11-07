import {MobxTranslate} from 'mobx-translate';

export  interface Dictionary {
    LAYOUT: {
        TITLE
        SEARCH
        POST_A_JOB
        ENTER_QUERY
        HOME
        LOGIN
        SEEMORE
        LOCATION
        POSITION
        COMPANY
        OPTIONS
        PROFILE
        EDIT
    }
}

export const EN : Dictionary = {
    LAYOUT: {
        POST_A_JOB: "Post a Job",
        ENTER_QUERY: "Enter text for search",
        LOGIN: "Log In",
        HOME: "Home",
        SEARCH: "Search",
        TITLE: "GET A JOB",
        SEEMORE: "SEE MORE...",
        LOCATION: "Location",
        COMPANY: "Company",
        OPTIONS: "Options",
        POSITION: "Position",
        PROFILE: "Profile",
        EDIT: "Edit this"
    }
}

export const ES : Dictionary = {
    LAYOUT: {
        POST_A_JOB: "Publicar Empleo",
        ENTER_QUERY: "Ingesa texto para buscar",
        LOGIN: "Ingresa al sistema",
        HOME: "Inicio",
        SEARCH: "Buscar",
        TITLE: "Consigue Empleo",
        SEEMORE: "VER MAS...",
        COMPANY: "Compañia",
        LOCATION: "Localidad",
        OPTIONS: "Opciones",
        POSITION: "Posición",
        PROFILE: "Perfil",
        EDIT: "Editar"
    }
}

const translateInstance = new MobxTranslate<Dictionary>();

translateInstance.loadStrings('EN', EN );
translateInstance.loadStrings('ES', ES );
translateInstance.setLanguage('EN');
export const trans = translateInstance;