```javascript
db.collection.updateOne({"_id":ObjectId("someId")},{"$inc":{"counter":1}},{upsert:true});
```