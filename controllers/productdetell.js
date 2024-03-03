const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.orderdate = async (req, res, next) => {
  try {
    const {id} = req.params;
    const productData = await prisma.product.findFirst({
      where: {
        id: Number(id)
      }
    })
    if (!productData) {
      return res.status(404).json({ message: "ไม่พบสินค้าที่ค้นหา" });
    }
    res.json(productData);
    console.log(productData)
  } catch (error) {
    next(error); 


  }
};



exports.payments = async (req, res, next) => {
  try {
      const { userId, amount, price, productId, username,productname } = req.body;
      const payment = await prisma.Payment.create({
        data: {
          userId: parseInt(userId),
          username,
          productname,
          amount: parseFloat(amount),
          price: parseInt(price),
          productId: parseInt(productId)
        }
      });
  
      res.json({ msg: 'Payment created successfully', payment });
    } catch (error) {
      next(error);
    }
}


exports.userorder = async (req, res, next) => {
  try {
    const orders = await prisma.payment.findMany({
      where: {
        userId: req.user.id
      },
      include: {
        product: true
      }
    });
    
    res.json(orders);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


