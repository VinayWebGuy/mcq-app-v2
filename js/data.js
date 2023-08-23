const ques = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Rome", "Madrid"],
        selected: 0, answer: 1
    },
    {
        id: 2,
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Mark Twain", "Leo Tolstoy"],
        selected: 0, answer: 2
    },
    {
        id: 3,
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Jupiter", "Mercury"],
        selected: 0, answer: 4
    },
    {
        id: 4,
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Fe", "Cu"],
        selected: 0, answer: 2
    },
    {
        id: 5,
        question: "Which element is essential for photosynthesis in plants?",
        options: ["Carbon", "Oxygen", "Hydrogen", "Nitrogen"],
        selected: 0, answer: 3
    },
    {
        id: 6,
        question: "What is the largest ocean on Earth?",
        options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        selected: 0, answer: 2
    },
    {
        id: 7,
        question: "In which country was the game of chess invented?",
        options: ["India", "China", "Greece", "Egypt"],
        selected: 0, answer: 2
    },
    {
        id: 8,
        question: "What gas do plants primarily release during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        selected: 0, answer: 1
    },
    {
        id: 9,
        question: "Who painted the 'Mona Lisa'?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        selected: 0, answer: 2
    },
    {
        id: 10,
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        selected: 0, answer: 3
    },
    {
        id: 11,
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Neptune", "Earth"],
        selected: 0, answer: 3
    },
    {
        id: 12,
        question: "Who is known as the 'Father of Modern Physics'?",
        options: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Galileo Galilei"],
        selected: 0, answer: 2
    },
    {
        id: 13,
        question: "Which gas do plants use to carry out photosynthesis?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
        selected: 0, answer: 2
    },
    {
        id: 14,
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        selected: 0, answer: 1
    },
    {
        id: 15,
        question: "Who wrote the novel 'Pride and Prejudice'?",
        options: ["Jane Austen", "Charles Dickens", "Mark Twain", "George Orwell"],
        selected: 0, answer: 4
    },
    {
        id: 16,
        question: "What is the chemical symbol for iron?",
        options: ["Fe", "Au", "Ag", "Cu"],
        selected: 0, answer: 2
    },
    {
        id: 17,
        question: "Which gas is responsible for the color of Earth's sky?",
        options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"],
        selected: 0, answer: 2
    },
    {
        id: 18,
        question: "Who painted the 'Starry Night'?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Edvard Munch"],
        selected: 0, answer: 2
    },
    {
        id: 19,
        question: "Which gas is produced as a byproduct of respiration?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        selected: 0, answer: 4
    },
    {
        id: 20,
        question: "What is the largest land animal?",
        options: ["African Elephant", "White Rhinoceros", "Giraffe", "Hippopotamus"],
        selected: 0, answer: 2
    },
    {
        id: 21,
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Kyoto", "Osaka", "Beijing"],
        selected: 0, answer: 3
    },
    {
        id: 22,
        question: "Who wrote the play 'Hamlet'?",
        options: ["William Shakespeare", "Jane Austen", "Mark Twain", "Leo Tolstoy"],
        selected: 0, answer: 2
    },
    {
        id: 23,
        question: "Which gas is essential for respiration in living organisms?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        selected: 0, answer: 2
    },
    {
        id: 24,
        question: "Which metal is liquid at room temperature?",
        options: ["Mercury", "Gold", "Iron", "Aluminum"],
        selected: 0, answer: 2
    },
    {
        id: 25,
        question: "Which planet is known as the 'Ringed Planet'?",
        options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
        selected: 0, answer: 2
    },
    {
        id: 26,
        question: "Who painted the 'Last Supper'?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        selected: 0, answer: 2
    },
    {
        id: 27,
        question: "What is the largest bird in the world?",
        options: ["Ostrich", "Eagle", "Albatross", "Penguin"],
        selected: 0, answer: 4
    },
    {
        id: 28,
        question: "What is the chemical symbol for sodium?",
        options: ["Na", "So", "Sd", "No"],
        selected: 0, answer: 2
    },
    {
        id: 29,
        question: "Which gas makes up the majority of Earth's atmosphere?",
        options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
        selected: 0, answer: 1
    },
    {
        id: 30,
        question: "Who wrote the novel '1984'?",
        options: ["George Orwell", "Aldous Huxley", "F. Scott Fitzgerald", "J.D. Salinger"],
        selected: 0, answer: 1
    },
    {
        id: 31,
        question: "Which gas is responsible for the greenhouse effect?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Methane"],
        selected: 0, answer: 2
    },
    {
        id: 32,
        question: "Who wrote the novel 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Mark Twain", "Charles Dickens"],
        selected: 0, answer: 2
    },
    {
        id: 33,
        question: "Which gas is known as 'Laughing Gas'?",
        options: ["Nitrous Oxide", "Oxygen", "Carbon Dioxide", "Nitrogen"],
        selected: 0, answer: 4
    },
    {
        id: 34,
        question: "Which structure connects the two hemispheres of the brain?",
        options: ["Corpus Callosum", "Medulla Oblongata", "Cerebellum", "Hippocampus"],
        selected: 0, answer: 2
    },
    {
        id: 35,
        question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Mars", "Venus", "Pluto"],
        selected: 0, answer: 4
    },
    {
        id: 36,
        question: "Who painted the 'Girl with a Pearl Earring'?",
        options: ["Johannes Vermeer", "Vincent van Gogh", "Pablo Picasso", "Edvard Munch"],
        selected: 0, answer: 3
    },
    {
        id: 37,
        question: "What is the largest reptile in the world?",
        options: ["Saltwater Crocodile", "Komodo Dragon", "Green Anaconda", "Nile Crocodile"],
        selected: 0, answer: 1
    },
    {
        id: 38,
        question: "What is the chemical symbol for potassium?",
        options: ["K", "P", "Ka", "Ke"],
        selected: 0, answer: 2
    },
    {
        id: 39,
        question: "What is the process by which plants make their own food?",
        options: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
        selected: 0, answer: 2
    },
    {
        id: 40,
        question: "Which gas is known as the 'Silent Killer'?",
        options: ["Carbon Monoxide", "Nitrogen Dioxide", "Sulfur Dioxide", "Methane"],
        selected: 0, answer: 4
    },
    {
        id: 41,
        question: "Which gas is produced by burning fossil fuels and contributes to air pollution?",
        options: ["Sulfur Dioxide", "Oxygen", "Carbon Dioxide", "Nitrogen"],
        selected: 0, answer: 2
    },
    {
        id: 42,
        question: "Who wrote the novel 'The Great Gatsby'?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "Jane Austen"],
        selected: 0, answer: 2
    },
    {
        id: 43,
        question: "What is the chemical symbol for helium?",
        options: ["He", "H", "Hy", "Ha"],
        selected: 0, answer: 3
    },
    {
        id: 44,
        question: "What is the process by which water evaporates from the leaves of plants?",
        options: ["Transpiration", "Photosynthesis", "Respiration", "Condensation"],
        selected: 0, answer: 1
    },
    {
        id: 45,
        question: "Which planet is known as the 'Evening Star' or 'Morning Star'?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        selected: 0, answer: 2
    },
    {
        id: 46,
        question: "Who painted the 'Sistine Chapel Ceiling'?",
        options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        selected: 0, answer: 4
    },
    {
        id: 47,
        question: "What is the largest species of shark?",
        options: ["Whale Shark", "Great White Shark", "Tiger Shark", "Hammerhead Shark"],
        selected: 0, answer: 4
    },
    {
        id: 48,
        question: "Which gas is responsible for the formation of the ozone layer?",
        options: ["Oxygen", "Ozone", "Carbon Dioxide", "Nitrogen"],
        selected: 0, answer: 4
    },
    {
        id: 49,
        question: "Which gas is commonly used as a fire extinguisher?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        selected: 0, answer: 2
    },
    {
        id: 50,
        question: "Who wrote the play 'Macbeth'?",
        options: ["William Shakespeare", "George Orwell", "Mark Twain", "Leo Tolstoy"],
        selected: 0, answer: 1
    }
];

