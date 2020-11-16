module.exports = ({ env }) => (
  {
    "defaultConnection": "default",
    "connections": {
      "default": {
        "connector": "mongoose",
        "settings": {
          "uri": "mongodb://bao:123@cluster0-shard-00-00.3b86o.mongodb.net:27017,cluster0-shard-00-01.3b86o.mongodb.net:27017,cluster0-shard-00-02.3b86o.mongodb.net:27017/iAdmin?ssl=true&replicaSet=atlas-cq5ltf-shard-0&authSource=admin&retryWrites=true&w=majority"
        },
        "options": {
          "ssl": true
        }
      }
    }
  }
);
