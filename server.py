import http.server
import socketserver
import os
import sys

PORT = 8082
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run_server():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("\n" + "="*50)
        print("    GAMING OVERLAY LOCAL SERVER")
        print("="*50)
        print(f"Status: RUNNING")
        print(f"Port:   {PORT}")
        print(f"Path:   {DIRECTORY}")
        print("\nURL for Lightstream/OBS:")
        print(f"http://localhost:{PORT}")
        print("="*50)
        print("\nKeep this window open to keep the server alive.")
        print("Press Ctrl+C to stop the server.")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopping...")
            sys.exit(0)

if __name__ == "__main__":
    run_server()
