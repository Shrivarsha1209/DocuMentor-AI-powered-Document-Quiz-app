import google.generativeai as genai

genai.configure(api_key="AIzaSyCshIGPy4L2IEJQyZ_Gp_rIeRTu_fVJdno")  

for model in genai.list_models():
    print(model.name)
