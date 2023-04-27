## api_server_backend

### 설치
```bash
$ npm install

$ npm install typescript --save-dev

$ npm install ts-node --save-dev

$ npm install -g serve
```

### 정보
```bash
node version : v14.20.0
web server port : 8080
api server port : 3000

실행방법 
1. front build 위치를 public 위치로 수정작업 [front에서 처리]
2. env 파일 작성
3. npm start
```

### api서버만 가동
```bash
$ npm run server
```

### api 목록 및 테스트 url

1. [rest api](http://localhost:3000/api/test1)
2. [mongodb api](http://localhost:3000/dao/mongo/selectTest)
3. [mysql api](http://localhost:3000/dao/mysql/selectTest)


### npm 설명
```bash
express : api 서버 사용을 위한 웹 프레임워크
cors : front의 접근 허가를 위해 사용
concurrently : 프로세스 동시 가동을 위해 사용
mysql2 : promise 형식으로 사용하기 위해 이용 기존 mysql은 불가능(await 사용 가능)
mongoose : mongodb에 사용
dotenv : .env 파일 이용을 위해 사용
nodemon : backend 파일 수정 시 서버에 바로 적용
ts-node : typescript 실행을 위해 사용
typescript : 4.9버전 사용
```

### 파일 트리
```bash
📦server
 ┣ 📂api
 ┃ ┗ 📜test.ts
 ┣ 📂dao
 ┃ ┣ 📂mongo
 ┃ ┃ ┣ 📂collection_1
 ┃ ┃ ┃ ┣ 📜model.ts
 ┃ ┃ ┃ ┗ 📜mongodb.ts
 ┃ ┃ ┗ 📜connect.ts
 ┃ ┗ 📂mysql
 ┃ ┃ ┣ 📂table_1
 ┃ ┃ ┃ ┗ 📜mysql.ts
 ┃ ┃ ┗ 📜connect.ts
 ┣ 📂router
 ┃ ┣ 📜apiRouter.ts
 ┃ ┗ 📜daoRouter.ts
 ┗ 📜app.ts
```
