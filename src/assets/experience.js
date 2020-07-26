
let experienceList = [
    {img: "https://media-exp1.licdn.com/dms/image/C4E0BAQFjO-V14FMzjg/company-logo_100_100/0?e=1603929600&v=beta&t=7QXU762m5Q7aZ0nf0mr9RXBH7xkqYWwwFZv2NRRPpUk",
    jobTitle: "Java Software Engineer", startDate: 202002, endDate: "current", enterprise: "Everis Perú", current: true,
    resume: "Solutions Assistant Java Backend Developer\n" +
        "Technical Specialist at Home Banking BCP project.\n" +
        "Responsible for the development and technical management of banking functionalities.\n" +
        "Reactive Java Backend Developer using Spring Boot & RxJava2, Swagger documentation, Redis, MongoDB, SQL Server on a microservices architecture applying BDD & TDD process with JUnit4 & Mockito to test layer."},
    {img: "https://media-exp1.licdn.com/dms/image/C4E0BAQGfKOtAsJ7gOQ/company-logo_100_100/0?e=1603929600&v=beta&t=5vZO-01gsrYkb4-avt0hMN-WAiemJ3CaYTNXMK313_w",
    jobTitle: "Software Application Developer", startDate: 201904, endDate: 202002, enterprise: "IBM", current: false,
    resume: "Technical Specialists. Expertise in translating IT requirements in the design, development, and assembly of components to create custom information systems. Typical examples of the deliverables are functional and technical designs, models, components, code, unit tests, and documentation at IBM Perú Innovation Team.\n" +
        "Also developing custom bots with Automation Anywhere RPA tool to automate servers delivery process tasks."},
    {img: "https://media-exp1.licdn.com/dms/image/C560BAQFd5H1wbka7Ow/company-logo_100_100/0?e=1603929600&v=beta&t=NbUVQeygJzKAMdGaIzHrg_G03K2QRvOSsypxSxn8Huw",
    jobTitle: "Software Application Developer", startDate: 201705, endDate: 201707, enterprise: "Saco Oliveros SAC", current: false,
    resume: "Designs, develops, tests and delivers offerings for Cognitive Systems using the latest technologies. Works in an Agile, collaborative environment to understand stakeholder requirements using technologies like Java EE, MVC pattern, custom front-end templates, Navicat, SQLServer and NetBeans IDE."},
    {img: "https://media-exp1.licdn.com/dms/image/C4E0BAQEEKKMWRL-5XA/company-logo_100_100/0?e=1603929600&v=beta&t=UnWei7buMpJACd66wUqK0c9CfzmhBuFkDNu7Hocufko",
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
    }else {
        let customDate = date - 1;
        let dateString = String(customDate);
        let subYear = dateString.substr(0, 4);
        let subMonth = dateString.substr(4, 2);
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
    let startYear = startDateString.substr(0, 4);
    let endYear = endDateString.substr(0, 4);
    //Getting Months
    let startMonth = startDateString.substr(4, 2);
    let endMonth = endDateString.substr(4, 2);
    //Getting Dates
    let startDatum = new Date(parseInt(startYear),parseInt(startMonth));
    let endDatum = new Date(parseInt(endYear),parseInt(endMonth));
    //Calculate Months
    let monthsDifference = (endDatum.getTime() - startDatum.getTime()) / 1000;
    monthsDifference /= (60 * 60 * 24 * 7 * 4);
    return Math.abs(Math.round(monthsDifference));
}

function getTime (startDate, endDate, current) {
    let today = new Date();
    console.log("Start: "+startDate," End: "+endDate," current: "+current);
    //Getting months
    let monthsQuantity;
    if (!current) {
        monthsQuantity = getMonthsDifference(startDate, endDate);
    } else {
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
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