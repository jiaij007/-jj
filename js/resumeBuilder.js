/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
    "name" : "贾嘉",
    "role" : "个人简历",
    "contacts" : {
        "mobile" : "13067805471",
        "email" : "763529825@qq.com",
        "github" : "jiaij007",
        "twitter" : "jiajia",
        "location" : "中国,江苏,南京"
    },
    "welcomeMessage" : "性格开朗、稳重、有活力，个性独立，责任心强，踏实肯干，积极上进，学习能力较强，能学好问，听从领导的安排，适应能力强。",
    "skills" : ["熟悉使用办公软件", 
                "熟悉使用ps、ai、id等处理工具", 
                "精通html+css",
                "还有熟练掌握html5、css3、JavaScript、jQuery、响应式页面",
                "了解ajax，prototype面向对象",
                "能写出符合w3c标准，还原设计稿，像素级页面制作能力，实现动态效果",
                "我能吃苦耐劳，对前端开发有浓厚兴趣，有进取心，也能分析问题和解决问题",
                "我正在学Vue，虽然没有前端开发的工作经验，但是有信心能做前端开发"
    ],
    "biopic" : "images/I.jpg"
};

var education = {
    "schools" : [
    {
        "name" : "北京联合大学",
        "location": "中国, 北京",
        "degree" : "本科",
        "majors" : ["艺术设计"],
        "dates" : "2009-09-01",
        "url" : "http://www.buu.edu.cn"
    },
    {
        "name" : "南京聋人高级中学",
        "location": "中国, 江苏, 南京",
        "degree" : "高中",
        "majors" : ["计算机"],
        "dates" : "2005-09-01",
        "url" : "http://www.njlrxx.com"
    },
    ],
    "onlineCourses" : [
    {
        "title" : "https://github.com/jiaij007   github",
        "school" : "自学成才",
        "dates" : "2017-04-13",
        "url" : "https://github.com/jiaij007"
    }
    ]

};

var work = {
    "jobs": [
    {
        "employer": "中设设计集团股份有限公司",
        "title": "图文制作",
        "location": "中国, 江苏, 南京",
        "dates": "2014-02",
        "description": "以复印彩印制作为主，做设计不多,主要内容是接客户出版任务单，按照出版任务去做，然后打印做封面胶装。"
    },

    {
        "employer": "扬州市广陵区社会福利院",
        "title": "平面设计",
        "location": "中国, 江苏, 扬州",
        "dates": "2013-09 - 2014-02",
        "description": "负责设计海报广告名片书籍等等"
    }
    ]
};

var projects = {
    "projects":[
    {
        "title": "前端开发人员",
        "dates": "2018-03-01",
        "description": "我边工作边学习前端，有了作品，给你们展示我自已的水平，面试时我会带作品给你们看",
        "images":[
        "images/jiangsu_nanjing.gif",


        ]

    }
    ]
};



bio.display = function () {
    var titleName = HTMLheaderName.replace("%data%", bio.name);
    var titleRole = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(titleRole);
    $("#header").prepend(titleName);

    var titleMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(titleMobile);

    var titleEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(titleEmail);

    var titleGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(titleGithub);

    var titleTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(titleTwitter);

    var titleLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(titleLocation);

    var titleBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(titleBiopic);

    var titleWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(titleWelcomeMessage);

    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var titleSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(titleSkill);

        var titleSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(titleSkill);

        var titleSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(titleSkill);

        var titleSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(titleSkill);

        var titleSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(titleSkill);

        var titleSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(titleSkill);

        var titleSkill = HTMLskills.replace("%data%", bio.skills[6]);
        $("#skills").append(titleSkill);

        var titleSkill = HTMLskills.replace("%data%", bio.skills[7]);
        $("#skills").append(titleSkill);

        
    };

        $("#footerContacts").append(titleMobile);

        $("#footerContacts").append(titleEmail);

        $("#footerContacts").append(titleGithub);

        $("#footerContacts").append(titleTwitter);

        $("#footerContacts").append(titleLocation);

}



bio.display();




education.display = function (){
//Education
    if(education.schools.length > 0) {
        $("#education").append(HTMLschoolStart);

        education.schools.forEach( function( school ) {

            var schoolName = HTMLschoolName.replace("%data%", school.name)
            .replace("#", school.url);
            var schoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            schoolName += schoolDegree;
            $(".education-entry").append(schoolName);

            var schoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry").append(schoolDates);

            var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry").append(schoolLocation);

            var schoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
            $(".education-entry").append(schoolMajor);

        } );

    };
//Oneline Classes

        $(".education-entry").append(HTMLonlineClasses);

        education.onlineCourses.forEach(function( onlineCourse ) {

            var onlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title)
            .replace("#", onlineCourse.url);
            var onlineSchool = HTMLonlineSchool.replace("%data%",onlineCourse.school);
            onlineTitle += onlineSchool;
            $(".education-entry").append(onlineTitle);

            var onlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            $(".education-entry").append(onlineDates);

            var onlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
            $(".education-entry").append(onlineURL);


        }

            )


}


education.display();


work.display = function () {
    if(work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);

        work.jobs.forEach(function(job){

            var workEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var workTitle = HTMLworkTitle.replace("%data%", job.title);
            workEmployer += workTitle;
            $(".work-entry").append(workEmployer);

            var workDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry").append(workDates);

            var workDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry").append(workDescription);

        }
            )
    }
}

work.display();

projects.display = function () {
    if(projects.projects.length > 0) {
        $("#projects").append(HTMLprojectStart);

        projects.projects.forEach(function(project) {

            var projectTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry").append(projectTitle);

            var projectDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry").append(projectDates);

            var projectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry").append(projectDescription);

            var projectImage = HTMLprojectImage.replace("%data%", project.images);
            $(".project-entry").append(projectImage);

        }
            )

    }
}

projects.display();


$("#main").append(internationalizeButton);
$("#mapDiv").append(gaodeMap);






