var gems = require('../models/gems');
// List of all gemss
exports.gems_list = async function(req, res) {
    try{
    thegemss = await gems.find();
    res.send(thegemss);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// for a specific Costume.
exports.gems_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await gems.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

// Handle gems create on POST.
exports.gems_create_post = async function(req, res) {
    console.log(req.body)
    let document = new gems();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"gems_color":"goat", "gems_breed":12, "gems_price":"large"}
    document.gems_color = req.body.gems_color;
    document.gems_breed = req.body.gems_breed;
    document.gems_price = req.body.gems_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle gems delete form on DELETE.
exports.gems_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: gems delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.gems_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await gems.findById( req.params.id)
 // Do updates of properties
 if(req.body.gems_color)
 toUpdate.gems_color = req.body.gems_color;
 if(req.body.gems_breed) toUpdate.gems_breed = req.body.gems_breed;
 if(req.body.gems_price) toUpdate.gems_price = req.body.gems_price;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};
exports.gems_view_all_Page = async function(req, res) {
    try{
    thegemss = await gems.find();
    res.render('gems', { title: 'Gems Search Results', results: thegemss });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   