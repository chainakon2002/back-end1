const db = require("../models/db");

exports.deleteproduct = async (req, res, next ) => {
    const {menutemsId} = req.params

    try {
        const menutems = await db.menutems.delete({
            where: {
                id: Number(menutemsId)
            }
        })
        res.json(menutems)
    } catch (error) {
        next(error)
        
    }
}

exports.addproduct = async (req, res, next) => {
  
    try {
      const {
        ItemName,	
        price,
        description	,
        restaurantsId,
        file } = req.body;
      
      if (!(ItemName && price && description &&restaurantsId&&file)) {
        return next(new Error("Fulfill all inputs"));
      }
      
  
      const rs = await db.ItemName.create({data})
      console.log(rs)
  
      res.json({ msg: 'Register successful' })
    } catch (err) {
      next(err);
    }
  };

  exports.showorder = async (req, res, next) => {
    try {
      const showorderde = await db.menutems.findMany();
      res.json(menutems);
    } catch (error) {
      next(error);
    }
  };