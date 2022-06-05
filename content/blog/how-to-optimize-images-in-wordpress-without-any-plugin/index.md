---
slug: "how-to-optimize-images-in-wordpress-without-using-any-plugin"
title: "Optimize images in WordPress without any plugin"
description: "How to optimize JPEG images in WordPress without using any free or paid plugin. Optimize simply by using Node.js and NPM package called imagemin with MozJPEG encoder"
thumbnail: "[IMAGE HERE]"
category: "WordPress"
tags: 
    - "WordPress"
language: "en"
type: "blog"
created: "2022-06-06"
last-update: "2022-06-06"
---

# How to optimize images in WordPress without using any plugin

As your WordPress website grows in content and the traffic to your site is increasing month by month, you might be wondering about your website speed and user experience. You continue uploading your high-quality pictures to amaze your readers. But sooner or later you find that your website has over 1,000 images which are, according to [Page Speed Insights](https://pagespeed.web.dev/), the biggest bottleneck to your website speed.

In this article, you will learn how to optimize large number of images for free and without using any free or paid plugin which could slow down your WordPress site. This article is for absolute beginners and includes code that even non-programmers can run.

## Typical solution for image optimization and a problem
When you realize that your images are causing issues to your website speed, you start immediately googling, and you'll find several plugins for image optimization. You might install [Smush](https://wordpress.org/plugins/wp-smushit/) or [EWWW Image Optimizer](https://wordpress.org/plugins/ewww-image-optimizer/) or even [TinyPNG](https://wordpress.org/plugins/tiny-compress-images/). These plugins usually optimize your images on upload. But if you want to optimize all your current images, you have to typically pay some fee. Paying for the plugin which does the job isn't that horrible, right? But there can be an issue.

Every website hosting (server with a space where you can run your WordPress website), where your WordPress is running, has some limitations. One of the limitations is called `Maximum script run time` or also in the PHP  `max_execution_time`. It means *how long you can run one PHP script on the server before the script gets timed out by the server and fails.*

When you run bulk image optimization to optimize all images in your WordPress, PHP plugin will be running and optimizing images as long as the script is running. If you have a small WordPress website with hundreds of images, there won't be probably any issue. But, if you're running [WooCommerce](https://woocommerce.com/) website with **1,000 or 10,000** product images, the script will run out of time after one or two minutes and won't be able to finish the bulk image optimization for all your images. In this case, you'll have to use a different approach to solving the image problem.

## Solution: Optimize images outside of the server

One of the possible solutions is to download all your images from the WordPress (using FTP) to your computer and optimize your images there. Luckily, there are several tools we can use today. And they are free!

### Optimization with Node.js and Imagemin

We are going to use [imagemin](https://github.com/imagemin/imagemin) - a NPM package which allows minifying images and [Node.js](https://nodejs.org/en/) to run our NPM minifying package over thousands of images. 

If you don't have Node.js installed, [download](https://nodejs.org/en/download/) it first and install. It's pretty simple. To make sure your node is installed and running, type  `node -v` into a command prompt. You should get the current version of your node.  

Once you have Node.js installed, create a new folder and give it a proper name. Open your folder in the command prompt and type `npm init`. The file `package.json` will be created. This is the initialization file for our project.

Now we have to install [imagemin](https://www.npmjs.com/package/imagemin) package by running a simple command:

```bash
npm install imagemin
```

and one of the image minifying plugins. I recommend using [MozJPEG](https://github.com/mozilla/mozjpeg) because [it compress JPEG images similarly](https://siipo.la/blog/is-webp-really-better-than-jpeg) as popular [WebP](https://developers.google.com/speed/webp) format. 

```bash
npm install imagemin-mozjpeg
```

Now create `index.js` file and two folders `src` and `build`. You should get this project structure.

[IMAGE HERE]

Paste this code to the `index.js`

```javascript
// index.js
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';

(async () => {
	await imagemin(['src/**/**/*.jpg', 'src/**/**/*.JPG', 'src/**/**/*.jpeg', 'src/**/**/*.JPEG'], {
		destination: 'build/',
		plugins: [
			imageminMozjpeg({quality: 55}) // best value is 55
		]
	});

	console.log('Images optimized');
})();
```

You can change `quality` but I found out that to get the best visual and size results the 55% is the perfect number. 

Before you start optimizing your images, download all your images from WordPress by using FTP. WordPress stores all images in `wp-content/uploads`. 

Once you download images, delete images which are in the format of PNG or WebP because only JPEG images can be optimized with this setup. Put all your images into the  `src` folder and run:

```bash
node index.js
```

Now all your images are optimized and can be found in the folder `build`.  Below is a simple example of the WordPress images optimization. Original image `cat.jpeg` has been **sized down by approximately 80% from the previous original size**. The size of other images created by WordPress has been **reduced by about 60% to 75%** which is a great result.

[IMAGE HERE]

[IMAGE HERE]

If you're finished with image optimization, upload your images back to the server to the same location `wp-content/uploads` and make sure to overwrite old unoptimized images. You can now check your website in Page Speed Insights. You should get better score.

## Conclusion