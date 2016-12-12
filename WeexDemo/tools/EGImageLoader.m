//
//  EGImageLoader.m
//  WeexDemo
//
//  Created by WyzcWin on 16/12/9.
//  Copyright © 2016年 lwl. All rights reserved.
//

#import "EGImageLoader.h"
#import <SDWebImage/UIImageView+WebCache.h>


#define MIN_IMAGE_WIDTH 36
#define MIN_IMAGE_HEIGHT 36

#if OS_OBJECT_USE_OBJC
#undef  WXDispatchQueueRelease
#undef  WXDispatchQueueSetterSementics
#define WXDispatchQueueRelease(q)
#define WXDispatchQueueSetterSementics strong
#else
#undef  WXDispatchQueueRelease
#undef  WXDispatchQueueSetterSementics
#define WXDispatchQueueRelease(q) (dispatch_release(q))
#define WXDispatchQueueSetterSementics assign
#endif

@interface EGImageLoader()

@property (WXDispatchQueueSetterSementics, nonatomic) dispatch_queue_t ioQueue;

@end

@implementation EGImageLoader

#pragma mark - WXImageLoadingProtocol
- (id<WXImageOperationProtocol>)downloadImageWithURL:(NSString *)url imageFrame:(CGRect)imageFrame userInfo:(NSDictionary *)options completed:(void(^)(UIImage *image,  NSError *error, BOOL finished))completedBlock{
    
    if ([url hasPrefix:@"//"]) {
        url = [@"http" stringByAppendingString:url];
    }
    
    return (id<WXImageOperationProtocol>)[[SDWebImageManager sharedManager] downloadImageWithURL:[NSURL URLWithString:url] options:0 progress:^(NSInteger receivedSize, NSInteger expectedSize) {
        
    } completed:^(UIImage *image, NSError *error, SDImageCacheType cacheType, BOOL finished, NSURL *imageURL) {
        
        if (completedBlock) {
            completedBlock(image, error, finished);
        }
    }];
}

- (void)cancel{
    [[SDWebImageManager sharedManager] cancelAll];
}

@end
