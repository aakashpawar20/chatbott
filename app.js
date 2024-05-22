
function talk(){
    var know = {
        "Hey" : "Hello, how can i help you",
        "Hi"  : "Hello, Good to see you again, How can i help you",
        "Hlo" : "Hello, how can i help you",
    "Who are you" : "Hello, i am arisa how can i help you ",
    "What can i do after bca" : "After bca you want to apply for a master degree, master is better for future.",
    "Hey please write a hello world code using python" : "Here is a simple python code, print(Hello, World!)",
    "Good morning" : "Good morning, have a nice day...",
    "Good evening" : "Good evening",
    "Good night" : "Good night thanks for using me, meet soon",
    "Who is the prime ministr of india" : "Shri Narendra Modi was sworn-in as India's Prime Minister on 30th May 2019, marking the start of his second term in office. The first ever Prime Minister to be born after Independence, Shri Modi has previously served as the Prime Minister of India from 2014 to 2019.",
    "How are you" : "Good :)",
    "Who developed you" : "Hello, My name is arisa i am chatbot i was developed by mr. aakash pawar and mrs. sapna kumari ",
    "What you think about you indian culture" : "India is one of the most religiously and ethnically diverse nations in the world, with some of the most deeply religious societies and cultures. Religion plays a central and definitive role in the life of many of its people.",
    "Ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon..",
    "How's the weather today?" : "The weather today is sunny/cloudy/rainy/etc.",
    "What's your favorite color?" : "I'm a chatbot, so I don't have favorite colors, but I think all colors are great!",
    "Can you tell me a joke?" : "Sure! Why couldn't the bicycle stand up by itself? Because it was two-tired!",
    "Do you like pizza?" : "As a chatbot, I don't eat, but I've heard that many people enjoy pizza!",
    "What's the capital of France?" : "The capital of France is Paris.",
    "How do I change my password?" : "To change your password, you need to go to the settings section of your account and look for the password change option.",
    "Can you recommend a good book?" : "One popular book that many people enjoy is 'To Kill a Mockingbird' by Harper Lee.",
    "What's the time right now?" : "The current time is [current time].",
    "How do I delete my account?" : "To delete your account, you usually need to go to the account settings and look for the option to delete your account.",
    "What's the meaning of life?" : "That's a deep question! The meaning of life can vary from person to person, but many people find meaning in relationships, personal growth, and contributing to the well-being of others.",
    "Can you help me with my homework?" : "Sure, I'll do my best to help. What subject is your homework about?",
    "What's the population of China?" : "As of the latest data, the population of China is over 1.4 billion people.",
    "How do I cook spaghetti?" : "To cook spaghetti, boil water in a pot, add salt, then add the spaghetti and cook until it's al dente. Drain the spaghetti and serve with your favorite sauce.",
    "What's the meaning of AI?" : "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence by machines, particularly computer systems.",
    "How do I reset my password?" : "To reset your password, you usually need to go to the login page and look for the 'Forgot Password' option. Follow the instructions provided to reset your password.",
    "What's the tallest mountain in the world?" : "The tallest mountain in the world is Mount Everest, located in the Himalayas on the border between Nepal and China.",
    "Can you recommend a good movie?" : "There are many great movies out there! One popular movie that many people enjoy is 'The Shawshank Redemption.'",
    "How do I make a website?" : "To make a website, you can use website builders like WordPress, Wix, or Squarespace, or you can learn web development languages like HTML, CSS, and JavaScript.",
    "What's the capital of Japan?" : "The capital of Japan is Tokyo.",
    "Can you help me improve my programming skills?" : "Sure! Practice is key to improving your programming skills. You can start by working on small projects, solving coding challenges, and learning new concepts regularly.",
    "How do I learn a new language?" : "To learn a new language, immerse yourself in it as much as possible. Practice speaking, listening, reading, and writing regularly, and consider using language learning apps or taking classes.",
    "What's the best way to stay motivated?" : "Staying motivated can be challenging, but setting specific goals, breaking them down into smaller tasks, and rewarding yourself for progress can help keep you motivated.",
    "How do I start a business?" : "To start a business, you'll need to come up with a business idea, create a business plan, register your business, and take care of legal and financial requirements.",
    "Can you recommend a good restaurant?" : "Sure! It depends on your location and preferences, but you can use restaurant review websites or apps like Yelp or TripAdvisor to find highly-rated restaurants nearby.",
    "How do I stay healthy?" : "To stay healthy, make sure to eat a balanced diet, exercise regularly, get enough sleep, manage stress, and see a healthcare professional for regular check-ups.",
    "What is your name" : "My name is arisa, how can i help you",
        

    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand, If you have any specific questions or if there's something else you'd like assistance with, feel free to provide more details. I'm here to help! <br>";
    }
    }