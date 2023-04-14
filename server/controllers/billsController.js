const Bill = require("../model/billModel");
const billModel = require("../model/billModel")



module.exports.updateStatus = async(req,res) =>{
    const {newStatus} = req.body;
    console.log(newStatus);
    const bill = await billModel.findByIdAndUpdate(req.params.id,{
        status:newStatus,
    });

};
module.exports.updateDate = async(req,res) =>{
    const {newDate} = req.body;
    console.log(newDate);
    const bill = await billModel.findByIdAndUpdate(req.params.id,{
        date:newDate,
    });

};





module.exports.addbill = async(req,res,next) =>{
    try{
        const{billname,itemname,amount,proof} = req.body;
        const bill = await billModel.create({
            billname,
            itemname,
            amount,
            proof,
          });
          return res.json({status:true,bill});
    }
    catch(ex){
        next(ex);
    }

 
};

module.exports.updateBill = async (req, res) => {
    const bn = req.body.billname;
    const newProof = req.body.proof;
    // console.log(bn, newProof)
  
    try {
      const result = await billModel.updateOne({ billname: bn }, { $set: { proof: newProof } });
      console.log(result);
      res.json({ message: 'Document updated successfully' , bn, newProof});
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

