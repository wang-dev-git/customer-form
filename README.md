# Simple Frontend Assignment

You should have

- React core principles
- Typescript familarity
- Javascript DOM manipulation
- Understand Flux(Redux) work flow.
- Familarity with Materal UI
- @hookform, react-hook-form, react-imask, yup experience would be helpful

Complete the customer form with correct validation.
we need the following customer information

- first name
- last name
- birth day
- age
- country
- city
- state
- street
- zipcode
- PVC Number

# Notes.

1. Complete the UI for all fields.

2. Update the Yup schema with the above fields.

- first name (string, min: 2, max: 15, required)
- last name (string, min: 2, max: 15, required)
- birthday (date, required, use any date picker you like, future dates should not be selectable)
- age (number, required, auto calculated by selecting birthday)
- country (string, it should be select box, use country list from the "./data/countryList").
- state (string, required)
- city (string, optional)
- street (string, required)
- zipecode (string, required, use postcode-validator)
- PVC number (string, use mask 000-000-000.00, required for US only)

3. Fix bugs.

- PVC number field is not working.
  I am able to type text for the first time only.
  When I click the submit button, it gets cleared, then It doesn't allow me to type anyting more.

4. Show Toast when the submistion is success.

- complete the render method of the Toast component(./components/Toast.tsx)
- We need to show multiple toast messages at a time.
- show message "Thank you for joining to us, we will touch with you soon."

5. Fix typescript errors.

6. show customers under "Customers Table"
   They should be pulled from the Customers Provider.
