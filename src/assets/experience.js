import Camposol from "./img/experience/camposol.png"
import SacoOliveros from "./img/experience/sacoliveros.png"
import IBM from "./img/experience/ibm_logo.jpg"
import Everis from "./img/experience/everis_logo.jpg"
import Globant from "./img/experience/Globant.png"
import Yape from "./img/experience/yapeapp_logo.jpg"

let experienceList = [
    {img: Yape,
        jobTitle: "Java Software Engineer", startDate: 202211, endDate: "current", enterprise: "YAPE" +
            " Perú", current: true,
        resume: "Java Software Engineer\n" +
            "Technical Specialist at YAPE BCP project."},
    {img: Globant,
        jobTitle: "Java Software Engineer", startDate: 202101, endDate: 202211, enterprise: "Globant" +
            " Perú", current: false,
        resume: "Java Software Engineer\n" +
            "Technical Specialist at YAPE BCP project."},
    {img: Everis,
    jobTitle: "Java Software Engineer", startDate: 202002, endDate: 202101, enterprise: "Everis" +
            " Perú", current: false,
    resume: "Java Software Engineer\n" +
        "Technical Specialist at Home Banking BCP project.\n" +
        "Responsible for the development and technical management of banking functionalities.\n" +
        "Team leader that develops reactive Java Backend applications using Spring Boot & RxJava2, Swagger documentation, Redis, MongoDB, SQL Server on a microservices architecture applying BDD & TDD patterns with JUnit5 & Mockito to test applications."},
    {img: IBM,
    jobTitle: "Software Application Developer", startDate: 201904, endDate: 202002, enterprise: "IBM Perú", current: false,
    resume: "Technical Specialists. Expertise in translating IT requirements in the design, development, and assembly of components to create custom information systems. Typical examples of the deliverables are functional and technical designs, models, components, code, unit tests, and documentation at IBM Perú Innovation Team.\n" +
        "Also developing custom bots with Automation Anywhere RPA tool to automate servers delivery process tasks."},
    {img: SacoOliveros,
    jobTitle: "Software Application Developer", startDate: 201705, endDate: 201706, enterprise: "Saco Oliveros SAC", current: false,
    resume: "Designs, develops, tests and delivers offerings for Cognitive Systems using the latest technologies. Works in an Agile, collaborative environment to understand stakeholder requirements using technologies like Java EE, MVC pattern, custom front-end templates, Navicat, SQLServer and NetBeans IDE."},
    {img: Camposol,
    jobTitle: "SAP ABAP/4 Developer", startDate: 201605, endDate: 201611, enterprise: "Ebisu" +
            " Consulting(Camposol,Glencore,Volcan)", current: false,
    resume: "-Atención de Requerimientos de Negocio de Volcan S.A.C, Glencore S.A y Camposol S.A\n" +
        "-Elaboración y desarrollo de reportes de información del negocio.\n" +
        "-Soporte a sistemas de información y aplicaciones del ERP SAP.\n" +
        "-Desarrollo de solución de interfaces y core de procesos.\n" +
        "-Uso de transacciones de desarrollo SE38, SE37, SE11, SE16, SE80, etc."}
];

function getCustomDate(date) {
    let dateValidate = String(date);
    if (dateValidate === "current"){
        return "current";
    } else {
        let customDate = date - 1;
        let dateString = String(customDate);
        let subYear = dateString.substring(0, 4);
        let subMonth = dateString.substring(4);
        let newDate = new Date(parseInt(subYear), parseInt(subMonth));
        let month = newDate.toLocaleString('default', { month: 'long' });
        return month + " " + subYear;
    }
}

function getMonthsDifference(startDate, endDate) {
    //Getting string dates
    let startDateString = String(startDate);
    let endDateString = String(endDate);
    //Getting yearValues
    let startYear = startDateString.substring(0, 4);
    let endYear = endDateString.substring(0, 4);
    //Getting Months
    let startMonth = startDateString.substring(4);
    let endMonth = endDateString.substring(4);
    //Calculate Months by array starting in 0 for new Date
    let calcStartMonth = parseInt(startMonth) - 1;
    let calcEndMonth = parseInt(endMonth) - 1;
    //Getting Dates
    let startDatum = new Date(parseInt(startYear), calcStartMonth);
    let endDatum = new Date(parseInt(endYear), calcEndMonth);
    //Calculate Months
    let monthsDifference = endDatum.getMonth() - startDatum.getMonth();
    monthsDifference += 12 * (endDatum.getFullYear() - startDatum.getFullYear());
    monthsDifference += 1;
    return Math.abs(Math.round(monthsDifference));
}

function getTime (startDate, endDate, current) {
    let today = new Date();
    //console.log("Start: "+startDate," End: "+endDate," current: "+current);
    //Getting months
    let monthsQuantity;
    if (!current) {
        monthsQuantity = getMonthsDifference(startDate, endDate);
    } else {
        let year = today.getFullYear();
        let month = today.getMonth() ;
        if (month < 10) {
            month = "0" + month;
        }
        let date = String(year) + month;
        let endDatum = parseInt(date);
        monthsQuantity = getMonthsDifference(startDate, endDatum);
        monthsQuantity++;
    }
    //Getting time
    let timeString = ""
    if (monthsQuantity > 12){
        let yearsQuantity = Math.trunc((monthsQuantity/12));
        let months = monthsQuantity - (yearsQuantity * 12);
        timeString = yearsQuantity + " years "+ months + " months"
    }else {
        timeString = monthsQuantity + " months"
    }
    return timeString;
}

function getExperiences() {
    let experience = [];
    experienceList.forEach(val => {
        let item = {
            img: val.img,
            jobTitle: val.jobTitle,
            startDate: getCustomDate(val.startDate),
            endDate: getCustomDate(val.endDate),
            enterprise: val.enterprise,
            resume: val.resume,
            time: getTime(val.startDate, val.endDate, val.current)
        }
        experience.push(item);
    })
    return experience
}

let listExperiences = getExperiences();

export default listExperiences;
