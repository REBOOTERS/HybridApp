# HybridApp

这是一个在Android原生应用中集成React Native 的项目。在原生应用中集成了一个仿豆瓣客户端（很久之前写的，UI已经不怎么像了o(╯□╰)o）的React Native应用。




## 效果图

<div>
<img width=273 src="https://github.com/REBOOTERS/HybridApp/blob/master/capture/index.gif"/>    
<img width=273 src="https://github.com/REBOOTERS/HybridApp/blob/master/capture/top250.gif"/>
</div>
<div>
<img width=273 src="https://github.com/REBOOTERS/HybridApp/blob/master/capture/yuanxian.gif"/>    
<img width=273 src="https://github.com/REBOOTERS/HybridApp/blob/master/capture/yuanxian2.gif"/>
</div>
<div>
<img width=273 src="https://github.com/REBOOTERS/HybridApp/blob/master/capture/box.gif"/>    
<img width=273 src="https://github.com/REBOOTERS/HybridApp/blob/master/capture/video.gif"/>
</div>
<div>
<img width=273 src="https://github.com/REBOOTERS/HybridApp/blob/master/capture/person.gif"/>    
<img width=273 src="https://github.com/REBOOTERS/HybridApp/blob/master/capture/movie.gif"/>
</div>

<div>
<img width=273 src="https://github.com/REBOOTERS/HybridApp/blob/master/capture/reading.png"/>    
<img width=273 src="https://github.com/REBOOTERS/HybridApp/blob/master/capture/usercenter.png"/>
</div>

## 扫码下载demo体验效果

![](https://qr.api.cli.im/qr?data=https%253A%252F%252Ffir.im%252F7fqg&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=2bd6cc63261f3ceb698fb66550f06f32)

## 集成React Native到原生应用

其实，关于怎么把React Native集成到原生应用中，React Native的官方文档[Integration with Existing Apps](http://facebook.github.io/react-native/docs/integration-with-existing-apps.html)已经有了详细的说明，**严格的**照着文档一步一步执行下来，基本上是没有什么问题的。


这里再补充一点官网没有提及的内容吧，就是如果在React Native 应用中使用到了原生应用的组件，比如常见的react-native-camera/react-native-image-picker 等，这个时候该如何正确的把这写**原生组件**集成到**原生项目**中呢？

其实,如果你用AS打开过React Native项目下Android目录的话，可以发现其实原生组件（比如react-native-camera）就是一个主工程(app）依赖的子module.在React Native的项目中，我们通过执行react-native link 这个命令，React Native框架会自动帮我们实现整个依赖过程，在这中间主要做了三件事：


- 在setting.gradle 文件中添加依赖组件的别名及路径

```gradle
include ':react-native-camera'
project(':react-native-camera').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-camera/android')
```

- 在app/build.gradle dependencies 结点中添加依赖
```gradle
dependencies {
    compile project(':react-native-camera')
    compile fileTree(dir: "libs", include: ["*.jar"])
    compile "com.android.support:appcompat-v7:23.0.1"
    compile "com.facebook.react:react-native:+"  // From node_modules
}
```

- 在MainApplication.java 的getPackages（）方法中，为我们添加组件所对应的Package。

```java
    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new RCTCameraPackage()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };
```

不得不说，这几个自动实现的步骤的确很牛逼，不知道内部是咋实现的？୧(๑•̀◡•́๑)૭

稍显遗憾的是，把React Native集成到原生项目中后，再次执行react-native link后上述步骤是无法自动实现的，因此这就需要我们去手动添加**原生组价**的依赖。其实这个过程也很简单，理解了node_modules目录和项目目录之间的**相对路劲**关系即可。这里以此项目中setting.gradle 中的路劲为例：

```gradle
include ':app'
include ':react-native-camera'
project(':react-native-camera').projectDir = new File(rootProject.projectDir, 'node_modules/react-native-camera/android')
include ':react-native-video'
project(':react-native-video').projectDir = new File(rootProject.projectDir, 'node_modules/react-native-video/android')
include ':react-native-image-crop-picker'
project(':react-native-image-crop-picker').projectDir = new File(rootProject.projectDir, 'node_modules/react-native-image-crop-picker/android')
```

这里其实和原生应用中子module是一个意思，只不过在原生项目中，子module一般都是直接创建在项目根目录中，就省去了写projectDir 的步骤了。有了这个自module，剩下的两个步骤就很简单了，这里就不再赘述，直接看代码就明白了。

### how to run


- git clone https://github.com/REBOOTERS/HybridApp.git
- cd HybridApp
- yarn install / npm install (only once)
- npm start 

下面，就可以用Android Studio打开这个项目，愉快的玩耍了。

### how to release 

如果想打包的话，在Windows上执行release.cmd 即可，会自动生成相应的js.bundle 文件并生成最终的apk文件。

在mac上，按照release.cmd 中的内容执行相应的bash 命令即可，手边没有环境，bash脚本没法验证，如果有人写出来并验证通过了，可以分享一下！



### 更多

这里集成在项目中React Native应用的源码在这里[React Native 仿豆瓣电影](https://github.com/REBOOTERS/BestPracticesRN)，对React Native应用感兴趣的童鞋可以观摩一下O(∩_∩)O哈哈~。

**应用中用到的数据，抓取自豆瓣API及[豆瓣开发平台](https://developers.douban.com/wiki/?title=movie_v2)，仅供学习**

更多React Native 学习整理，请看[ReactNativePractice](https://github.com/REBOOTERS/ReactNativePractice)

