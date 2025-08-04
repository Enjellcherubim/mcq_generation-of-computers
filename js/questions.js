const myQuestions = [
  {
    title: "Question 1 - First Generation Technology",
    question: "What was the main technology used in first-generation computers?",
    background: "<img src='./img/gen1.jpg'>",
    answers: {
      a: "Transistors",
      b: "Vacuum Tubes",
      c: "Microprocessors"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct!<p>Vacuum tubes were large electronic components used in the first generation but were slow and produced heat.</p>",
    falseAnswerText: "Not quite!<p>First-generation computers used vacuum tubes, not transistors or microprocessors.</p>"
  },
  {
    title: "Question 2 - Second Generation Upgrade",
    question: "Which component replaced vacuum tubes in second-generation computers?",
    background: "<img src='./img/gen2.jpg'>",
    answers: {
      a: "Integrated Circuits",
      b: "Transistors",
      c: "Artificial Intelligence"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct!<p>Transistors were more reliable and efficient, replacing vacuum tubes in the second generation.</p>",
    falseAnswerText: "Try again!<p>The second generation used transistors, not ICs or AI.</p>"
  },
  {
    title: "Question 3 - Third Generation Feature",
    question: "Which of the following is a key feature of third-generation computers?",
    background: "<img src='./img/gen3.jpg'>",
    answers: {
      a: "Used Integrated Circuits",
      b: "Used punch cards",
      c: "Used voice commands"
    },
    correctAnswer: "a",
    correctAnswerText: "Well done!<p>Third-generation computers used Integrated Circuits, which made them faster and smaller.</p>",
    falseAnswerText: "Incorrect.<p>The correct answer is Integrated Circuits. Voice commands came much later.</p>"
  },
  {
    title: "Question 4 - Fourth Generation Example",
    question: "Which of these is a fourth-generation computer?",
    background: "<img src='./img/gen4.jpg'>",
    answers: {
      a: "ENIAC",
      b: "IBM 1401",
      c: "Desktop PC"
    },
    correctAnswer: "c",
    correctAnswerText: "Correct!<p>Fourth-generation computers use microprocessors, and Desktop PCs are a good example.</p>",
    falseAnswerText: "Nope!<p>Desktop PCs belong to the fourth generation, not ENIAC or IBM 1401.</p>"
  },
  {
    title: "Question 5 - Fifth Generation Focus",
    question: "What is the main focus of fifth-generation computers?",
    background: "<img src='./img/gen5.jpg'>",
    answers: {
      a: "Large storage",
      b: "Artificial Intelligence",
      c: "Low battery usage"
    },
    correctAnswer: "b",
    correctAnswerText: "That's right!<p>Fifth-generation computers focus on Artificial Intelligence—machines that can learn and think.</p>",
    falseAnswerText: "Not quite!<p>Fifth-generation computers are known for using AI.</p>"
  },
  {
    title: "Question 6 - Programming Languages",
    question: "Which programming languages were introduced in the second generation?",
    background: "<img src='./img/gen6.jpg'>",
    answers: {
      a: "Java and Python",
      b: "COBOL and FORTRAN",
      c: "HTML and CSS"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct!<p>COBOL and FORTRAN were early high-level programming languages used in the second generation.</p>",
    falseAnswerText: "Incorrect.<p>COBOL and FORTRAN were introduced in the second generation, not Java or HTML.</p>"
  },
  {
    title: "Question 7 - User-Friendly Interfaces",
    question: "Which generation introduced graphical user interfaces (GUIs)?",
    background: "<img src='./img/gen7.jpg'>",
    answers: {
      a: "Third Generation",
      b: "Fourth Generation",
      c: "First Generation"
    },
    correctAnswer: "b",
    correctAnswerText: "Exactly!<p>GUIs became common in fourth-generation computers, making them easier to use.</p>",
    falseAnswerText: "Wrong!<p>GUIs were introduced in the fourth generation, not third or first.</p>"
  },
  {
    title: "Question 8 - Third Generation Example",
    question: "Which computer is an example of a third-generation system?",
    background: "<img src='./img/gen8.jpg'>",
    answers: {
      a: "IBM System/360",
      b: "UNIVAC",
      c: "Siri"
    },
    correctAnswer: "a",
    correctAnswerText: "Correct!<p>The IBM System/360 is a third-generation computer that used integrated circuits.</p>",
    falseAnswerText: "No, that’s incorrect.<p>The correct answer is IBM System/360.</p>"
  },
  {
    title: "Question 9 - Energy Efficiency",
    question: "Which generation first used less electricity and produced less heat?",
    background: "<img src='./img/gen9.jpg'>",
    answers: {
      a: "First Generation",
      b: "Second Generation",
      c: "Fifth Generation"
    },
    correctAnswer: "b",
    correctAnswerText: "Good job!<p>Second-generation computers were more energy-efficient than the bulky first-generation machines.</p>",
    falseAnswerText: "Wrong answer!<p>The second generation used transistors and was more energy-efficient.</p>"
  },
  {
    title: "Question 10 - Smart Technology Today",
    question: "Which of the following uses fifth-generation AI technology?",
    background: "<img src='./img/gen10.jpg'>",
    answers: {
      a: "Spelling Bee",
      b: "Siri",
      c: "Slide Projector"
    },
    correctAnswer: "b",
    correctAnswerText: "Correct!<p>Siri is a voice assistant that uses artificial intelligence to respond to users.</p>",
    falseAnswerText: "Nope!<p>Siri is the best example of fifth-generation technology using AI.</p>"
  }


];