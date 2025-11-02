// Simple exam functionality
document.addEventListener('DOMContentLoaded', function() {
    const showExplanationBtn = document.getElementById('showExplanation');
    const explanation = document.getElementById('explanation');
    const markForReviewBtn = document.getElementById('markForReview');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentQuestionIndex = 1;
    let totalQuestions = 57;
    let markedForReview = false;
    
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
    
    // Navigation (demo functionality)
    nextBtn.addEventListener('click', function() {
        if (currentQuestionIndex < totalQuestions) {
            currentQuestionIndex++;
            updateProgress();
            // In a real implementation, this would load the next question
            alert('This is a demo. For the complete exam, please use the markdown version.');
        }
    });
    
    prevBtn.addEventListener('click', function() {
        if (currentQuestionIndex > 1) {
            currentQuestionIndex--;
            updateProgress();
            // In a real implementation, this would load the previous question
        }
    });
    
    function updateProgress() {
        const progressFill = document.getElementById('progressFill');
        const currentQuestionSpan = document.getElementById('currentQuestion');
        
        const progressPercent = (currentQuestionIndex / totalQuestions) * 100;
        progressFill.style.width = progressPercent + '%';
        currentQuestionSpan.textContent = currentQuestionIndex;
        
        // Update navigation buttons
        prevBtn.disabled = currentQuestionIndex === 1;
        nextBtn.disabled = currentQuestionIndex === totalQuestions;
    }
    
    // Initialize
    updateProgress();
});
