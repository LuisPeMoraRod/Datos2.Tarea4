echo "1/4 Installing dependencies"
npm install
npm install bootstrap --save
npm install react-router-dom --save

echo "2/4 Starting build of react applicaion..."
npm run build

echo "3/4 Packing application into docker image..."
docker build . -t luispedromorales/users-crud-frontend:latest

echo "4/4 Pushing to Dockerhub"
docker login -u luispedromorales -p $DOCKERHUB_PASSWORD
docker push luispedromorales/users-crud-frontend:latest

echo "4/4 Steps completed"