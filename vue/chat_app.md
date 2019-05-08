# index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase.js"></script>
    <!-- VueFire -->
    <script src="https://unpkg.com/vuefire/dist/vuefire.js"></script>
    <script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />

    <script>
        // Initialize Firebase
        // TODO: Replace with your project's customized code snippet
        var config = {
            apiKey: "AIzaSyAAYE24BFuEiswvpRCgQmRt_qFq2Hp5F5k",
            authDomain: "vue-chat-a.firebaseapp.com",
            databaseURL: "https://vue-chat-a.firebaseio.com",
            projectId: "vue-chat-a",
        };
        firebase.initializeApp(config);    
    </script>

</head>
<body>
    <div id="app">
        <div v-if="currentUser.uid">
            <div>
                <span>Hi, {{ currentUser.name }}</span>
                <button @click="logout">Logout</button>
            </div>
            <ul>
                <li v-for="message in messages" :key="message['.key']">
                    <b>{{ message.username }} : </b>{{ message.content }}
                </li>
            </ul>
            <!-- .trim = javascript에서 양옆의 공백이 날아간다, -->
            <input type="text" v-model.trim="newMessage" @keyup.enter="addMessage">
            <button @click="addMessage">></button>
        </div>
        <div v-else>
            <div id="firebaseui-auth-container"></div>
        </div>
    </div>

    <script>
        const database = firebase.database()
        const auth = firebase.auth()
        const ui = new firebaseui.auth.AuthUI(auth)
        

        const app = new Vue({
            el: '#app',
            data: {
                messages: [],
                newMessage: '',
                currentUser: {
                    uid: '',
                    email: '',
                    name: '',
                }
            },
            firebase: {
                messages: database.ref('messages')
            },
            methods: {
                addMessage: function(){
                    if (this.newMessage) {
                        this.$firebaseRefs.messages.push({
                            username: this.currentUser.name,
                            // id: Date.now(),
                            content: this.newMessage,
                        })
                        this.newMessage = ''
                    }
                },
                initUi: function(){
                    ui.start('#firebaseui-auth-container', {
                        signInOptions: [
                            firebase.auth.EmailAuthProvider.PROVIDER_ID
                        ],
                        callbacks: {
                            signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                            // User successfully signed in.
                            // Return type determines whether we continue the redirect automatically
                            // or whether we leave that to developer to handle.
                                this.currentUser.uid = authResult.user.uid
                                this.currentUser.email = authResult.user.email
                                this.currentUser.name = authResult.user.displayName
                                // 다른 페이지로 리다이렉트 할 때는 true
                                // 본인의 주소로 가기 위해서는 false (다른 페이지로 가는 대신에 로그인 창을 숨겨버림)
                                return false;
                            },
                        },
        
                    });
                },
                logout:function(){
                    // 1. currentUser 초기화
                    this.currentUser = {
                        uid: '',
                        email: '',
                        name: '',
                    }
                    // 2. firebase auth한테 로그아웃 알리기
                    auth.signOut().then(()=>{

                    }).catch((error)=>{

                    })
                },
            },
            mounted: function(){
                auth.onAuthStateChanged((user)=>{
                    if (user) {
                        this.currentUser.uid = user.uid
                        this.currentUser.email = user.email
                        this.currentUser.name = user.displayName
                    } else {
                        this.initUi()
                    }
                })
            }
        })
    </script>
</body>
</html>
```



# database.rules.json

```json
{
  "rules": {
    "messages": {
      ".read": "auth != null",
      ".write": "auth != null"
    }    
  }
}

```



# 명령 프롬프트

```memo
Microsoft Windows [Version 10.0.17134.407]
(c) 2018 Microsoft Corporation. All rights reserved.

C:\Users\student>cd yh

C:\Users\student\yh>cd vue

C:\Users\student\yh\vue>cd chat

C:\Users\student\yh\vue\chat>npm

Usage: npm <command>

