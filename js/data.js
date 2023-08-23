const ques = [
  {
    id: 1,
    question: "This set of Python Aptitude Test focuses on “Random module”.",
    options: ["True", "None", "3", "1"],
    answer: 2,
    selected: 0,
  },
  {
    id: 2,
    question:
      "The function random.randint(4) can return only one of the following values. Which?",
    options: ["4", "3.4", "error", "5"],
    answer: 3,
    selected: 0,
  },
  {
    id: 3,
    question:
      "Which of the following functions can help us to find the version of python that we are currently working on?",
    options: [
      "sys.version",
      "sys.version()",
      "sys.version(0)",
      "sys.version(1)",
    ],
    answer: 1,
    selected: 0,
  },
  {
    id: 4,
    question:
      "The output of the functions len(“abc”) and sys.getsizeof(“abc”) will be the same.",
    options: ["True", "False"],
    answer: 2,
    selected: 0,
  },
  {
    id: 5,
    question:
      "What will be the output of the following Python code?<br> import sys<br>sys.stdin.readline()<br>Sanfoundry",
    options: ["‘Sanfoundry\/n’", "‘Sanfoundry’", "‘Sanfoundry10’", "Error"],
    answer: 1,
    selected: 0,
  },
  {
    id: 6,
    question: "What does os.fchmod(fd, mode) do?",
    options: [
      "change permission bits of the file",
      "change permission bits of the directory",
      "change permission bits of either the file or the directory",
      "none of the mentioned",
    ],
    answer: 1,
    selected: 0,
  },
  {
    id: 7,
    question:
      "What will be the output shape of the following Python code?<br>import turtle<br>t=turtle.Pen()<br>for i in range(0,4):<br>\tt.forward(100)<br>\tt.left(120)",
    options: ["square", "rectangle", "triangle", "kite"],
    answer: 3,
    selected: 0,
  },
  {
    id: 8,
    question:
      "What will be the output of the following Python code?<br>sentence = 'we are humans'<br>matched = re.match(r'(.*) (.*?) (.*)', sentence)<br>print(matched.group())",
    options: [
      "(‘we’, ‘are’, ‘humans’)",
      "(we, are, humans)",
      "(‘we’, ‘humans’)",
      "‘we are humans’",
    ],
    answer: 4,
    selected: 0,
  },
  {
    id: 9,
    question:
      "What will be the output of the following Python code?<br>sentence = 'horses are fast'<br>regex = re.compile('(?P<animal>\\w+) (?P<verb>\\w+) (?P<adjective>\\w+)')<br>matched = re.search(regex, sentence)<br>print(matched.group(2))",
    options: [
      "{‘animal’: ‘horses’, ‘verb’: ‘are’, ‘adjective’: ‘fast’)",
      "(‘horses’, ‘are’, ‘fast’)",
      "‘horses are fast’",
      "‘are’",
    ],
    answer: 4,
    selected: 0,
  },
  {
    id: 10,
    question:
      "What will be the output of the following Python code?<br>re.split(r'(n\\d)=', 'n1=3.1, n2=5, n3=4.565')",
    options: [
      "Error",
      "[”, ‘n1’, ‘3.1, ‘, ‘n2’, ‘5, ‘, ‘n3’, ‘4.565’]",
      "[‘n1’, ‘3.1, ‘, ‘n2’, ‘5, ‘, ‘n3’, ‘4.565’]",
      "[‘3.1, ‘, ‘5, ‘, ‘4.565’]",
    ],
    answer: 2,
    selected: 0,
  },
  {
    id: 11,
    question:
      "All dependencies are specified in the ____ file, which is located in the source folder?",
    options: ["Root", "Config", "composer.json"],
    answer: 3,
    selected: 0,
  },
  {
    id: 12,
    question: "How many built-in libraries does Laravel provides?",
    options: ["30", "20", "100", "50"],
    answer: 2,
    selected: 0,
  },
  {
    id: 13,
    question:
      "Which folder in Laravel includes the entire source code of the project?",
    options: ["Events", "Public", "App", "Console"],
    answer: 3,
    selected: 0,
  },
  {
    id: 14,
    question: "What is the name of the file which handles all the exceptions?",
    options: ["Exception_methods.php", "Handle.php", "Exceptions.php"],
    answer: 2,
    selected: 0,
  },
  {
    id: 15,
    question:
      "Which folder in Laravel contains model, controllers and views defined for the specific directories?",
    options: ["Events", "Public", "Jobs", "Http"],
    answer: 4,
    selected: 0,
  },
  {
    id: 16,
    question: "Laravel is a ____ framework?",
    options: ["PHP", "JavaScript", "Python", "React"],
    answer: 1,
    selected: 0,
  },
  {
    id: 17,
    question: "Does Laravel follow the MVC concept?",
    options: ["Yes", "No"],
    answer: 1,
    selected: 0,
  },
  {
    id: 18,
    question: "Does Laravel follow the object-oriented approach?",
    options: ["Yes", "No"],
    answer: 1,
    selected: 0,
  },
  {
    id: 19,
    question: "Does PHP follow the object-oriented approach?",
    options: ["No", "Yes"],
    answer: 2,
    selected: 0,
  },
  {
    id: 20,
    question: "Command line interface used in Laravel is called ____.",
    options: ["Command Prompt", "CLI", "Composer", "Artisan"],
    answer: 4,
    selected: 0,
  },
  {
    id: 21,
    question: "How many built-in libraries does Laravel provides?",
    options: ["30", "20", "100", "50"],
    answer: 2,
    selected: 0,
  },
  {
    id: 22,
    question: "What is the name of the ORM used in Laravel?",
    options: ["Artisan", "Composer", "Hibernate", "Eloquent"],
    answer: 4,
    selected: 0,
  },
  {
    id: 23,
    question:
      "The database definitions and structure are kept in PHP code using ____.",
    options: ["Redis", "Template engine", "Schema Builder"],
    answer: 3,
    selected: 0,
  },
  {
    id: 24,
    question: "Which template language does Laravel use?",
    options: ["Blade", "Cron", "Template engine", "Command Bus"],
    answer: 1,
    selected: 0,
  },
  {
    id: 25,
    question: "____ installed on your system before you install Laravel.",
    options: ["Browser", "Composer", "Eloquent", "None of the above"],
    answer: 2,
    selected: 0,
  },
  {
    id: 26,
    question:
      "Which folder in Laravel includes the entire source code of the project?",
    options: ["Events", "Public", "App", "Console"],
    answer: 3,
    selected: 0,
  },
  {
    id: 27,
    question: "Where middleware are located in Laravel?",
    options: ["Http", "Views", "Routes", "Public"],
    answer: 1,
    selected: 0,
  },
  {
    id: 28,
    question:
      "What is the extension of the folder which includes all the events for the project?",
    options: [".php", ".txt", ".xml", ".laravel"],
    answer: 1,
    selected: 0,
  },
  {
    id: 29,
    question: "What is the name of the file which handles all the exceptions?",
    options: ["Exception_methods.php", "Handle.php", "Exceptions.php"],
    answer: 2,
    selected: 0,
  },
  {
    id: 30,
    question:
      "Which folder in Laravel contains model, controllers and views defined for the specific directories?",
    options: ["Events", "Public", "Jobs", "Http"],
    answer: 4,
    selected: 0,
  },
  {
    id: 31,
    question:
      "The ____ directory stores the actions that have been queued for the Laravel application?",
    options: ["Events", "Public", "Jobs", "Http"],
    answer: 3,
    selected: 0,
  },
  {
    id: 32,
    question:
      "The name standard for test case classes is ____, and it is based on the functionality of the class?",
    options: ["Toggle case", "Uppercase", "Lowercase", "Camel case"],
    answer: 4,
    selected: 0,
  },
  {
    id: 33,
    question:
      "The configuration settings are cached using which of the following command?",
    options: ["Config_cache", "Cache", "Config", "Config:cache"],
    answer: 4,
    selected: 0,
  },
  {
    id: 34,
    question:
      "In which of the following file, environment variables are declared?",
    options: [".environment", ".env_varibales", ".env"],
    answer: 3,
    selected: 0,
  },
  {
    id: 35,
    question:
      "In which of the following folder, routes are defined?",
    options: ["public", "routes", "app"],
    answer: 2,
    selected: 0,
  },
  {
    id: 36,
    question:
      "Which of the following method is used to delete an item from the session?",
    options: ["Delete()", "Expire()", "Forget()", "Del()"],
    answer: 3,
    selected: 0,
  },
  {
    id: 37,
    question: "Laravel uses free feature-rich library ____ to send emails?",
    options: ["SwiftMailer", "Emailer", "Mails"],
    answer: 1,
    selected: 0,
  },
  {
    id: 38,
    question:
      "Which of the following artisan command creates all the listeners?",
    options: ["event:", "event:listener", "event:generate"],
    answer: 3,
    selected: 0,
  },
  {
    id: 39,
    question:
      "Which of the following is the most important feature of cloud storage listed below?",
    options: [
      "Logon authentication",
      "Bare file",
      "Multiplatform support",
      "Adequate bandwidth",
    ],
    answer: 1,
    selected: 0,
  },
  {
    id: 40,
    question:
      "Which of the following is the open cloud storage management standard by SNIA?",
    options: ["CDMI", "OCCI", "CEA"],
    answer: 1,
    selected: 0,
  },
  {
    id: 41,
    question: "Which of the following is not a type of cloud server?",
    options: [
      "Public Cloud Servers",
      "Private Cloud Servers",
      "Dedicated Cloud Servers",
      "Merged Cloud Servers",
    ],
    answer: 4,
    selected: 0,
  },
  {
    id: 42,
    question: "Which of the following is an example of the cloud?",
    options: [
      "Amazon Web Services (AWS)",
      "Dropbox",
      "Cisco WebEx",
      "All of the above",
    ],
    answer: 4,
    selected: 0,
  },
  {
    id: 43,
    question:
      "Which of the following is the correct statement about cloud types?",
    options: [
      "Cloud Square Model is meant to show is that the traditional notion of a network boundary being the network’s firewall no longer applies in cloud computing",
      "A deployment model defines the purpose of the cloud and the nature of how the cloud is located",
      "Service model defines the purpose of the cloud and the nature of how the cloud is located",
      "All of the mentioned",
    ],
    answer: 2,
    selected: 0,
  },
  {
    id: 44,
    question:
      "What is the correct formula to calculate the cost of a cloud computing deployment?",
    options: [
      "CostCLOUD = Σ(UnitCostCLOUD / (Revenue + CostCLOUD))",
      "CostCLOUD = Σ(UnitCostCLOUD / (Revenue – CostCLOUD))",
      "CostCLOUD = Σ(UnitCostCLOUD x (Revenue – CostCLOUD))",
      "None of the mentioned",
    ],
    answer: 2,
    selected: 0,
  },
  {
    id: 45,
    question:
      "Cloud computing doesn’t require that ________ and software be composable.",
    options: ["cloud", "database", "hardware", "all of the mentioned"],
    answer: 3,
    selected: 0,
  },
  {
    id: 46,
    question:
      "The most commonly used set of protocols uses ______ as the messaging format.",
    options: ["XML", "JSON", "BSON", "All of the mentioned"],
    answer: 1,
    selected: 0,
  },
  {
    id: 47,
    question:
      "Which of the following benefit is provided by the PaaS service provider?",
    options: [
      "A larger pool of qualified developers",
      "More reliable operation",
      "A logical design methodology",
      "All of the mentioned",
    ],
    answer: 4,
    selected: 0,
  },
  {
    id: 48,
    question:
      "Applications such as a Web server or database server that can run on a virtual machine image are referred to as ______________",
    options: [
      "virtual server",
      "virtual appliances",
      "machine imaging",
      "all of the mentioned",
    ],
    answer: 2,
    selected: 0,
  },
  {
    id: 49,
    question: "Which of the following is authorization markup language?",
    options: [
      "eXtensible Access Control Markup Language",
      "intrinsic Access Control Markup Language",
      "hypertext Access Control Markup Language",
      "all of the mentioned",
    ],
    answer: 1,
    selected: 0,
  },
  {
    id: 50,
    question:
      "The technology used to distribute service requests to resources is referred to as _____________",
    options: [
      "load performing",
      "load scheduling",
      "load balancing",
      "all of the mentioned",
    ],
    answer: 3,
    selected: 0,
  },
];
