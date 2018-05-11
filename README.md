# Web Crawler

In response to a coding challenge, I wrote this web crawler in a few hours time. The test-data file shows the type of data the crawlWeb function takes. It starts at the first page, then only visits pages it is linked to from there.

web-crawler.js is designed to be run from the command line with node or another tool.

The goal was to do this in just a few hours, but if given more time I would promisify this code so that the program wouldn't hang if given a huge 'internet' sample to run through.

I would also write tests to ensure the code is working properly. I included a bare minimum amount of validation in the function that checks if the argument given is a JS object.

This function could be way more robust and efficient, but it was fun to see what I could come up with in a short time, also since I've been learning new front-end frameworks it's been a while since I completed a coding challenge. The rust is real!

I'm submitting this code for review and would be fascinated to see what an expert level solution to this problem would look like.
