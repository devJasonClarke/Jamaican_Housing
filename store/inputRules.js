export const state = () => ({
  phoneNumberRules: [
    //  v => !!v || "Phone number is optional",
    v => v.length >= 10 || "10 Digit Dialing",
    v => v.length < 12 || "10 Digit Dialing",
    value =>
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i.test(
        value
      ) || "Phone number must be valid"
  ],
  nameRules: [
    v => !!v || "Name is required",
    v => v.length > 1 || "Name must be greater than 1 character",
    v => (v && !!v.trim()) || "Value cannot be blank"
  ],
  idRules: [
    v => !!v || "ID is required",
    v => v.length == 11 || "Id should equal 11 characters",
    value => !/[ ]/.test(value) || "no spaces allowed"
  ],
  passwordRules: [
    value => !!value || "Required.",
    value => (value && !!value.trim()) || "Value cannot be blank",
    value => (value || "").length >= 8 || "Min 8 characters"
  ],
  emailRules: [
    value => !!value || "Required.",
    value => !/[ ]/.test(value) || "no spaces allowed",
    value => (value || "").length <= 100 || "Max 100 characters",
    value =>
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        value
      ) || "E-mail must be valid"
  ],
  amountRules: [
    value => !!value || "Required.",
    value => !/[ ]/.test(value) || "no spaces allowed",
    value => (value || "").length <= 15 || "Max 15 characters",
    value => value >= 0 || "No negative amounts"
  ],
  messageRules: [
    v => !!v || "Message is required",
    v => (v && !!v.trim()) || "Value cannot be blank",
    v => v.length >= 10 || "Message must be atleast 10 characters long"
  ],
  descriptionRules: [
    v => !!v || "Description is required",
    v => (v && !!v.trim()) || "Value cannot be blank",
    v => v.length >= 10 || "Description must be atleast 10 characters long",
    value => (value || "").length <= 425 || "Max 425 characters"
  ]
});

export const getters = {
  phoneNumberRules: state => state.phoneNumberRules,
  nameRules: state => state.nameRules,
  passwordRules: state => state.passwordRules,
  emailRules: state => state.emailRules,
  amountRules: state => state.amountRules,
  messageRules: state => state.messageRules,
  descriptionRules: state => state.descriptionRules,
  idRules: state => state.idRules
};
