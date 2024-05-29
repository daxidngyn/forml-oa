from flask import Flask, request, jsonify
import time

app = Flask(__name__)

def crack_safe(actual_combination):
    num_attempts = 0
    n = len(actual_combination)

    start_time = time.time()
    for i in range(n):
        for d in range(0, 10):
            num_attempts += 1
            if str(d) == actual_combination[i]:
                break
    end_time = time.time() - start_time

    return (num_attempts, end_time)

@app.post('/api/crack_safe')
def api():
    data = request.json
    if 'actual_combination' not in data:
        return jsonify({'error': 'must contain actual_combination'}), 400
    actual_combination = data['actual_combination']

    num_attempts, s = crack_safe(actual_combination)
    
    return dict(attempts=num_attempts, time_taken=s)