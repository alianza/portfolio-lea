if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const t=e=>a(e,r),o={module:{uri:r},exports:c,require:t};s[r]=Promise.all(n.map((e=>o[e]||t(e)))).then((e=>(i(...e),c)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts("fallback-tniuOR-2S6AwRqNBj3Ysr.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/290-2db3a746a5af378f.js",revision:"2db3a746a5af378f"},{url:"/_next/static/chunks/325-ec63a676e8c1a063.js",revision:"ec63a676e8c1a063"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"5f4595e5518b5600"},{url:"/_next/static/chunks/main-de19382865b6a2ff.js",revision:"de19382865b6a2ff"},{url:"/_next/static/chunks/pages/_app-0619249a764ab9f8.js",revision:"0619249a764ab9f8"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"2280fa386d040b66"},{url:"/_next/static/chunks/pages/_offline-973e45ab422fbe1b.js",revision:"973e45ab422fbe1b"},{url:"/_next/static/chunks/pages/about-c909b6181c7cd8c0.js",revision:"c909b6181c7cd8c0"},{url:"/_next/static/chunks/pages/articles-ee860286e27f23ec.js",revision:"ee860286e27f23ec"},{url:"/_next/static/chunks/pages/contact-335600de2ad08e1f.js",revision:"335600de2ad08e1f"},{url:"/_next/static/chunks/pages/index-f5359f93469aae40.js",revision:"f5359f93469aae40"},{url:"/_next/static/chunks/pages/portfolio-1af8b63c344b1e57.js",revision:"1af8b63c344b1e57"},{url:"/_next/static/chunks/pages/portfolio/%5BpostId%5D-16e608846d935a1a.js",revision:"16e608846d935a1a"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-5752944655d749a0.js",revision:"5752944655d749a0"},{url:"/_next/static/css/375b978b4f7e2fd4.css",revision:"375b978b4f7e2fd4"},{url:"/_next/static/css/7d5f8946a3224ba7.css",revision:"7d5f8946a3224ba7"},{url:"/_next/static/css/c1c439597633cb22.css",revision:"c1c439597633cb22"},{url:"/_next/static/css/d07c6249e9fa51be.css",revision:"d07c6249e9fa51be"},{url:"/_next/static/css/e797403feaa1c373.css",revision:"e797403feaa1c373"},{url:"/_next/static/tniuOR-2S6AwRqNBj3Ysr/_buildManifest.js",revision:"44e1b3beafdad4a70f2c233da5dc3ea8"},{url:"/_next/static/tniuOR-2S6AwRqNBj3Ysr/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/tniuOR-2S6AwRqNBj3Ysr/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_offline",revision:"tniuOR-2S6AwRqNBj3Ysr"},{url:"/admin/config.yml",revision:"60f48f25ae7f5023a26427567a88014c"},{url:"/admin/index.html",revision:"d063e4f5a12295b0fdd50fa530734c99"},{url:"/android-chrome-192x192.png",revision:"4c991b70dcf1658c74c50d880951412b"},{url:"/android-chrome-256x256.png",revision:"24fc02ac017649c720bfd331fb23adc1"},{url:"/android-chrome-512x512.png",revision:"20e6c1e328c133bfcca1b1a70b27d98a"},{url:"/apple-touch-icon.png",revision:"794dec671bf3cf0be88bd855573bb40a"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/config.json",revision:"068560438260d47e07f02fc0adc119b5"},{url:"/favicon-16x16.png",revision:"5b2246ab977187c55afb23c93b513a3d"},{url:"/favicon-32x32.png",revision:"3357c3339ec333595531967df867a1fe"},{url:"/favicon.ico",revision:"337c8e1155041c98037d1370ceced740"},{url:"/images/10610_3707769300997_775215996_n.jpg",revision:"82c291f9244c297e5e6eabcf77c22707"},{url:"/images/124010.png",revision:"b59d15f1d09ebd9882cad4a448688aac"},{url:"/images/iconmonstr-medium-1.png",revision:"d5426ba0f30838e40863b461d48d3442"},{url:"/images/instagram_icon.png.webp",revision:"4c045436a267c2dbacf934d5099ecaf4"},{url:"/images/linkedin_logo_initials.png",revision:"f9ed832684a8759eb0cf91ebd5e1355e"},{url:"/images/medium-512.webp",revision:"82cca333e6a9c373e99b290d06fef87d"},{url:"/images/p1100057.jpg",revision:"dbc2373b5c50f44c611c9063d5cd4a14"},{url:"/images/p1100062.jpg",revision:"88e8a04a6aae9bff5517f541cdc4b454"},{url:"/images/screen-shot-2022-04-21-at-4.45.40-pm.png",revision:"00d2fa8a811f9a19be46dfa2a4a9f3ca"},{url:"/images/uva-logo.png",revision:"60811f9d54b5967449af99d3d4b65bf0"},{url:"/images/yasman.png",revision:"9aca1fcae3812677d38e521173d69a6f"},{url:"/mstile-150x150.png",revision:"2e14e4bc6edf161bb9327051643e87f1"},{url:"/safari-pinned-tab.svg",revision:"743fdb487293c6a985c0d87d6061478c"},{url:"/site.webmanifest",revision:"c196b3e2a0ddcc3c2f0de3fe57b0c045"},{url:"/styles/content.module.css",revision:"1ef8b1937abfb01e2455474835846436"},{url:"/styles/variables.css",revision:"3db9611f73155584bfe31eb754d0f105"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
