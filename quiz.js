// Store the correct answers to questions
const correctAnswers = {
    q1: "b", // Roman Empire
    q2: "c", // 1945
    q3: "a", // Qin Shi Huang
    q4: "a", // 1789
    q5: "b", // Sun Tzu
    q6: "c", // Incas
    q7: "a", // Marie Curie
    q8: "b", // Qin Dynasty
    q9: "c", // Marie Curie
    q10: "a" // Vasco Da Gama
};

// Add event listener after submitting the quiz
document.getElementById('quizsubmit').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Collect answers from users
    const form = document.getElementById('quiz-form');
    //convert the answers from quiz to form data 
    const form_data = new FormData(form);
    let score = 0;
    //check the acorrect answer
    for(let[key,value] of form_data.entries()){
        if(correctAnswers[key]===value){
            score+=1;
        }
    }

// Show modal with the score
            document.getElementById('finalScore').textContent = score;
            const modal = document.getElementById('scoreModal');
            modal.classList.remove("hidden");

            // Close the modal when the user clicks on <span> (x)
            document.getElementById('closeModal').addEventListener('click', function() {
                modal.classList.add("hidden");
            });

            // Close the modal when the user clicks anywhere outside of the modal
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.classList.add("hidden");
                }
            });
            });
