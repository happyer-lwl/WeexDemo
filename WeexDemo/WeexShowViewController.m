//
//  WeexShowViewController.m
//  WeexDemo
//
//  Created by WyzcWin on 16/12/8.
//  Copyright © 2016年 lwl. All rights reserved.
//

#import "WeexShowViewController.h"
#import <WeexSDK/WeexSDK.h>

@interface WeexShowViewController ()

@property (nonatomic, strong) WXSDKInstance *weexSDK;

@end

@implementation WeexShowViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.view.backgroundColor = [UIColor whiteColor];
    
    self.weexSDK.viewController = self;
    self.weexSDK.frame = CGRectMake(0, 64, kScreenWidth, kScreenHeight - 64);
    [self.weexSDK renderWithURL:self.weexUri];
    
    __weak typeof(self) weakSelf = self;
    self.weexSDK.onCreate = ^(UIView *view) {
        [weakSelf.view addSubview:view];
    };
    self.weexSDK.renderFinish = ^(UIView *view) {
        
    };
    
    self.weexSDK.onFailed = ^(NSError *error) {
        NSLog(@"weexSDK onFailed: %@\n", error);
    };
}

- (WXSDKInstance *)weexSDK {
    if (_weexSDK == nil) {
        _weexSDK = [WXSDKInstance new];
    }
    
    return _weexSDK;
}

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event{
    [self dismissViewControllerAnimated:YES completion:nil];
}
@end
