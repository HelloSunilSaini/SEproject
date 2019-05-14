./run_backend.sh &> backend.log &
./run_frontend.sh &> forntend.log &
google-chrome "http://localhost:5000"