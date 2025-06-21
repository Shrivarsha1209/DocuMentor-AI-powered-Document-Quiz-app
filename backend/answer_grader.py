from sentence_transformers import SentenceTransformer, util

model = SentenceTransformer("all-MiniLM-L6-v2")

def grade(reference_answer, user_answer):
    embeddings = model.encode([reference_answer, user_answer], convert_to_tensor=True)
    similarity = util.pytorch_cos_sim(embeddings[0], embeddings[1]).item()
    return round(similarity * 100, 2)

def generate_reference_answer(question, doc_text):
    sentences = doc_text.split(".")
    question_embedding = model.encode(question, convert_to_tensor=True)
    sentence_embeddings = model.encode(sentences, convert_to_tensor=True)
    similarities = util.pytorch_cos_sim(question_embedding, sentence_embeddings)
    best_match_idx = similarities.argmax()
    return sentences[best_match_idx].strip()


