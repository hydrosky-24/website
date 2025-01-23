from flask import Flask, jsonify, request
import random
import time

app = Flask(__name__)

# Untuk menyimpan data sementara (sebaiknya menggunakan database dalam aplikasi nyata)
sensor_data = {
    'temperature': 0.0,
    'humidity': 0.0,
    'pH': 7.0,
    'turbidity': 0.0,
    'TDS': 0.0
}

@app.route('/sensor_data', methods=['GET'])
def get_sensor_data():
    """
    Endpoint untuk mengambil data sensor
    """
    return jsonify(sensor_data)

@app.route('/sensor_data', methods=['POST'])
def post_sensor_data():
    """
    Endpoint untuk menerima data sensor dari Arduino (dari Blynk)
    """
    data = request.get_json()

    if 'temperature' in data:
        sensor_data['temperature'] = data['temperature']
    if 'humidity' in data:
        sensor_data['humidity'] = data['humidity']
    if 'pH' in data:
        sensor_data['pH'] = data['pH']
    if 'turbidity' in data:
        sensor_data['turbidity'] = data['turbidity']
    if 'TDS' in data:
        sensor_data['TDS'] = data['TDS']

    print("Updated sensor data:", sensor_data)
    
    return jsonify({'status': 'success', 'message': 'Data saved successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
