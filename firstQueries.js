db.getCollection('restaurants_list').find().pretty().limit(20);

db.getCollection('restaurants_list').find({"cuisine": "Spanish"}).pretty();

db.getCollection('restaurants_list').find({"restaurant_id": "30112340"}).pretty();

db.getCollection('restaurants_list').find({"name": "May May Kitchen"}).pretty();

db.getCollection('restaurants_list').find({"cuisine": "Tapas"}).pretty();

// ordered by tapas and name sort
db.getCollection('restaurants_list').find({ "cuisine": "Tapas"}).sort({ "name": 1}).pretty();

db.getCollection('restaurants_list').find({"address.zipcode": "11208"}).pretty();

db.getCollection('restaurants_list').find({"grades.score": {$gte: 70}}).pretty();

db.getCollection('restaurants_list').find({"borough": "Brooklyn"}).pretty();

db.getCollection('restaurants_list').find({$and: [
                                                 {"borough": "Brooklyn"},
                                                 {"grades.score": {$gt: 70}}   
                                                    ]}).pretty();
db.getCollection('restaurants_list').find({$and: [
                                                 {"borough": "Brooklyn"},
                                                 {"grades.score": {$gt: 80}}   
                                                    ]}).pretty();
db.getCollection('restaurants_list').find({$or: [
                                                 {"cuisine": "Chilean"},
                                                 {"cuisine": "Czech"}   
                                                    ]}).pretty();

db.getCollection('restaurants_list').find({"grades.1.grade": "B"}).pretty();
// to access positions we must use dots and no []

db.getCollection('restaurants_list').aggregate([ { $project : { grades : 1} } ]);

db.getCollection('restaurants_list').find({$and: [
                                                 {"grades.grade": "Z"},
                                                 {"grades.grade": "B"}   
                                                    ]}).pretty();

db.restaurants.find( { "grades.date" : ISODate("2014-09-16") }).pretty();

db.getCollection('restaurants_list').find( { "grades.date" : { $gt: ISODate("2015-01-01") } } ).count();

