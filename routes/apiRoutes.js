module.exports = function(router) {
  // REQUIRE AXIOS FOR API CALLS
  var axios = require("axios");
  // const phrase_controller = require("../controllers/phraseController");
  const travel_advisories = require("../controllers/stateDeptController");
  const bodyParser = require("body-parser");

  // const checklist_controller = require("../controllers/checklistController");

  // router.get("/api/phrases", phrase_controller.phrase_list_get);
  // // http://localhost:3001/api/phrases

  // router.get(
  //   "/api/populate_phrases",
  //   phrase_controller.populate_default_phrases
  // );
  //localhost:3001/api/populate_phrases

  router.get("/api/travel_advisories", (req, res) => {
    // console.log(travel_advisories.countriesList);
    res.json(travel_advisories.apiObj);
    console.log("api request sucessful");
  });

  //http://localhost:3001/api/travel_advisories

  //   router.get("/api/checklist", phrase_controller.checklist_get)
};
