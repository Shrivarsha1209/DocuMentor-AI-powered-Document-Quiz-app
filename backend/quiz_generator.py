import google.generativeai as genai

genai.configure(api_key="AIzaSyCshIGPy4L2IEJQyZ_Gp_rIeRTu_fVJdno")

model = genai.GenerativeModel("models/gemini-1.5-flash")

def generate_quiz(text):
    prompt = f"""
    Generate 30 to 50 multiple-choice questions from the following content. 
    Each question should have 4 options (A to D), and indicate the correct option at the end.

    Content: {text}

    Format:
    **Q1: Your question here**
    A. Option A
    B. Option B
    C. Option C
    D. Option D
    Answer: C

    Continue in this format for all questions.
    """
    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        return f"Quiz generation failed: {str(e)}"
