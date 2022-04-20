## Cara Seup local
1. Clone Project di link tsb:
https://github.com/arifhidayat65/test_fullstack
2. Run `npm install` untuk menginstall library tsb.
3. Pastikan mongoDB diinstal dan berjalan
4. Jika mongoDB Anda berjalan di port atau mesin yang berbeda, ubah baris ini di `database.js`
```    
this.context = new Context('mongodb://localhost:27017', enableLogging);
```
5. Run node ./seed to create database and load some data.
6. Run `npm start atau npm run start` to memulai project.
7. Open POSTMAN and hit endpoints using `localhost:3000`
8. Have fun!

## Endpoints

### Kursus Endpoint
- GET /api/users 200 - Mengembalikan pengguna yang saat ini diautentikasi

- POST /api/users 201 - Membuat pengguna, mengatur header Lokasi ke "/", dan tidak mengembalikan konten

### Kursus Endpoint
- GET /api/courses 200 - List Kursus

- POST /api/courses 201 - Create Kursus

- PUT /api/courses/:id 204 - Updates Kursus

- DELETE /api/courses/:id 204 - Deletes Kursus

## Teknologi stack yang digunakan
- Node.js
- Express
- MongoDB
- Mongoose
- JavaScript

## Notes
- saya sertakan file collection postman.
`RESTAPI.postman_collection.json`




