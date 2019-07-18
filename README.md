![](https://images.viblo.asia/7cb4e436-5e13-46b4-a0f7-3d555895ff58.png)

# Firebase Hosting là gì ?

Firebase hosting là một dịch vụ lưu trữ của Google cung cấp môi trường hosting cho static web một cách an toán, nhanh chóng, dễ dàng và hoàn toàn miễn phí .

# Tại sao lại là Firebase Hosting ?

Hầu hết các dịch vụ web hosting sẽ tính phí hoặc sẽ chậm nếu chúng free , ngoài ra bạn phải trả một khoản phí cho chứng chỉ SSL để chuyển trang web của bạn thành một trang web an toàn với https
Lưu trữ trên Firebase là hoàn toàn miễn phí và theo mặc định nó cung cấp chứng chỉ SSL và nó được cung cấp một tốc độ truy cập đáng ấn tượng ở bất cứ đâu .

# Deploy React app lên Firebase Hosting

## Demo

Trong bài viết này mình sẽ demo deploy một React app lên Firebase Hosting

### React app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

Sau đó ta sử dụng lệnh

```
npm build
```

để build code

### Firebase:

Vào [firebase](https://firebase.google.com/) và đăng nhập với tài khoản Google rồi tạo một project ví dụ firebase-demo

![](https://images.viblo.asia/aa06d0a0-dd2b-4df8-9f70-6e0a48127029.png)

Chọn Hosting

![](https://images.viblo.asia/ee51bbc5-2f4a-4ad2-8706-753ab2cb7a51.png)

Nhấn Get started rồi install Firebase CLI bằng lệnh :

```
npm install -g firebase-tools
```

Đăng nhập Google và khởi tạo

```
firebase login
firebase init
```

Sau khi init

- Chọn Hosting
- Chọn tên project vừa tạo khi nãy
- **What do you want to use as your public directory?** build
- **Configure as a single-page app (rewrite all urls to /index.html)?** Yes
- **File build/index.html already exists. Overwrite?** No

Chú thích :

- What do you want to use as your public directory? : ở đây yêu cầu chọn folder để render trang web . Với mặc định sẽ là thư mục tên là public nhưng chúng ta đã chạy npm build và tạo ra được thư mục build nên chọn file build
- Configure as a single-page app (rewrite all urls to /index.html)? : có cấu hình ứng dụng như một single-page app không ? chúng ta sẽ chọn YES như vậy web sẽ chạy vào index.html . Nếu chọn NO họ sẽ tự tạo ra 1 file build và bên trong chứa file 404.html và index.html
- File build/index.html already exists. Overwrite? : do chúng ta đã build và có file index.html nên ở đây họ hỏi có Overwrite không ? Chúng ta sẽ chọn là NO

![](https://images.viblo.asia/78151bf3-81ce-454f-b178-c6b356d84539.png)

Sau đó firebase sẽ tạo cho chúng ta 2 file là .firebaserc và firebase.json

Cuối cùng sử dụng lệnh

```
firebase deploy
```

Sau đó bạn sẽ đc trả lại Hosting URL

Như vậy là các bạn đã deploy thành công react app lên firebase hosting rồi đấy rất đơn giản phải không nào

Nếu muốn disable project đang chạy sử dụng lệnh

```
firebase hosting:disable
```

Nguồn tham khảo : https://firebase.google.com/docs/cli/

## Deploy github pages with route using

```javascript
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Page1} />
          <Route path='/page2' component={Page2} />
        </Switch>
      </div>
    </Router>
```

### config package.json

```javascript
    "homepage": "https://vinhyenvodoi98.github.io/react-firebase-hosting",
```

and

```javascript
   "predeploy": "yarn run build",
   "deploy": "gh-pages -d build",
```
