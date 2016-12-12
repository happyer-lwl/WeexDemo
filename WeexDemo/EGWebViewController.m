
//
//  EGWebViewController.m
//  WeexDemo
//
//  Created by WyzcWin on 16/12/12.
//  Copyright © 2016年 lwl. All rights reserved.
//

#import "EGWebViewController.h"

@interface EGWebViewController ()<UIWebViewDelegate>

@property (nonatomic, strong) UIWebView *webView;

@end

@implementation EGWebViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    _webView = [[UIWebView alloc] initWithFrame:self.view.bounds];
    _webView.backgroundColor = [UIColor clearColor];
    _webView.delegate = self;
    [_webView setScalesPageToFit:YES];
    [self.view addSubview:_webView];
    
    NSURLRequest *request = [[NSURLRequest alloc] initWithURL:[NSURL URLWithString:_url]];
    [_webView loadRequest:request];
}

- (void)webViewDidFinishLoad:(UIWebView *)webView{
    
    NSString *title = [_webView stringByEvaluatingJavaScriptFromString:@"document.title"];
    self.title = title;
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    
}

@end
