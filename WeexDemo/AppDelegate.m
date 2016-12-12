//
//  AppDelegate.m
//  WeexDemo
//
//  Created by WyzcWin on 16/12/8.
//  Copyright © 2016年 lwl. All rights reserved.
//

#import "AppDelegate.h"
#import <WeexSDK/WeexSDK.h>
#import "WXDevTool.h"

#import "EGImageLoader.h"
#import "EGEventHandler.h"

#import "WeexShowViewController.h"

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    self.window.backgroundColor = [UIColor whiteColor];
    
    [self initWeex];
    
    UINavigationController *nav = [[UINavigationController alloc] initWithRootViewController:[self mainViewController]];
    
    self.window.rootViewController = nav;
    [self.window makeKeyAndVisible];
    
    return YES;
}

- (void)initWeex{
    
    [WXAppConfiguration setAppGroup:@"ALiAPP"];
    [WXAppConfiguration setAppName:@"Weex"];
    [WXAppConfiguration setAppVersion:@"1.0.0"];
    
    [WXSDKEngine initSDKEnviroment];
    [WXSDKEngine registerHandler:[EGImageLoader new] withProtocol:@protocol(WXImgLoaderProtocol)];
    [WXSDKEngine registerHandler:[EGEventHandler new] withProtocol:@protocol(WXEventModuleProtocol)];
    [WXSDKEngine registerModule:@"event" withClass:[EGEventHandler class]];
    
    [WXLog setLogLevel:WXLogLevelWarning];
}

- (UIViewController *)mainViewController{
    UIViewController *mainVC = [[WeexShowViewController alloc] init];
    NSString *path = [NSString stringWithFormat:@"file://%@/xweex.js", [NSBundle mainBundle].bundlePath];
//    NSString *path = @"http://127.0.0.1:8082/helloweex.js";
    
    mainVC.navigationItem.title = @"首页";
    ((WeexShowViewController *)mainVC).weexUri = [NSURL URLWithString:path];
    
    return mainVC;
}

- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


@end
