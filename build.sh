echo "1/3 Installing dependencies"
npm install
npm install bootstrap --save
npm install react-router-dom --save

echo "2/3 Starting build of react applicaion..."
npm run build

echo "3/3 Packing application into docker image..."
docker build . -t users-crud-frontend

echo "3/3 Steps completed"