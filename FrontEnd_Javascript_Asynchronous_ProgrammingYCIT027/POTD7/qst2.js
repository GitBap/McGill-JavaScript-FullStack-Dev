/* Write a function called calculateDiscountedPrice that takes in the original 
price of a product and a discount percentage. The function should return a Promise. 
The Promise should calculate the discounted price by applying the discount to the 
original price and resolve with the discounted price. */

function calculateDiscountedPrice(price, discount) {
  return new Promise((resolve, reject) => {
    if (typeof price !== "number" || typeof discount !== "number") {
      reject("Error: Invalid input");
    } else if (price < 0 || discount < 0 || discount > 100) {
      reject("Error: Invalid price or discount");
    } else {
      const discountedPrice = price - price * (discount / 100);
      resolve(discountedPrice);
    }
  });
}
