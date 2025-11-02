// Enhanced exam functionality with demo questions
document.addEventListener('DOMContentLoaded', function() {
    const showExplanationBtn = document.getElementById('showExplanation');
    const explanation = document.getElementById('explanation');
    const markForReviewBtn = document.getElementById('markForReview');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentQuestionIndex = 0; // 0-based for array indexing
    let totalQuestions = 5; // We have 5 demo questions
    let markedForReview = false;
    let userAnswers = {};
    
    // Show/hide explanation
    showExplanationBtn.addEventListener('click', function() {
        if (explanation.style.display === 'none') {
            explanation.style.display = 'block';
            showExplanationBtn.textContent = 'Hide Explanation';
        } else {
            explanation.style.display = 'none';
            showExplanationBtn.textContent = 'Show Explanation';
        }
    });
    
    // Mark for review
    markForReviewBtn.addEventListener('click', function() {
        markedForReview = !markedForReview;
        if (markedForReview) {
            markForReviewBtn.textContent = '✓ Marked for Review';
            markForReviewBtn.style.background = '#fbbf24';
            markForReviewBtn.style.color = 'white';
        } else {
            markForReviewBtn.textContent = 'Mark for Review';
            markForReviewBtn.style.background = 'transparent';
            markForReviewBtn.style.color = '#4a5568';
        }
    });
    
    // Load demo questions
    function loadQuestion(index) {
        if (index < 0 || index >= demoQuestions.length) return;
        
        const question = demoQuestions[index];
        const container = document.getElementById('questionContainer');
        
        // Save current answer before switching
        saveCurrentAnswer();
        
        container.innerHTML = `
            <div class="question-header">
                <span class="question-number">Question ${question.number}</span>
                <span class="question-topic">${question.topic}</span>
            </div>
            
            <div class="question-text">
                <h3>${question.question}</h3>
            </div>

            <div class="options">
                ${question.options.map((option, i) => `
                    <label class="option">
                        <input type="radio" name="q${question.number}" value="${i}">
                        <span class="option-text">${String.fromCharCode(65 + i)}) ${option}</span>
                    </label>
                `).join('')}
            </div>

            <div class="explanation" id="explanation" style="display: none;">
                <h4>Explanation</h4>
                <p><strong>Correct Answer: ${String.fromCharCode(65 + question.correct)}</strong></p>
                <p>${question.explanation}</p>
                <p><strong>Reference:</strong> <a href="${question.reference}" target="_blank">Official Documentation</a></p>
            </div>
        `;
        
        // Restore saved answer if exists
        restoreAnswer(question.number);
        
        // Reset explanation visibility
        document.getElementById('explanation').style.display = 'none';
        showExplanationBtn.textContent = 'Show Explanation';
    }
    
    function saveCurrentAnswer() {
        if (currentQuestionIndex >= 0 && currentQuestionIndex < demoQuestions.length) {
            const questionNum = demoQuestions[currentQuestionIndex].number;
            const selected = document.querySelector(`input[name="q${questionNum}"]:checked`);
            if (selected) {
                userAnswers[questionNum] = selected.value;
            }
        }
    }
    
    function restoreAnswer(questionNum) {
        if (userAnswers[questionNum] !== undefined) {
            const radio = document.querySelector(`input[name="q${questionNum}"][value="${userAnswers[questionNum]}"]`);
            if (radio) {
                radio.checked = true;
            }
        }
    }

    // Navigation (demo functionality)
    nextBtn.addEventListener('click', function() {
        if (currentQuestionIndex < totalQuestions - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
            updateProgress();
        } else if (currentQuestionIndex === totalQuestions - 1) {
            showDemoMessage();
        }
    });
    
    prevBtn.addEventListener('click', function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
            updateProgress();
        }
    });
    
    function updateProgress() {
        const progressFill = document.getElementById('progressFill');
        const currentQuestionSpan = document.getElementById('currentQuestion');
        const totalQuestionSpan = document.getElementById('totalQuestions');
        
        const progressPercent = ((currentQuestionIndex + 1) / totalQuestions) * 100;
        progressFill.style.width = progressPercent + '%';
        currentQuestionSpan.textContent = currentQuestionIndex + 1;
        totalQuestionSpan.textContent = totalQuestions;
        
        // Update navigation buttons
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.disabled = false; // Always allow next to show demo message
        
        // Update button text
        if (currentQuestionIndex === totalQuestions - 1) {
            nextBtn.textContent = 'Finish Demo →';
        } else {
            nextBtn.textContent = 'Next →';
        }
    }
    
    // Demo message function
    function showDemoMessage() {
        // Create or update demo message
        let demoMsg = document.getElementById('demoMessage');
        if (!demoMsg) {
            demoMsg = document.createElement('div');
            demoMsg.id = 'demoMessage';
            demoMsg.className = 'demo-message';
            demoMsg.innerHTML = `
                <div class="demo-content">
                    <h4>📝 Demo Mode</h4>
                    <p>This is a demonstration of the exam interface. For the complete ${totalQuestions} questions, please use:</p>
                    <div class="demo-actions">
                        <a href="processed-exams/terraform-practice-exam-1.md" class="btn btn-primary">View Complete Exam</a>
                        <button onclick="closeDemoMessage()" class="btn btn-secondary">Continue Demo</button>
                    </div>
                </div>
            `;
            document.body.appendChild(demoMsg);
        }
        demoMsg.style.display = 'flex';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (demoMsg) {
                demoMsg.style.display = 'none';
            }
        }, 5000);
    }
    
    // Global function to close demo message
    window.closeDemoMessage = function() {
        const demoMsg = document.getElementById('demoMessage');
        if (demoMsg) {
            demoMsg.style.display = 'none';
        }
    }
    
    // Initialize
    loadQuestion(0); // Load first question
    updateProgress();
});
