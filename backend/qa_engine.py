import google.generativeai as genai

genai.configure(api_key="AIzaSyCshIGPy4L2IEJQyZ_Gp_rIeRTu_fVJdno")
# model = genai.GenerativeModel("models/gemini-1.0-pro-vision-latest") 
# model = genai.GenerativeModel(model_name="models/gemini-1.5-pro")
model = genai.GenerativeModel("models/gemini-1.5-flash")

def answer_question(document_text, question):
    prompt = f"""
    Use the following document content to answer the question.

    Content: {document_text}

    Question: {question}
    Answer:"""
    response = model.generate_content(prompt)
    return response.text