where <command> is one of:
    access, adduser, audit, bin, bugs, c, cache, ci, cit,
    completion, config, create, ddp, dedupe, deprecate,
    dist-tag, docs, doctor, edit, explore, get, help,
    help-search, hook, i, init, install, install-test, it, link,
    list, ln, login, logout, ls, outdated, owner, pack, ping,
    prefix, profile, prune, publish, rb, rebuild, repo, restart,
    root, run, run-script, s, se, search, set, shrinkwrap, star,
    stars, start, stop, t, team, test, token, tst, un,
    uninstall, unpublish, unstar, up, update, v, version, view,
    whoami

npm <command> -h  quick help on <command>
npm -l            display full usage info
npm help <term>   search for help on <term>
npm help npm      involved overview

Specify configs in the ini-formatted file:
    C:\Users\student\.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@6.4.1 C:\Program Files\nodejs\node_modules\npm

C:\Users\student\yh\vue\chat>npm install firebase-tools
일괄 작업을 끝내시겠습니까 (Y/N)? y

C:\Users\student\yh\vue\chat>npm install -g firebase-tools
C:\Users\student\AppData\Roaming\npm\firebase -> C:\Users\student\AppData\Roaming\npm\node_modules\firebase-tools\lib\bin\firebase.js
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules\firebase-tools\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ firebase-tools@6.9.0
added 508 packages from 280 contributors in 11.941s

C:\Users\student\yh\vue\chat>firebase login
? Allow Firebase to collect anonymous CLI usage and error reporting information? Yes

Visit this URL on any device to log in:
https://accounts.google.com/o/oauth2/auth?client_id=563584335869-fgrhgmd47bqnekij5i8b5pr03ho849e6.apps.googleusercontent.com&scope=email%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloudplatformprojects.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffirebase%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform&response_type=code&state=840736587&redirect_uri=http%3A%2F%2Flocalhost%3A9005

Waiting for authentication...

+  Success! Logged in as a01075135512@gmail.com

C:\Users\student\yh\vue\chat>firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  C:\Users\student\yh\vue\chat

? Are you ready to proceed? Yes
? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to conf
irm your choices. Database: Deploy Firebase Realtime Database Rules, Hosting: Configure and deploy Firebase Hosting sit
es

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Select a default Firebase project for this directory: vue-chat-a (vue-chat)
i  Using project vue-chat-a (vue-chat)

=== Database Setup

Firebase Realtime Database Rules allow you to define how your data should be
structured and when your data can be read from and written to.

? What file should be used for Database Rules? database.rules.json
+  Database Rules for vue-chat-a have been downloaded to database.rules.json.
Future modifications to database.rules.json will update Database Rules when you run
firebase deploy.

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? public
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? File public/index.html already exists. Overwrite? No
i  Skipping write of public/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...
i  Writing gitignore file to .gitignore...

+  Firebase initialization complete!

C:\Users\student\yh\vue\chat>

C:\Users\student\yh\vue\chat>

C:\Users\student\yh\vue\chat>fierbase deploy
'fierbase'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는
배치 파일이 아닙니다.

C:\Users\student\yh\vue\chat>fierbase deploy
'fierbase'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는
배치 파일이 아닙니다.

C:\Users\student\yh\vue\chat>firebase deploy

=== Deploying to 'vue-chat-a'...

i  deploying database, hosting
i  database: checking rules syntax...
+  database: rules syntax for database vue-chat-a is valid
i  hosting[vue-chat-a]: beginning deploy...
i  hosting[vue-chat-a]: found 1 files in public
+  hosting[vue-chat-a]: file upload complete
i  database: releasing rules...
+  database: rules for database vue-chat-a released successfully
i  hosting[vue-chat-a]: finalizing version...
+  hosting[vue-chat-a]: version finalized
i  hosting[vue-chat-a]: releasing new version...
+  hosting[vue-chat-a]: release complete

+  Deploy complete!

Project Console: https://console.firebase.google.com/project/vue-chat-a/overview
Hosting URL: https://vue-chat-a.firebaseapp.com

C:\Users\student\yh\vue\chat>
```

