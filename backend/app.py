from flask import Flask, request, jsonify
from api.chatbot import ask

app = Flask(__name__)

@app.route('/ask', methods=['POST'])
def get_response():
    data = request.get_json()
    
    if 'query' not in data:
        return jsonify({'error': 'No query provided'}), 400
    
    query = data['query']
    response = ask(query)
    return jsonify({'response': response})

if __name__ == "__main__":
    app.run(debug=True)
