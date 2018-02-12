@echo off

echo react-native bundle --platform android --dev false --entry-file index.js --bundle-output app/src/main/assets/index.bundle --assets-dest app/src/main/res/


react-native bundle --platform android --dev false --entry-file index.js --bundle-output app/src/main/assets/index.bundle --assets-dest app/src/main/res/ && echo gradlew clean && gradlew clean && echo gradlew assembleRelease && gradlew assembleRelease





