---
title: "Getting Started"
date: "2017-08-10"
order: 3
---
# Getting Started

## Getting started with server integration

### Create unique user IDs
Skip this step if you have internal unique user IDs for your user base.

Fizz requires a unique ID for each user. It is recommended that you have an API which generates unique IDs for your users. Fizz server will not be called in this instance.

### Get user token
You can get a unique user token against each ID that is generated in first step. Please refer to [What is Fizz](../what_is_fizz) for details.

## Getting started on Unity
You will need to start with creating a Fizz application ID for your application. The application ID will be used to configure your Fizz SDK within Unity.

### Create your application on Fizz
In order to create your application on Fizz, you have to contact Fizz management.

#### Add SDK to your Unity project

* Step 1: Create a new project in Unity Editor.
![Image](./assets/GettingStarted/01.png)

* Step 2: Download the latest Fizz SDK for Unity from <a href="http://bit.ly/fizzreqaccess" target="_blank">download link</a>. Unzip this package after downloading.

* Step 3: In Unity Editor, select Assets&gt;Import Package&gt;Custom Package. Navigate to the directory where you downloaded the SDK and select the downloaded unity package file e.g. **'FizzUnitySDKv0.5.14.unitypackage'**.


* Step 4: Import all the assets in the package.


> **Note:** Unity Editor environment will not offer Fizz functionality. You may receive warnings and errors regarding game's inability to reach Fizz. You have to switch platform to iOS or Android.

After the basic configurations of the SDK, refer to the guide below to continue with platform specific configurations.

#### iOS
> **Note:** This project will only work in **XCode 8** or above.

##### Configuring your application for iOS

* Step 1: Switch to the iOS Platform.

Go to Unity Editor. From menu, choose ‘File’, ‘Build Settings’. In Build Settings dialog, under ‘Platform’, select ‘iOS’ as a target and click ‘Switch Platform’. 





* Step 2: Set minimum iOS Version.

Fizz SDK for Unity only supports iOS version 8.0 and above. With Build Settings dialog still open, click ‘Player Settings’, then in Inspector pane go to ‘Settings for iOS’, then ‘Other Settings’. In order to prevent issues on older devices, ensure that ‘Target minimum iOS Version’ is set to 8.0 or higher.



* Step 3: Configure Bundle ID.

Fill in ‘Bundle Identifier’ field with a valid bundle identifier.



* Step 4: Build.

Now in Unity Editor click ‘Build’ button. Once Unity finishes building, open file ‘Unity-iPhone.xcodeproj’ in the directory that was created with Xcode.


* Step 5: Now you have to embed Fizz frameworks. Go to targets ‘Unity-iPhone’ then Select ‘General’ and scroll down to ‘Embedded Binaries’. Click on ‘+’ button. ‘Choose items to add:’ dialog will appear, select ‘socketIo.framework’ and ‘FizzSDK.framework’ and press Add button.


> **IMPORTANT:** If you want to use emojis in your game you have to disable emoji filtering from keyboard.mm for iOS generated by Unity.

```
#ifndef FILTER_EMOJIS_IOS_KEYBOARD
#define FILTER_EMOJIS_IOS_KEYBOARD 0
#endif
```

You can hit 'Play' button in Xcode to run the application, use Xcode's usual functionality to run it on real iOS devices. 

Congratulations! Now you are up and running on iOS.

#### Android

##### Configuring your application for Android

* Step 1: Switch to the Android Platform
Go to the Unity Editor, from menu, choose ‘File’ then ‘Build Settings’. Under the ‘Platform’ window select “Android” as target and click ‘Switch Platform’.



* Step 2: Configure External Tools
Go to Unity Editor Preferences. In Preference dialog, navigate to “External Tools”. Setup Android SDK and JDK paths there; as shown below.


* Step 3: Goto ‘Player Settings’ &gt; ‘Other Settings’ and change ‘Minimum API Level’ to ‘Android 4.0.3 Ice Cream Sandwich (API level 15)’.

> **IMPORTANT:** If you’re Publishing and using Proguard add these lines to your configuration file

```
-keep public class com.fizz.android.sdk.*
-don’t warn okio.**<br/>
-keepattributes *Annotation*
-keepclassmembers class ** {
	@com.fizz.android.sdk.thirdparty.squareup.otto.Subscribe public *;
	@com.fizz.android.sdk.thirdparty.squareup.otto.Produce public *;
}
```

## Getting started with Fizz UI

### Prerequisite

Fizz UI will only work if Fizz SDK is integrated and initialized successfully. If you haven’t integrated yet, please follow these steps: [Getting started on Unity](#getting-started-on-unity)

### Integration

After Fizz integration, add <i>FizzCanvas</i> prefab from ‘FizzUISDK/Resources/Prefabs/FizzCanvas’ to your desired scene. Fizz UI uses a separate unity GUI canvas with the following configurations.

1. Render mode is Screen Space – Overlay
2. Sort Order of 500. You can change that as per your requirement.
3. Fizz UI is designed with 640x1136 resolution and it can switch itself according to devices with other aspect ratio.

### Configuration

You can configure <i>FIZZUISDK</i> component according to your requirements. You can see these options in inspector view after selecting <i>FizzCanvas</i> in scene hierarchy.

1. <i>DontDestroyOnLoad</i> check this if you want <i>FizzCanvas</i> not get destroyed automatically when loading a new scene.
2. You can bind Fizz close event if you want to do anything after Fizz UI is closed.
3. You can see Supported Orientation property under <i>UICanvasScaler</i>, change its value to Portrait or Landscape according to your game device orientation.

> **IMPORTANT:** Right now Fizz will only work in one orientation at a time either Portrait or Landscape.

### Launch UI

<i>FIZZUISDK</i> instance can be null if it’s not present in the scene, so you have to check that whenever you are launching Fizz UI. For launching Fizz UI you can use the following piece of code.

```
if (FIZZUISDK.Instance != null)
	FIZZUISDK.Instance.LaunchFizz ();
```