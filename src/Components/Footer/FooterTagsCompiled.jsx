import FooterTags from "./FooterTags";

const FooterTagsCombined = () => {
  return (
    <>
      <FooterTags 
        title={"COMPANY"}
        array={[
          "About Pharmedics",
          "Coustomers Speak",
          "In the News",
          "Career",
          "Terms and Conditions",
          "Privacy Policy",
          "Fee and Payments Policy",
          "Shipping and Delievery Policy",
          "Return, Refund and Cancellation Policy",
          "Contact",
        ]}
      />
      <FooterTags
        title={"SHOPPING"}
        array={[
          "Browse by A-Z",
          "Browse by Manufacturers",
          "Health Articles",
          "Offers/Coupons",
          "FAQs",
        ]}
      />
      <FooterTags
        title={"SOCIAL"}
        array={[
          "Patients Alike",
          "Facebook",
          "Twitter",
          "LinkedIn",
          "Youtube",
          "Refer & Earn",
        ]}
      />
    </>
  );
};
export default FooterTagsCombined;