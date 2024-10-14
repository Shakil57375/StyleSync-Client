import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Return Policy</h1>
      
      <p className="mb-4">
        At StyleSync, we want you to be fully satisfied with your purchase. If, for any reason, you are not satisfied, you may return eligible items within the timeframes outlined below.
      </p>

      <h2 className="text-2xl font-semibold mb-2">1. Eligibility for Returns</h2>
      <p className="mb-4">
        Items must meet the following conditions to be eligible for return:
        <ul className="list-disc ml-8">
          <li>Item must be returned within 30 days of receipt.</li>
          <li>Item must be in its original, unused condition with all tags and packaging intact.</li>
          <li>Certain items, such as wireless earbuds, are only eligible for return if they are unopened due to hygiene reasons.</li>
          <li>Final sale or clearance items are not eligible for return unless faulty.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-2">2. Non-Returnable Items</h2>
      <p className="mb-4">
        The following items cannot be returned:
        <ul className="list-disc ml-8">
          <li>Opened or used wireless earbuds, unless they are defective.</li>
          <li>Personalized or custom items.</li>
          <li>Gift cards or vouchers.</li>
          <li>Items marked as "Final Sale".</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-2">3. Return Process</h2>
      <p className="mb-4">
        To initiate a return, follow these steps:
        <ul className="list-decimal ml-8">
          <li>Log in to your account on StyleSync and navigate to the "Order History" page.</li>
          <li>Select the item(s) you wish to return and click on "Request Return".</li>
          <li>Fill out the return form with the reason for return and any additional information.</li>
          <li>Pack the item securely in its original packaging and ship it to the address provided in the return instructions.</li>
        </ul>
      </p>

      <h2 className="text-2xl font-semibold mb-2">4. Refunds</h2>
      <p className="mb-4">
        Once we receive your returned item, we will inspect it and notify you of the approval or rejection of your refund. If approved, your refund will be processed within 7-10 business days, and a credit will be automatically applied to your original method of payment.
      </p>

      <h2 className="text-2xl font-semibold mb-2">5. Exchange Policy</h2>
      <p className="mb-4">
        If you need to exchange an item for a different size or color, please return the original item and place a new order for the replacement. Exchanges are subject to availability.
      </p>

      <h2 className="text-2xl font-semibold mb-2">6. Return Shipping Costs</h2>
      <p className="mb-4">
        Customers are responsible for return shipping costs unless the item received is incorrect or defective. We recommend using a trackable shipping method to ensure your return is received safely.
      </p>

      <h2 className="text-2xl font-semibold mb-2">7. Damaged or Defective Items</h2>
      <p className="mb-4">
        If you receive a damaged or defective item, please contact our customer service team within 48 hours of delivery. We will arrange for a replacement or a full refund, including return shipping costs.
      </p>

      <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about our return policy or need further assistance, please reach out to us at <a href="mailto:support@stylesync.com" className="text-blue-600 underline">support@stylesync.com</a> or call our customer support at +880-XXX-XXXX.
      </p>

      <p className="mt-8 text-gray-600">
        Please note that we reserve the right to update this return policy at any time. Be sure to review it periodically for any changes.
      </p>
    </div>
  );
};

export default ReturnPolicy;
