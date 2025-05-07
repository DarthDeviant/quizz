"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertCircle, CheckCircle2 } from "lucide-react"

const allQuestions = [
  {
    question: "Which ancient kingdom in Assam was known for its capital at Pragjyotishpura?",
    answer: "Kamarupa Kingdom",
  },
  { question: "The Moamoria Rebellion significantly weakened which dynasty in Assam?", answer: "Ahom Dynasty" },
  {
    question: "Who was the first Assamese to be elected as the President of the Indian National Congress?",
    answer: "Anandaram Dhekial Phukan",
  },
  {
    question: "Which treaty ended the First Anglo-Burmese War and ceded Assam to British India?",
    answer: "Treaty of Yandabo",
  },
  { question: "Who was the first Assamese woman to be elected to the Lok Sabha?", answer: "Renuka Devi Barkataki" },
  { question: "Who invented the light bulb?", answer: "Thomas Edison" },
  { question: "Who invented the telephone?", answer: "Alexander Graham Bell" },
  { question: "Who invented the airplane?", answer: "Wright Brothers (Orville & Wilbur)" },
  { question: "Who was the founder of the Ahom dynasty?", answer: "Sukaphaa" },
  { question: "In which year did Sukaphaa establish the Ahom kingdom in Assam?", answer: "1228 AD" },
  { question: "What was the capital of the Ahom kingdom?", answer: "Charaideo, later Rangpur" },
  { question: "Which Ahom king is known for defeating the Mughals in the Battle of Saraighat?", answer: "Lachit Borphukan" },
  { question: "How long did the Ahom dynasty rule Assam?", answer: "About 600 years (1228–1826 AD)" },
  { question: "Who invented the printing press?", answer: "Johannes Gutenberg" },
  { question: "Who improved the steam engine?", answer: "James Watt" },
  { question: "Who invented the radio?", answer: "Guglielmo Marconi" },
  { question: "Who invented the television?", answer: "Philo Farnsworth" },
  { question: "Who is considered the father of the computer?", answer: "Charles Babbage (concept), Alan Turing (theory)" },
  { question: "Who invented the World Wide Web?", answer: "Tim Berners-Lee" },
  { question: "Who discovered penicillin?", answer: "Alexander Fleming" },
  { question: "Who made key discoveries and practical systems for electricity?", answer: "Benjamin Franklin, Nikola Tesla, and Thomas Edison" },
  { question: "Who invented the camera?", answer: "Joseph Nicéphore Niépce and Louis Daguerre" },
  { question: "Who invented the automobile?", answer: "Karl Benz" },
  { question: 'Who composed the state song of Assam, "O Mur Apunar Desh"?', answer: "Lakshminath Bezbaroa" },
  { question: "What is the Bihu festival primarily associated with?", answer: "Agriculture" },
  { question: "Which Assamese leader is also known as the 'Iron Man of Assam'?", answer: "Gopinath Bordoloi" },
  {
    question: "In which year was Assam separated from Bengal to become a Chief Commissioner's Province?",
    answer: "1874",
  },
  { question: "Which river island in Assam is considered the world's largest?", answer: "Majuli" },
  { question: "What is the capital of Assam?", answer: "Dispur" },
  { question: "What is the primary gas responsible for the greenhouse effect on Earth?", answer: "Carbon Dioxide" },
  {
    question: "Which part of the human brain is responsible for regulating balance and coordination?",
    answer: "Cerebellum",
  },
  { question: "What is the SI unit of electric current?", answer: "Ampere" },
  { question: "Which planet in our solar system has the most moons?", answer: "Saturn" },
  { question: "What is the process by which plants release water vapor into the atmosphere?", answer: "Transpiration" },
  { question: "Who is the current Chief Minister of Assam?", answer: "Himanta Biswa Sarma" },
  { question: "Which Indian city hosted the G20 Summit in 2023?", answer: "New Delhi" },
  { question: "Which city hosted the G20 Summit in 2024?", answer: "Rio De Janerio, Brazil" },
  { question: "Which city will host the G20 Summit in 2025?", answer: "Nasrec, Johannesburg, South Africa" },
  { question: "What is the name of India's mission to study the Sun launched in 2023?", answer: "Aditya-L1" },
  { question: "Who is the current President of India?", answer: "Droupadi Murmu" },
  {
    question: "Which Indian state recently became the first to implement a Uniform Civil Code?",
    answer: "Uttarakhand",
  },
  { question: "Which country won the FIFA World Cup in 2022?", answer: "Argentina" },
  { question: "Who holds the record for the fastest century in T20 International cricket?", answer: "David Miller" },
  {
    question: "Which Indian athlete won a gold medal in javelin throw at the Tokyo 2020 Olympics?",
    answer: "Neeraj Chopra",
  },
  { question: "Who won the 2024 Nobel Prize in Literature?", answer: "Han Kang" },
  { question: "Who won the 2023 Nobel Prize in Literature?", answer: "Jon Fosse" },
  { question: "Which organization was awarded the 2024 Nobel Peace Prize?", answer: "Nihon Hidankyo" },
  { question: "Who was awarded the 2023 Nobel Peace Prize?", answer: "Narges Mohammadi" },
  {
    question: "Who were the recipients of the 2023 Nobel Prize in Physics?",
    answer: "Pierre Agostini, Ferenc Krausz and Anne L'Huillier",
  },
  {
    question: "Who were the recipients of the 2024 Nobel Prize in Physics?",
    answer: "John J. Hopfield, Geoffry Hinton",
  },
  { question: "When was the first Nobel Prize for Physics awared?", answer: "1901" },
  {
    question: "Which school awarded the 2024 Nobel Prize for Physics?",
    answer: "Royal Swedish Academy of Sciences, Stockholm, Sweden",
  },
  { question: "Who won the 59th Jnanpith Award in 2024?", answer: "Vinod Kumar Shukla" },
  {
    question: "Who was the first Assamese person to win the Jnanpith Award(1979)",
    answer: "Birendra Kumar Bhattacharya",
  },
  { question: "How many times has the Jnanpith Award been conferred upon Assamese writers?", answer: "Three times" },
  { question: "What is Operation Sindoor about?", answer: "Removal of terrorist infrastructure" },
  { question: "What is the derivative of sin(x)?", answer: "cos(x)" },
  { question: "What is the square root of 144?", answer: "12" },
  { question: "What is the chemical symbol for gold?", answer: "Au" },
  { question: "What is H2SO4 commonly known as?", answer: "Sulfuric Acid" },
  { question: "What does DNA stand for?", answer: "Deoxyribonucleic Acid" },
  { question: "What does POK stand for?", answer: "Pakistan Occupied Kashmir" },
  { question: "What does LOC stand for in the context of India-Pakistan relations?", answer: "Line of Control" },
  { question: "When was the Ram Mandir inaugurated in Ayodhya?", answer: "22 January 2024" },
  { question: "Where is the newly constructed Ram Mandir located?", answer: "Ayodhya, Uttar Pradesh" },
  {
    question: "What is the Assam Sahitya Sabha?",
    answer:
      "The Assam Sahitya Sabha is a literary organization in Assam dedicated to the development of Assamese literature and culture.",
  },
  { question: "When was the Assam Sahitya Sabha founded?", answer: "It was founded in 1917." },
  {
    question: "Where was the first session of the Assam Sahitya Sabha held?",
    answer: "The first session was held at Sivasagar in 1917.",
  },
  {
    question: "Who was the first president of the Assam Sahitya Sabha?",
    answer: "Padmanath Gohain Baruah was the first president of the Assam Sahitya Sabha.",
  },
  {
    question: "What is the main objective of the Assam Sahitya Sabha?",
    answer: "Its main objective is to promote and develop Assamese language, literature, and culture.",
  },
  {
    question: "How often does the Assam Sahitya Sabha hold its sessions?",
    answer: "It holds annual sessions in different parts of Assam.",
  },
  {
    question: "In which script does the Assam Sahitya Sabha promote the Assamese language?",
    answer: "The Assamese language is promoted using the Assamese script.",
  },
  {
    question: "Which is the official publication of the Assam Sahitya Sabha?",
    answer: "The official publication is 'Assam Sahitya Sabha Patrika'.",
  },
  {
    question: "Who can become a member of the Assam Sahitya Sabha?",
    answer: "Any person interested in Assamese literature and culture can become a member.",
  },
  {
    question: "Does the Assam Sahitya Sabha promote other languages of Assam?",
    answer: "Yes, it also promotes the development of other regional languages spoken in Assam.",
  },
  { question: "Which Indian temple was inaugurated by Prime Minister Modi in January 2024?", answer: "Ram Mandir" },
]

