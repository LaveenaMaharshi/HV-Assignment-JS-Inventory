// Array of customer objects
const customers = [
    {
      customerID: 1,
      customerName: 'John',
      totalBillingAmount: 2500,
    },
    {
      customerID: 2,
      customerName: 'Jane',
      totalBillingAmount: 4000,
    },
    {
      customerID: 3,
      customerName: 'Mike',
      totalBillingAmount: 3500,
    },
    {
      customerID: 4,
      customerName: 'Sarah',
      totalBillingAmount: 2000,
    },
    {
      customerID: 5,
      customerName: 'David',
      totalBillingAmount: 5000,
    },
  ];
  
  // Filter customers based on total billing amount
  const selectedCustomers = customers.filter(customer => customer.totalBillingAmount > 3000);
  
  // Print customer names along with their purchase details
  selectedCustomers.forEach(customer => {
    console.log(`Customer Name: ${customer.customerName}`);
    console.log(`Total Billing Amount: Rs. ${customer.totalBillingAmount}`);
    console.log('---------------------------');
  });
  