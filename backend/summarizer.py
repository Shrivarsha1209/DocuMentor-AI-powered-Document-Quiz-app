import google.generativeai as genai

genai.configure(api_key="AIzaSyCshIGPy4L2IEJQyZ_Gp_rIeRTu_fVJdno")

model = genai.GenerativeModel("models/gemini-1.5-flash")

def summarize(text):
    try:
        prompt = f"Summarize the following content:\n{text}"
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        return f"Summarization failed: {str(e)}"
