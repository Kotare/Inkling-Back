# CRUDbrain API Server
The API node server for CRUDbrain!

## Team Members:
-Luke
-Olivia
-Juliet
-Rich
-Esther
-Pete

## [Trello](https://trello.com/b/LLXoi7N5/crud-brain)

## Description of Project:
The first mobile & human-friendly mind mapper

## Found @:
crudbrain.herokuapp.com

## API Documentation
###/boards
####POST /boards
send & response:
```javascript
{
  "_id": "lkj987689yafsd89" // uuid generated in client - must be unique!
}
```
####GET /boards/:id
response:
```javascript
{
  "bubbles": [
    {
      "_id": "98723hooih2348", // uuid generated in client - must be unique!
      "heading": "idea#291"
      "content": "help, I'm stuck in a bubble",
      "location": {
        "top": "91", //px
        "left": "87" //px
      },
      "size": {
        "top": "91", //px
        "left": "87" //px
      }
    }
    ...
  ],
  "connections": [
    {
      "bubble-1_id": "978351yedfg980",
      "bubble-2_id": "9788923edfg932"
    }
    ...
  ]
}
```
####PUT /boards/:id
send & response:
```javascript
{
  "bubbles": [
    {
      "_id": "98723hooih2348",
      "heading": "idea#291"
      "content": "help, I'm stuck in a bubble",
      "location": {
        "top": "91", //px
        "left": "87" //px
      },
      "size": {
        "top": "91", //px
        "left": "87" //px
      }
    }
    ...
  ],
  "connections": [
    {
      "bubble-1_id": "978351yedfg980",
      "bubble-2_id": "9788923edfg932"
    }
    ...
  ]
}
```
