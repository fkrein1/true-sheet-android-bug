# StickerSmash - Expo 52 Template with Prebuild

This is an [Expo](https://expo.dev) template project based on Expo SDK 52 with prebuild configuration, created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). This template is designed to make maintenance easier for project maintainers.

## Known Issues

There's an issue with `@lodev09/react-native-true-sheet` where TextInput components don't focus properly when using Expo SDK 52 and React Native 0.76 on Android. Thanks to the maintainer for this great package - hoping this can be fixed in a future update.

## For Maintainers

This template includes prebuild configurations to simplify the development and maintenance process. The project structure follows Expo's recommended practices for easier updates and maintenance.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Maintenance Resources

For maintainers working with this Expo 52 template, here are helpful resources:

- [Expo documentation](https://docs.expo.dev/): Reference for fundamentals and advanced topics with [guides](https://docs.expo.dev/guides).
- [Expo prebuild documentation](https://docs.expo.dev/workflow/prebuild/): Learn about the prebuild process and how to customize native code.
- [Expo config plugins](https://docs.expo.dev/guides/config-plugins/): Understand how to modify native code without ejecting.
- [Expo updates](https://docs.expo.dev/eas-update/introduction/): Learn how to push updates to your app without going through app stores.

## Community Support

Get help from the Expo community when maintaining this project:

- [Expo on GitHub](https://github.com/expo/expo): View the open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions about maintenance issues.
