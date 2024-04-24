const Images = {
    pdfImage: 'path/to/your/pdf/image.jpg'
  };
  
  const productNames = ['Coffee', 'Tea', 'Arabica', 'Robusta', 'Cold coffee'];
  
  export const data = [];
  
  for (let i = 1; i <= 50; i++) {
    const randomDate = new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
    const formattedDate = `${randomDate.getFullYear()}/${String(randomDate.getMonth() + 1).padStart(2, '0')}/${String(randomDate.getDate()).padStart(2, '0')}`;
  
    const price = Math.floor(Math.random() * 1000) + 1; // Generates a random price between 1 and 1000
    const quantity = Math.floor(Math.random() * 10) + 1; // Generates a random quantity between 1 and 10
    const total = price * quantity;
  
    const randomProductName = productNames[Math.floor(Math.random() * productNames.length)];
  
    const newData = {
      id: 1100 + i,
      product_name: randomProductName,
      invoice_no: i.toString(),
      price: price,
      quantity: quantity,
      total: total,
      image: Images.pdfImage,
      date: formattedDate
    };
    data.push(newData);
  }
  
  console.log(data);
  