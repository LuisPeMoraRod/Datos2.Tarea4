echo "1/2 Starting build of react applicaion..."
npm run build

echo "2/2 Packing application into docker image..."
docker build . -t users-crud-frontend

echo "2/2 Steps completed"