// Function to shuffle an array using Fisher-Yates algorithm
const shuffleArray = (array) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export function QuizApp() {
  // Track used question indices across quiz sessions
  const [usedQuestionIndices, setUsedQuestionIndices] = useState(new Set())
  const [currentQuizSet, setCurrentQuizSet] = useState(1)
  const [questions, setQuestions] = useState([])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [questionsAnswered, setQuestionsAnswered] = useState(0)
  const [answeredIndices, setAnsweredIndices] = useState(new Set())
  const [userAnswer, setUserAnswer] = useState("")
  const [resultMessage, setResultMessage] = useState("")
  const [isCorrect, setIsCorrect] = useState(null)
  const [showNextButton, setShowNextButton] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)
  const [progress, setProgress] = useState(0)

  // For gradient animation
  const [gradientPosition, setGradientPosition] = useState(0)
  const totalSets = 5 // 5 sets of 10 questions each

  // Select 10 random questions that haven't been used yet
  const selectRandomQuestions = () => {
    // If we've used most questions, reset the used indices
    if (usedQuestionIndices.size >= allQuestions.length - 10) {
      setUsedQuestionIndices(new Set())
      setCurrentQuizSet(1)
    }

    // Get available question indices (not used yet)
    const availableIndices = allQuestions.map((_, index) => index).filter((index) => !usedQuestionIndices.has(index))

    // Shuffle available indices and take first 10
    const shuffledIndices = shuffleArray(availableIndices)
    const selectedIndices = shuffledIndices.slice(0, 10)

    // Mark these questions as used
    const newUsedIndices = new Set(usedQuestionIndices)
    selectedIndices.forEach((index) => newUsedIndices.add(index))
    setUsedQuestionIndices(newUsedIndices)

    // Create the questions array
    return selectedIndices.map((index) => allQuestions[index])
  }

  // Initialize questions on first render
  useEffect(() => {
    const initialQuestions = selectRandomQuestions()
    setQuestions(initialQuestions)
  }, [])

  useEffect(() => {
    setProgress((questionsAnswered / questions.length) * 100)

    // Update gradient position based on current question
    if (questions.length > 0) {
      setGradientPosition(((questionsAnswered % questions.length) / questions.length) * 100)
    }
  }, [questionsAnswered, questions.length])

  const fuzzyMatch = (input, answer) => {
    const normalize = (str) =>
      str
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/\s+/g, " ")
        .trim()

    const a = normalize(input)
    const b = normalize(answer)
    if (!a) return false
    if (a === b) return true

    const dp = Array(a.length + 1)
      .fill()
      .map(() => Array(b.length + 1).fill(0))
    for (let i = 0; i <= a.length; i++) dp[i][0] = i
    for (let j = 0; j <= b.length; j++) dp[0][j] = j
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost)
      }
    }
    const dist = dp[a.length][b.length]
    return dist <= 3 || a.includes(b) || b.includes(a)
  }

  const checkAnswer = () => {
    if (!userAnswer.trim() || answeredIndices.has(currentIndex)) return

    const correct = fuzzyMatch(userAnswer, questions[currentIndex].answer)
    setQuestionsAnswered((prev) => prev + 1)
    setIsCorrect(correct)

    if (correct) {
      setScore((prev) => prev + 1)
      setResultMessage("Correct!")
    } else {
      setResultMessage(`Wrong. Correct Answer: ${questions[currentIndex].answer}`)
    }

    const newAnsweredIndices = new Set(answeredIndices)
    newAnsweredIndices.add(currentIndex)
    setAnsweredIndices(newAnsweredIndices)
    setShowNextButton(true)

    if (newAnsweredIndices.size === questions.length) {
      setQuizComplete(true)
    }
  }

  const nextQuestion = () => {
    const remaining = questions.map((_, i) => i).filter((i) => !answeredIndices.has(i))

    if (remaining.length === 0) return

    setCurrentIndex(remaining[Math.floor(Math.random() * remaining.length)])
    setUserAnswer("")
    setResultMessage("")
    setIsCorrect(null)
    setShowNextButton(false)
  }

  const revealAnswer = () => {
    if (!answeredIndices.has(currentIndex)) {
      setQuestionsAnswered((prev) => prev + 1)
      const newAnsweredIndices = new Set(answeredIndices)
      newAnsweredIndices.add(currentIndex)
      setAnsweredIndices(newAnsweredIndices)

      if (newAnsweredIndices.size === questions.length) {
        setQuizComplete(true)
      }
    }

    setResultMessage(`Correct Answer: ${questions[currentIndex].answer}`)
    setIsCorrect(false)
    setShowNextButton(true)
  }

  const restartQuiz = () => {
    // Select a new set of questions
    const newQuestions = selectRandomQuestions()
    setQuestions(newQuestions)

    // Increment the quiz set counter
    setCurrentQuizSet((prev) => (prev % totalSets) + 1)

    // Reset quiz state
    setScore(0)
    setQuestionsAnswered(0)
    setAnsweredIndices(new Set())
    setCurrentIndex(0)
    setUserAnswer("")
    setResultMessage("")
    setIsCorrect(null)
    setShowNextButton(false)
    setQuizComplete(false)
  }

  // Create the gradient style for the progress bar - FIXED to avoid mixing shorthand and non-shorthand properties
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, 
      rgba(34, 197, 94, 0.9) ${(gradientPosition + 0) % 100}%, 
      rgba(59, 130, 246, 0.9) ${(gradientPosition + 33) % 100}%, 
      rgba(234, 179, 8, 0.9) ${(gradientPosition + 66) % 100}%, 
      rgba(34, 197, 94, 0.9) ${(gradientPosition + 100) % 100}%)`,
    backgroundSize: "200% 100%",
    backgroundPosition: `${gradientPosition}% 0%`,
    width: `${progress}%`,
    height: "100%",
    borderRadius: "9999px",
    transition: "width 0.5s ease-out, background-position 0.5s ease-out",
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-center">Quiz Time</CardTitle>
        <CardDescription className="text-center">
          {quizComplete
            ? `Final Score: ${score}/${questions.length} (${Math.round((score / questions.length) * 100)}%)`
            : `Question ${questionsAnswered + 1} of ${questions.length} • Set ${currentQuizSet} of ${totalSets}`}
        </CardDescription>
        <div className="h-2 mt-2 bg-gray-200 rounded-full overflow-hidden">
          <div style={gradientStyle}></div>
        </div>
      </CardHeader>

      <CardContent>
        {!quizComplete && questions.length > 0 ? (
          <>
            <p className="text-lg font-medium mb-4">{questions[currentIndex].question}</p>
            <Input
              type="text"
              placeholder="Your answer"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
              disabled={showNextButton}
              className="mb-4"
            />

            {resultMessage && (
              <div
                className={`flex items-center gap-2 p-3 rounded-md mb-4 ${
                  isCorrect ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                }`}
              >
                {isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                )}
                <p>{resultMessage}</p>
              </div>
            )}
          </>
        ) : quizComplete ? (
          <div className="text-center py-4">
            <h3 className="text-xl font-bold mb-2">Quiz Complete!</h3>
            <p className="mb-4">
              You scored {score} out of {questions.length} ({Math.round((score / questions.length) * 100)}%)
            </p>
            {score === questions.length ? (
              <p className="text-green-600 font-medium">Perfect score! Excellent job!</p>
            ) : score >= questions.length * 0.7 ? (
              <p className="text-green-600 font-medium">Great job! You did well!</p>
            ) : score >= questions.length * 0.5 ? (
              <p className="text-amber-600 font-medium">Good effort! Keep practicing!</p>
            ) : (
              <p className="text-red-600 font-medium">Keep studying and try again!</p>
            )}
          </div>
        ) : (
          <div className="text-center py-4">
            <p>Loading questions...</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-wrap justify-center gap-2">
        {!quizComplete && questions.length > 0 ? (
          <>
            {!showNextButton ? (
              <>
                <Button onClick={checkAnswer}>Submit</Button>
                <Button variant="outline" onClick={revealAnswer}>
                  Reveal Answer
                </Button>
              </>
            ) : (
              <Button onClick={nextQuestion}>Next Question</Button>
            )}
          </>
        ) : (
          <Button onClick={restartQuiz}>{currentQuizSet < totalSets ? "Next Set" : "Start Over"}</Button>
        )}
      </CardFooter>
    </Card>
  )
}
