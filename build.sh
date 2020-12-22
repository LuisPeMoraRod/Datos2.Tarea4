echo "1/3 Installing dependencies"
npm install
npm install bootstrap --save
npm install react-router-dom --save

echo "1/2 Starting build of react applicaion..."
npm run build

echo "2/2 Packing application into docker image..."
docker build . -t users-crud-frontend

echo "2/2 Steps completed"