//
//  EGEventHandler.m
//  WeexDemo
//
//  Created by WyzcWin on 16/12/9.
//  Copyright © 2016年 lwl. All rights reserved.
//

#import "EGEventHandler.h"
#import <WeexSDK/WeexSDK.h>

#import "WeexShowViewController.h"
#import "EGWebViewController.h"

@implementation EGEventHandler

@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(openURL:))

- (void)openURL:(NSString *)url{
    
//    NSURL *URL = [NSURL URLWithString:[NSString stringWithFormat:@"file://%@/helloweex.js", [NSBundle mainBundle].bundlePath]];
    
//    NSString *newURL = url;
//    if ([url hasPrefix:@"//"]) {
//        newURL = [NSString stringWithFormat:@"http:%@", url];
//    } else if (![url hasPrefix:@"http"]) {
//        // relative path
//        newURL = [NSURL URLWithString:url relativeToURL:weexInstance.scriptURL].absoluteString;
//    }
    
    BOOL bWebView = NO;
    NSString *newURL = url;
    NSString *vcTitle = @"";
    if ([newURL isEqualToString:@"wechat"]) {
        vcTitle = @"微信精选";
        newURL = [NSString stringWithFormat:@"file://%@/wechat.js", [NSBundle mainBundle].bundlePath];
    }else if ([newURL isEqualToString:@"joke"]) {
        vcTitle = @"笑话大全";
        newURL = [NSString stringWithFormat:@"file://%@/joke.js", [NSBundle mainBundle].bundlePath];
    }else if ([newURL isEqualToString:@"horoscope"]) {
        vcTitle = @"星座运势";
        newURL = [NSString stringWithFormat:@"file://%@/horoscope.js", [NSBundle mainBundle].bundlePath];
    }else if ([newURL isEqualToString:@"news"]) {
        vcTitle = @"今日新闻";
        newURL = [NSString stringWithFormat:@"file://%@/news.js", [NSBundle mainBundle].bundlePath];
    }else{
        newURL = url;
        bWebView = YES;
    }
    
    if (bWebView) {
        EGWebViewController *webView = [[EGWebViewController alloc] init];
        webView.url = newURL;
        UINavigationController *nav = [weexInstance.viewController navigationController];
        [nav pushViewController:webView animated:YES];
    }else{
        
        UIViewController *vc = [[WeexShowViewController alloc] init];
        ((WeexShowViewController *)vc).weexUri = [NSURL URLWithString:newURL];
        vc.navigationItem.title = vcTitle;
        UINavigationController *nav = [weexInstance.viewController navigationController];
        [nav pushViewController:vc animated:YES];
    }
}

@end
