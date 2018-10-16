# Pubsub - demo

Small app displaying a library of your favourite places on a Google Map.
Created step-by-step in article:
https://medium.com/@hubert.zub/why-every-beginner-front-end-developer-should-know-publish-subscribe-pattern-72a12cd68d44

How to use: click a city in order to add new place.

1. How to build and run the app:
```
npm install
npm run build
npm install -g serve
serve -s
```

2. How to enable full Google Maps API integration:

In `index.html`, in line #20 add `&key=YOUR_KEY` at the end of the script URL. E.g.:
```
<script src="https://maps.googleapis.com/maps/api/js?key=ABCDEFGHIJKL123456"></script>
```