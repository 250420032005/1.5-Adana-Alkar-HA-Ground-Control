from flask import Flask, Response
import socket
import cv2
import numpy as np

app = Flask(__name__)

UDP_IP = "0.0.0.0"
UDP_PORT = 5005

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind((UDP_IP, UDP_PORT))

def gen_frames():
    buffer = b""
    while True:
        try:
            data, addr = sock.recvfrom(4096)
            buffer += data

            if buffer[:2] == b'\xff\xd8' and buffer[-2:] == b'\xff\xd9':
                frame = cv2.imdecode(np.frombuffer(buffer, dtype=np.uint8), cv2.IMREAD_COLOR)
                if frame is not None:
                    ret, jpeg = cv2.imencode('.jpg', frame)
                    if ret:
                        yield (b'--frame\r\n'
                               b'Content-Type: image/jpeg\r\n\r\n' + jpeg.tobytes() + b'\r\n')
                buffer = b""
            elif len(buffer) > 200000:
                buffer = b""
        except Exception as e:
            print("Hata:", e)
            buffer = b""

@app.route('/video_feed')
def video_feed():
    return Response(gen_frames(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)
